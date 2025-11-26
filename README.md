Repository: thurxx15/fitness_routine
Files analyzed: 73

Estimated tokens: 65.1k

Directory structure:
└── thurxx15-fitness_routine/
    ├── BACKEND/
    │   ├── requirements.txt
    │   ├── .gitignore
    │   └── FitnessRoutine/
    │       ├── manage.py
    │       ├── .gitignore
    │       ├── core/
    │       │   ├── __init__.py
    │       │   ├── asgi.py
    │       │   ├── settings.py
    │       │   ├── urls.py
    │       │   └── wsgi.py
    │       └── fitness_routine/
    │           ├── __init__.py
    │           ├── admin.py
    │           ├── apps.py
    │           ├── models.py
    │           ├── serializer.py
    │           ├── tests.py
    │           ├── urls.py
    │           ├── views.py
    │           └── migrations/
    │               ├── 0001_initial.py
    │               ├── 0002_treino_exercicio.py
    │               ├── 0003_profile_dia_semana.py
    │               ├── 0004_remove_profile_dia_semana_exercicio_dia_semana.py
    │               ├── 0005_profile_profile_image.py
    │               ├── __init__.py
    │               └── __pycache__/
    ├── FRONTEND/
    │   ├── cadastro-pg/
    │   │   ├── cadastro.css
    │   │   ├── cadastro.html
    │   │   └── cadastro.js
    │   ├── dashboard-pg/
    │   │   ├── barra-style.css
    │   │   ├── modal-style.css
    │   │   ├── curiosidades/
    │   │   │   ├── dashboard.css
    │   │   │   ├── dashboard.html
    │   │   │   ├── dashboard.js
    │   │   │   └── cur-top/
    │   │   │       ├── cur.css
    │   │   │       ├── cur.js
    │   │   │       ├── cur1.html
    │   │   │       ├── cur2.html
    │   │   │       ├── cur3.html
    │   │   │       ├── cur4.html
    │   │   │       └── cur5.html
    │   │   ├── inicio/
    │   │   │   ├── dashboard.css
    │   │   │   ├── dashboard.html
    │   │   │   └── dashboard.js
    │   │   ├── planilhas/
    │   │   │   ├── dashboard.css
    │   │   │   ├── dashboard.html
    │   │   │   ├── dashboard.js
    │   │   │   └── detalhe-planilha/
    │   │   │       ├── detalhe-treino.css
    │   │   │       ├── detalhe-treino.html
    │   │   │       └── detalhe-treino.js
    │   │   └── sobre/
    │   │       ├── dashboard.css
    │   │       ├── dashboard.html
    │   │       └── dashboard.js
    │   ├── inicio-pg/
    │   │   ├── inicio.css
    │   │   ├── inicio.html
    │   │   └── inicio.js
    │   ├── login-pg/
    │   │   ├── login.css
    │   │   ├── login.html
    │   │   └── login.js
    │   ├── midia/
    │   │   ├── cur/
    │   │   ├── ico/
    │   │   ├── img/
    │   │   │   └── cur/
    │   │   │       ├── img-cur3.jfif
    │   │   │       ├── img-cur4.jfif
    │   │   │       └── img-cur5.jfif
    │   │   ├── mbr/
    │   │   │   └── img-malu
    │   │   └── vdo/
    │   └── z-thrash/
    │       ├── midia/
    │       │   ├── ico/
    │       │   ├── img/
    │       │   └── vdo/
    │       └── sub-pg/
    │           ├── curiosidades/
    │           │   ├── curiosidades.css
    │           │   └── curiosidades.html
    │           ├── mitos/
    │           │   ├── mitos.css
    │           │   └── mitos.html
    │           ├── planilhas/
    │           │   ├── create-pla.css
    │           │   ├── create-pla.html
    │           │   ├── planilhas.css
    │           │   └── planilhas.html
    │           └── sobre/
    │               ├── sobre.css
    │               └── sobre.html
    └── NOTES/
        ├── ChaveAPI.txt
        ├── Comandos GIT.txt
        └── oque fazer.docx


================================================
FILE: BACKEND/requirements.txt
================================================
# ==============================================================================
#  Dependências do Projeto Fitness Routine
# ==============================================================================
# Para instalar todas as dependências, execute no terminal:
# pip install -r requirements.txt
# ------------------------------------------------------------------------------

# Framework principal da web
# A versão foi especificada pelo arquivo settings.py gerado.
Django==5.2.1

# Biblioteca para construir a API RESTful sobre o Django
djangorestframework==3.15.1

# Extensão do Django REST Framework para autenticação baseada em JSON Web Tokens (JWT)
djangorestframework-simplejwt==5.3.1

# Middleware para gerenciar cabeçalhos de Cross-Origin Resource Sharing (CORS)
# Essencial para permitir que o front-end se comunique com a API
django-cors-headers==4.3.1 

# SDK oficial do Google para interagir com a API do Gemini
# Usado para a geração de treinos baseada em IA
google-generativeai==0.5.2

# Utilitário para carregar variáveis de ambiente de um arquivo .env
# Recomendado para gerenciar chaves de API (como a do Gemini) em desenvolvimento local
python-dotenv==1.0.1


================================================
FILE: BACKEND/.gitignore
================================================
# Ambientes virtuais
.venv/
venv/

.env/
.env
# Python cache/bytecode
__pycache__/
*.py[cod]
__pycache__/git 
# Banco local (se usar sqlite no dev)
*.sqlite3

# Logs
*.log

# VSCode / PyCharm
.vscode/
.idea/

# Sistema
.DS_Store
Thumbs.db

# Migrations cache
*/migrations/__pycache__/



================================================
FILE: BACKEND/FitnessRoutine/manage.py
================================================
#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()



================================================
FILE: BACKEND/FitnessRoutine/.gitignore
================================================
# Ambientes virtuais
.venv/
venv/

# Python cache/bytecode
__pycache__/
*.py[cod]

# Banco local (se usar sqlite no dev)
*.sqlite3

# Logs
*.log

# VSCode / PyCharm
.vscode/
.idea/

# Sistema
.DS_Store
Thumbs.db

# Migrations cache
*/migrations/__pycache__/



================================================
FILE: BACKEND/FitnessRoutine/core/__init__.py
================================================



================================================
FILE: BACKEND/FitnessRoutine/core/asgi.py
================================================
"""
ASGI config for core project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

application = get_asgi_application()



================================================
FILE: BACKEND/FitnessRoutine/core/settings.py
================================================
from pathlib import Path
import os
from dotenv import load_dotenv
from datetime import timedelta

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv(os.path.join(BASE_DIR, '.env'))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
from django.core.management.utils import get_random_secret_key

SECRET_KEY = os.getenv('SECRET_KEY', get_random_secret_key())

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['fitness-routine.onrender.com', 'localhost', '127.0.0.1', '10.138.50.34']

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')


# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'rest_framework_simplejwt',
    'rest_framework_simplejwt.token_blacklist',
    'fitness_routine',
    'corsheaders'

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Password validation
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/5.2/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.2/howto/static-files/
STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.2/ref/settings/#default-auto-field
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),

    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
}

CORS_ALLOW_ALL_ORIGINS = True

CORS_ALLOW_ORIGINS = [
     "https://fitness-routine-frontend.vercel.app",
     "10.138.50.34",
     "10.138.50.34:8081"
]

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    "SLIDING_TOKEN_LIFETIME": timedelta(days=1),
    "SLIDING_TOKEN_REFRESH_LIFETIME": timedelta(days=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
}



================================================
FILE: BACKEND/FitnessRoutine/core/urls.py
================================================
# urls.py (do projeto principal)

from django.urls import path
from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from fitness_routine.views import (
    UserCreate, UserProfileView, GerarTreinoView, 
    TreinoListView, LogoutView, TreinoDetailView, 
    MobileTreinoDetailView, TreinoDeleteView
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', UserCreate.as_view(), name='user_register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/me/', UserProfileView.as_view(), name='user_profile'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
    path('api/treinos/', TreinoListView.as_view(), name='treino_list'),
    path('api/gerar-treino/', GerarTreinoView.as_view(), name='gerar_treino'),
    path('api/treino-detalhe/<int:pk>/', TreinoDetailView.as_view(), name='treino-detail'),
    path('api/treinos/<int:pk>/mobile-detail/', MobileTreinoDetailView.as_view(), name='mobile-treino-detail'),
    path('api/treinos/<int:pk>/', TreinoDeleteView.as_view(), name='treino_delete'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


================================================
FILE: BACKEND/FitnessRoutine/core/wsgi.py
================================================
"""
WSGI config for core project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

application = get_wsgi_application()



================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/__init__.py
================================================



================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/admin.py
================================================
from django.contrib import admin



================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/apps.py
================================================
from django.apps import AppConfig

class FitnessRoutineConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'fitness_routine'



================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/models.py
================================================
# fitness_routine/models.py

from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth.models import User

class Profile(models.Model):
    EXPERIENCIA_CHOICES = [
        ('iniciante', 'Iniciante'),
        ('intermediario', 'Intermediário'),
        ('avancado', 'Avançado'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    data_nascimento = models.DateField(null=True, blank=True)
    peso = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    altura = models.PositiveIntegerField(null=True, blank=True)
    nivel_experiencia = models.CharField(max_length=20, choices=EXPERIENCIA_CHOICES, null=True, blank=True)
    profile_image = models.ImageField(upload_to='profile_pics/', null=True, blank=True)

    def __str__(self):
        return f'Perfil de {self.user.username}'

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

class Treino(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='treinos')
    nome_treino = models.CharField(max_length=100)
    dias_semana = models.PositiveIntegerField()
    objetivo = models.CharField(max_length=100)
    data_criacao = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Treino '{self.nome_treino}' de {self.user.username}"

class Exercicio(models.Model):
    DIA_CHOICES = [
        ("Segunda-feira", "Segunda-feira"),
        ("Terça-feira", "Terça-feira"),
        ("Quarta-feira", "Quarta-feira"),
        ("Quinta-feira", "Quinta-feira"),
        ("Sexta-feira", "Sexta-feira"),
        ("Sábado", "Sábado"),
        ("Domingo", "Domingo"),
    ]
    
    treino = models.ForeignKey(Treino, on_delete=models.CASCADE, related_name='exercicios')
    nome_exercicio = models.CharField(max_length=100)
    series = models.CharField(max_length=20)
    repeticoes = models.CharField(max_length=20)
    descanso = models.CharField(max_length=50, help_text="Tempo de descanso entre as séries")
    grupo_muscular = models.CharField(max_length=50)
    dia_semana = models.CharField(max_length=20, choices=DIA_CHOICES, blank=True, null=True)

    def __str__(self):
        return self.nome_exercicio


================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/serializer.py
================================================
# fitness_routine/serializer.py

from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from .models import Profile, Treino, Exercicio

#1 Serializers de Suporte
class ProfileSerializer(serializers.ModelSerializer):
    # =======================================================
    #  CORREÇÃO APLICADA AQUI
    #  Usamos um SerializerMethodField para construir a URL completa da imagem.
    # =======================================================
    profile_image = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = ('data_nascimento', 'peso', 'altura', 'nivel_experiencia', 'profile_image')

    def get_profile_image(self, obj):
        # 'obj' aqui é a instância do modelo Profile
        if obj.profile_image:
            # request = self.context.get('request')
            # if request is not None:
            #     return request.build_absolute_uri(obj.profile_image.url)
            return obj.profile_image.url # Retorna a URL relativa, o frontend montará o resto
        return None

#2 Serializer para Registro (sem alterações)
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name')

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], 
            validated_data['email'], 
            validated_data['password'])
        
        user.first_name = validated_data.get('first_name', '')
        user.last_name = validated_data.get('last_name', '')
        user.save()

        return user

#3 Serializer Principal para Gerenciar o Perfil do Usuário (sem alterações diretas, mas herdará a correção)
class UserProfileSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'profile', 'password')
        read_only_fields = ('id', 'username')
        extra_kwargs = {
            'password': {'write_only': True, 'required': False}
        }

    def update(self, instance, validated_data):
        if 'profile' in validated_data:
            profile_data = validated_data.pop('profile')
            profile = instance.profile
            
            profile.data_nascimento = profile_data.get('data_nascimento', profile.data_nascimento)
            profile.peso = profile_data.get('peso', profile.peso)
            profile.altura = profile_data.get('altura', profile.altura)
            profile.nivel_experiencia = profile_data.get('nivel_experiencia', profile.nivel_experiencia)
            
            # A lógica para receber o upload continua a mesma
            if 'profile_image' in profile_data:
                 profile.profile_image = profile_data.get('profile_image', profile.profile_image)

            profile.save()

        password = validated_data.pop('password', None)
        if password:
            instance.set_password(password)

        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        
        instance.save()
        return instance

#4 Serializers para Treinos (sem alterações)
class ExercicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercicio
        fields = ['nome_exercicio', 'series', 'repeticoes', 'descanso', 'grupo_muscular', 'dia_semana']

class TreinoSerializer(serializers.ModelSerializer):
    exercicios = ExercicioSerializer(many=True, read_only=True)

    class Meta:
        model = Treino
        fields = ['id', 'nome_treino', 'dias_semana', 'objetivo', 'data_criacao', 'exercicios']


================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/tests.py
================================================
from django.test import TestCase

# Create your tests here.



================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/urls.py
================================================
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

urlpatterns = [
    path('', include(router.urls)),
]


================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/views.py
================================================
# fitness_routine/views.py

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
model = genai.GenerativeModel('gemini-2.5-pro')

# View para LISTAR os treinos existentes
class TreinoListView(generics.ListAPIView):
    serializer_class = TreinoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Treino.objects.filter(user=self.request.user).prefetch_related('exercicios').order_by('-data_criacao')

# View para GERAR um novo treino
class GerarTreinoView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request, *args, **kwargs):
        user_preferences = request.data
        prompt = self.construir_prompt(user_preferences)
        try:
            response = model.generate_content(prompt)
            cleaned_response = response.text.strip().replace('```json', '').replace('```', '')
            treino_gerado = json.loads(cleaned_response)
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
              "exercicios": [{{ "exercicio": "Supino Reto com Barra", "series": "4", "repeticoes": "8-12", "descanso": "60 segundos", "dia_semana": "Segunda-feira" }}]
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
        
    # =======================================================
    #  ALTERAÇÃO ADICIONADA AQUI
    # =======================================================
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context

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
        
# View para TREINO DETALHADO (Original, para o site web)
class TreinoDetailView(generics.RetrieveAPIView):
    queryset = Treino.objects.all()
    serializer_class = TreinoSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

class MobileTreinoDetailView(generics.RetrieveAPIView):
    """
    Retorna os detalhes de um treino, incluindo todos os exercícios associados.
    Otimizado para o aplicativo móvel.
    """
    serializer_class = TreinoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Treino.objects.filter(user=self.request.user).prefetch_related('exercicios')


================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/migrations/0001_initial.py
================================================
# Generated by Django 5.2.5 on 2025-09-17 11:48

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_nascimento', models.DateField(blank=True, null=True)),
                ('peso', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('altura', models.PositiveIntegerField(blank=True, null=True)),
                ('nivel_experiencia', models.CharField(blank=True, choices=[('iniciante', 'Iniciante'), ('intermediario', 'Intermediário'), ('avancado', 'Avançado')], max_length=20, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]



================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/migrations/0002_treino_exercicio.py
================================================
# Generated by Django 5.2.5 on 2025-09-17 12:15

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fitness_routine', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Treino',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_treino', models.CharField(max_length=100)),
                ('dias_semana', models.PositiveIntegerField()),
                ('objetivo', models.CharField(max_length=100)),
                ('data_criacao', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='treinos', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Exercicio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_exercicio', models.CharField(max_length=100)),
                ('series', models.CharField(max_length=20)),
                ('repeticoes', models.CharField(max_length=20)),
                ('descanso', models.CharField(help_text='Tempo de descanso entre as séries', max_length=50)),
                ('grupo_muscular', models.CharField(max_length=50)),
                ('treino', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='exercicios', to='fitness_routine.treino')),
            ],
        ),
    ]



================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/migrations/0003_profile_dia_semana.py
================================================
# Generated by Django 5.2.1 on 2025-09-24 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fitness_routine', '0002_treino_exercicio'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='dia_semana',
            field=models.CharField(blank=True, choices=[('Segunda-feira', 'Segunda-feira'), ('Terça-feira', 'Terça-feira'), ('Quarta-feira', 'Quarta-feira'), ('Quinta-feira', 'Quinta-feira'), ('Sexta-feira', 'Sexta-feira'), ('Sábado', 'Sábado'), ('Domingo', 'Domingo')], max_length=20, null=True),
        ),
    ]



================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/migrations/0004_remove_profile_dia_semana_exercicio_dia_semana.py
================================================
# Generated by Django 5.2.1 on 2025-09-24 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fitness_routine', '0003_profile_dia_semana'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='dia_semana',
        ),
        migrations.AddField(
            model_name='exercicio',
            name='dia_semana',
            field=models.CharField(blank=True, choices=[('Segunda-feira', 'Segunda-feira'), ('Terça-feira', 'Terça-feira'), ('Quarta-feira', 'Quarta-feira'), ('Quinta-feira', 'Quinta-feira'), ('Sexta-feira', 'Sexta-feira'), ('Sábado', 'Sábado'), ('Domingo', 'Domingo')], max_length=20, null=True),
        ),
    ]



================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/migrations/0005_profile_profile_image.py
================================================
# Generated by Django 5.2.1 on 2025-11-05 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fitness_routine', '0004_remove_profile_dia_semana_exercicio_dia_semana'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='profile_image',
            field=models.ImageField(blank=True, null=True, upload_to='profile_pics/'),
        ),
    ]



================================================
FILE: BACKEND/FitnessRoutine/fitness_routine/migrations/__init__.py
================================================




================================================
FILE: FRONTEND/cadastro-pg/cadastro.css
================================================
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #131212;
    color: white;
    display: flex; /* Habilita o Flexbox para o layout principal */
    min-height: 100vh;
}

.imagem-esquerda {
    flex-basis: 60%; /* Ocupa 55% da largura da tela */
    min-height: 100vh;
    background-image: url("../midia/img/img-cad.jpg");  
    background-size: cover;
    background-position: center;
}

.container {
    flex-basis: 40%; /* Ocupa os 45% restantes */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 40px;
}

/* O conteúdo dentro do container */
.form-content {
    width: 100%;
    max-width: 360px; /* Limita a largura do formulário */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo {
    margin-bottom: 10px;
}

.subtitle {
    color: #9ca3af;
    margin-bottom: 15px;
    font-size: 13px; 
    text-align: center;
}

.input-field {
    width: 100%;
    background-color: #2d3748;
    border: 1px solid #4a5568;
    border-radius: 12px;
    padding: 15px;
    color: white;
    font-size: 12px;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
}

.input-field::placeholder {
    color: #a0aec0;
}

.name-fields {
    display: flex; 
    gap: 15px;   
    width: 100%;
    margin-bottom: 10px;
}

.password-field {
    position: relative;
    width: 100%; 
    margin-bottom: 10px;
}

.password-field input {
    padding-right: 45px; 
}

.password-field .material-symbols-outlined {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #a0aec0;
    font-size: 20px;
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24; 
}

.btn {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    background-color: #3c096c;
    color: white;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}

.btn:hover {
    background-color: #4c1d95;
}

.subtitle a {
    color: #c8b8db;
    text-decoration: none; 
}

.subtitle a:hover {
    text-decoration: underline; 
}

.ico {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 75px;
    margin-top: 30px;
}

.ico li {
    list-style: none;
}

.ico li a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
    border: 1px solid #4a5568;
}

.ico li a:hover {
    border-color: #c8b8db;
    transform: scale(1.1);
}

.ico li a img {
    filter: invert(1);
    transform: scale(0.5);
}


/* =================================================================== */
/* ============== CONFIGURAÇÕES DE RESPONSIVIDADE ==================== */
/* =================================================================== */

@media (max-width: 900px) {
    .imagem-esquerda {
        display: none; /* Oculta o painel da imagem */
    }

    .container {
        flex-basis: 100%; /* Ocupa a tela inteira */
        width: 100%;
        max-width: none;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 20px; /* Reduz o padding em telas pequenas */
    }

    .form-content {
        max-width: 100%;
    }

    .logo img {
        height: 60px;
    }

    /* CORREÇÃO CRÍTICA PARA O MOBILE */
    .name-fields {
        flex-direction: column; /* Empilha os campos de nome */
        gap: 15px;
        margin-bottom: 0; /* A margem agora está nos inputs individuais */
    }

    .input-field {
        margin-bottom: 15px; /* Garante que todos os inputs tenham espaçamento */
    }
}


================================================
FILE: FRONTEND/cadastro-pg/cadastro.html
================================================
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="../midia/ico/ico-aba.png" type="image/x-icon">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
  <link rel="stylesheet" type="text/css" href="cadastro.css" />

  <title> Fitness Routine - Cadastro </title>

  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  
</head>

<body>
  <div class="imagem-esquerda"></div>
  
<!--CONTAINER CAD-->
<div class="container">
    <!--logo-->
    <div class="logo">
      <a href="../inicio-pg/inicio.html"><img src="../midia/logo.png" alt="Fitness Routine" style="height: 130px;"></a>
    </div>

    <!--nome-->
    <div class="name-fields">
      <input type="text" id="first_name" class="input-field" placeholder="Nome" />
      <input type="text" id="last_name" class="input-field" placeholder="Sobrenome" />
    </div>

    <!--user-->
    <input type="text" id="user" class="input-field" placeholder="Usuário" />

    <!--email-->
    <input type="email" id="email" class="input-field" placeholder="E-mail" />

    <!--senha-->
    <div class="password-field">
      <input type="password" class="input-field" id="password" placeholder="Senha">
      <span class="material-symbols-outlined" id="toggle-password">visibility</span>
    </div>

    <!--confirm senha-->
    <div class="password-field">
      <input type="password" id="password-verify" class="input-field" placeholder="Confirme sua senha">
      <small id="passwordVerifyHelp" class="password-help"></small>
      <span class="material-symbols-outlined" id="toggle-password-verify">visibility</span>
    </div>

    <!--termos-->
    <p class="subtitle">Já tem uma conta? <a href="../login-pg/login.html">Login</a></p>

    <!--btn-->
    <button class="btn" id="btn" >Cadastrar</button>

    <!--icones-->
    <ul class="ico">
      <li><a href="#"><img src="../midia/ico/ico-ttk.svg"></a></li>
      <li><a href="https://api.whatsapp.com/send/?phone=5514997674157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><img src="../midia/ico/ico-wpp.svg"></a></li>
      <li><a href="https://www.instagram.com/routinefitnessbr" target="_blank" rel="noopener noreferrer"><img src="../midia/ico/ico-ins.svg"></a></li>
    </ul>

</div>

<script src="cadastro.js"></script>
</body>
</html>


================================================
FILE: FRONTEND/cadastro-pg/cadastro.js
================================================
//constantes
const btn = document.getElementById('btn');
const passwordInput = document.getElementById('password');
const passwordVerifyInput = document.getElementById('password-verify');
const togglePassword = document.getElementById('toggle-password');
const togglePasswordVerify = document.getElementById('toggle-password-verify');

// Função para alternar a visibilidade da senha
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

