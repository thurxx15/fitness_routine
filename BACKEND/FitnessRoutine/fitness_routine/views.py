import google.generativeai as genai
import os 
import json

from django.db import transaction
from .models import Treino, Exercicio
from .serializer import UserSerializer, UserProfileSerializer, TreinoSerializer

from rest_framework import status, permissions, generics, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

# Configuração da API do Gemini
GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-2.5-flash')

# View para LISTAR os treinos existentes
class TreinoListView(generics.ListAPIView):
    serializer_class = TreinoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Retorna apenas os treinos do usuário autenticado
        return Treino.objects.filter(user=self.request.user).prefetch_related('exercicios').order_by('-data_criacao')

# View para GERAR um novo treino
class GerarTreinoView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user_preferences = request.data
        
        #1 Engenharia de Prompt
        prompt = self.construir_prompt(user_preferences)

        try:
            #2 Chamada à API do Gemini
            response = model.generate_content(prompt)
            
            # Limpa e parseia a resposta para JSON
            cleaned_response = response.text.strip().replace('```json', '').replace('```', '')
            treino_gerado = json.loads(cleaned_response)

            #3 Salvar no Banco de Dados (com transação)
            with transaction.atomic():
                novo_treino = Treino.objects.create(
                    user=request.user,
                    nome_treino=user_preferences.get('nomeTreino'),
                    dias_semana=user_preferences.get('diasSemana'),
                    objetivo=user_preferences.get('objetivo', 'Geral')
                )

                for dia in treino_gerado['plano_de_treino']:
                    for exercicio_data in dia['exercicios']:
                      Exercicio.objects.create(
                        treino=novo_treino,
                        nome_exercicio=exercicio_data.get('exercicio'),
                        grupo_muscular=dia.get('grupo_muscular'),
                        series=exercicio_data.get('series'),
                        repeticoes=exercicio_data.get('repeticoes'),
                        descanso=exercicio_data.get('descanso'),
                        dia_semana=exercicio_data.get('dia_semana')
                        
                      )

            serializer = TreinoSerializer(novo_treino)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except json.JSONDecodeError:
            return Response({"error": "A resposta da IA não é um JSON válido."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({"error": f"Ocorreu um erro: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def construir_prompt(self, prefs):
        # Prompt detalhado para garantir uma resposta JSON estruturada
        return f"""
        Crie um plano de treino de academia com base nas seguintes especificações:
        - Foco/Objetivo: {prefs.get('objetivo', 'Hipertrofia')}
        - Dias por semana: {prefs.get('diasSemana')}
        - Grupos musculares a focar: {', '.join(prefs.get('gruposMusculares', []))}
        - Limitações: {prefs.get('limitacoes', 'Nenhuma')}

        Organize os exercícios em grupos, onde cada grupo corresponde a um dia de treino.

        Retorne a resposta ESTRITAMENTE como um objeto JSON válido, sem nenhum texto ou formatação adicional.
        O JSON deve seguir esta estrutura exata, incluindo a chave "dia_semana" para cada exercício:
        {{
          "plano_de_treino": [
            {{
              "grupo_muscular": "Peito e Tríceps",
              "exercicios": [
                {{
                  "exercicio": "Supino Reto com Barra",
                  "series": "4",
                  "repeticoes": "8-12",
                  "descanso": "60 segundos",
                  "dia_semana": "Segunda-feira"
                }},
                {{
                  "exercicio": "Crucifixo Inclinado com Halteres",
                  "series": "3",
                  "repeticoes": "10-15",
                  "descanso": "45 segundos",
                  "dia_semana": "Segunda-feira"
                }}
              ]
            }},
            {{
              "grupo_muscular": "Costas e Bíceps",
              "exercicios": [
                {{
                  "exercicio": "Barra Fixa",
                  "series": "4",
                  "repeticoes": "Até a falha",
                  "descanso": "90 segundos",
                  "dia_semana": "Terça-feira"
                }}
              ]
            }}
          ]
        }}
        """
# View para DELETAR um treino específico
class TreinoDeleteView(generics.DestroyAPIView):
    queryset = Treino.objects.all()
    serializer_class = TreinoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
    
# Views para GERENCIAR usuários  
class UserCreate(generics.CreateAPIView):
    queryset = UserSerializer.Meta.model.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer

# View para PERFIL do usuário
class UserProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get_object(self):
        return self.request.user

# View para LOGOUT  
class LogoutView(generics.GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        

class TreinoDetailView(generics.DestroyAPIView):
    """
    Esta view lida com a exclusão (DELETE) de um treino específico.
    """
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TreinoSerializer
    
    # Linha crucial que diz à view para procurar o ID na URL com o nome 'treino_id'
    lookup_url_kwarg = 'treino_id'

    def get_queryset(self):
        # Garante que o usuário só possa deletar os próprios treinos
        return Treino.objects.filter(user=self.request.user)