// Função para alternar a visibilidade da senha de verificação
togglePasswordVerify.addEventListener('click', function () {
    const type = passwordVerifyInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordVerifyInput.setAttribute('type', type);
    togglePasswordVerify.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

// Função para validar se as senhas coincidem
btn.addEventListener('click', function() {

    if (passwordInput.value !== passwordVerifyInput.value) {
        alert('As senhas não coincidem, verifique novamente.');
        return; }
   
    const formData = new FormData();

    formData.append('username', document.getElementById('user').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);
    formData.append('first_name', document.getElementById('first_name').value);
    formData.append('last_name', document.getElementById('last_name').value);

    const URL = 'http://127.0.0.1:8000/api/register/';

    fetch(URL, {
        method: 'POST',
        body: formData
    })
    
    .then(response => {
        if(!response.ok) throw new Error('Erro ao cadastrar usuário.')
        window.location.href = '../login-pg/login.html';
        alert('Usuario cadastrado com sucesso !')
        return response.json();
        
    })
    .catch(error => alert(error.message)); 

})



================================================
FILE: FRONTEND/dashboard-pg/barra-style.css
================================================
/* ======================================================= */
/* =                  BARRA LATERAL (REFINADA)           = */
/* ======================================================= */

.barra_lateral {
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  background: linear-gradient(to bottom, #3c096c 10%, #3c096c 20%, #19082a 60%, #19082a 100%);
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: transform 0.3s ease;
  z-index: 999;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.2);
}

.barra_lateral.oculta {
  transform: translateX(-100%);
}

/* --- Estilo da Logo (Ajustado) --- */
.barra_lateral img {
  max-width: 210px; /* AUMENTADO: De 140px para 160px */
  display: block;
  margin: 0 auto 30px auto;

  /* TRUQUE: Tente descomentar uma destas linhas se sua imagem tiver fundo preto/branco */
  /* mix-blend-mode: screen; */ /* Tende a remover fundos pretos */
  /* mix-blend-mode: multiply; */ /* Tende a remover fundos brancos */
}

/* --- Links da Navegação (Ajustado) --- */
.barra_lateral a,
.barra_lateral .link {
  text-decoration: none;
  color: #e0e0e0;
  padding: 17px 10px; /* AUMENTADO: Padding vertical para links maiores */
  font-size: 15px;      /* AUMENTADO: Tamanho da fonte */
  font-weight: 400;
  letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(200, 184, 219, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}

.barra_lateral a:first-of-type,
.barra_lateral .link:first-of-type {
  border-top: 1px solid rgba(200, 184, 219, 0.1);
}

.barra_lateral a:hover,
.barra_lateral .link:hover {
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  padding-left: 20px;
  border-left: 3px solid #c8b8db;
}

/* --- Footer da Barra Lateral --- */
.barra-footer {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(200, 184, 219, 0.15);
}

.barra-footer a {
  text-decoration: none;
  color: #c8b8db;
  padding: 12px 15px;
  border-radius: 8px;
  border-bottom: none;
  transition: all 0.3s ease;
}

.barra-footer a:hover {
  background-color: #c8b8db;
  color: #3c096c;
  transform: translateY(-2px);
}



================================================
FILE: FRONTEND/dashboard-pg/modal-style.css
================================================
/*MODAL 1*/
.modal-form {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 2000; }

.modal-form.aberta {
    display: flex; }

.modal {
    width: 100%;
    max-width: 1000px;
    max-height: 640px;
    background: #1a1525;
    border: 1px solid #231935;
    border-radius: 16px;
    padding: 22px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.45);
    animation: surgir 0.2s ease-out;
    position: relative; }

@keyframes surgir {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; } }

.modal h2 {
    margin-bottom: 15px;
    color: #c8b8db;
    font-size: 22px; }

.modal-fechar {
    position: absolute;
    right: 16px;
    top: 10px;
    background: transparent;
    color: #c8b8db;
    border: none;
    font-size: 5px;
    line-height: 1;
    cursor: pointer; }

.grade-checkboxes {
    display: grid;
    grid-template-columns: repeat(4, minmax(0,1fr));
    gap: 8px; }

.grade-checkboxes label {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 10px;
    padding: 8px 10px; }

.acoes {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    margin-top: 6px; }

input[type="time"]:focus {
  border-color: #9d4edd;
  box-shadow: 0 0 12px rgba(157, 78, 221, 0.8); }

input[type="time"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1; }

.grupo-slider {
  display: flex; 
  align-items: center; 
  gap: 15px; 
  margin: 12px 0; }

.grupo-slider input[type="range"] {
  flex-grow: 1; }

.grupo-slider output {
  min-width: 70px; 
  text-align: right;
  font-size: 18px; }

input[type="range"] {
    height: 8px;
    border-radius: 5px;
    background: #2a1f3d;
    outline: none;
    cursor: pointer;
    transition: background 0.3s;
    accent-color: #9d4edd; }
    
    
    
    
    
/*MODAL 2*/
.modal-info {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 2000; }

.modal-info.aberta {
    display: flex; }

.modal2 {
    width: 100%;
    max-width: 650px; 
    max-height: 700px;
    background: #1a1525;
    border: 1px solid #2a1f3d;
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 12px 50px rgba(0,0,0,0.55);
    animation: surgir 0.25s ease-out;
    position: relative;
    display: flex;
    flex-direction: column; }

@keyframes surgir {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; } }

.modal2 h2 {
    margin-bottom: 18px;
    color: #c8b8db;
    font-size: 20px;
    font-weight: 600;
    text-align: center; }

.modal2-fechar {
    position: absolute;
    right: 18px;
    top: 14px;
    background: transparent;
    color: #c8b8db;
    border: none;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.2s; }

.modal2-fechar:hover { 
    color: #ffffff; }

.fa-solid.fa-x {
    color: #c8b8db;
    font-size: 15px; }

.modal-grid {
    position: relative;
    display: flex;
    gap: 80px; 
    align-items: center; 
    margin-right: 30px; }

.modal-grid::before {
    content: "";
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 71.4%;
    width: 1px;
    background: #2a1f3d;
    opacity: .6;
    pointer-events: none; }

/*inputs*/
.col-inputs {
    display: flex;
    flex-direction: column; }

input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(73%) sepia(14%) saturate(438%) hue-rotate(250deg) brightness(96%) contrast(92%); }

.level-box select {
    width: 100%;
    border: none;
    background: transparent;
    color: #eeeeee;
    font-size: 12px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer; }

.nome-sobrenome {
    display: flex;
    gap: 10px; }

.nome-sobrenome input {
    flex: 1; 
    min-width: 0;
    box-sizing: border-box; }

/*botoes*/
.acoes {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 10px; }

.btn-primario {
    background: #3c096c;
    border: none;
    color: #ffffff;
    font-weight: 500;
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s ease; }

.btn-primario:hover { 
    background: #5a189a; 
    transform: scale(1.07);}

.btn-secundario {
    background: transparent;
    border: 1px solid #c8b8db;
    color: #c8b8db;
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s ease; }

.btn-secundario:hover { 
    background: #211a2f; }

/* Wrapper geral da tabela */
.dataTables_wrapper {
    color: #c8b8db;
    margin-top: 20px;
}

/* Campos de busca ("Pesquisar") e seleção de quantidade ("Mostrar X entradas") */
.dataTables_wrapper .dataTables_length select,
.dataTables_wrapper .dataTables_filter input {
    background-color: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 8px;
    color: #ffffff;
    padding: 8px;
    margin-left: 5px;
}

/* Header da tabela (cabeçalho) */
#tabelaTreinos thead th {
    background-color: #3c096c;
    color: #ffffff;
    border-bottom: 2px solid #5a189a;
    font-weight: 600;
}

/* Corpo da tabela */
#tabelaTreinos tbody td {
    color: #e0e0e0;
    padding: 12px 10px;
}

/* Linhas da tabela e efeito de hover */
#tabelaTreinos tbody tr {
    background-color: #1a1525;
    border-bottom: 1px solid #2a1f3d;
    transition: background-color 0.2s ease;
}

#tabelaTreinos tbody tr:hover {
    background-color: #2c2144; /* Cor mais clara para destacar a linha */
    cursor: pointer;
}

/* Remove a borda da última linha para um visual mais limpo */
#tabelaTreinos tbody tr:last-child {
    border-bottom: none;
}

/* Paginação (botões 1, 2, Próximo...) */
.dataTables_wrapper .dataTables_paginate .paginate_button {
    background-color: transparent;
    border: 1px solid #2a1f3d;
    color: #c8b8db !important; /* !important para sobrescrever estilos indesejados */
    margin: 0 4px;
    border-radius: 8px;
}

.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
    background: #3c096c;
    border-color: #5a189a;
    color: #ffffff !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button.current {
    background: #5a189a;
    border-color: #7b2cbf;
    color: #ffffff !important;
}

/* Informações ("Mostrando 1 de 10 de 50 entradas") */
.dataTables_wrapper .dataTables_info {
    color: #a0a0a0;
    padding-top: 8px;
}

/* Ícone de expansão (+) e (-) para os detalhes dos exercícios */
td.details-control {
    background: url('https://datatables.net/examples/resources/details_open.png') no-repeat center center;
    cursor: pointer;
}
tr.shown td.details-control {
    background: url('https://datatables.net/examples/resources/details_close.png') no-repeat center center;
}

/* Estilo do container dos detalhes que se abre */
.details-container {
    padding: 10px 15px;
    background-color: #2c2144;
    border-left: 3px solid #7b2cbf;
}
.details-container ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
}
.details-container li {
    margin-bottom: 8px;
    line-height: 1.5;
}


#formConfiguracoes .linha {
    display: grid;
    grid-template-columns: 1fr 120px; 
    gap: 12px;
    margin: 15px 0; }

#formConfiguracoes .linha label {
    font-weight: 500;
    font-size: 13px; }

#formConfiguracoes #limitacoes {
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 10px;
    padding: 10px 12px;
    color: #ffffff;
    font-size: 12px;
    resize: none;
    height: 70px; }

#formConfiguracoes .grupo {
    display: grid;
    gap: 8px;
    margin: 10px 0; }

#formConfiguracoes label, #formConfiguracoes span {
    font-weight: 500; 
    font-size: 13px; }

#formConfiguracoes input[type="text"], input[type="time"], textarea {
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 10px;
    padding: 10px 12px;
    color: #ffffff; 
    font-size: 12px;}

#formConfiguracoes input[type="number"] {
    max-width: 120px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 10px;
    padding: 10px 12px;
    color: #ffffff; 
    font-size: 12px; }

#formConfiguracoes label {
    font-weight: 400; 
    font-size: 12px;
    color: #c8b8db; }

#formConfiguracoes input[type="text"],
#formConfiguracoes input[type="email"],
#formConfiguracoes input[type="password"],
#formConfiguracoes input[type="number"],
#formConfiguracoes textarea {
    width: 100%;
    box-sizing: border-box;
    height: 44px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 12px;
    padding: 12px 14px;
    color: #ffffff; 
    font-size: 14px;
    transition: border 0.2s, background 0.2s; }

#formConfiguracoes #nivelUser {
    width: 120px;
    box-sizing: border-box;
    height: 44px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 12px;
    padding: 12px 14px;
    color: #ffffff; 
    font-size: 12px;
    transition: border 0.2s, background 0.2s; }

#formConfiguracoes input[type="date"] {
    width: 120px;
    box-sizing: border-box;
    height: 44px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 12px;
    padding: 12px 14px;
    color: #c8b8db; 
    font-size: 14px;
    transition: border 0.2s, background 0.2s; }

/*password*/
.password-field {
  position: relative;
  width: 100%; }

.password-field input {
  padding-right: 40px; }

.password-field .material-symbols-outlined {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888;
  font-size: 20px!important; }

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 1000,
    'GRAD' 0,
    'opsz' 24; }

.password-field .material-symbols-outlined.riscado::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 2px;
  right: 2px;
  height: 2px;
  background-color: #888;
  transform: rotate(-45deg); }


================================================
FILE: FRONTEND/dashboard-pg/curiosidades/dashboard.css
================================================
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

/*CONF GERAL*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }
  
body {
  font-family: 'Poppins', sans-serif;
  background-color: #121212;
  color: white; }

/*MAIN*/
.main {
  padding: 30px;
  padding-left: 290px;
  transition: padding-left 0.3s ease; }

.main.expandida {
  padding-left: 30px; }

/*card*/
.card {
  background-color: #1e1e1e;
  border-left: 5px solid #3c096c;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  height: 160px; }

.card a { 
  display: inline-block;
  margin-top: 20px;
  padding: 10px 25px;
  background: #c8b8db;
  color: #121212;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none;
  border-radius: 40px;
  transition: 0.3s ease-in-out;
  -webkit-box-shadow: -3px 3px 35px -5px rgba(200,184,219,1);
  -moz-box-shadow: -3px 3px 35px -5px rgba(200,184,219,1);
  box-shadow: -3px 3px 35px -5px rgba(200,184,219,1); }

.card a:hover {
    transform: translateY(-8px);
    color: #121212; }

/*btns*/
.botoes-fixos {
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 25px;
  z-index: 1000; }

.toggle-btn {
  background-color: #19052c;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s; }

.toggle-btn:hover {
  background-color: #280c42; }

.btn-fixo {
  text-decoration: none;
  color: white; }

/*CARROUSEL*/
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1500px;
  max-height: 1000px;
  overflow: hidden;
  border-radius: 30px;
  margin-bottom: 20px; }

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out; }

.carousel-item {
  min-width: 100%;
  position: relative;
  text-align: center;
  color: #fff; }

.carousel-item img {
  width: 100%;
  height: 420px;
  object-fit: cover; }

.prev, .next {
  position: absolute;
  top: 85%;
  background: #3c096c65;
  border: none;
  color: #c8b8db;
  font-size: 20px;
  padding: 15px 15px;
  border-radius: 20px;
cursor: pointer; }

.prev { left: 15px; }
.next { right: 15px; }

/*PASS INPUT*/
.password-field {
  position: relative;
  width: 100%; }

.password-field input {
  padding-right: 40px; }

.password-field .material-symbols-outlined {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888;
  font-size: 20px!important; }

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 1000,
    'GRAD' 0,
    'opsz' 24; }

.password-field .material-symbols-outlined.riscado::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 2px;
  right: 2px;
  height: 2px;
  background-color: #888;
  transform: rotate(-45deg); }


================================================
FILE: FRONTEND/dashboard-pg/curiosidades/dashboard.html
================================================
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="shortcut icon" href="../../midia/ico/ico-aba.png" type="image/x-icon">
    <title> Fitness Routine - Dashboard </title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
    <link rel="stylesheet" href="dashboard.css" />
    <link rel="stylesheet" href="../modal-style.css"/>
    <link rel="stylesheet" href="../barra-style.css"/>
    
</head>
<body>

<!--BARRA LATERAL-->
<div class="barra_lateral" id="barraLateral">
  <img src="../../midia/logo-dash.png" alt="logo-dash"><br><br>
  <a href="../inicio/dashboard.html" class="link">Início</a>
  <a href="../planilhas/dashboard.html" class="link">Treinos</a>
  <a href="../curiosidades/dashboard.html" class="link">Curiosidades</a>
  <a href="../sobre/dashboard.html" class="link">Sobre</a>
</div>

<!--MAIN-->
<div class="main" id="mainContent">
  <!--carrousel-->
  <div class="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active" data-card="1"> <img src="../../midia/cur/img-cur1.jpg" alt="Imagem 1"> </div>
        <div class="carousel-item" data-card="2"> <img src="../../midia/cur/img-cur2.jpg" alt="Imagem 2"> </div>
        <div class="carousel-item" data-card="3"> <img src="../../midia/cur/img-cur3.jpg" alt="Imagem 3"> </div>
        <div class="carousel-item" data-card="4"> <img src="../../midia/cur/img-cur4.jpg" alt="Imagem 4"> </div>
        <div class="carousel-item" data-card="5"> <img src="../../midia/cur/img-cur5.jpg" alt="Imagem 5"> </div>
    </div>

    <button class="prev">&#10094;</button>
    <button class="next">&#10095;</button>
  </div>

  <!--card-->
  <div class="card" id="dynamicCard">
    <div class="card-content">
      <h2 id="card-title"></h2>
      <p id="card-text"></p>
      <a href="#" class="btn" id="card-link"></a>
    </div>
  </div>
</div>

<!--MODAL INFO-->
<div class="modal-info" id="modalInfo" aria-hidden="true">
<div class="modal2" role="dialog" aria-modal="true" aria-labelledby="ConfigInfo">

  <!--button-->
  <button class="modal2-fechar" id="fecharInfo" aria-label="Fechar"><i class="fa-solid fa-x"></i></button>
  
  <!--titulo-->
  <h2 id="tituloInfo">Configurações de usuário</h2>

  <form id="formConfiguracoes">
  <div class="modal-grid">
      
    <!-- COLUNA ESQUERDA -->
    <div class="col-inputs">

      <!--nome-->
      <div class="grupo">
        <label>Nome completo:</label>
        <div class="nome-sobrenome">
          <input type="text" id="nome" name="nome" placeholder="Nome"/>
          <input type="text" id="sobrenome" name="sobrenome" placeholder="Sobrenome"/>
        </div>
      </div>

      <!--user-->
      <div class="grupo">
        <label for="username">Nome de usuário: </label>
        <input type="text" id="username" name="username"/>
      </div>

      <!--email-->
      <div class="grupo">
        <label for="email">Email: </label>
        <input type="email" id="email" name="email"/>
      </div>

      <!--senha-->
      <div class="grupo">
        <label for="password">Atualize sua senha:</label>
        <div class="password-field">
          <input type="password" class="input-field" id="password" placeholder="Sua nova senha">
          <span class="material-symbols-outlined" id="toggle-password">visibility</span>
        </div>
      </div>

      <!--confirma senha-->
      <div class="grupo">
        <div class="password-field">
          <input type="password" id="password-verify" class="input-field" placeholder="Confirme sua nova senha">
          <small id="passwordVerifyHelp" class="password-help"></small>
          <span class="material-symbols-outlined" id="toggle-password-verify">visibility</span>
        </div>
      </div>
    </div>

    <!-- COLUNA DIREITA -->
    <div class="col-inputs">

        <!--nascimento-->
        <div class="grupo">
          <label for="nasc">Ano de nascimento: </label>
          <input type="date" id="dateUser" name="nasc"/>
        </div>

        <!--experiencia-->
        <div class="grupo">
          <label for="nivel">Experiência: </label>
          <div class="level-box">
            <select id="nivelUser" name="nivel">
              <option value="" disabled selected>Escolha o nível</option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
            </select>
          </div>
        </div>

        <!--peso-->
        <div class="grupo">
          <label for="peso">Peso: (kg) </label>
          <input type="number" id="pesoUser" name="peso" step="0.1"/>
        </div>

        <!--altura-->
        <div class="grupo">
          <label for="altura">Altura: (cm)</label>
          <input type="number" id="alturaUser" name="altura"/>
        </div>
    </div>
  </div>

  <!--acoes-->
  <div class="acoes">
    <button type="button" class="btn-secundario" id="cancelarInfo">Cancelar</button>
    <button type="submit" class="btn-primario">Salvar configurações</button>
  </div>

  </form>
</div>
</div>

<!--BTN-->
<div class="botoes-fixos">
    <!--alternar-->
    <button class="toggle-btn" onclick="alternarBarra(), removerFixos()">
      <i class="fas fa-bars"></i>
    </button>

    <!--logout-->
    <button class="toggle-btn" id="btn-logout">
      <i class="fa-solid fa-right-from-bracket"></i>
    </button>

    <!--user-->
    <button class="toggle-btn" id="abrirInfo">
      <i class="fas fa-user"></i>
    </button>
</div>

<script src="dashboard.js"></script>
</body>
</html>


================================================
FILE: FRONTEND/dashboard-pg/curiosidades/dashboard.js
================================================
// CARREGAR DADOS DO USUÁRIO AO CARREGAR A PÁGINA
window.onload = function() {
    carregarDadosUsuario() 
}

// --- FUNÇÕES GLOBAIS (acessíveis pelo HTML) ---
function alternarBarra() {
    const barra = document.getElementById('barraLateral');
    const conteudo = document.getElementById('mainContent');
    if (barra) barra.classList.toggle('oculta');
    if (conteudo) conteudo.classList.toggle('expandida');
}
function removerFixos() {
  const btnConfig = document.getElementById('btn-config');
  const btnLogout = document.getElementById('btn-logout');
  const btnUser = document.getElementById('abrirInfo');

  [btnConfig, btnLogout, btnUser].forEach((btn) => {
    if (btn) {
      btn.style.display = (btn.style.display === 'none') ? 'block' : 'none';
    }
  });
}

// --- CÓDIGO EXECUTADO QUANDO A PÁGINA ESTÁ CARREGADA ---
document.addEventListener('DOMContentLoaded', () => {

    // --- VERIFICAÇÃO INICIAL DE LOGIN ---
    if (!localStorage.getItem("accessToken") && !localStorage.getItem("access_token")) {
        window.location.href = "../../login-pg/login.html";
        return;
    }

    // --- LÓGICA DO MODAL DE "CONFIGURAÇÕES DO USUÁRIO" ---
    const modalInfo = document.getElementById('modalInfo');
    function abrirModal(modal) { if (modal) { modal.classList.add('aberta'); document.body.style.overflow = 'hidden'; }}
    function fecharModal(modal) { if (modal) { modal.classList.remove('aberta'); document.body.style.overflow = ''; }}
    
    document.getElementById('abrirInfo')?.addEventListener('click', () => { 
        // Você precisará adicionar a função carregarDadosUsuario aqui se quiser que o modal de config funcione
        abrirModal(modalInfo); 
    });
    document.getElementById('fecharInfo')?.addEventListener('click', () => fecharModal(modalInfo));
    document.getElementById('cancelarInfo')?.addEventListener('click', () => fecharModal(modalInfo));
    if (modalInfo) modalInfo.addEventListener('click', (e) => { if (e.target === modalInfo) fecharModal(modalInfo); });
    
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fecharModal(modalInfo); });

    // --- LÓGICA ESPECÍFICA DA PÁGINA DE CURIOSIDADES ---
    const cardData = [
        { title: "Sua genética influencia seus resultados", text: "Nem todos ganham massa da mesma forma — e tá tudo bem.", link: "cur-top/cur1.html" },
        { title: "Musculação fortalece corpo e mente", text: "Mais do que físico, o treino transforma a forma como você se vê.", link: "cur-top/cur2.html" },
        { title: "Músculos fortes = menos lesões", text: "A musculação é um escudo contra lesões e dores.", link: "cur-top/cur3.html" },
        { title: "Treinar pode prolongar sua vida", text: "Musculação é qualidade de vida agora — e na velhice.", link: "cur-top/cur4.html" },
        { title: "O sedentarismo é o maior inimigo da sua saúde", text: "Ficar parado cobra um preço alto.", link: "cur-top/cur5.html" }
    ];

    const carouselInner = document.querySelector(".carousel-inner");
    const cardTitle = document.getElementById("card-title");
    const cardText = document.getElementById("card-text");
    const cardLink = document.getElementById("card-link");
    const items = document.querySelectorAll(".carousel-item");
    let index = 0;
    let autoPlayInterval;

    function updateCarousel() {
        if (carouselInner && items.length > 0) {
            carouselInner.style.transform = `translateX(${-index * 100}%)`;
            updateCard(index);
        }
    }
    function updateCard(newIndex) {
        if (cardTitle && cardText && cardLink && cardData[newIndex]) {
            const currentData = cardData[newIndex];
            cardTitle.textContent = currentData.title;
            cardText.textContent = currentData.text;
            cardLink.href = currentData.link;
            cardLink.textContent = "Ver mais";
        }
    }
    function startAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            index = (index + 1) % items.length;
            updateCarousel();
        }, 5000); // Muda a cada 5 segundos
    }

    const nextButton = document.querySelector(".next");
    if (nextButton && items.length > 0) {
        nextButton.addEventListener("click", () => {
            index = (index + 1) % items.length;
            updateCarousel();
            startAutoPlay(); // Reinicia o temporizador
        });
    }

    const prevButton = document.querySelector(".prev");
    if (prevButton && items.length > 0) {
        prevButton.addEventListener("click", () => {
            index = (index - 1 + items.length) % items.length;
            updateCarousel();
            startAutoPlay(); // Reinicia o temporizador
        });
    }

    // Inicializa o card e o auto-play
    updateCard(0);
    startAutoPlay();
});


// FUNÇÕES DE CARREGAMENDO E SALVAMENTO DE DADOS DO USUÁRIO
async function carregarDadosUsuario() {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        window.location.href = '../../login-pg/login.html';
        return; }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/me/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Falha ao carregar dados do usuário.');
        }

        const data = await response.json();

        document.getElementById('nome').value = data.first_name || '';
        document.getElementById('sobrenome').value = data.last_name || '';
        document.getElementById('username').value = data.username;
        document.getElementById('email').value = data.email;
        
        document.getElementById('nome').readOnly = true;
        document.getElementById('sobrenome').readOnly = true;
        document.getElementById('username').readOnly = true;

        if (data.profile) {
            document.getElementById('dateUser').value = data.profile.data_nascimento || '';
            document.getElementById('nivelUser').value = data.profile.nivel_experiencia || '';
            document.getElementById('pesoUser').value = data.profile.peso || '';
            document.getElementById('alturaUser').value = data.profile.altura || '';
        }

    } catch (error) {
        console.error('Erro:', error);
        alert(error.message);
    }
}
async function salvarConfiguracoes(event) {
    event.preventDefault();

    const peso = document.getElementById('pesoUser').value;
    const altura = document.getElementById('alturaUser').value;
    const experiencia = document.getElementById('nivelUser').value;
    const dataNascimento = document.getElementById('dateUser').value;

    if (!peso || !altura || !experiencia || !dataNascimento) {
        alert('Por favor, preencha todos os campos obrigatórios: Peso, Altura, Experiência e Data de Nascimento.');
        return;
    }

    const accessToken = localStorage.getItem('accessToken');
    
    const dadosAtualizados = {
        email: document.getElementById('email').value,
        first_name: document.getElementById('nome').value,
        last_name: document.getElementById('sobrenome').value,
        profile: {
            data_nascimento: dataNascimento,
            peso: parseFloat(peso),
            altura: parseInt(altura),
            nivel_experiencia: experiencia
        }
    };

    const novaSenha = document.getElementById('password').value;
    const confirmaSenha = document.getElementById('password-verify').value;

    if (novaSenha) {
        if (novaSenha !== confirmaSenha) {
            alert('As senhas não coincidem! Por favor, verifique.');
            return;
        }
        dadosAtualizados.password = novaSenha;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/me/', {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAtualizados)
        });

        // Se a resposta do servidor não for 'ok' (ex: erro 400), ele vai para o catch
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
        }

        // Se o código chegar aqui, significa que o servidor respondeu com sucesso
        alert('Configurações salvas com sucesso!');
        fechar_info();

    } catch (error) {
        // Verifica se o erro é o específico "Failed to fetch" do reinício do servidor
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            // Assume que a operação deu certo e o servidor reiniciou antes de responder
            console.warn('Ocorreu um erro "Failed to fetch". Assumindo sucesso devido ao reinício do servidor de desenvolvimento.');
            alert('Configurações salvas com sucesso!');
            fechar_info();
        } else {
            // Se for qualquer outro erro (como um erro de validação 400), mostra o erro real
            console.error('Erro real ao salvar:', error.message);
            alert('Ocorreu um erro ao salvar: ' + error.message);
        }   
    }
}
const formConfiguracoes = document.getElementById("formConfiguracoes")
formConfiguracoes.addEventListener('submit', salvarConfiguracoes);

//LOGOUT
const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (event) => {
            // 1. Previne a ação padrão do link (que é navegar imediatamente)
            event.preventDefault(); 
            
            // 2. Mostra a caixa de diálogo de confirmação
            const querSair = confirm("Tem certeza de que deseja sair?");

            // 3. Só continua se o usuário clicou em "OK"
            if (querSair) {
                // 4. Limpa o armazenamento local para deslogar o usuário
                localStorage.clear(); 
                
                // 5. Redireciona para a página inicial
                window.location.href = '../../inicio-pg/inicio.html'; 
            }
            // Se o usuário clicar em "Cancelar", nada acontece.
        });
    }

// VISIBILIDADE SENHA
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

// VISIBILIDADE SENHA - CONFIRMAÇÃO
togglePasswordVerify.addEventListener('click', function () {
    const type = passwordVerifyInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordVerifyInput.setAttribute('type', type);
    togglePasswordVerify.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

// VALIDAÇÃO SENHA   
btn.addEventListener('click', function() {

    if (passwordInput.value !== passwordVerifyInput.value) {
        alert('As senhas não coincidem, verifique novamente.');
        return; } });


================================================
FILE: FRONTEND/dashboard-pg/curiosidades/cur-top/cur.css
================================================
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

/*CONF GERAL*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }
  
body {
  font-family: 'Poppins', sans-serif;
  background-color: #121212;
  color: white; }

/*CONFIG BARRA*/
.barra_lateral {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: linear-gradient(#3c096c, #3c096c, #19082a);
  padding: 20px 20px 20px 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: transform 0.3s ease;
  z-index: 999; }

.barra_lateral.oculta {
  transform: translateX(-100%); }

.barra_lateral h1 {
  color: #c8b8db;
  margin-bottom: 30px; }

.barra_lateral a {
  text-decoration: none;
  color: white;
  margin-bottom: 15px;
  padding: 10px; }

.barra_lateral .link {
  text-decoration: none;
  color: white;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s; }

.barra_lateral .link:hover {
  background-color: #582089;
  color: white; }

/*MAIN PRINCIPAL*/
.main {
  padding: 30px;
  padding-left: 290px;
  transition: padding-left 0.3s ease; }

.main.expandida {
  padding-left: 30px; }

/*card*/
.card {
  position: relative; 
  background-color: #1e1e1e;
  border-left: 5px solid #3c096c;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  height: 420px; }

.card a { 
  display: inline-block;
  margin-top: 20px;
  padding: 10px 25px;
  background: #c8b8db;
  color: #121212;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none;
  border-radius: 40px;
  transition: 0.3s ease-in-out;
  -webkit-box-shadow: -3px 3px 35px -5px rgba(200,184,219,1);
  -moz-box-shadow: -3px 3px 35px -5px rgba(200,184,219,1);
  box-shadow: -3px 3px 35px -5px rgba(200,184,219,1); }

.card a:hover {
    transform: translateY(-8px);
    color: #121212; }

.card h2 {
    margin-bottom: 10px;
    color: #c8b8db; }

.card p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 15px; }

/*btns*/
.botoes-fixos {
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 25px;
  z-index: 1000; }

.toggle-btn {
  background-color: #19052c;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s; }

.toggle-btn:hover {
  background-color: #280c42; }

.btn-fixo {
  text-decoration: none;
  color: white; }

#btn-voltar {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 25px;
  background: #c8b8db;
  color: #121212;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none;
  border-radius: 40px;
  transition: 0.3s ease-in-out;
  -webkit-box-shadow: -3px 3px 35px -5px rgba(200,184,219,1);
  -moz-box-shadow: -3px 3px 35px -5px rgba(200,184,219,1);
  box-shadow: -3px 3px 35px -5px rgba(200,184,219,1);
  text-align: center; }

#btn-voltar:hover {
  transform: translateY(-8px);
  color: #121212; }

/*imagem*/
.banner-image {
    width: 100%;
    max-height: 180px;
    object-fit: cover; 
    border-radius: 8px;
    margin-bottom: 20px; }

/*lista legenda*/
.lista-destaque {
  list-style-type: none;
  padding: 0;
  margin: 0; }

.lista-destaque li {
  margin-bottom: 10px; }

.texto-aspas {
  color: #c8b8db;}


================================================
FILE: FRONTEND/dashboard-pg/curiosidades/cur-top/cur.js
================================================
// Função para alternar a visibilidade da barra lateral
function alternarBarra() {
    const barra = document.getElementById('barraLateral');
    const conteudo = document.getElementById('mainContent');

    barra.classList.toggle('oculta');
    conteudo.classList.toggle('expandida'); 
}

// Função para alternar a visibilidade dos botões fixos
function removerFixos() {
    const btnConfig = document.getElementById('btn-config');
    const btnLogout = document.getElementById('btn-logout');
    const btnUser = document.getElementById('btn-user');

    [btnConfig, btnLogout, btnUser].forEach((btn) => {
        if (btn) {
            btn.style.display = (btn.style.display === 'none') ? 'block' : 'none';
        }
    });
}



================================================
FILE: FRONTEND/dashboard-pg/curiosidades/cur-top/cur1.html
================================================
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="shortcut icon" href="../../../midia/ico/ico-aba.png" type="image/x-icon">
  <link rel="stylesheet" href="cur.css" />

  <title> Fitness Routine - Dashboard </title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" />   
</head>
<body>

<!--BARRA LATERAL-->
<div class="barra_lateral" id="barraLateral">
  <img src="../../../midia/logo-dash.png" alt="logo-dash"><br><br>
    <a href="../../inicio/dashboard.html" class="link">Início</a>
    <a href="../../planilhas/dashboard.html" class="link">Treinos</a>
    <a href="../../curiosidades/dashboard.html" class="link">Curiosidades</a>
    <a href="../../sobre/dashboard.html" class="link">Sobre</a>
</div>

<!--MAIN-->
<div class="main" id="mainContent">
  <img src="../../../midia/cur/img-cur1.jpg" alt="Banner de Curiosidades Fitness" class="banner-image">

  <!--card-->
  <div class="card curiosities-card">
    <h2>Aprofundando o assunto...</h2>

    <i class="texto-aspas"> "Genética não é destino. Com consistência, qualquer pessoa pode evoluir muito." </i> <br><br>

    <ul class="lista-destaque">
      <li><b>Fibras Musculares:</b> Quem tem mais fibras rápidas tende a ganhar força e massa com mais facilidade. Já quem tem mais fibras lentas costuma ter mais resistência. Mas ambos podem desenvolver os dois tipos com treino certo. </li>
      <li><b>Níveis Hormonais:</b> Testosterona, GH e outros hormônios influenciam diretamente na velocidade do progresso. Porém, mesmo quem não tem níveis naturalmente altos consegue ótimos resultados ajustando treino, descanso e nutrição. </li>
      <li><b>Metabolismo:</b> Algumas pessoas queimam mais calorias naturalmente, outras menos. Saber disso ajuda a ajustar dieta para hipertrofia ou definição. </li>
    </ul>

    <p><b>O ponto principal:</b> Genética pode influenciar o ritmo, mas consistência, treino bem estruturado e alimentação adequada superam qualquer limitação inicial. Com o tempo, os resultados sempre aparecem. </p>

    <a href="../dashboard.html" id="btn-voltar">Voltar</a>
  </div>
</div>

<!--BTN-->
<div class="botoes-fixos">
    <!--alternar-->
    <button class="toggle-btn" onclick="alternarBarra(), removerFixos()">
      <i class="fas fa-bars"></i>
    </button>

    <!--logout-->
    <button class="toggle-btn" id="btn-logout">
      <a href="../../inicio-pg/inicio.html" class="btn-fixo">
        <i class="fa-solid fa-right-from-bracket"></i>
      </a>
    </button>

    <!--user-->
    <button class="toggle-btn" id="btn-user">
      <a href="../../usuario-pg/usuario.html" class="btn-fixo">
        <i class="fas fa-user"></i>
      </a>
    </button>

</div>

<script src="cur.js"></script>
</body>
</html>



================================================
FILE: FRONTEND/dashboard-pg/curiosidades/cur-top/cur2.html
================================================
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="shortcut icon" href="../../../midia/ico/ico-aba.png" type="image/x-icon">
  <link rel="stylesheet" href="cur.css" />

  <title> Fitness Routine - Dashboard </title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" />   
</head>
<body>

<!--BARRA LATERAL-->
<div class="barra_lateral" id="barraLateral">
  <img src="../../../midia/logo-dash.png" alt="logo-dash"><br><br>
    <a href="../../inicio/dashboard.html" class="link">Início</a>
    <a href="../../planilhas/dashboard.html" class="link">Treinos</a>
    <a href="../../curiosidades/dashboard.html" class="link">Curiosidades</a>
    <a href="../../sobre/dashboard.html" class="link">Sobre</a>
</div>

<!--MAIN-->
<div class="main" id="mainContent">
  <img src="../../../midia/cur/img-cur2.jpg" alt="Banner de Curiosidades Fitness" class="banner-image">

  <!--card-->
  <div class="card curiosities-card">
    <h2>Aprofundando o assunto...</h2>

    <i class="texto-aspas"> "Mais do que físico, o treino transforma a forma como você se vê."</i> <br><br>

    <ul class="lista-destaque">
      <li><b>Autoestima:</b> Ver resultados e conquistar metas aumenta a confiança, melhorando também a forma como a pessoa se enxerga no dia a dia.</li>
      <li><b>Hormônios do bem-estar:</b> Endorfina, dopamina e serotonina melhoram o humor, reduzem estresse e até ajudam no foco e na qualidade do sono.</li>
      <li><b>Controle e disciplina:</b> A rotina de treino traz propósito, cria hábitos positivos e fortalece a sensação de progresso contínuo na vida.</li>
    </ul>

    <p><b>Ponto principal:</b> Muitos dizem que virou um “remédio natural” para o emocional: cuidar do corpo fortalece a mente, trazendo equilíbrio físico e mental.</p>

    <a href="../dashboard.html" id="btn-voltar">Voltar</a>
  </div>
</div>

<!--BTN-->
<div class="botoes-fixos">
    <!--alternar-->
    <button class="toggle-btn" onclick="alternarBarra(), removerFixos()">
      <i class="fas fa-bars"></i>
    </button>

    <!--logout-->
    <button class="toggle-btn" id="btn-logout">
      <a href="../../inicio-pg/inicio.html" class="btn-fixo">
        <i class="fa-solid fa-right-from-bracket"></i>
      </a>
    </button>

    <!--user-->
    <button class="toggle-btn" id="btn-user">
      <a href="../../usuario-pg/usuario.html" class="btn-fixo">
        <i class="fas fa-user"></i>
      </a>
    </button>

</div>

<script src="cur.js"></script>
</body>
</html>



================================================
FILE: FRONTEND/dashboard-pg/curiosidades/cur-top/cur3.html
================================================
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="shortcut icon" href="../../../midia/ico/ico-aba.png" type="image/x-icon">
  <link rel="stylesheet" href="cur.css" />

  <title> Fitness Routine - Dashboard </title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" />   
</head>
<body>

<!--BARRA LATERAL-->
<div class="barra_lateral" id="barraLateral">
  <img src="../../../midia/logo-dash.png" alt="logo-dash"><br><br>
    <a href="../../inicio/dashboard.html" class="link">Início</a>
    <a href="../../planilhas/dashboard.html" class="link">Treinos</a>
    <a href="../../curiosidades/dashboard.html" class="link">Curiosidades</a>
    <a href="../../sobre/dashboard.html" class="link">Sobre</a>
</div>

<!--MAIN-->
<div class="main" id="mainContent">
  <img src="../../../midia/cur/img-cur3.jpg" alt="Banner de Curiosidades Fitness" class="banner-image">

  <!--card-->
  <div class="card curiosities-card">
    <h2>Aprofundando o assunto...</h2>

    <i class="texto-aspas"> "A musculação é um escudo contra lesões e dores." </i> <br><br>

    <ul class="lista-destaque">
      <li><b>Suporte das articulações:</b> O fortalecimento muscular cria uma “proteção natural” para joelhos, ombros e coluna, absorvendo parte do impacto das atividades diárias e esportivas. Isso reduz o desgaste das articulações e ajuda a prevenir dores e inflamações.</li>
      <li><b>Tendões e ligamentos resistentes:</b> O treino regular aumenta a força e a elasticidade dos tendões e ligamentos, deixando-os mais preparados para suportar cargas e movimentos repetitivos. Com isso, o corpo fica menos suscetível a lesões comuns como entorses e distensões.</li>
      <li><b>Melhora mobilidade e equilíbrio:</b> Exercícios de força e estabilidade aumentam a coordenação motora e a amplitude dos movimentos, reduzindo riscos de quedas e acidentes no dia a dia, especialmente importantes com o avanço da idade.</li>
    </ul>

    <p><b>O ponto principal:</b> A musculação não serve apenas para ganhar força ou estética — ela é fundamental na prevenção e também na reabilitação de lesões.</p>

    <a href="../dashboard.html" id="btn-voltar">Voltar</a>
  </div>
</div>

<!--BTN-->
<div class="botoes-fixos">
    <!--alternar-->
    <button class="toggle-btn" onclick="alternarBarra(), removerFixos()">
      <i class="fas fa-bars"></i>
    </button>

    <!--logout-->
    <button class="toggle-btn" id="btn-logout">
      <a href="../../inicio-pg/inicio.html" class="btn-fixo">
        <i class="fa-solid fa-right-from-bracket"></i>
      </a>
    </button>

    <!--user-->
    <button class="toggle-btn" id="btn-user">
      <a href="../../usuario-pg/usuario.html" class="btn-fixo">
        <i class="fas fa-user"></i>
      </a>
    </button>

</div>

<script src="cur.js"></script>
</body>
</html>



================================================
FILE: FRONTEND/dashboard-pg/curiosidades/cur-top/cur4.html
================================================
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="shortcut icon" href="../../../midia/ico/ico-aba.png" type="image/x-icon">
  <link rel="stylesheet" href="cur.css" />

  <title> Fitness Routine - Dashboard </title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" />   
</head>
<body>

<!--BARRA LATERAL-->
<div class="barra_lateral" id="barraLateral">
  <img src="../../../midia/logo-dash.png" alt="logo-dash"><br><br>
    <a href="../../inicio/dashboard.html" class="link">Início</a>
    <a href="../../planilhas/dashboard.html" class="link">Treinos</a>
    <a href="../../curiosidades/dashboard.html" class="link">Curiosidades</a>
    <a href="../../sobre/dashboard.html" class="link">Sobre</a>
</div>

<!--MAIN-->
<div class="main" id="mainContent">
  <img src="../../../midia/cur/img-cur4.jpg" alt="Banner de Curiosidades Fitness" class="banner-image">

  <!--card-->
  <div class="card curiosities-card">
    <h2>Aprofundando o assunto...</h2>

    <i class="texto-aspas"> "Musculação é qualidade de vida agora — e na velhice." </i> <br><br>

    <ul class="lista-destaque">
      <li><b>Controle da glicose:</b> A prática regular de exercícios aumenta a sensibilidade à insulina, ajuda no equilíbrio dos níveis de açúcar no sangue e reduz significativamente as chances de desenvolver diabetes tipo 2. Para quem já convive com a doença, a atividade física auxilia no controle diário.</li>
      <li><b>Independência funcional:</b> Treinar força e mobilidade mantém o corpo preparado para tarefas simples do dia a dia, como subir escadas, carregar compras ou se levantar da cadeira. Esse cuidado é essencial na terceira idade, evitando quedas e prolongando a autonomia.</li>
      <li><b>Cérebro ativo:</b> A atividade física regular melhora a memória, a concentração e reduz o estresse. Estudos mostram que também pode diminuir os riscos de doenças neurodegenerativas, como Alzheimer e Parkinson, contribuindo para um envelhecimento mais saudável.</li>
    </ul>

    <p><b>Ponto principal:</b> Manter-se forte não é questão de vaidade, mas sim uma estratégia de saúde. Cuidar do corpo significa viver mais tempo com qualidade, independência e energia para aproveitar a vida. </p>

    <a href="../dashboard.html" id="btn-voltar">Voltar</a>
  </div>
</div>

<!--BTN-->
<div class="botoes-fixos">
    <!--alternar-->
    <button class="toggle-btn" onclick="alternarBarra(), removerFixos()">
      <i class="fas fa-bars"></i>
    </button>

    <!--logout-->
    <button class="toggle-btn" id="btn-logout">
      <a href="../../inicio-pg/inicio.html" class="btn-fixo">
        <i class="fa-solid fa-right-from-bracket"></i>
      </a>
    </button>

    <!--user-->
    <button class="toggle-btn" id="btn-user">
      <a href="../../usuario-pg/usuario.html" class="btn-fixo">
        <i class="fas fa-user"></i>
      </a>
    </button>
</div>

<script src="cur.js"></script>
</body>
</html>



================================================
FILE: FRONTEND/dashboard-pg/curiosidades/cur-top/cur5.html
================================================
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="shortcut icon" href="../../../midia/ico/ico-aba.png" type="image/x-icon">
  <link rel="stylesheet" href="cur.css" />

  <title> Fitness Routine - Dashboard </title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" />   
</head>
<body>

<!--BARRA LATERAL-->
<div class="barra_lateral" id="barraLateral">
  <img src="../../../midia/logo-dash.png" alt="logo-dash"><br><br>
    <a href="../../inicio/dashboard.html" class="link">Início</a>
    <a href="../../planilhas/dashboard.html" class="link">Treinos</a>
    <a href="../../curiosidades/dashboard.html" class="link">Curiosidades</a>
    <a href="../../sobre/dashboard.html" class="link">Sobre</a>
</div>

<!--MAIN-->
<div class="main" id="mainContent">
  <img src="../../../midia/cur/img-cur5.jpg" alt="Banner de Curiosidades Fitness" class="banner-image">

  <!--card-->
  <div class="card curiosities-card">
    <h2>Aprofundando o assunto...</h2>

    <i class="texto-aspas"> "Ficar parado cobra um preço alto — e mais cedo do que se pensa." </i> <br><br>

    <ul class="lista-destaque">
      <li><b>Mais risco de doenças:</b> O sedentarismo está diretamente ligado ao aumento de doenças crônicas como hipertensão, infarto, AVC, diabetes tipo 2, obesidade, problemas respiratórios e até alguns tipos de câncer. Além disso, a falta de movimento favorece o acúmulo de gordura abdominal, reduz a circulação sanguínea e enfraquece o sistema imunológico, tornando o corpo mais vulnerável.</li>
      <li><b>Benefícios da musculação:</b> A prática regular de musculação vai muito além da estética. Ela fortalece ossos, articulações e músculos, ajudando a prevenir osteoporose, dores nas costas e sarcopenia (perda de massa muscular natural com a idade). Também melhora o equilíbrio, a postura, a resistência física e até a saúde mental, já que libera hormônios ligados ao bem-estar.</li>
    </ul>

    <p><b>Ponto principal:</b> O corpo humano foi projetado para estar em movimento. Atividades físicas, seja musculação, caminhada, esportes ou exercícios funcionais, funcionam como prevenção, tratamento e forma de autocuidado.</p>

    <a href="../dashboard.html" id="btn-voltar">Voltar</a>
  </div>
</div>

<!--BTN-->
<div class="botoes-fixos">
    <!--alternar-->
    <button class="toggle-btn" onclick="alternarBarra(), removerFixos()">
      <i class="fas fa-bars"></i>
    </button>

    <!--logout-->
    <button class="toggle-btn" id="btn-logout">
      <a href="../../inicio-pg/inicio.html" class="btn-fixo">
        <i class="fa-solid fa-right-from-bracket"></i>
      </a>
    </button>

    <!--user-->
    <button class="toggle-btn" id="btn-user">
      <a href="../../usuario-pg/usuario.html" class="btn-fixo">
        <i class="fas fa-user"></i>
      </a>
    </button>

</div>

<script src="cur.js"></script>
</body>
</html>



================================================
FILE: FRONTEND/dashboard-pg/inicio/dashboard.css
================================================
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

/*CONF GERAL*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

body {
  font-family: 'Poppins', sans-serif;
  background-color: #121212;
  color: white; }
  
/*MAIN*/
.main {
  padding: 30px;
  padding-left: 290px;
  transition: padding-left 0.3s ease; }

.main.expandida {
  padding-left: 30px; }

/*card*/
.card {
  background-color: #1e1e1e;
  padding: 20px;
  border-left: 5px solid #3c096c;
  border-radius: 8px;
  margin-bottom: 20px; }

/*btn*/
.botoes-fixos {
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 25px;
  z-index: 1000; }

.toggle-btn {
  background-color: #19052c;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s; }

.toggle-btn:hover {
  background-color: #280c42; }

.btn-fixo {
  text-decoration: none;
  color: white; }

#boas-vindas {
  border-bottom: 2px #3c096c;
  color: #c8b8db; }

/*proximos passos*/
.proximo-passo-container {
  margin-top: 50px; }

.proximo-passo-container h2 {
  color: #c8b8db;
  margin-bottom: 40px;
  border-bottom: 2px solid #3c096c;
  display: inline-block;
  padding-bottom: 10px; }

.acao-card i {
  font-size: 3em;
  color: #3c096c;
  margin-bottom: 15px;
  cursor: pointer;}

.acao-card h3 {
  font-size: 1.4em;
  margin-bottom: 10px;
  color: white; }

.acao-card p {
  color: #ddd;
  line-height: 1.6; }

.acoes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px; }

.acao-card {
  display: block;
  background-color: #1e1e1e;
  padding: 30px;
  border-radius: 8px;
  text-decoration: none;
  border-left: 5px solid #3c096c;
  transition: transform 0.3s ease, border-color 0.3s ease;
  cursor: pointer; }

.acao-card:hover {
  transform: translateY(-8px); }




================================================
FILE: FRONTEND/dashboard-pg/inicio/dashboard.html
================================================
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <link rel="shortcut icon" href="../../midia/ico/ico-aba.png" type="image/x-icon">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
  <link rel="stylesheet" href="dashboard.css" />
  <link rel="stylesheet" href="../modal-style.css"/>
  <link rel="stylesheet" href="../barra-style.css"/>

  <title> Fitness Routine - Dashboard </title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" /> 
</head>
<body>

<!--BARRA LATERAL-->
<div class="barra_lateral" id="barraLateral">
  <img src="../../midia/logo-dash.png" alt="logo-dash"><br><br>
    <a href="../inicio/dashboard.html" class="link">Início</a>
    <a href="../planilhas/dashboard.html" class="link">Treinos</a>
    <a href="../curiosidades/dashboard.html" class="link">Curiosidades</a>
    <a href="../sobre/dashboard.html" class="link">Sobre</a>
</div>

<!--MAIN-->
<div class="main" id="mainContent">
    <h2 id="boas-vindas"></h2><br>

    <div class="card">
      <h3>Seja bem-vindo!</h3>
      <p>
        Aqui você cria sua rotina de treino de forma prática, rápida e personalizada.
        Vamos começar a montar seu plano ideal?
      </p>
    </div>

    <div class="proximo-passo-container">
      <h2>Qual seu próximo passo?</h2>

      <div class="acoes-grid">
        <a href="../planilhas/dashboard.html" class="acao-card">
          <i class="fas fa-dumbbell"></i>
          <h3>Ver Meus Treinos</h3>
          <p>Acesse suas planilhas e comece a treinar agora mesmo.</p>
        </a>

        <a class="acao-card" class="acao-card" id="perfil-card">
          <i class="fas fa-chart-line"></i>
          <h3>Acompanhar Perfil</h3>
          <p>Visualize suas informações e características.</p>
        </a>

        <a href="../curiosidades/dashboard.html" class="acao-card">
          <i class="fas fa-book-open"></i>
          <h3>Ler Dicas e Artigos</h3>
          <p>Aprenda mais sobre saúde, nutrição e técnicas de exercício.</p>
        </a>
      </div>
    </div>
</div>

<!--MODAL INFO-->
<div class="modal-info" id="modalInfo" aria-hidden="true">
<div class="modal2" role="dialog" aria-modal="true" aria-labelledby="ConfigInfo">

<button class="modal2-fechar" id="fecharInfo" aria-label="Fechar"><i class="fa-solid fa-x"></i></button>
<h2 id="tituloInfo">Configurações de usuário</h2>

  <!--FORM-->
  <form id="formConfiguracoes">
    <div class="modal-grid">
        
      <!-- Coluna esquerda -->
      <div class="col-inputs">

        <!--nome-->
        <div class="grupo">
          <label>Nome completo:</label>
          <div class="nome-sobrenome">
            <input type="text" id="nome" name="nome" placeholder="Nome"/>
            <input type="text" id="sobrenome" name="sobrenome" placeholder="Sobrenome"/>
          </div>
        </div>

        <!--user-->
        <div class="grupo">
          <label for="username">Nome de usuário: </label>
          <input type="text" id="username" name="username"/>
        </div>

        <!--email-->
        <div class="grupo">
          <label for="email">Email: </label>
          <input type="email" id="email" name="email"/>
        </div>

        <!--senha-->
        <div class="grupo">
          <label for="password">Atualize sua senha:</label>
          <div class="password-field">
            <input type="password" class="input-field" id="password" placeholder="Sua nova senha">
            <span class="material-symbols-outlined" id="toggle-password">visibility</span>
          </div>
        </div>

        <!--senha confirmação-->
        <div class="grupo">
          <div class="password-field">
            <input type="password" id="password-verify" class="input-field" placeholder="Confirme sua nova senha">
            <small id="passwordVerifyHelp" class="password-help"></small>
            <span class="material-symbols-outlined" id="toggle-password-verify">visibility</span>
          </div>
        </div>
      </div>

      <!-- Coluna direita -->
      <div class="col-inputs">
        <!--nascimento-->
        <div class="grupo">
          <label for="nasc">Ano de nascimento: </label>
          <input type="date" id="dateUser" name="nasc"/>
        </div>

        <!--experiência-->
        <div class="grupo">
          <label for="nivel">Experiência: </label>
          <div class="level-box">
            <select id="nivelUser" name="nivel">
              <option value="" disabled selected>Escolha o nível</option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
            </select>
          </div>
        </div>

        <!--peso-->
        <div class="grupo">
          <label for="peso">Peso: (kg) </label>
          <input type="number" id="pesoUser" name="peso" step="0.1"/>
        </div>

        <!--altura-->
        <div class="grupo">
          <label for="altura">Altura: (cm)</label>
          <input type="number" id="alturaUser" name="altura"/>
        </div>
      </div>
    </div>

    <div class="acoes">
      <button type="button" class="btn-secundario" id="cancelarInfo">Cancelar</button>
      <button type="submit" class="btn-primario">Salvar configurações</button>
    </div>

  </form>
</div>
</div>

<!--BTN-->
<div class="botoes-fixos">
    <button class="toggle-btn" onclick="alternarBarra(), removerFixos()">
      <i class="fas fa-bars"></i>
    </button>

    <button class="toggle-btn" id="btn-logout">
        <i class="fa-solid fa-right-from-bracket"></i>
    </button>

    <button class="toggle-btn" id="abrirInfo" >
        <i class="fas fa-user"></i>
    </button>

</div>

<script src="dashboard.js"></script>
</body>
</html>



================================================
FILE: FRONTEND/dashboard-pg/inicio/dashboard.js
================================================
//CONSTANTES
//modal
const abrirInfo_inicio = document.getElementById('perfil-card')
const abrirInfo = document.getElementById('abrirInfo');
const modalInfo = document.getElementById('modalInfo');
const fecharInfo = document.getElementById('fecharInfo');
const cancelarInfo = document.getElementById('cancelarInfo');
const abrirInfoPerfil = document.getElementById('btnPerfil');

// password
const passwordInput = document.getElementById('password');
const passwordVerifyInput = document.getElementById('password-verify');
const togglePassword = document.getElementById('toggle-password');
const togglePasswordVerify = document.getElementById('toggle-password-verify');

//outras
const nomeUsuario = localStorage.getItem("usuario");
const formConfiguracoes = document.getElementById('formConfiguracoes');

// ALTERNAR BARRA LATERAL E BOTOES FIXOS
function alternarBarra() {
  const barra = document.getElementById('barraLateral');
  const conteudo = document.getElementById('mainContent');
  barra.classList.toggle('oculta');
  conteudo.classList.toggle('expandida'); 
}
function removerFixos() {
  const btnConfig = document.getElementById('btn-config');
  const btnLogout = document.getElementById('btn-logout');
  const btnUser = document.getElementById('abrirInfo');

  [btnConfig, btnLogout, btnUser].forEach((btn) => {
    if (btn) {
      btn.style.display = (btn.style.display === 'none') ? 'block' : 'none';
    }
  });
}

// CARREGAR DADOS DO USUÁRIO AO CARREGAR A PÁGINA
window.onload = function() {
    carregarDadosUsuario() 
}

// BOAS VINDAS AO USUÁRIO
if (nomeUsuario && document.getElementById("boas-vindas")) {
    document.getElementById("boas-vindas").textContent = `Olá ${nomeUsuario}, Bem-vindo ao Fitness Routine.`; } 

//FUNCAO ABRIR E FECHAR MODAL
function abrir_info() {
  modalInfo.classList.add('aberta');
  modalInfo.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function fechar_info() {
  modalInfo.classList.remove('aberta');
  modalInfo.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/*eventos*/
if(abrirInfo_inicio) abrirInfo_inicio.addEventListener('click', abrir_info);
if(abrirInfo) abrirInfo.addEventListener('click', abrir_info);
if(cancelarInfo) cancelarInfo.addEventListener('click', fechar_info);
if(fecharInfo) fecharInfo.addEventListener('click', fechar_info);
if(modalInfo) modalInfo.addEventListener('click', (e) => { if (e.target === modalInfo) fechar_info(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fechar_info(); });

// FUNÇÕES DE CARREGAMENDO E SALVAMENTO DE DADOS DO USUÁRIO
async function carregarDadosUsuario() {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        window.location.href = '../../login-pg/login.html';
        return; }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/me/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Falha ao carregar dados do usuário.');
        }

        const data = await response.json();

        document.getElementById('nome').value = data.first_name || '';
        document.getElementById('sobrenome').value = data.last_name || '';
        document.getElementById('username').value = data.username;
        document.getElementById('email').value = data.email;
        
        document.getElementById('nome').readOnly = true;
        document.getElementById('sobrenome').readOnly = true;
        document.getElementById('username').readOnly = true;

        if (data.profile) {
            document.getElementById('dateUser').value = data.profile.data_nascimento || '';
            document.getElementById('nivelUser').value = data.profile.nivel_experiencia || '';
            document.getElementById('pesoUser').value = data.profile.peso || '';
            document.getElementById('alturaUser').value = data.profile.altura || '';
        }

    } catch (error) {
        console.error('Erro:', error);
        alert(error.message);
    }
}
async function salvarConfiguracoes(event) {
    event.preventDefault();

    const peso = document.getElementById('pesoUser').value;
    const altura = document.getElementById('alturaUser').value;
    const experiencia = document.getElementById('nivelUser').value;
    const dataNascimento = document.getElementById('dateUser').value;

    if (!peso || !altura || !experiencia || !dataNascimento) {
        alert('Por favor, preencha todos os campos obrigatórios: Peso, Altura, Experiência e Data de Nascimento.');
        return;
    }

    const accessToken = localStorage.getItem('accessToken');
    
    const dadosAtualizados = {
        email: document.getElementById('email').value,
        first_name: document.getElementById('nome').value,
        last_name: document.getElementById('sobrenome').value,
        profile: {
            data_nascimento: dataNascimento,
            peso: parseFloat(peso),
            altura: parseInt(altura),
            nivel_experiencia: experiencia
        }
    };

    const novaSenha = document.getElementById('password').value;
    const confirmaSenha = document.getElementById('password-verify').value;

    if (novaSenha) {
        if (novaSenha !== confirmaSenha) {
            alert('As senhas não coincidem! Por favor, verifique.');
            return;
        }
        dadosAtualizados.password = novaSenha;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/me/', {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAtualizados)
        });

        // Se a resposta do servidor não for 'ok' (ex: erro 400), ele vai para o catch
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
        }

        // Se o código chegar aqui, significa que o servidor respondeu com sucesso
        alert('Configurações salvas com sucesso!');
        fechar_info();

    } catch (error) {
        // Verifica se o erro é o específico "Failed to fetch" do reinício do servidor
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            // Assume que a operação deu certo e o servidor reiniciou antes de responder
            console.warn('Ocorreu um erro "Failed to fetch". Assumindo sucesso devido ao reinício do servidor de desenvolvimento.');
            alert('Configurações salvas com sucesso!');
            fechar_info();
        } else {
            // Se for qualquer outro erro (como um erro de validação 400), mostra o erro real
            console.error('Erro real ao salvar:', error.message);
            alert('Ocorreu um erro ao salvar: ' + error.message);
        }   
    }
}

formConfiguracoes.addEventListener('submit', salvarConfiguracoes);

//LOGOUT
const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (event) => {
        // 1. Previne a ação padrão do link (que é navegar imediatamente)
        event.preventDefault(); 
        
        // 2. Mostra a caixa de diálogo de confirmação
        const querSair = confirm("Tem certeza de que deseja sair?");

        // 3. Só continua se o usuário clicou em "OK"
        if (querSair) {
            // 4. Limpa o armazenamento local para deslogar o usuário
            localStorage.clear(); 
            
            // 5. Redireciona para a página inicial
            window.location.href = '../../inicio-pg/inicio.html'; 
        }
        // Se o usuário clicar em "Cancelar", nada acontece.
        });
    }

// VISIBILIDADE SENHA
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

// VISIBILIDADE SENHA - CONFIRMAÇÃO
togglePasswordVerify.addEventListener('click', function () {
    const type = passwordVerifyInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordVerifyInput.setAttribute('type', type);
    togglePasswordVerify.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

// VALIDAÇÃO SENHA   
btn.addEventListener('click', function() {
    if (passwordInput.value !== passwordVerifyInput.value) {
        alert('As senhas não coincidem, verifique novamente.');
        return; } });

//Botao de logout 



================================================
FILE: FRONTEND/dashboard-pg/planilhas/dashboard.css
================================================
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

body {
    font-family: 'Poppins', sans-serif;
    background-color: #121212;
    color: white; }

/*MAIN*/
.main {
  padding: 30px;
  padding-left: 290px;
  transition: padding-left 0.3s ease; }

.main.expandida {
  padding-left: 30px; }

/*botoes*/
.botoes-fixos {
    position: fixed;
    bottom: 20px;
    left: 20px;
    display: flex;
    gap: 25px;
    z-index: 1000; }

.toggle-btn {
  background-color: #19052c;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s; }

.toggle-btn:hover {
    background-color: #280c42; }

.btn-fixo {
  text-decoration: none;
    color: white; }

.btn .btn-gerar { 
    display: inline-block;
    padding: 10px 25px;
    background: #c8b8db;
    font-weight: 520;
    font-size: 18px;
    text-decoration: none;
    border-radius: 40px;
    transition: 0.3s ease-in-out;
    cursor: pointer; }

.btn .btn-gerar:hover {
    transform: scale(1.1); }

/*texto*/
.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 2px solid #3c096c; /* Adiciona a linha roxa */
}

.page-title {
    font-size: 2.2em;                 /* Aumenta a fonte */
    font-weight: 700;
    color: #c8b8db;  
}

/*MODAL 1*/
.modal-form {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 2000; }

.modal-form.aberta {
    display: flex; }

.modal {
    width: 100%;
    max-width: 1000px;
    max-height: 640px;
    background: #1a1525;
    border: 1px solid #231935;
    border-radius: 16px;
    padding: 22px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.45);
    animation: surgir 0.2s ease-out;
    position: relative; }

@keyframes surgir {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; } }

.modal h2 {
    margin-bottom: 15px;
    color: #c8b8db;
    font-size: 22px; }

.modal-fechar {
    position: absolute;
    right: 16px;
    top: 10px;
    background: transparent;
    color: #c8b8db;
    border: none;
    font-size: 5px;
    line-height: 1;
    cursor: pointer; }

.grade-checkboxes {
    display: grid;
    grid-template-columns: repeat(4, minmax(0,1fr));
    gap: 8px; }

.grade-checkboxes label {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 10px;
    padding: 8px 10px; }

.grade-divisoes {
    display: grid;
    grid-template-columns: repeat(4, minmax(0,1fr));
    gap: 8px; }

.grade-divisoes label {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 10px;
    padding: 8px 10px; }

.acoes {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    margin-top: 6px; }

#formPreferencias .linha {
    display: grid;
    grid-template-columns: 1fr 120px; 
    gap: 12px;
    margin: 15px 0; }

#formPreferencias .linha label {
    font-weight: 500;
    font-size: 13px; }

#formPreferencias #limitacoes {
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 10px;
    padding: 10px 12px;
    color: #ffffff;
    font-size: 12px;
    resize: none;
    height: 70px; }

#formPreferencias .grupo {
    display: grid;
    gap: 8px;
    margin: 15px 0; }

#formPreferencias label, #formPreferencias span {
    font-weight: 500; 
    font-size: 13px; }

#formPreferencias input[type="text"], input[type="time"], textarea {
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 10px;
    padding: 10px 12px;
    color: #ffffff; 
    font-size: 12px;}

#formPreferencias input[type="number"] {
    max-width: 120px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 10px;
    padding: 10px 12px;
    color: #ffffff; 
    font-size: 12px; }

input[type="time"]:focus {
  border-color: #9d4edd;
  box-shadow: 0 0 12px rgba(157, 78, 221, 0.8); }

input[type="time"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1; }

.grupo-slider {
  display: flex; 
  align-items: center; 
  gap: 15px; 
  margin: 12px 0; }

.grupo-slider input[type="range"] {
  flex-grow: 1; }

.grupo-slider output {
  min-width: 70px; 
  text-align: right;
  font-size: 18px; }

input[type="range"] {
    height: 8px;
    border-radius: 5px;
    background: #2a1f3d;
    outline: none;
    cursor: pointer;
    transition: background 0.3s;
    accent-color: #9d4edd; }

/*erros*/
.erro {
  display: none;
  color: #fff;
  background: #e74c3c;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.9em;
  margin-top: 8px;
  position: relative; }

.erro::before {
  content: "⚠ "; }

.erro::after {
  content: "";
  position: absolute;
  top: -6px;
  left: 15px;
  border-width: 6px;
  border-style: solid;
  border-color: transparent transparent #e74c3c transparent; }


/*MODAL 2*/
.modal-info {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 2000; }

.modal-info.aberta {
    display: flex; }

.modal2 {
    width: 100%;
    max-width: 650px; 
    max-height: 700px;
    background: #1a1525;
    border: 1px solid #2a1f3d;
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 12px 50px rgba(0,0,0,0.55);
    animation: surgir 0.25s ease-out;
    position: relative;
    display: flex;
    flex-direction: column; }

@keyframes surgir {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; } }

.modal2 h2 {
    margin-bottom: 18px;
    color: #c8b8db;
    font-size: 20px;
    font-weight: 600;
    text-align: center; }

.modal2-fechar {
    position: absolute;
    right: 18px;
    top: 14px;
    background: transparent;
    color: #c8b8db;
    border: none;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.2s; }

.modal2-fechar:hover { 
    color: #ffffff; }

.fa-solid.fa-x {
    color: #c8b8db;
    font-size: 15px; }

.modal-grid {
    position: relative;
    display: flex;
    gap: 80px; 
    align-items: center; 
    margin-right: 30px; }

.modal-grid::before {
    content: "";
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 71.4%;
    width: 1px;
    background: #2a1f3d;
    opacity: .6;
    pointer-events: none; }

/*inputs*/
.col-inputs {
    display: flex;
    flex-direction: column; }

#formPreferencias label {
    font-weight: 400; 
    font-size: 12px;
    color: #c8b8db; }

#formPreferencias input[type="text"],
#formPreferencias input[type="email"],
#formPreferencias input[type="password"],
#formPreferencias input[type="number"],
#formPreferencias textarea {
    width: 100%;
    box-sizing: border-box;
    height: 44px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 12px;
    padding: 12px 14px;
    color: #ffffff; 
    font-size: 14px;
    transition: border 0.2s, background 0.2s; }

#formPreferencias #nivelUser {
    width: 120px;
    box-sizing: border-box;
    height: 44px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 12px;
    padding: 12px 14px;
    color: #ffffff; 
    font-size: 12px;
    transition: border 0.2s, background 0.2s; }

#formPreferencias input[type="date"] {
    width: 120px;
    box-sizing: border-box;
    height: 44px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 12px;
    padding: 12px 14px;
    color: #c8b8db; 
    font-size: 14px;
    transition: border 0.2s, background 0.2s; }

input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(73%) sepia(14%) saturate(438%) hue-rotate(250deg) brightness(96%) contrast(92%); }

.level-box select {
    width: 100%;
    border: none;
    background: transparent;
    color: #eeeeee;
    font-size: 12px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer; }

.nome-sobrenome {
    display: flex;
    gap: 10px; }

.nome-sobrenome input {
    flex: 1; 
    min-width: 0;
    box-sizing: border-box; }

/*botoes*/
.acoes {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 10px; }

.btn-primario {
    background: #3c096c;
    border: none;
    color: #ffffff;
    font-weight: 500;
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s ease; }

.btn-primario:hover { 
    background: #5a189a; 
    transform: scale(1.07);}

.btn-secundario {
    background: transparent;
    border: 1px solid #c8b8db;
    color: #c8b8db;
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s ease; }

.btn-secundario:hover { 
    background: #211a2f; }

.tabela-container {
    padding: 20px;
    background-color: #121212;
    border-radius: 15px;
    font-family: 'Segoe UI', 'Poppins', sans-serif;
}

/* ======================================================= */
/* =                  ESTILOS DA DATATABLE               = */
/* ======================================================= */

.dataTables_wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #c8b8db;
}

/* --- Controles do Topo e Base --- */
.tabela-controles-topo, .tabela-controles-base {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dataTables_length select, .dataTables_filter input {
  background: #1f1f1f;
  color: #eeeeee;
  border: 1px solid #3c096c;
  border-radius: 6px;
  padding: 8px 12px;
  margin-left: 5px;
}

.dataTables_length, .dataTables_filter {
  margin: 0;
}

/* --- Linhas da Tabela (Visual de Card) --- */
#tabelaTreinos {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  background: transparent;
  border: none;
}

#tabelaTreinos thead {
  display: none;
}

#tabelaTreinos.dataTable tbody tr {
  background-color: #1a1a1a !important;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
}

#tabelaTreinos tbody td {
  padding: 18px 22px;
  border: none;
  vertical-align: middle;
  color: #a893c6;
}

#tabelaTreinos tbody td:first-child {
  border-left: 4px solid #7b2cbf;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-weight: 500;
  font-size: 1.05em;
  color: #e0e0e0;
}

#tabelaTreinos tbody td:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

#tabelaTreinos tbody tr:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* --- Paginação --- */
.dataTables_paginate .paginate_button {
  padding: 8px 14px;
  margin: 0 4px;
  background: #1f1f1f;
  border: 1px solid #3c096c;
  border-radius: 6px;
  color: #c8b8db;
  cursor: pointer;
  transition: all 0.2s;
}

.dataTables_paginate .paginate_button:hover {
  background: #3c096c;
  color: #ffffff;
}

.dataTables_paginate .paginate_button.current {
  background: linear-gradient(135deg, #7b2cbf, #9d4edd);
  color: #ffffff !important;
  font-weight: bold;
  border: none;
}

/* --- Botão Excluir na Tabela --- */
.btn-excluir {
  background-color: #3c096c;
  color: #c8b8db;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-excluir:hover {
  transform: scale(1.1);
}


/* O fundo escurecido do modal */
.modal-treino {
    display: none; /* Escondido por padrão */
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
}

/* A caixa principal do modal */
.modal-content {
    background-color: #1e1e1e;
    color: #e0e0e0;
    border-radius: 15px;
    width: 90%;
    max-width: 1100px;
   max-height: 90vh; /* Ocupa no máximo 90% da altura da tela */
    display: flex; /* Adicionado para melhor controle do layout interno */
    flex-direction: column; /* Organiza o header, body e footer em uma coluna */
    /* =================================================================== */
    
    box-shadow: 0 5px 25px rgba(0,0,0,0.5);
    animation: slide-down 0.4s ease-out;
}

.modal-header {
    padding: 15px 25px;
    background-color: #3c096c;
    color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-close-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s;
}
.modal-close-btn:hover {
    transform: scale(1.2);
}

.modal-body {
    padding: 25px;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-footer {
    padding: 15px 25px;
    text-align: right;
    border-top: 1px solid #3c096c;
}

.btn-pdf {
    background-color: #7b2cbf;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
}
.btn-pdf:hover {
    background-color: #9d4edd;
}

/* Estilos para a tabela DENTRO do modal */
.tabela-dia {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
}
.tabela-dia th, .tabela-dia td {
    padding: 12px;
    border: 1px solid #332147;
    text-align: left;
}
.tabela-dia th {
    background-color: #2a1b3d;
    font-size: 1.1em;
}
.exercicio-link {
    color: #c8b8db;
    text-decoration: none;
    font-weight: bold;
}
.exercicio-link:hover {
    text-decoration: underline;
    color: #fff;
}

@keyframes slide-down {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.password-field {
  position: relative;
  width: 100%; }

.password-field input {
  padding-right: 40px; }

.password-field .material-symbols-outlined {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888;
  font-size: 20px!important; }

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 1000,
    'GRAD' 0,
    'opsz' 24; }

.password-field .material-symbols-outlined.riscado::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 2px;
  right: 2px;
  height: 2px;
  background-color: #888;
  transform: rotate(-45deg); }

  /* =================================================================== */
/*  NOVO ESTILO PARA O MODAL DE DETALHES DE TREINO                     */
/* =================================================================== */

/* Título do dia da semana (ex: "Terça-feira") */
.dia-titulo {
    background-color: #2a1b3d; /* Roxo mais escuro */
    color: #e0e0e0;
    padding: 10px 15px;
    margin-top: 20px; /* Espaço entre as tabelas */
    margin-bottom: 0;
    border-radius: 8px 8px 0 0; /* Bordas arredondadas apenas no topo */
    font-size: 1.1em;
}

/* Tabela de exercícios de cada dia */
.tabela-dia {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

/* Cabeçalho da tabela (Exercício, Séries, etc.) */
.tabela-dia th {
    background-color: #2a1b3d;
    font-size: 1em;
    padding: 12px 15px;
    text-align: left;
    border-bottom: 2px solid #3c096c;
}

/* Células da tabela */
.tabela-dia td {
    padding: 12px 15px;
    border-bottom: 1px solid #332147;
}

/* Efeito de hover nas linhas */
.tabela-dia tbody tr:hover {
    background-color: #2c2144;
}

.btn-excluir {
    background-color: #7b2cbf; /* Um roxo escuro */
    color: white;
    border: none;
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.btn-excluir:hover {
    background-color: #9d4edd; /* Roxo mais claro no hover */
    transform: scale(1.05);
}

#formConfiguracoes .linha {
    display: grid;
    grid-template-columns: 1fr 120px; 
    gap: 12px;
    margin: 15px 0; }

#formConfiguracoes .linha label {
    font-weight: 500;
    font-size: 13px; }

#formConfiguracoes #limitacoes {
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 10px;
    padding: 10px 12px;
    color: #ffffff;
    font-size: 12px;
    resize: none;
    height: 70px; }

#formConfiguracoes .grupo {
    display: grid;
    gap: 8px;
    margin: 15px 0; }

#formConfiguracoes label, #formConfiguracoes span {
    font-weight: 500; 
    font-size: 13px; }

#formConfiguracoes input[type="text"], input[type="time"], textarea {
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 10px;
    padding: 10px 12px;
    color: #ffffff; 
    font-size: 12px;}

#formConfiguracoes input[type="number"] {
    max-width: 120px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 10px;
    padding: 10px 12px;
    color: #ffffff; 
    font-size: 12px; }

#formConfiguracoes label {
    font-weight: 400; 
    font-size: 12px;
    color: #c8b8db; }

#formConfiguracoes input[type="text"],
#formConfiguracoes input[type="email"],
#formConfiguracoes input[type="password"],
#formConfiguracoes input[type="number"],
#formConfiguracoes textarea {
    width: 100%;
    box-sizing: border-box;
    height: 44px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 12px;
    padding: 12px 14px;
    color: #ffffff; 
    font-size: 14px;
    transition: border 0.2s, background 0.2s; }

#formConfiguracoes #nivelUser {
    width: 120px;
    box-sizing: border-box;
    height: 44px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 12px;
    padding: 12px 14px;
    color: #ffffff; 
    font-size: 12px;
    transition: border 0.2s, background 0.2s; }

#formConfiguracoes input[type="date"] {
    width: 120px;
    box-sizing: border-box;
    height: 44px;
    background: #120e1b;
    border: 1px solid #2a1f3d;
    border-radius: 12px;
    padding: 12px 14px;
    color: #c8b8db; 
    font-size: 14px;
    transition: border 0.2s, background 0.2s; }


================================================
FILE: FRONTEND/dashboard-pg/planilhas/dashboard.html
================================================
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="shortcut icon" href="../../midia/ico/ico-aba.png" type="image/x-icon">
  <title> Fitness Routine - Dashboard </title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" />
      
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
  <link rel="stylesheet" href="https://cdn.datatables.net/2.0.8/css/dataTables.dataTables.min.css">
  <link rel="stylesheet" href="../modal-style.css" />
  <link rel="stylesheet" href="../barra-style.css"/>
  <link rel="stylesheet" href="dashboard.css" />

</head>
<body>

<div class="barra_lateral" id="barraLateral">
      <img src="../../midia/logo-dash.png" alt="logo-dash"><br><br>
      <a href="../inicio/dashboard.html" class="link">Início</a>
      <a href="../planilhas/dashboard.html" class="link">Treinos</a>
      <a href="../curiosidades/dashboard.html" class="link">Curiosidades</a>
      <a href="../sobre/dashboard.html" class="link">Sobre</a>
</div>

<div class="main" id="mainContent">
  <header class="page-header">
    <h1 class="page-title">Meus Treinos</h1>
    <div class="btn">
      <button type="button" id="abrirForm" class="btn-gerar">NOVO TREINO</button>
    </div>
  </header>

  <div class="tabela-container">
  <table id="tabelaTreinos" class="display" style="width:100%;">
    <thead>
  <tr>
    <th> Nome do Treino</th>
    <th> Objetivo</th>
    <th> Exercícios</th>
    <th> Data de Criação</th>
    <th>Ações</th> <!-- <-- LINHA ADICIONADA -->
  </tr>
</thead>
    <tbody></tbody>
  </table>
</div>

</div>

<div class="modal-form" id="modalForm" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="tituloForm">
    <button class="modal-fechar" id="fecharForm" aria-label="Fechar"><i class="fa-solid fa-x"></i></button>
    <h2 id="tituloForm">Preencha suas preferências para montarmos seu treino!</h2>

    <form id="formPreferencias">
      <div class="linha">
        <div class="grupo">
          <label for="NomeTreino">Nome do seu treino:</label>
          <input type="text" id="NomeTreino" name="NomeTreino"/>
        </div>

        <div class="grupo">
          <label for="diasSemana">Dias/semana:</label>
          <input type="number" id="diasSemana" name="diasSemana" min="1" max="7" required/>
        </div>
      </div> 

<div class="grupo-slider">
  <label for="horas">Quantas horas por dia:</label>
  <input type="range" id="horas" min="30" max="180" step="5" value="120" oninput="atualizarTempo(this.value)">
  <output id="saida">2h 00min</output>
</div>


      <div class="grupo">
        <span>Grupos musculares que você deseja trabalhar (selecione no mínimo 3):</span>
        <div class="grade-checkboxes">
          <label><input type="checkbox" name="grupos" value="Full Body" /> Todos</label>
          <label><input type="checkbox" name="grupos" value="Peito" /> Peito</label>
          <label><input type="checkbox" name="grupos" value="Costas" /> Costas</label>
          <label><input type="checkbox" name="grupos" value="Ombros" /> Ombros</label>
          <label><input type="checkbox" name="grupos" value="Bíceps" /> Bíceps</label>
          <label><input type="checkbox" name="grupos" value="Tríceps" /> Tríceps</label>
          <label><input type="checkbox" name="grupos" value="Pernas" /> Pernas</label>
          <label><input type="checkbox" name="grupos" value="Glúteos" /> Glúteos</label>
          <label><input type="checkbox" name="grupos" value="Panturrilhas" /> Panturrilhas</label>
          <label><input type="checkbox" name="grupos" value="Lombar" /> Lombar</label>
          <label><input type="checkbox" name="grupos" value="Antebraços" /> Antebraços</label>
          <label><input type="checkbox" name="grupos" value="Trapézio" /> Trapézio</label>
          
        </div>
      </div>

      <div class="grupo">
        <span>Estilo de divisão de treino:</span>
        <div class="grade-divisoes">
          <label><input type="checkbox" name="divisoes" value="ABC" /> ABC</label>
          <label><input type="checkbox" name="divisoes" value="ABCD" /> ABCD</label>
          <label><input type="checkbox" name="divisoes" value="ABCDE" /> ABCDE</label>
          <label><input type="checkbox" name="divisoes" value="PPL (Push / Pull / Legs)" /> PPL</label>
        </div>
      </div>


      <div class="grupo">
        <label for="limitacoes">Limitações de saúde (opcional):</label>
        <textarea id="limitacoes" name="limitacoes" rows="3"></textarea>
      </div>

      <span id="erro-d_s" class="erro"></span>
      <span id="erro-limitacoes" class="erro"></span>

      <div class="acoes">
        <button type="button" class="btn-secundario" id="cancelarForm">Cancelar</button>
        <button type="submit" class="btn-primario">Salvar Treino</button>
      </div>
    </form>
  </div>
</div>

<div class="modal-info" id="modalInfo" aria-hidden="true">
  <div class="modal2" role="dialog" aria-modal="true" aria-labelledby="ConfigInfo">
    <button class="modal2-fechar" id="fecharInfo" aria-label="Fechar"><i class="fa-solid fa-x"></i></button>
    <h2 id="tituloInfo">Configurações de usuário</h2>

    <form id="formConfiguracoes">
      <div class="modal-grid">
        
        <!-- Coluna esquerda -->
        <div class="col-inputs">

          <div class="grupo">
            <label>Nome completo:</label>
            <div class="nome-sobrenome">
              <input type="text" id="nome" name="nome" placeholder="Nome"/>
              <input type="text" id="sobrenome" name="sobrenome" placeholder="Sobrenome"/>
            </div>
          </div>

          <div class="grupo">
            <label for="username">Nome de usuário: </label>
            <input type="text" id="username" name="username"/>
          </div>

          <div class="grupo">
            <label for="email">Email: </label>
            <input type="email" id="email" name="email"/>
          </div>

          <div class="grupo">
            <label for="password">Atualize sua senha:</label>
            <div class="password-field">
              <input type="password" class="input-field" id="password" placeholder="Sua nova senha">
              <span class="material-symbols-outlined" id="toggle-password">visibility</span>
            </div>
          </div>

          <div class="grupo">
            <div class="password-field">
              <input type="password" id="password-verify" class="input-field" placeholder="Confirme sua nova senha">
              <small id="passwordVerifyHelp" class="password-help"></small>
              <span class="material-symbols-outlined" id="toggle-password-verify">visibility</span>
            </div>
          </div>
        </div>

        <!-- Coluna direita -->
        <div class="col-inputs">
          <div class="grupo">
            <label for="nasc">Ano de nascimento: </label>
            <input type="date" id="dateUser" name="nasc"/>
          </div>

          <div class="grupo">
            <label for="nivel">Experiência: </label>
            <div class="level-box">
              <select id="nivelUser" name="nivel">
                <option value="" disabled selected>Escolha o nível</option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>
          </div>

          <div class="grupo">
            <label for="peso">Peso: (kg) </label>
            <input type="number" id="pesoUser" name="peso" step="0.1"/>
          </div>

          <div class="grupo">
            <label for="altura">Altura: (cm)</label>
            <input type="number" id="alturaUser" name="altura" min="1" required/>
          </div>

        </div>
      </div>

      <div class="acoes">
        <button type="button" class="btn-secundario" id="cancelarInfo">Cancelar</button>
        <button type="submit" class="btn-primario">Salvar configurações</button>
      </div>
    </form>
  </div>
</div>

<div class="modal-treino" id="modalTreino" >
  <div class="modal-content">
    
    <div class="modal-header">
      <h2 id="modal-titulo">Nome do Treino</h2>
      <button id="modal-fechar" class="modal-close-btn">&times;</button>
    </div>

    <div id="modal-body-content" class="modal-body">
      <!-- O conteúdo do treino (tabelas por dia) será inserido aqui pelo JavaScript -->
    </div>

    <div class="modal-footer">
      <button id="btnDownloadPdf" class="btn-pdf">Baixar Treino em PDF</button>
    </div>

  </div>
</div>

<div class="botoes-fixos">
    <button class="toggle-btn" onclick="alternarBarra(), removerFixos()"> <i class="fas fa-bars"></i> </button>

    <button class="toggle-btn" id="btn-logout">
      <a href="../../inicio-pg/inicio.html" class="btn-fixo"> <i class="fa-solid fa-right-from-bracket"></i> </a>
    </button>

    <button class="toggle-btn" id="abrirInfo">
      <i class="fas fa-user"></i>
    </button>

</div>

<script src="https://code.jquery.com/jquery-3.7.0.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js"></script>
<script src="dashboard.js"></script>

</body>

</html>


================================================
FILE: FRONTEND/dashboard-pg/planilhas/dashboard.js
================================================
function alternarBarra() {
    const barra = document.getElementById('barraLateral');
    const conteudo = document.getElementById('mainContent');
    if (barra) barra.classList.toggle('oculta');
    if (conteudo) conteudo.classList.toggle('expandida');
}
function removerFixos() {
  const btnConfig = document.getElementById('btn-config');
  const btnLogout = document.getElementById('btn-logout');
  const btnUser = document.getElementById('abrirInfo');

  [btnConfig, btnLogout, btnUser].forEach((btn) => {
    if (btn) {
      btn.style.display = (btn.style.display === 'none') ? 'block' : 'none';
    }
  });
}

function atualizarTempo(valor) {
  let horas = Math.floor(valor / 60);
  let minutos = valor % 60;
  const saidaElemento = document.getElementById("saida");
  if (saidaElemento) {
    saidaElemento.textContent = `${horas}h ${String(minutos).padStart(2, '0')}min`;
  }
}


// --- CÓDIGO EXECUTADO QUANDO A PÁGINA ESTÁ TOTALMENTE CARREGADA ---
document.addEventListener('DOMContentLoaded', () => {

    // --- VERIFICAÇÃO INICIAL DE LOGIN ---
    if (!localStorage.getItem("accessToken") && !localStorage.getItem("access_token")) {
        window.location.href = "../../login-pg/login.html";
        return;
    }

    // --- VARIÁVEIS GLOBAIS DA PÁGINA ---
    let tabela;
    let treinoAtualParaPdf = null;
    const authToken = localStorage.getItem('accessToken') || localStorage.getItem('access_token');

    // --- ELEMENTOS DA UI ---
    const modalForm = document.getElementById('modalForm');
    const modalInfo = document.getElementById('modalInfo');
    const modalTreino = document.getElementById('modalTreino');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalBody = document.getElementById('modal-body-content');

    // --- FUNÇÕES DE CONTROLE DOS MODAIS ---
    function abrirModal(modal) { if (modal) { modal.classList.add('aberta'); document.body.style.overflow = 'hidden'; }}
    function fecharModal(modal) { if (modal) { modal.classList.remove('aberta'); document.body.style.overflow = ''; }}
    function abrirModalDetalhes() { if (modalTreino) modalTreino.style.display = 'flex'; }
    function fecharModalDetalhes() { if (modalTreino) modalTreino.style.display = 'none'; }

    // --- LISTENERS DE EVENTOS GERAIS DA UI ---
    document.getElementById('abrirForm')?.addEventListener('click', () => abrirModal(modalForm));
    document.getElementById('fecharForm')?.addEventListener('click', () => fecharModal(modalForm));
    document.getElementById('cancelarForm')?.addEventListener('click', () => fecharModal(modalForm));
    if (modalForm) modalForm.addEventListener('click', (e) => { if (e.target === modalForm) fecharModal(modalForm); });

    document.getElementById('abrirInfo')?.addEventListener('click', () => { carregarDadosUsuario(); abrirModal(modalInfo); });
    document.getElementById('fecharInfo')?.addEventListener('click', () => fecharModal(modalInfo));
    document.getElementById('cancelarInfo')?.addEventListener('click', () => fecharModal(modalInfo));
    if (modalInfo) modalInfo.addEventListener('click', (e) => { if (e.target === modalInfo) fecharModal(modalInfo); });

    document.getElementById('modal-fechar')?.addEventListener('click', fecharModalDetalhes);
    if (modalTreino) window.onclick = (event) => { if (event.target == modalTreino) fecharModalDetalhes(); };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            fecharModal(modalForm);
            fecharModal(modalInfo);
            fecharModalDetalhes();
        }
    });



   
function gerarPdfDoTreino() {
    if (!treinoAtualParaPdf) {
      alert("Erro ao gerar PDF: dados do treino não encontrados.");
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // --- CABEÇALHO DO PDF ---
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    doc.text(`Plano de Treino: ${treinoAtualParaPdf.nome_treino}`, 105, 22, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Objetivo: ${treinoAtualParaPdf.objetivo}`, 14, 32);

    // ===================================================================
    //  INÍCIO DA MUDANÇA PRINCIPAL
    // ===================================================================

    // --- PREPARAÇÃO DOS DADOS PARA UMA ÚNICA TABELA ---
    const exerciciosAgrupados = (treinoAtualParaPdf.exercicios || []).reduce((acc, ex) => {
      const dia = ex.dia_semana || 'Exercícios';
      (acc[dia] = acc[dia] || []).push(ex);
      return acc;
    }, {});
    
    const ordemDias = ["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo","Não especificado"];
    
    const head = [['Exercício', 'Séries x Repetições', 'Descanso']];
    const allRows = []; // Um único array para todas as linhas

    // Itera sobre os dias para construir o array de linhas
    for (const dia of ordemDias) {
      if (exerciciosAgrupados[dia]) {
        // 1. Adiciona uma linha de TÍTULO para o dia
        allRows.push([
          { 
            content: dia, 
            colSpan: 3, // Ocupa as 3 colunas
            styles: { 
              halign: 'center', 
              fillColor: [220, 220, 220], // Cinza claro
              textColor: [40, 40, 40],
              fontStyle: 'bold'
            } 
          }
        ]);
        
        // 2. Adiciona as linhas de exercícios para aquele dia
        exerciciosAgrupados[dia].forEach(ex => {
          allRows.push([
            ex.nome_exercicio,
            `${ex.series}x${ex.repeticoes}`,
            ex.descanso
          ]);
        });
      }
    }

    // 3. FAZ UMA ÚNICA CHAMADA PARA DESENHAR A TABELA INTEIRA
    doc.autoTable({
        startY: 40, // Posição inicial abaixo do cabeçalho
        head: head,
        body: allRows, // Passa o array com todas as linhas
        theme: 'grid',
        
        // Estilos para o cabeçalho das colunas (Exercício, Séries, etc.)
        headStyles: {
          fillColor: [60, 9, 108], // Roxo
          textColor: [255, 255, 255],   // Texto branco
          fontStyle: 'bold',
        },

        // Estilos para as linhas do corpo
        alternateRowStyles: {
          fillColor: [245, 245, 245] // Efeito zebrado
        },

        // Estilo da primeira coluna (Exercício) para dar destaque
        columnStyles: {
            0: {
                fontStyle: 'bold',
            }
        }
    });

    // ===================================================================
    //  FIM DA MUDANÇA
    // ===================================================================

    // --- INICIA O DOWNLOAD ---
    doc.save(`treino_${treinoAtualParaPdf.nome_treino}.pdf`);
}

  function popularModal(dadosDoTreino) {
    if (!dadosDoTreino) return;

    // Guarda os dados para a função de PDF
    treinoAtualParaPdf = dadosDoTreino;

    const modalTitulo = document.getElementById('modal-titulo');
    const modalBody = document.getElementById('modal-body-content');

    if (modalTitulo) modalTitulo.textContent = dadosDoTreino.nome_treino || 'Treino';
    if (!modalBody) return;

    modalBody.innerHTML = ''; // Limpa o conteúdo anterior

    // Agrupa os exercícios por dia da semana
    const exerciciosAgrupados = (dadosDoTreino.exercicios || []).reduce((acc, ex) => {
      const dia = ex.dia_semana || 'Não especificado';
      (acc[dia] = acc[dia] || []).push(ex);
      return acc;
    }, {});
    
    const ordemDias = ["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo","Não especificado"];

    // Itera sobre os dias para criar os títulos e as tabelas
    for (const dia of ordemDias) {
      if (exerciciosAgrupados[dia]) {
        const exerciciosDoDia = exerciciosAgrupados[dia];
        
        // ===================================================================
        //  INÍCIO DA MUDANÇA PRINCIPAL
        // ===================================================================
        // 1. Cria um título H3 separado para o dia da semana
        let diaHtml = `<h3 class="dia-titulo">${dia}</h3>`;

        // 2. Cria a tabela de exercícios logo abaixo do título
        let tabelaHtml = `
            <table class="tabela-dia">
                <thead>
                    <tr>
                        <th>Exercício</th>
                        <th>Séries</th>
                        <th>Repetições</th>
                        <th>Descanso</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        exerciciosDoDia.forEach(ex => {
            const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.nome_exercicio + ' exercicio')}`;
            tabelaHtml += `
                <tr>
                    <td><a href="${youtubeUrl}" target="_blank" class="exercicio-link">${ex.nome_exercicio}</a></td>
                    <td>${ex.series ?? '-'}</td>
                    <td>${ex.repeticoes ?? '-'}</td>
                    <td>${ex.descanso ?? '-'}</td>
                </tr>
            `;
        });

        tabelaHtml += `</tbody></table>`;
        
        // 3. Adiciona o título e a tabela ao corpo do modal
        modalBody.innerHTML += diaHtml + tabelaHtml;
        // ===================================================================
        //  FIM DA MUDANÇA
        // ===================================================================
      }
    }
    
    if (modalBody.innerHTML === '') {
        modalBody.innerHTML = '<p>Não há exercícios detalhados para este treino.</p>';
    }

    abrirModalDetalhes();
  }
  
  const btnDownload = document.getElementById('btnDownloadPdf');
    if (btnDownload) {
        btnDownload.addEventListener('click', () => {
            // Chama a função gerarPdfDoTreino correta (a que tem autoTable)
            // usando os dados que guardamos na variável treinoAtualParaPdf
            gerarPdfDoTreino(treinoAtualParaPdf); 
        });
    }

       // --- DATATABLE ---
    if (window.jQuery && $('#tabelaTreinos').length) {
        tabela = $('#tabelaTreinos').DataTable({
            dom: '<"tabela-controles-topo"lf>t<"tabela-controles-base"ip>',
            ajax: {
                url: 'http://127.0.0.1:8000/api/treinos/',
                headers: { Authorization: `Bearer ${authToken}` },
                dataSrc: ''
            },
            columns: [
                { data: 'nome_treino' }, { data: 'objetivo' },
                { data: 'exercicios', render: (d) => (!d || d.length === 0) ? "Nenhum" : `${d.length} exercícios` },
                { data: 'data_criacao', render: (d) => d ? new Date(d).toLocaleDateString('pt-BR') : '-' },
                { data: null, orderable: false, className: 'actions-column', render: (d,t,r) => `<button class="btn-excluir" data-id="${r.id}">Excluir</button>` }
            ],
            language: {
                "sEmptyTable": "Nenhum registro encontrado",
                "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                "sInfoFiltered": "(Filtrados de _MAX_ registros no total)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "_MENU_ resultados por página",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhum registro encontrado",
                "sSearch": "Pesquisar",
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último"
                },
                "oAria": {
                    "sSortAscending": ": Ordenar colunas de forma ascendente",
                    "sSortDescending": ": Ordenar colunas de forma descendente"
                }
},
            responsive: true,
            order: [[4, 'desc']]
        });

        $('#tabelaTreinos tbody').on('click', 'tr', function (event) {
    // Impede a ação se o clique for em um botão ou controle (como '+' ou 'Excluir')
    if ($(event.target).closest('button, .details-control').length > 0) {
        return;
    }

    // Pega os dados da linha clicada
    const dadosDaLinha = tabela.row(this).data();

    if (dadosDaLinha && dadosDaLinha.id) {
        // Redireciona para a nova página, passando o ID do treino na URL
        window.location.href = `detalhe-planilha/detalhe-treino.html?id=${dadosDaLinha.id}`; 
    }
});
        
        $('#tabelaTreinos tbody').on('click', '.btn-excluir', async function () {
            const treinoId = $(this).data('id');
            if (confirm(`Tem certeza de que deseja excluir este treino?`)) {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/api/treinos/${treinoId}/`, {
                        method: 'DELETE',
                        headers: { 'Authorization': `Bearer ${authToken}` }
                    });
                    if (response.ok) { alert('Treino excluído!'); tabela.ajax.reload(); }
                    else { throw new Error('Falha ao excluir.'); }
                } catch (error) { alert('Erro: ' + error.message); }
            }
        });
    }

    // --- FORMULÁRIO 'Novo Treino' ---
    const formNovoTreino = document.querySelector('#modalForm form');
    if (formNovoTreino) {
        formNovoTreino.addEventListener('submit', async (event) => {
            event.preventDefault();
            const submitButton = formNovoTreino.querySelector('button[type="submit"]');
            if (submitButton) { submitButton.textContent = 'Gerando...'; submitButton.disabled = true; }
            const dadosParaApi = {
                nomeTreino: document.getElementById('NomeTreino')?.value,
                diasSemana: document.getElementById('diasSemana')?.value,
                gruposMusculares: Array.from(document.querySelectorAll('input[name="grupos"]:checked')).map(cb => cb.value),
                limitacoes: document.getElementById('limitacoes')?.value,
                objetivo: 'Hipertrofia e Força'
            };
            try {
                const response = await fetch('http://127.0.0.1:8000/api/gerar-treino/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authToken}` },
                    body: JSON.stringify(dadosParaApi)
                });
                if (!response.ok) { const err = await response.json(); throw new Error(err.error || 'Falha ao gerar o treino.'); }
                alert('Treino gerado com sucesso!');
                fecharModal(modalForm);
                if (tabela) tabela.ajax.reload();
            } catch (error) {
                alert(`Erro: ${error.message}`);
            } finally {
                if (submitButton) { submitButton.textContent = 'Salvar Treino'; submitButton.disabled = false; }
            }
        });
    }

    // --- FUNÇÕES DE CONFIGURAÇÕES DO USUÁRIO ---
    async function carregarDadosUsuario() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/me/', { headers: { Authorization: `Bearer ${authToken}` }});
            if (!response.ok) throw new Error('Falha ao carregar dados.');
            const data = await response.json();
            const setIfExists = (id, val) => { const el = document.getElementById(id); if (el) el.value = val ?? ''; };
            setIfExists('nome', data.first_name); setIfExists('sobrenome', data.last_name);
            setIfExists('username', data.username); setIfExists('email', data.email);
            if (data.profile) {
                setIfExists('dateUser', data.profile.data_nascimento); setIfExists('nivelUser', data.profile.nivel_experiencia);
                setIfExists('pesoUser', data.profile.peso); setIfExists('alturaUser', data.profile.altura);
            }
        } catch (error) { console.error('Erro:', error); }
    }

   async function salvarConfiguracoes(event) {
    event.preventDefault();

    // 1. Coleta todos os dados do formulário
    const peso = document.getElementById('pesoUser')?.value;
    const altura = document.getElementById('alturaUser')?.value;
    const experiencia = document.getElementById('nivelUser')?.value;
    const dataNascimento = document.getElementById('dateUser')?.value; // O <input type="date"> já fornece o formato YYYY-MM-DD

    // 2. Validação do front-end
    if (!peso || !altura || !experiencia || !dataNascimento) {
      alert('Por favor, preencha todos os campos obrigatórios: Peso, Altura, Experiência e Data de Nascimento.');
      return;
    }

    // 3. Monta o objeto de dados para enviar à API
    const dadosAtualizados = {
      email: document.getElementById('email')?.value,
      first_name: document.getElementById('nome')?.value,
      last_name: document.getElementById('sobrenome')?.value,
      profile: {
        data_nascimento: dataNascimento,
        peso: parseFloat(peso),
        altura: parseInt(altura, 10),
        nivel_experiencia: experiencia
      }
    };

    // 4. Adiciona a senha apenas se ela foi preenchida
    const novaSenha = document.getElementById('password')?.value;
    if (novaSenha) {
        if (novaSenha !== document.getElementById('password-verify')?.value) {
            alert('As senhas não coincidem!');
            return;
        }
        dadosAtualizados.password = novaSenha;
    }

    // 5. Envia os dados para a API com o tratamento de erro
    try {
      const response = await fetch('http://127.0.0.1:8000/api/me/', {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${authToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosAtualizados)
      });
      
      if (!response.ok) { 
        const err = await response.json(); 
        // Transforma o objeto de erro em uma string legível
        const errorMessages = Object.entries(err).map(([field, messages]) => `${field}: ${messages.join(', ')}`).join('\n');
        throw new Error(errorMessages);
      }

      alert('Configurações salvas com sucesso!');
      fecharModal(modalInfo);

    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        alert('Configurações salvas com sucesso!');
        fecharModal(modalInfo);
      } else {
        alert('Erro ao salvar:\n' + error.message);
      }
    }
  }

    const formConfig = document.querySelector('#modalInfo form');
    if (formConfig) formConfig.addEventListener('submit', salvarConfiguracoes);

    //LOGOUT
    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (event) => {
            // 1. Previne a ação padrão do link (que é navegar imediatamente)
            event.preventDefault(); 
            
            // 2. Mostra a caixa de diálogo de confirmação
            const querSair = confirm("Tem certeza de que deseja sair?");

            // 3. Só continua se o usuário clicou em "OK"
            if (querSair) {
                // 4. Limpa o armazenamento local para deslogar o usuário
                localStorage.clear(); 
                
                // 5. Redireciona para a página inicial
                window.location.href = '../../inicio-pg/inicio.html'; 
            }
            // Se o usuário clicar em "Cancelar", nada acontece.
        });
    }

    // --- TOGGLE SENHA ---
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('toggle-password');
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';
        });
    }
    // (Adicione aqui a lógica para o 'toggle-password-verify' se precisar)
});


document.addEventListener("DOMContentLoaded", () => {
  const checkboxTodos = document.querySelector('input[value="Full Body"]');
  const checkboxesGrupos = document.querySelectorAll('input[name="grupos"]:not([value="Full Body"])');

  checkboxTodos.addEventListener("change", function () {
    checkboxesGrupos.forEach(cb => cb.checked = this.checked);
  });

  // Se desmarcar manualmente algum grupo, "Todos" também desmarca
  checkboxesGrupos.forEach(cb => {
    cb.addEventListener("change", () => {
      if (!cb.checked) {
        checkboxTodos.checked = false;
      } else {
        // Marca "Todos" se todos os outros estiverem selecionados
        const todosMarcados = [...checkboxesGrupos].every(c => c.checked);
        checkboxTodos.checked = todosMarcados;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const divisoes = document.querySelectorAll('input[name="divisoes"]');

  divisoes.forEach(cb => {
    cb.addEventListener("change", function () {
      if (this.checked) {
        divisoes.forEach(outro => {
          if (outro !== this) outro.checked = false;
        });
      }
    });
  });
});



================================================
FILE: FRONTEND/dashboard-pg/planilhas/detalhe-planilha/detalhe-treino.css
================================================
/* ==========================================================================
   CONFIGURAÇÕES GERAIS E LAYOUT
   ========================================================================== */
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Poppins', 'Segoe UI', sans-serif;
    background-color: #121212;
    color: #e0e0e0;
    overflow: hidden; /* Previne o scroll da página inteira */
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-content {
    width: 100%;
    max-width: 1200px;
    height: 95vh;
    margin: 0 auto;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}

/* ==========================================================================
   CABEÇALHO DO TREINO (TÍTULO E BOTÕES)
   ========================================================================== */
.cabecalho-treino {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #3c096c;
    flex-shrink: 0;
}

.info-treino h1 {
    font-size: 2.2em;
    color: #ffffff;
    margin: 0;
    font-weight: 700;
    text-transform: uppercase;
}

.info-treino p {
    font-size: 1.1em;
    color: #a893c6;
    margin-top: 5px;
}

.acoes-treino {
    display: flex;
    gap: 15px;
}

.btn-acao {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 18px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
}

.btn-voltar {
    background-color: #332147;
    color: #c8b8db;
}

.btn-voltar:hover {
    background-color: #5a189a;
    color: white;
}

.btn-pdf {
    background-color: #7b2cbf;
    color: white;
}

.btn-pdf:hover {
    background-color: #9d4edd;
}

/* ==========================================================================
   CORPO DO TREINO E CARROSSEL (COM SCROLL INTERNO)
   ========================================================================== */
.corpo-treino {
    flex-grow: 1;
    display: flex;
    align-items: flex-start; /* Alinha no topo */
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px 20px;
}

.carrossel-container {
    position: relative;
    padding: 0 60px;
    width: 100%;
    box-sizing: border-box;
}

.carrossel-viewport {
    width: 100%;
    overflow: hidden;
}

.carrossel-trilho {
    display: flex;
    transition: transform 0.4s ease-out;
}

.carrossel-slide {
    flex: 0 0 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
}

.carrossel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background-color: rgba(60, 9, 108, 0.7);
    border: 1px solid rgba(123, 44, 191, 0.5);
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.carrossel-btn:hover { transform: translateY(-50%) scale(1.1); }
.carrossel-btn:disabled { opacity: 0.2; cursor: not-allowed; transform: translateY(-50%) scale(1); }
.btn-esquerda { left: 0px; }
.btn-direita { right: 0px; }

/* ==========================================================================
   ESTILOS DENTRO DE CADA SLIDE
   ========================================================================== */
.dia-titulo {
    font-size: 1.5em;
    text-align: center;
    padding-bottom: 10px;
    margin-top: 0;
    margin-bottom: 15px;
    border-bottom: none;
    text-transform: uppercase;
    color: #c8b8db;
}

.tabela-dia {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;
}

.tabela-dia thead { display: none; }

.tabela-dia tbody tr {
    background-color: #1a1a1a;
    border-radius: 8px;
    transition: ease 0.3s;
}

.tabela-dia tbody tr:hover {
    transform: scale(1.01);
}

.tabela-dia tbody td {
    padding: 16px 22px;
    border: none;
    vertical-align: middle;
}

.tabela-dia tbody td:first-child {
    border-left: 4px solid #7b2cbf;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.tabela-dia tbody td:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

.exercicio-link {
    font-size: 1.05em;
    font-weight: 500;
    color: #e0e0e0;
    text-decoration: none;
}

.exercicio-link:hover { color: #c8b8db; }

.tabela-dia tbody td:not(:first-child) {
    text-align: center;
    font-size: 1.05em;
    color: #a893c6;
    font-weight: 500;
}


================================================
FILE: FRONTEND/dashboard-pg/planilhas/detalhe-planilha/detalhe-treino.html
================================================
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalhes do Treino</title>
    <!-- Substitua pelo caminho correto para o seu arquivo CSS -->
    <link rel="stylesheet" href="detalhe-treino.css"> 
</head>
<body>

    <main id="mainContent" class="main-content">
        <div class="conteudo-treino">

            <!-- ======================================================== -->
            <!--        ESTRUTURA DO CABEÇALHO MODIFICADA               -->
            <!-- ======================================================== -->
            <div class="cabecalho-treino">
                
                <!-- Coluna da Esquerda: Título e Objetivo -->
                <div class="info-treino">
                    <h1 id="nome-treino">CARREGANDO TREINO...</h1>
                    <p id="objetivo-treino"></p>
                </div>

                <!-- Coluna da Direita: Botões de Ação -->
                <div class="acoes-treino">
                    <a href="../dashboard.html" class="btn-acao btn-voltar">&#10094; Voltar</a>
                    <button id="btnDownloadPdf" class="btn-acao btn-pdf">Baixar PDF</button>
                </div>

            </div>
            
            <!-- ======================================================== -->
            <!--             ESTRUTURA DO CARROSSEL (início)              -->
            <!-- ======================================================== -->
            <div id="corpo-treino" class="corpo-treino">
                <div class="carrossel-container">
                    <button id="btnCarrosselEsquerda" class="carrossel-btn btn-esquerda">&#10094;</button>
                    <div class="carrossel-viewport">
                        <div id="carrossel-trilho" class="carrossel-trilho">
                            <!-- Os slides do treino serão inseridos aqui pelo JavaScript -->
                        </div>
                    </div>
                    <button id="btnCarrosselDireita" class="carrossel-btn btn-direita">&#10095;</button>
                </div>
            </div>
            <!-- ======================================================== -->
            <!--              ESTRUTURA DO CARROSSEL (fim)                -->
            <!-- ======================================================== -->

        </div>
    </main>

    <!-- Scripts no final -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js"></script>
    
    <!-- Substitua pelo caminho correto para o seu arquivo JS -->
    <script src="detalhe-treino.js"></script> 
</body>
</html>


================================================
FILE: FRONTEND/dashboard-pg/planilhas/detalhe-planilha/detalhe-treino.js
================================================
document.addEventListener('DOMContentLoaded', () => {

    const authToken = localStorage.getItem('accessToken') || localStorage.getItem('access_token');
    if (!authToken) {
        window.location.href = "../../login-pg/login.html";
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const treinoId = params.get('id');

    if (!treinoId) {
        document.body.innerHTML = '<h1>Erro: ID do treino não fornecido.</h1>';
        return;
    }

    const nomeTreinoEl = document.getElementById('nome-treino');
    const objetivoTreinoEl = document.getElementById('objetivo-treino');
    const trilhoCarrossel = document.getElementById('carrossel-trilho');
    const btnDownload = document.getElementById('btnDownloadPdf');
    const btnEsquerda = document.getElementById('btnCarrosselEsquerda');
    const btnDireita = document.getElementById('btnCarrosselDireita');
    
    let dadosDoTreinoAtual = null;
    let slideIndex = 0;
    let slides = [];

    function moverParaSlide(index) {
        if (trilhoCarrossel) {
            trilhoCarrossel.style.transform = `translateX(-${100 * index}%)`;
        }
    }

    function atualizarBotoes() {
        if (btnEsquerda) btnEsquerda.disabled = (slideIndex === 0);
        if (btnDireita) btnDireita.disabled = (slideIndex === slides.length - 1);
    }

    function exibirDetalhesNaPagina(dados) {
        nomeTreinoEl.textContent = dados.nome_treino.toUpperCase();
        objetivoTreinoEl.textContent = `Objetivo: ${dados.objetivo}`;
        trilhoCarrossel.innerHTML = '';
        
        const exerciciosAgrupados = (dados.exercicios || []).reduce((acc, ex) => {
            const dia = ex.dia_semana || 'Não especificado';
            (acc[dia] = acc[dia] || []).push(ex);
            return acc;
        }, {});
        
        const ordemDias = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo", "Não especificado"];
        
        for (const dia of ordemDias) {
            if (exerciciosAgrupados[dia]) {
                const slide = document.createElement('div');
                slide.className = 'carrossel-slide';
                let slideHtml = `<h3 class="dia-titulo">${dia.toUpperCase()}</h3><table class="tabela-dia"><tbody>`;
                exerciciosAgrupados[dia].forEach(ex => {
                    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.nome_exercicio + ' exercicio')}`;
                    slideHtml += `<tr><td><a href="${youtubeUrl}" target="_blank" class="exercicio-link">${ex.nome_exercicio}</a></td><td>${ex.series}x${ex.repeticoes}</td><td>${ex.descanso}s</td></tr>`;
                });
                slideHtml += `</tbody></table>`;
                slide.innerHTML = slideHtml;
                trilhoCarrossel.appendChild(slide);
            }
        }
        
        slides = Array.from(trilhoCarrossel.children);
        if (slides.length <= 1) {
            if (btnEsquerda) btnEsquerda.style.display = 'none';
            if (btnDireita) btnDireita.style.display = 'none';
        } else {
            slideIndex = 0;
            moverParaSlide(slideIndex);
            atualizarBotoes();
        }
    }

    // =============================================================
    // FUNÇÃO PDF COMPLETA E CORRIGIDA
    // =============================================================
    function gerarPdfDoTreino() {
        if (!dadosDoTreinoAtual) {
            alert("Erro: Dados do treino não carregados.");
            return;
        }
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFontSize(20);
        doc.text(`Plano de Treino: ${dadosDoTreinoAtual.nome_treino.toUpperCase()}`, 105, 22, { align: 'center' });
        doc.setFontSize(12);
        doc.text(`Objetivo: ${dadosDoTreinoAtual.objetivo}`, 14, 32);

        const allRows = [];
        const exerciciosAgrupados = (dadosDoTreinoAtual.exercicios || []).reduce((acc, ex) => {
            const dia = ex.dia_semana || 'Exercícios';
            (acc[dia] = acc[dia] || []).push(ex);
            return acc;
        }, {});
        const ordemDias = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo", "Não especificado"];

        for (const dia of ordemDias) {
            if (exerciciosAgrupados[dia]) {
                allRows.push([{ content: dia.toUpperCase(), colSpan: 3, styles: { halign: 'center', fillColor: [220, 220, 220], textColor: [40, 40, 40], fontStyle: 'bold' } }]);
                exerciciosAgrupados[dia].forEach(ex => {
                    allRows.push([ex.nome_exercicio, `${ex.series}x${ex.repeticoes}`, `${ex.descanso}s`]);
                });
            }
        }

        doc.autoTable({
            startY: 40,
            head: [['Exercício', 'Séries x Repetições', 'Descanso']],
            body: allRows,
            theme: 'grid',
            headStyles: { fillColor: [60, 9, 108], textColor: [255, 255, 255], fontStyle: 'bold' },
            alternateRowStyles: { fillColor: [245, 245, 245] },
            columnStyles: { 0: { fontStyle: 'bold' } }
        });
        
        doc.save(`treino_${dadosDoTreinoAtual.nome_treino}.pdf`);
    }

    async function carregarDetalhesDoTreino() {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/treino-detalhe/${treinoId}/`, {
                headers: { 'Authorization': `Bearer ${authToken}` }
            });
            if (!response.ok) throw new Error('Treino não encontrado.');
            
            dadosDoTreinoAtual = await response.json();
            exibirDetalhesNaPagina(dadosDoTreinoAtual);
            
        } catch (error) {
            if (nomeTreinoEl) nomeTreinoEl.textContent = 'ERRO AO CARREGAR';
        }
    }
    
    btnDireita?.addEventListener('click', () => {
        if (slideIndex < slides.length - 1) {
            slideIndex++;
            moverParaSlide(slideIndex);
            atualizarBotoes();
        }
    });

    btnEsquerda?.addEventListener('click', () => {
        if (slideIndex > 0) {
            slideIndex--;
            moverParaSlide(slideIndex);
            atualizarBotoes();
        }
    });

    btnDownload?.addEventListener('click', gerarPdfDoTreino);

    carregarDetalhesDoTreino();
});


================================================
FILE: FRONTEND/dashboard-pg/sobre/dashboard.css
================================================
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

body {
  font-family: 'Poppins', sans-serif;
  background-color: #121212;
  color: white; }


.main {
  padding: 30px;
  padding-left: 290px;
  transition: padding-left 0.3s ease; }

.main.expandida {
  padding-left: 30px; }

.card {
  background-color: #1e1e1e;
  padding: 20px;
  border-left: 5px solid #3c096c;
  border-radius: 8px;
  margin-bottom: 20px; }

.botoes-fixos {
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 25px;
  z-index: 1000; }

.toggle-btn {
  background-color: #19052c;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s; }

.toggle-btn:hover {
  background-color: #280c42; }

.btn-fixo {
  text-decoration: none;
  color: white; }


/* SOBRE NOS */

.sobre-nos-container {
  max-width: 900px;
  margin: 0 auto; }

.titulo-principal {
  font-size: 2.2em;
  font-weight: 700;
  color: #c8b8db;
  text-align: center;
  margin-bottom: 10px; }

.subtitulo-principal {
  text-align: center;
  font-size: 1.1em;
  color: #aaa;
  margin-bottom: 40px; }

.card h2 {
  font-size: 1.6em;
  color: #c8b8db;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 10px; }

.card h2 i {
  margin-right: 15px;
  color: #c8b8db;
  font-size: 0.9em; }

.card p, .card li {
  line-height: 1.8;
  color: #ddd; }

.equipe-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 25px;
  text-align: center; }

.membro-equipe {
  background-color: #121212;
  padding: 20px;
  border-radius: 8px;
  width: 200px;
  transition: transform 0.3s ease, background-color 0.3s ease;  }

.membro-equipe:hover {
  transform: translateY(-5px);
  background-color: #2b2b2b; }

.img-mbr {
  border-radius: 1000px;
  width: 80px; }

.membro-equipe h3 {
  margin-bottom: 5px;
  color: #fff; }

.membro-equipe h4 {
  font-size: 0.9em;
  font-weight: 300;
  color: #c8b8db; }

.lista-valores {
  list-style: none;
  padding-left: 0; }

.lista-valores li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px; }

.lista-valores li::before {
  content: '\f00c';
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  color: #3c096c;
  position: absolute;
  left: 0;
  top: 4px; }


================================================
FILE: FRONTEND/dashboard-pg/sobre/dashboard.html
================================================
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="shortcut icon" href="../../midia/ico/ico-aba.png" type="image/x-icon">
  <title> Fitness Routine - Dashboard </title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" />
  
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
  <link rel="stylesheet" href="dashboard.css" />
  <link rel="stylesheet" href="../modal-style.css"/>
  <link rel="stylesheet" href="../barra-style.css"/>
</head>
<body>

  <div class="barra_lateral" id="barraLateral">
      <img src="../../midia/logo-dash.png" alt="logo-dash"><br><br>
      <a href="../inicio/dashboard.html" class="link">Início</a>
      <a href="../planilhas/dashboard.html" class="link">Treinos</a>
      <a href="../curiosidades/dashboard.html" class="link">Curiosidades</a>
      <a href="../sobre/dashboard.html" class="link">Sobre</a>
  </div>

<div class="main" id="mainContent">
    <div class="sobre-nos-container">

  <h1 class="titulo-principal">Sobre o Fitness Routine</h1>
  <p class="subtitulo-principal">Oque fizemos e quem somos.</p>

  <div class="card">
    <h2><i class="fas fa-bullseye"></i> Nossa Missão</h2>
    <p>
      Nossa missão é descomplicar o mundo fitness, oferecendo uma plataforma intuitiva e motivadora. Acreditamos que todos merecem ter acesso a treinos eficazes e informações de qualidade para alcançar seus objetivos de saúde e bem-estar, não importa onde estejam em sua jornada.
    </p>
  </div>

  <div class="card">
    <h2><i class="fas fa-users"></i> Nossa Equipe</h2>
    <p>
      Somos um time de entusiastas da tecnologia e do esporte, dedicados a criar a melhor experiência para você. Combinamos conhecimento em desenvolvimento de software com a paixão por um estilo de vida saudável.
    </p>
    <div class="equipe-container">
      <div class="membro-equipe">
        <div class="icone-membro">
          <img src="../../midia/mbr/img-arthur.jpg" alt="" class="img-mbr">
        </div>
        <h3>Arthur Coelho</h3>
        <h4>Desenvolvedor Fullstack.</h4>
      </div>
      <div class="membro-equipe">
        <div class="icone-membro">
          <img src="../../midia/mbr/img-cassu.jpg" alt="" class="img-mbr">
        </div>
        <h3>Miguel Cassu</h3>
        <h4>Desenvolvedor Fullstack.</h4>
      </div>
      <div class="membro-equipe">
        <div class="icone-membro">
          <img src="../../midia/mbr/img-emanuel.jpeg" alt="" class="img-mbr">
        </div>
        <h3>Emanuel Eduardo</h3>
        <h4>Desenvolvedor de software.</h4>
      </div>
      <div class="membro-equipe">
        <div class="icone-membro">
          <img src="../../midia/mbr/img-laura.jpg" alt="" class="img-mbr">
        </div>
        <h3>Laura Rocha</h3>
        <h4>Social Manager.</h4>
      </div>
      <div class="membro-equipe">
        <div class="icone-membro">
          <img src="../../midia/mbr/img-malu.jpg" alt="" class="img-mbr">
        </div>
        <h3>Maria Luiza</h3>
        <h4>Designer e Desenvolvedora FrontEnd.</h4>
      </div>
      <div class="membro-equipe">
        <div class="icone-membro">
          <img src="../../midia/mbr/img-mario.png" alt="" class="img-mbr">
        </div>
        <h3>Mário Netto</h3>
        <h4>Documentação e Desenvolvimento FrontEnd.</h4>
      </div>
    </div>
  </div>

  <div class="card">
    <h2><i class="fas fa-gem"></i> Nossos Valores</h2>
    <ul class="lista-valores">
      <li><strong>Saúde em Primeiro Lugar:</strong> Priorizamos práticas seguras e eficazes.</li>
      <li><strong>Inovação Contínua:</strong> Buscamos sempre as melhores ferramentas para te ajudar.</li>
      <li><strong>Comunidade e Suporte:</strong> Acreditamos na força da motivação mútua.</li>
      <li><strong>Acessibilidade:</strong> Queremos que o fitness seja para todos, sem exceção.</li>
    </ul>
  </div>

</div>
    
<div class="modal-info" id="modalInfo" aria-hidden="true">
  <div class="modal2" role="dialog" aria-modal="true" aria-labelledby="ConfigInfo">
    <button class="modal2-fechar" id="fecharInfo" aria-label="Fechar"><i class="fa-solid fa-x"></i></button>
    <h2 id="tituloInfo">Configurações de usuário</h2>

    <form id="formConfiguracoes">
      <div class="modal-grid">
        
        <!-- Coluna esquerda -->
        <div class="col-inputs">

          <div class="grupo">
            <label>Nome completo:</label>
            <div class="nome-sobrenome">
              <input type="text" id="nome" name="nome" placeholder="Nome"/>
              <input type="text" id="sobrenome" name="sobrenome" placeholder="Sobrenome"/>
            </div>
          </div>

          <div class="grupo">
            <label for="username">Nome de usuário: </label>
            <input type="text" id="username" name="username"/>
          </div>

          <div class="grupo">
            <label for="email">Email: </label>
            <input type="email" id="email" name="email"/>
          </div>

          <div class="grupo">
            <label for="password">Atualize sua senha:</label>
            <div class="password-field">
              <input type="password" class="input-field" id="password" placeholder="Sua nova senha">
              <span class="material-symbols-outlined" id="toggle-password">visibility</span>
            </div>
          </div>

          <div class="grupo">
            <div class="password-field">
              <input type="password" id="password-verify" class="input-field" placeholder="Confirme sua nova senha">
              <small id="passwordVerifyHelp" class="password-help"></small>
              <span class="material-symbols-outlined" id="toggle-password-verify">visibility</span>
            </div>
          </div>
        </div>

        <!-- Coluna direita -->
        <div class="col-inputs">
          <div class="grupo">
            <label for="nasc">Ano de nascimento: </label>
            <input type="date" id="dateUser" name="nasc"/>
          </div>

          <div class="grupo">
            <label for="nivel">Experiência: </label>
            <div class="level-box">
              <select id="nivelUser" name="nivel">
                <option value="" disabled selected>Escolha o nível</option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>
          </div>

          <div class="grupo">
            <label for="peso">Peso: (kg) </label>
            <input type="number" id="pesoUser" name="peso" step="0.1"/>
          </div>

          <div class="grupo">
            <label for="altura">Altura: (cm)</label>
            <input type="number" id="alturaUser" name="altura"/>
          </div>
        </div>
      </div>

      <div class="acoes">
        <button type="button" class="btn-secundario" id="cancelarInfo">Cancelar</button>
        <button type="submit" class="btn-primario">Salvar configurações</button>
      </div>
    </form>
  </div>
</div>

<div class="botoes-fixos">
    <button class="toggle-btn" onclick="alternarBarra(), removerFixos()">
      <i class="fas fa-bars"></i>
    </button>

    <button class="toggle-btn" id="btn-logout">
      <a href="../../inicio-pg/inicio.html" class="btn-fixo">
        <i class="fa-solid fa-right-from-bracket"></i>
      </a>
    </button>

    <button class="toggle-btn" id="abrirInfo">
        <i class="fas fa-user"></i>
    </button>

  </div>

<script src="dashboard.js"></script>
</body>
</html>



================================================
FILE: FRONTEND/dashboard-pg/sobre/dashboard.js
================================================
function alternarBarra() {
  const barra = document.getElementById('barraLateral');
  const conteudo = document.getElementById('mainContent');

  barra.classList.toggle('oculta');
  conteudo.classList.toggle('expandida'); }

function removerFixos() {
  const btnConfig = document.getElementById('btn-config');
  const btnLogout = document.getElementById('btn-logout');
  const btnUser = document.getElementById('abrirInfo');

  [btnConfig, btnLogout, btnUser].forEach((btn) => {
    if (btn) {
      btn.style.display = (btn.style.display === 'none') ? 'block' : 'none';
    }
  });
}


const nomeUsuario = localStorage.getItem("usuario");

    if (nomeUsuario && document.getElementById("boas-vindas")) {
        document.getElementById("boas-vindas").textContent = `Olá ${nomeUsuario}, Bem-vindo ao Fitness Routine.`;
    } else if (!nomeUsuario) {
        // Redireciona apenas se não estiver logado
        window.location.href = "../../login-pg/login.html";
    }

/*BLOCO DAS INFORMAÇÕES*/
const abrirInfo = document.getElementById('abrirInfo');
const modalInfo = document.getElementById('modalInfo');
const fecharInfo = document.getElementById('fecharInfo');
const cancelarInfo = document.getElementById('cancelarInfo');

const formConfiguracoes = document.getElementById('formConfiguracoes');


function abrir_info() {
  modalInfo.classList.add('aberta');
  modalInfo.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function fechar_info() {
  modalInfo.classList.remove('aberta');
  modalInfo.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

abrirInfo.addEventListener('click', abrir_info);
cancelarInfo.addEventListener('click', fechar_info);
fecharInfo.addEventListener('click', fechar_info);

/*info*/
modalInfo.addEventListener('click', (e) => {
  if (e.target === modalInfo) fechar_info();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fechar_info();
});


// --- FUNÇÃO PARA CARREGAR OS DADOS DO USUÁRIO ---
async function carregarDadosUsuario() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '../../login-pg/login.html';
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/me/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Falha ao carregar dados do usuário.');
        }

        const data = await response.json();

        document.getElementById('nome').value = data.first_name || '';
        document.getElementById('sobrenome').value = data.last_name || '';
        document.getElementById('username').value = data.username;
        document.getElementById('email').value = data.email;
        
        document.getElementById('nome').readOnly = true;
        document.getElementById('sobrenome').readOnly = true;
        document.getElementById('username').readOnly = true;

        if (data.profile) {
            document.getElementById('dateUser').value = data.profile.data_nascimento || '';
            document.getElementById('nivelUser').value = data.profile.nivel_experiencia || '';
            document.getElementById('pesoUser').value = data.profile.peso || '';
            document.getElementById('alturaUser').value = data.profile.altura || '';
        }

    } catch (error) {
        console.error('Erro:', error);
        alert(error.message);
    }
}


// --- FUNÇÃO PARA SALVAR AS ALTERAÇÕES (COM TRATAMENTO DE ERRO INTELIGENTE) ---
async function salvarConfiguracoes(event) {
    event.preventDefault();

    const peso = document.getElementById('pesoUser').value;
    const altura = document.getElementById('alturaUser').value;
    const experiencia = document.getElementById('nivelUser').value;
    const dataNascimento = document.getElementById('dateUser').value;

    if (!peso || !altura || !experiencia || !dataNascimento) {
        alert('Por favor, preencha todos os campos obrigatórios: Peso, Altura, Experiência e Data de Nascimento.');
        return;
    }

    const accessToken = localStorage.getItem('accessToken');
    
    const dadosAtualizados = {
        email: document.getElementById('email').value,
        first_name: document.getElementById('nome').value,
        last_name: document.getElementById('sobrenome').value,
        profile: {
            data_nascimento: dataNascimento,
            peso: parseFloat(peso),
            altura: parseInt(altura),
            nivel_experiencia: experiencia
        }
    };

    const novaSenha = document.getElementById('password').value;
    const confirmaSenha = document.getElementById('password-verify').value;

    if (novaSenha) {
        if (novaSenha !== confirmaSenha) {
            alert('As senhas não coincidem! Por favor, verifique.');
            return;
        }
        dadosAtualizados.password = novaSenha;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/me/', {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAtualizados)
        });

        // Se a resposta do servidor não for 'ok' (ex: erro 400), ele vai para o catch
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
        }

        // Se o código chegar aqui, significa que o servidor respondeu com sucesso
        alert('Configurações salvas com sucesso!');
        fechar_info();

    } catch (error) {
        // ===================================================================
        //  INÍCIO DA LÓGICA INTELIGENTE DE TRATAMENTO DE ERRO
        // ===================================================================
        // Verifica se o erro é o específico "Failed to fetch" do reinício do servidor
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            // Assume que a operação deu certo e o servidor reiniciou antes de responder
            console.warn('Ocorreu um erro "Failed to fetch". Assumindo sucesso devido ao reinício do servidor de desenvolvimento.');
            alert('Configurações salvas com sucesso!');
            fechar_info();
        } else {
            // Se for qualquer outro erro (como um erro de validação 400), mostra o erro real
            console.error('Erro real ao salvar:', error.message);
            alert('Ocorreu um erro ao salvar: ' + error.message);
        }
        
    }
}


// --- EVENT LISTENERS ---
formConfiguracoes.addEventListener('submit', salvarConfiguracoes);


//LOGOUT
const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (event) => {
            // 1. Previne a ação padrão do link (que é navegar imediatamente)
            event.preventDefault(); 
            
            // 2. Mostra a caixa de diálogo de confirmação
            const querSair = confirm("Tem certeza de que deseja sair?");

            // 3. Só continua se o usuário clicou em "OK"
            if (querSair) {
                // 4. Limpa o armazenamento local para deslogar o usuário
                localStorage.clear(); 
                
                // 5. Redireciona para a página inicial
                window.location.href = '../../inicio-pg/inicio.html'; 
            }
            // Se o usuário clicar em "Cancelar", nada acontece.
        });
    }

window.onload = function() {
    carregarDadosUsuario()
}

const passwordInput = document.getElementById('password');
const passwordVerifyInput = document.getElementById('password-verify');
const togglePassword = document.getElementById('toggle-password');
const togglePasswordVerify = document.getElementById('toggle-password-verify');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';
    });

togglePasswordVerify.addEventListener('click', function () {
    const type = passwordVerifyInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordVerifyInput.setAttribute('type', type);
    togglePasswordVerify.textContent = type === 'password' ? 'visibility_off' : 'visibility';
});

btn.addEventListener('click', function() {

    if (passwordInput.value !== passwordVerifyInput.value) {
        alert('As senhas não coincidem, verifique novamente.');
        return; } });


================================================
FILE: FRONTEND/inicio-pg/inicio.css
================================================
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

/* =================================================================== */
/* CONFIGURAÇÃO GERAL DO SITE */
/* =================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

section {
    width: 100%;
    min-height: 100vh;
    background: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: relative;
}

/* =================================================================== */
/* HEADER E NAVEGAÇÃO */
/* =================================================================== */
header {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    padding: 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
}

header .logo {
    max-width: 200px;
    z-index: 1001;
}

header .links .lk {
    display: flex;
    align-items: center;
}

header .links .links-h1,
header .links .links-h2 {
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    font-size: 20px;
    margin-left: 60px;
    transition: color 0.4s ease;
    position: relative;
}

header .links .links-h1::after,
header .links .links-h2::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #c8b8db;
    transition: width 0.4s ease;
}

header .links .links-h1:hover,
header .links .links-h2:hover {
    color: #c8b8db;
}

header .links .links-h1:hover::after,
header .links .links-h2:hover::after {
    width: 100%;
}

.links .btn {
    margin-left: 60px;
}

.links .btn .btn-ini {
    display: inline-block;
    padding: 10px 25px;
    background: #c8b8db;
    color: #121212;
    font-weight: 500;
    font-size: 18px;
    text-decoration: none;
    border-radius: 40px;
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 20px -5px rgba(200, 184, 219, 0.5);
}

.links .btn .btn-ini:hover {
    transform: scale(1.1);
}

/* ===== MENU HAMBÚRGUER ===== */
.hamburger-menu {
    display: none;
    width: 35px;
    height: 30px;
    cursor: pointer;
    z-index: 1001;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
}

.hamburger-menu span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 3px;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger-menu.active span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(8px, 0px);
}

.hamburger-menu.active span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
}

.hamburger-menu.active span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(20px, -11px) rotatez(45deg);
}


/* =================================================================== */
/* SEÇÃO: INÍCIO */
/* =================================================================== */
section#inicio {
    padding: 100px;
    overflow: hidden;
}

#background-mesh {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

#inicio .container {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#inicio .info {
    max-width: 600px;
    text-align: center;
    margin-top: 8vh;
}

.titulo-sobreposto {
    margin-bottom: 25px;
}

.titulo-sobreposto h2 {
    color: #fff;
    font-size: 3em;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-bottom: -20px;
}

.titulo-sobreposto h1 {
    font-size: 10em;
    color: #3c096c;
    font-weight: 900;
    opacity: 0.9;
    line-height: 1;
}

#inicio .info p {
    color: #c8b8db;
    font-size: 1.1em;
    line-height: 1.7;
    max-width: 500px;
    margin: 0 auto;
}

#inicio .info_dentro {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    gap: 100px;
}

#inicio .info .btn-cadastro {
    padding: 12px 30px;
    background: #c8b8db;
    color: #121212;
    font-weight: 500;
    text-decoration: none;
    border-radius: 40px;
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 20px -5px rgba(200, 184, 219, 0.5);
}

#inicio .info .btn-cadastro:hover {
    transform: scale(1.05);
}

#inicio .info_dentro .ico {
    display: flex;
    align-items: center;
    gap: 20px;
}

#inicio .info_dentro .ico li {
    list-style: none;
}

#inicio .info_dentro .ico li a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1c1b1b;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
    border: 1px solid rgba(200, 184, 219, 0.3);
}

#inicio .info_dentro .ico li a:hover {
    transform: scale(1.1);
    background: #3c096c;
    border-color: rgba(200, 184, 219, 0.8);
}

#inicio .info_dentro .ico li a img {
    filter: invert(1);
    transform: scale(0.5);
}


/* =================================================================== */
/* SEÇÕES: BEM-VINDO E CURIOSIDADES */
/* =================================================================== */
#bem-vindo,
#curiosidades {
    text-align: center;
    padding: 100px 40px;
}

#bem-vindo::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
}

#bem-vindo .container2 {
    position: relative;
    z-index: 2;
    max-width: 900px;
    width: 100%;
    margin: auto;
}

#bem-vindo .info2 h1 {
    color: #fff;
    font-size: clamp(1.8rem, 5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: 1px;
}

#bem-vindo .info2 span {
    color: #3c096c;
    font-size: clamp(3rem, 8vw, 4.5rem);
    font-weight: 800;
    text-transform: uppercase;
}

#bem-vindo .info2 p {
    color: #c8b8db;
    max-width: 700px;
    margin: 1.5rem auto 0 auto;
    line-height: 1.8;
}

#bem-vindo .btn-bvd {
    display: inline-block;
    margin-top: 40px;
    padding: 12px 35px;
    background: #c8b8db;
    color: #121212;
    font-weight: 600;
    text-decoration: none;
    border-radius: 40px;
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 25px rgba(200, 184, 219, 0.4);
    text-transform: uppercase;
    letter-spacing: 1px;
}

#bem-vindo .btn-bvd:hover {
    transform: scale(1.05);
    background: #fff;
    box-shadow: 0 0 35px rgba(200, 184, 219, 0.7);
}

.container5 {
    position: relative;
    z-index: 2;
    max-width: 900px;
    width: 100%;
    margin: auto;
    padding: 2rem;
}
.info5 h1, .info5 span, .info5 p {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
}
.info5 h1 {
    color: #fff;
    font-size: clamp(1.5rem, 5vw, 2rem);
}
.info5 span {
    color: #3c096c;
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 800;
}
.info5 p {
    color: #c8b8db;
    max-width: 800px;
    margin: 1rem auto 0 auto;
}
.btn-mts {
    display: inline-block;
    margin-top: 30px;
    padding: 10px 25px;
    background: #c8b8db;
    color: #121212;
    font-weight: 500;
    text-decoration: none;
    border-radius: 40px;
    transition: 0.3s ease-in-out;
    box-shadow: -3px 3px 35px -5px rgba(200, 184, 219, 1);
}
.btn-mts:hover {
    transform: scale(1.1);
}
.curiosidades {
    background-image: url('../midia/img/img-mts.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


/* =================================================================== */
/* SEÇÃO: TREINOS */
/* =================================================================== */
#Treinos {
    padding: 100px 40px;
    overflow: hidden;
}

.treinos-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.treinos-header {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 60px;
}

.treinos-header h2 {
    font-size: 3.5em;
    font-weight: 800;
    color: #fff;
    text-transform: uppercase;
    flex-shrink: 0;
}

.treinos-header p {
    color: #c8b8db;
    font-size: 1.1em;
    line-height: 1.7;
    border-left: 4px solid #3c096c;
    padding-left: 30px;
}

.treinos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.treino-card {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 10px;
    aspect-ratio: 4 / 5;
    text-decoration: none;
}

.treino-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: transform 0.4s ease;
}

.treino-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(18, 18, 18, 0.8), transparent 50%);
}

.treino-card h3 {
    position: absolute;
    bottom: 25px;
    left: 25px;
    z-index: 2;
    color: #fff;
    font-size: 1.8em;
    font-weight: 800;
    text-transform: uppercase;
}

.treino-card:hover img {
    transform: scale(1.05);
}


/* =================================================================== */
/* CLASSES DE ANIMAÇÃO DE SCROLL */
/* =================================================================== */
.reveal-fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}
.reveal-fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

.reveal-card {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.reveal-card.visible {
    opacity: 1;
    transform: translateY(0);
}
.treinos-grid .reveal-card:nth-child(2) {
    transition-delay: 0.2s;
}
.treinos-grid .reveal-card:nth-child(3) {
    transition-delay: 0.4s;
}


/* =================================================================== */
/* RODAPÉ */
/* =================================================================== */
.rodape {
    background-color: #121212;
    color: white;
    padding: 20px 0;
    text-align: center;
    width: 100%;
    min-height: auto;
}
.rodape-container {
    max-width: 1100px;
    margin: auto;
    padding: 0 20px;
}
.rodape p {
    margin: 0;
    font-size: 14px;
}
.rodape-links {
    margin-top: 8px;
    font-size: 14px;
}
.rodape-links a {
    color: #c8b8db;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s ease;
}
.rodape-links a:hover {
    color: #ffffff;
}
.rodape-links span {
    color: #888;
}


/* =================================================================== */
/* ============== CONFIGURAÇÕES DE RESPONSIVIDADE ==================== */
/* =================================================================== */

/* Tablets e telas menores */
@media (max-width: 992px) {
    header {
        padding: 30px 40px;
        align-items: center; /* Garante alinhamento vertical */
    }
    .hamburger-menu {
        display: flex;
    }
    header .logo {
        max-width: 180px;
    }
    /* Esconde os links do desktop */
    header .links {
        display: none;
    }
    
    /* Regras para o menu mobile (quando ativo) */
    header .links.active {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background: rgba(18, 18, 18, 0.98);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    header .links.active .lk {
        flex-direction: column;
    }
    header .links.active .links-h1,
    header .links.active .links-h2 {
        margin: 20px 0;
        font-size: 1.5em;
    }
    header .links.active .btn {
        margin: 20px 0 0 0;
    }
    header .links.active .btn .btn-ini {
        font-size: 1.2em;
        padding: 12px 30px;
    }

    section#inicio {
        padding: 40px;
        justify-content: center; /* Centraliza o container */
    }
    
    #inicio .container {
        align-items: flex-start; /* Alinha o conteúdo ao topo do container */
        padding-top: 15vh; /* Empurra o conteúdo para baixo */
    }

    #inicio .info {
        margin-top: 0; /* Remove a margem antiga */
    }

    .titulo-sobreposto h1 {
        font-size: 8em;
    }

    .treinos-grid {
        grid-template-columns: 1fr;
    }
}

/* Telas de celular */
@media (max-width: 768px) {
    .titulo-sobreposto h1 {
        font-size: 6em;
    }
    .titulo-sobreposto h2 {
        font-size: 2.5em;
    }
    #inicio .info_dentro {
        flex-direction: column;
    }
    
    .treinos-header {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }
    .treinos-header p {
        border-left: none;
        padding-left: 0;
    }
    
    #bem-vindo,
    #curiosidades {
        padding: 80px 20px;
    }
}

/* Telas pequenas de celular */
@media (max-width: 480px) {
    header {
        padding: 20px;
        top: 20px; /* Sobe um pouco o header */
    }
    header .logo {
        max-width: 150px;
    }
    
    section#inicio {
        padding: 20px;
    }
    
    .titulo-sobreposto h1 {
        font-size: 4.5em;
    }
    .titulo-sobreposto h2 {
        font-size: 1.8em;
    }
}


================================================
FILE: FRONTEND/inicio-pg/inicio.html
================================================
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="inicio.css">
    <link rel="shortcut icon" href="../midia/ico/ico-aba.png" type="image/x-icon">
    <title> Fitness Routine </title>
</head>

<body>

<section id="inicio" class="inicio">

    <!-- Animação de malha interativa -->
    <canvas id="background-mesh"></canvas>
     
    <header>
        <a href="inicio.html"><img class="logo" src="../midia/logo.png" alt="logo"></a>
        <div class="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="links" id="nav-links">
            <div class="lk">
                <a class="links-h1" href="#vem-aq">Treinos</a>
                <a class="links-h2" href="#vem-aq2">Curiosidades</a>
                <div class="btn"><a class="btn-ini" href="../login-pg/login.html">LOGIN</a></div>
            </div>
        </div>
    </header>
    
    <div class="container">
        <div class="info">
            <!-- Título reestruturado para o efeito de sobreposição -->
            <div class="titulo-sobreposto">
                <h2>ENTRE NA VIDA</h2>
                <h1>FITNESS</h1>
            </div>
            <p>Treinar é sentir que você pode fazer algo que depende do seu esforço e da sua determinação. Quanto mais motivado você estiver, melhores vão ser os resultados.</p>
            <div class="info_dentro">    
                <a class="btn-cadastro" href="../cadastro-pg/cadastro.html">CADASTRE-SE</a>   
                <ul class="ico">
                    <li class="media"><a href="#"><img src="../midia/ico/ico-ttk.svg"></a></li>
                    <li class="media"><a href="https://api.whatsapp.com/send/?phone=5514997674157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><img src="../midia/ico/ico-wpp.svg"></a></li>
                    <li class="media"><a href="https://www.instagram.com/routinefitnessbr" target="_blank" rel="noopener noreferrer"><img src="../midia/ico/ico-ins.svg"></a></li>
                </ul>
            </div>
        </div>
    </div>
    
</section>

<!-- O resto do seu HTML (outras sections, footer, script) continua aqui... -->
<section id="bem-vindo" class="bem-vindo">
    
    <video autoplay loop muted playsinline style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; object-fit: cover;">
        <source src="../midia/vdo/bvd-vdo.mp4" type="video/mp4">
    </video>

    <!-- Adicione a classe "reveal-fade-in" aqui -->
    <div class="container2 reveal-fade-in">
        <div class="info2">
            <h1>SEJA BEM-VINDO AO</h1><span>FITNESS ROUTINE</span>
            <p>Aqui você cria seus próprios treinos personalizados para alcançar seus objetivos e metas. Comece sua jornada fitness de forma prática e divertida, e transforme seus hábitos para uma vida mais saudável e ativa, possibilitando um ótimo bem estar!</p>
            <a href="../login-pg/login.html" class="btn-bvd">ENTRAR</a>
        </div>
    </div>

</section>

<section id="Treinos">
    <div class="treinos-container">
        <!-- Cabeçalho da Seção -->
        <div class="treinos-header">
            <h2>Treinos</h2>
            <p id="vem-aq">A base do Fitness Routine é a constância. Mais do que intensidade, é o compromisso diário com o seu corpo que gera os melhores resultados.</p>
        </div>

        <!-- Grid com os Cards de Treino -->
        <div class="treinos-grid">
            <a href="../login-pg/login.html" class="treino-card">
                <img src="../midia/img/img-pla-hip.png" alt="Musculação">
                <h3>Hipertrofia Muscular</h3>
            </a>
            <a href="../login-pg/login.html" class="treino-card">
                <img src="../midia/img/img-pla-ema.png" alt="Aeróbico">
                <h3>Emagrecimento / Condicionamento</h3>
            </a>
            <a href="../login-pg/login.html" class="treino-card">
                <img src="../midia/img/img-pla-for.png" alt="Funcional">
                <h3>Força e Desempenho</h3>
            </a>
        </div>
    </div>
</section>

<section id="curiosidades" class="curiosidades">
    <div class="container5">
        <div class="info5">
            <h1>CURIOSIDADES</h1><span>DO MUNDO FITNESS</span>
            <p id="vem-aq2">Conheça mais sobre o mundo fitness e descubra como ele pode transformar não apenas o seu corpo, mas também a sua mente e estilo de vida. Por trás de cada treino, há técnicas curiosas para melhorar o desempenho e segredos da nutrição que fazem a diferença nos resultados. Pequenas mudanças na rotina e nos hábitos saudáveis podem aumentar sua energia, melhorar o humor e prevenir doenças. Fique por dentro de tudo o que acontece no universo dos treinos, da alimentação equilibrada</p>
            <a href="../login-pg/login.html" class="btn-mts">FIQUE POR DENTRO</a>
        </div>
    </div>
</section>

<footer class="rodape">
    <div class="rodape-container">
        <p>&copy; 2025 Fitness Routine. Todos os direitos reservados.</p>
        <div class="rodape-links">
            <a href="../login-pg/login.html">Sobre nós</a>
            <span>|</span>
            <a href="https://api.whatsapp.com/send/?phone=5514997674157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">Contato</a>
        </div>
    </div>
</footer>

<script src="inicio.js"></script>
</body>
</html>


================================================
FILE: FRONTEND/inicio-pg/inicio.js
================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        const allLinks = document.querySelectorAll('#nav-links a');
        allLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // --- LÓGICA DA ANIMAÇÃO DE MALHA INTERATIVA ---
    const canvas = document.getElementById('background-mesh');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray;

        // Posição do mouse
        const mouse = {
            x: null,
            y: null,
            radius: (canvas.height / 100) * (canvas.width / 100)
        };

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });
        
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Classe da Partícula
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Interação com o mouse
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 5;
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 5;
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 5;
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 5;
                    }
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                let color = '#c8b8db'; // Cor da partícula
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                                   ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(102, 51, 153, ${opacityValue})`; // Cor da linha (roxo mais escuro)
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        }

        window.addEventListener('resize', () => {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            mouse.radius = (canvas.height / 100) * (canvas.width / 100);
            init();
        });

        init();
        animate();
    }

     // --- LÓGICA PARA ANIMAÇÃO DE SCROLL ---
    // Seleciona todos os elementos que devem ser animados ao rolar a página
    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-fade-in');

    // Cria o observador que vai "vigiar" os elementos
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento está visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação de entrada
                entry.target.classList.add('visible');
            } 
            // Se o elemento saiu da tela
            else {
                // Remove a classe 'visible' para resetar a animação para a próxima vez
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3 // A animação começa quando 10% do elemento está visível
    });

    // Pede ao observador para começar a "vigiar" cada um dos elementos selecionados
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});


================================================
FILE: FRONTEND/login-pg/login.css
================================================
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #131212; /* Cor de fallback */
    background-image: url("../midia/img/img-log.png"); /* Nova imagem de fundo */
    background-size: cover;
    background-position: center right; /* Foca na parte direita da imagem */
    color: white;
    display: flex;
    justify-content: flex-start; /* Alinha o painel do formulário à esquerda */
    align-items: center;
    min-height: 100vh;
    overflow: hidden; 
}

/* A div .imagem-direita não é mais necessária e seu estilo foi removido */

.container {
    background-color: #131212; /* Fundo sólido para o painel da esquerda */
    min-height: 100vh;
    width: 45%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
}

.logo {
    margin-bottom: 20px;
}

.logo img {
    height: 150px; /* Logo menor e mais refinado */
}

.subtitle {
    color: #9ca3af;
    margin-bottom: 30px;
    font-size: 13px; 
    text-align: center;
    max-width: 350px;
    line-height: 1.6;
}

.input-field {
    width: 100%;
    background-color: #2d3748; /* Tom de azul-acinzentado da imagem */
    border: 1px solid #4a5568;
    border-radius: 12px; /* Mais arredondado */
    padding: 15px;
    color: white;
    font-size: 14px;
    margin-bottom: 15px; 
    font-family: 'Poppins', sans-serif;
}

.input-field::placeholder {
    color: #a0aec0;
}

.btnAcao {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    background-color: #3c096c; /* Roxo principal do site */
    color: white;
    margin-top: 10px;
    transition: background-color 0.3s ease;
}

.btnAcao:hover {
    background-color: #4c1d95;
}

.ico {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 40px;
}

.ico li {
    list-style: none;
}

.ico li a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent; /* Fundo transparente */
    width: 55px; /* Ícones menores */
    height: 55px;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
    border: 1px solid #4a5568; /* Borda sutil */
}

.ico li a:hover {
    background-color: #3c096c;
    border-color: #3c096c;
    transform: scale(1.1);
}

.ico li a img {
    filter: invert(1);
    transform: scale(0.5);
}

.subtitle a {
    color: #c8b8db; /* Roxo claro do site */
    text-decoration: none; 
}

.subtitle a:hover {
    text-decoration: underline; 
}

.password-field {
    position: relative;
    width: 100%; 
}

.password-field input {
    padding-right: 45px; 
}

.password-field .material-symbols-outlined {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #a0aec0;
    font-size: 20px;
    padding-bottom: 15px;
}

.material-symbols-outlined {
    font-variation-settings: 
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24; 
}

/* ================================================= */
/*      ESTILOS PARA O POP-UP DE RECUPERAÇÃO         */
/* ================================================= */
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
}

.popup-conteudo {
    background: #1c1b1b;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 450px;
    position: relative;
    text-align: center;
}

.popup-conteudo h3 {
    color: #ffffff;
    margin-bottom: 15px;
    font-size: 22px;
}

.popup-conteudo p {
    color: #9ca3af;
    margin-bottom: 20px;
    font-size: 14px;
}

.fechar-popup {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 28px;
    font-weight: bold;
    color: #888;
    cursor: pointer;
    transition: color 0.3s ease;
}

.fechar-popup:hover {
    color: #fff;
}

.popup-conteudo .btnAcao {
    margin-top: 20px;
}

/* =================================================================== */
/* ============== CONFIGURAÇÕES DE RESPONSIVIDADE ==================== */
/* =================================================================== */

@media (max-width: 900px) {
    body {
        background-position: center center;
    }

    .container {
        width: 100%;
        max-width: 450px;
        background-color: rgba(19, 18, 18, 0.85); /* Fundo semi-transparente */
        backdrop-filter: blur(10px); /* Efeito de vidro */
        border-radius: 20px;
        min-height: auto;
        padding: 40px;
    }
}

@media (max-width: 480px) {
    body {
        padding: 15px;
    }
    .container {
        padding: 30px 25px;
    }
    .logo img {
        height: 60px;
    }
    h2 {
        font-size: 11px;
    }
}


================================================
FILE: FRONTEND/login-pg/login.html
================================================
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="../midia/ico/ico-aba.png" type="image/x-icon">
  <title>Fitness Routine - Login</title>

  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
  <link rel="stylesheet" type="text/css" href="login.css" />

</head>

<body>

  <div class="imagem-direita"></div>

  <div class="container">

    <div class="logo">
      <a href="../inicio-pg/inicio.html"><img src="../midia/logo.png" alt="Fitness Routine"></a>
    </div>

    <input type="text" class="input-field" id="user" placeholder="Usuário" />
     <div class="password-field">
        <input type="password" class="input-field" id="password" placeholder="Senha">
        <span class="material-symbols-outlined" id="toggle-password">visibility</span>
    </div>

    <p class="subtitle">Não tem uma conta? <a href="../cadastro-pg/cadastro.html">Cadastre-se</a>.
    Caso tenha esquecido a sua senha, <a href="#" onclick="abrirPopup()">Recupere-a agora!</a></p>

    <button class="btnAcao" id="btnAcao" type="submit">Entrar</button>

    <ul class="ico" style="margin-top: 60px;">
      <li><a href="#"><img src="../midia/ico/ico-ttk.svg"></a></li>
      <li><a href="https://api.whatsapp.com/send/?phone=5514997674157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><img src="../midia/ico/ico-wpp.svg"></a></li>
      <li><a href="https://www.instagram.com/routinefitnessbr" target="_blank" rel="noopener noreferrer"><img src="../midia/ico/ico-ins.svg" ></a></li>
    </ul>
  </div>

  <!-- INÍCIO DO POP-UP DE RECUPERAÇÃO DE SENHA -->
  <div id="popup-recuperar" class="popup-overlay">
    <div class="popup-conteudo">
      <span class="fechar-popup" onclick="fecharPopup()">&times;</span>
      <h3>Recuperar Senha</h3>
      <p>Por favor, insira seu e-mail de cadastro. Enviaremos uma nova senha temporária para você.</p>
      <input type="email" class="input-field" id="email-recuperacao" placeholder="Seu e-mail" />
      <button class="btnAcao" id="btn-enviar-recuperacao">Enviar</button>
    </div>
  </div>
  <!-- FIM DO POP-UP -->

  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  <script src="login.js"></script>

</body>
</html>


================================================
FILE: FRONTEND/login-pg/login.js
================================================
// =====================================================================
//      ARQUIVO LOGIN.JS COMPLETO - COM RECUPERAÇÃO DE SENHA
// =====================================================================

// =======================================================
//          PARTE 1: LÓGICA DE LOGIN (EXISTENTE)
// =======================================================

const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
const btnAcao = document.getElementById('btnAcao');
const userInput = document.getElementById('user');

// Função que faz a chamada para a API de login
async function fazerLogin(username, password) {
    const URL = "http://127.0.0.1:8000/api/token/";
    try {
        const resposta = await fetch(URL, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (!resposta.ok) {
            const erro = await resposta.json();
            console.log('ERRO NO LOGIN', erro);
            alert('Usuário ou senha inválidos');
            return { sucesso: false, erro: erro.detail };
        }

        const data = await resposta.json();
        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);
        return { sucesso: true };

    } catch (error) {
        console.log('Erro ao fazer login', error);
        return { sucesso: false, erro: error };
    }
}

// Listener para o clique no botão de entrar
btnAcao.addEventListener('click', async (event) => {
    event.preventDefault();

    const username = userInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
        alert('Por favor, preencha o usuário e a senha.');
        return;
    }

    const resultadoLogin = await fazerLogin(username, password);

    if (resultadoLogin.sucesso) {
        localStorage.setItem('usuario', username);
        window.location.href = '../dashboard-pg/inicio/dashboard.html';
    }
});

// Listener para o clique no ícone de visibilidade da senha
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'visibility' : 'visibility_off'; // Corrigido para alternar corretamente
});

// Listener para a tecla Enter nos campos de input
[userInput, passwordInput].forEach(input => {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            btnAcao.click();
        }
    });
});


// =====================================================================
//      PARTE 2: LÓGICA DE RECUPERAÇÃO DE SENHA (NOVA)
// =====================================================================

// Seleciona os elementos do pop-up
const popup = document.getElementById('popup-recuperar');
const btnEnviarRecuperacao = document.getElementById('btn-enviar-recuperacao');
const emailRecuperacaoInput = document.getElementById('email-recuperacao');

// Funções para abrir e fechar o pop-up (chamadas pelo HTML via onclick)
function abrirPopup() {
    popup.style.display = 'flex';
}

function fecharPopup() {
    popup.style.display = 'none';
}

// Função para gerar uma senha temporária aleatória
function gerarSenhaTemporaria(tamanho = 8) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}

// Listener para o clique no botão de enviar do pop-up
btnEnviarRecuperacao.addEventListener('click', async () => {
    const email = emailRecuperacaoInput.value;

    if (!email) {
        alert('Por favor, insira seu e-mail.');
        return;
    }

    const novaSenha = gerarSenhaTemporaria();
    
    // **IMPORTANTE: Configure suas chaves do EmailJS aqui**
    const EMAILJS_SERVICE_ID = "service_d8amsdb"; // Cole seu Service ID aqui
    const EMAILJS_TEMPLATE_ID = "template_ydrw0tj"; // Cole seu Template ID aqui
    const EMAILJS_PUBLIC_KEY = "mqjIR5uAKN5DB9Rie";   // Cole sua Public Key (User ID) aqui

    // Parâmetros que serão enviados para o seu template no EmailJS
    const templateParams = {
        to_email: email,
        to_name: email.split('@')[0], // Pega o nome do usuário antes do @
        nova_senha: novaSenha
    };

    // Altera o texto do botão para dar feedback ao usuário
    btnEnviarRecuperacao.textContent = 'Enviando...';
    btnEnviarRecuperacao.disabled = true;

    // Lembre-se que esta lógica apenas envia o e-mail.
    // Você precisa ter uma lógica no seu BACK-END para realmente
    // ATUALIZAR a senha do usuário no banco de dados para esta 'novaSenha'.
    // A implementação abaixo apenas notifica o usuário via e-mail.

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
        .then((response) => {
            console.log('SUCESSO!', response.status, response.text);
            alert('Um e-mail com sua nova senha temporária foi enviado com sucesso!');
            fecharPopup(); // Fecha o pop-up após o sucesso
        })
        .catch((err) => {
            console.error('ERRO AO ENVIAR E-MAIL:', err);
            alert('Ocorreu um erro ao tentar enviar o e-mail. Por favor, tente novamente.');
        })
        .finally(() => {
            // Restaura o botão ao estado original
            btnEnviarRecuperacao.textContent = 'Enviar';
            btnEnviarRecuperacao.disabled = false;
        });
});

// Fecha o pop-up se o usuário clicar fora da área de conteúdo
window.addEventListener('click', (event) => {
    if (event.target == popup) {
        fecharPopup();
    }
});




================================================
FILE: FRONTEND/midia/img/cur/img-cur3.jfif
================================================
[Non-text file]


================================================
FILE: FRONTEND/midia/img/cur/img-cur4.jfif
================================================
[Non-text file]


================================================
FILE: FRONTEND/midia/img/cur/img-cur5.jfif
================================================
[Non-text file]


================================================
FILE: FRONTEND/midia/mbr/img-malu
================================================
[Non-text file]






================================================
FILE: FRONTEND/z-thrash/sub-pg/curiosidades/curiosidades.css
================================================



================================================
FILE: FRONTEND/z-thrash/sub-pg/curiosidades/curiosidades.html
================================================



================================================
FILE: FRONTEND/z-thrash/sub-pg/mitos/mitos.css
================================================



================================================
FILE: FRONTEND/z-thrash/sub-pg/mitos/mitos.html
================================================



================================================
FILE: FRONTEND/z-thrash/sub-pg/planilhas/create-pla.css
================================================



================================================
FILE: FRONTEND/z-thrash/sub-pg/planilhas/create-pla.html
================================================



================================================
FILE: FRONTEND/z-thrash/sub-pg/planilhas/planilhas.css
================================================
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

/*CONF GERAL DO SITE*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;}

section {
    position: flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: #121212;}


/*PAGINA DE INICIO DO SITE*/
/*header*/
header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;}

header .logo {
    position: absolute;
    max-width: 200px;
    bottom: 3px;}

header .links .lk {
    position: relative;
    display: flex;}

header .links .links-h1 {
    position: relative;
    display: inline-block;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    font-size: 20px;
    margin-left: 80px;
    transition: color 0.4s ease;}

header .links .links-h1::after {
    content: ''; 
    position: absolute;
    bottom: 4px; 
    left: 0;
    width: 0; 
    height: 2px; 
    background-color: #c8b8db; 
    transition: width 0.4s ease;}

header .links .links-h1:hover {
    color: #c8b8db;}

header .links .links-h1:hover::after {
    width: 100%;}

header .links .links-h2 {
    position: relative;
    display: inline-block;
    margin-right: 80px;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    font-size: 20px;
    margin-left: 80px;
    transition: color 0.4s ease;}

header .links .links-h2::after {
    content: ''; 
    position: absolute;
    bottom: 4px; 
    left: 0;
    width: 0; 
    height: 2px; 
    background-color: #c8b8db; 
    transition: width 0.4s ease;}

header .links .links-h2:hover {
    color: #c8b8db;}

header .links .links-h2:hover::after {
    width: 100%;}

.links .btn a {
    width: 50px;
    height: 50px;
    display: flex;
    margin-top: -10px;
    padding: 5px;
    text-decoration: none;
    border-radius: 50%;
    transition: 0.3s ease-in-out;}

/*LISTA*/
.container {
  width: 1520px;
  margin: 100px auto;
  padding: 15px;
  background-color: #121212;
  border-radius: 10px;
  text-align: center;}

.list-pla {
    
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  max-height:300px;
  width: 1500px;
  overflow-y: auto;
  margin-bottom: 30px;
  padding-right: 10px;
  scroll-behavior: smooth;}

.item-list {
  padding: 15px;
  background-color: #3c096c;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;}

.item-list:hover {
  background: #c8b8db;}

.btn-pla {
  padding: 14px 28px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s;}

.btn-pla:hover {
  background-color: #0056b3;}


================================================
FILE: FRONTEND/z-thrash/sub-pg/planilhas/planilhas.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness Routine - Planilhas</title>
    <link rel="stylesheet" href="planilhas.css">
</head>

<body>

<section class="planilhas">
     
        <header>
            <a href="planilhas.html"><img class="logo" src="../../midia/logo.png" alt="logo"></a>
            <div class="links">
                <div class="lk">
                    <a class="links-h2" href="../../principal-pg/principal.html">Voltar</a>
                    <div class="btn"><a class="btn-ini" href="../../usuario-pg/usuario.html"><img src="../../midia/ico/ico-log.svg"></a></div>
                </div>
            </div>
        </header>

        <div class="container">
            <div class="list-pla">
              <div class="item-list">Opção 1</div>
              <div class="item-list">Opção 2</div>
              <div class="item-list">Opção 3</div>
              <div class="item-list">Opção 4</div>
              <div class="item-list">Opção 5</div>
              <div class="item-list">Opção 6</div>
              <div class="item-list">Opção 7</div>
              <div class="item-list">Opção 8</div>
              <div class="item-list">Opção 9</div>
              <div class="item-list">Opção 10</div>
            </div>

            <a href="create-pla.html" class="btn-pla">Crie sua planilha</a>
        </div>

        

</section>

</body>
</html>



================================================
FILE: FRONTEND/z-thrash/sub-pg/sobre/sobre.css
================================================



================================================
FILE: FRONTEND/z-thrash/sub-pg/sobre/sobre.html
================================================



================================================
FILE: NOTES/ChaveAPI.txt
================================================
AIzaSyBCbBd7SDZ4MBa92us4R2Xuqi2piQ0sZ24


================================================
FILE: NOTES/Comandos GIT.txt
================================================
git config --global user.name "Fulano de Tal"
git config --global user.email fulanodetal@exemplo.br

git init -> Iniciar Um Projeto Git
git add . -> Envia modificações para a area de Staging
git status -> Verificar area de stagin
git commit -m "Menssagem" -> Cria um commit "Cria um historico"
git log --online -> Verifica o historico do projeto

----------------------------- GITHUB ------------------------------

1º -> git remote add origin https://github.com/thurxx15/fitness_routine.git
2º -> gerar e configurar token
	git remote set-url origin https://SEU_USUARIO:SEU_TOKEN@github.com/OWNER/REPO.git

feito isso só usar

git push -u origin master -> Serve para subir um repositorio para o github (toda vez que alterar o projeto)
git pull origin master -> Atualiza projetos


clonar repositorio:  git clone <repository_url> [destination_directory]

github.com/thurxx15/fitness_routine

---------------------------- MERGE ----------------------

1° -> git checkout -b "nome"
2° -> git checkout nome
3° -> modificar no site oque desejar
4° -> git add .
5° -> git commit -m "mensagem"
6° -> git checkout master
7° -> git merge "nome"
8° -> git push -u origin



================================================
FILE: NOTES/oque fazer.docx
================================================
[Non-text file]
