# fitness_routine/serializer.py

from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from .models import Profile, Treino, Exercicio

#1 Serializers de Suporte
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        # =======================================================
        # -> 2. ADICIONE 'profile_image' À LISTA DE CAMPOS
        # =======================================================
        fields = ('data_nascimento', 'peso', 'altura', 'nivel_experiencia', 'profile_image')

# ... (UserSerializer para registro continua igual)
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name')
    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        user.first_name = validated_data.get('first_name', '')
        user.last_name = validated_data.get('last_name', '')
        user.save()
        return user

#3 Serializer Principal para Gerenciar o Perfil do Usuário
class UserProfileSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'profile', 'password')
        read_only_fields = ('id', 'username')
        extra_kwargs = { 'password': {'write_only': True, 'required': False} }

    def update(self, instance, validated_data):
        if 'profile' in validated_data:
            profile_data = validated_data.pop('profile')
            profile = instance.profile
            
            profile.data_nascimento = profile_data.get('data_nascimento', profile.data_nascimento)
            profile.peso = profile_data.get('peso', profile.peso)
            profile.altura = profile_data.get('altura', profile.altura)
            profile.nivel_experiencia = profile_data.get('nivel_experiencia', profile.nivel_experiencia)
            
            # =======================================================
            # -> 3. ADICIONE A LÓGICA PARA ATUALIZAR A IMAGEM
            # =======================================================
            # O DRF lida com o upload do arquivo. Só precisamos atribuí-lo.
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

# ... (TreinoSerializer e ExercicioSerializer continuam iguais)
class ExercicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercicio
        fields = ['nome_exercicio', 'series', 'repeticoes', 'descanso', 'grupo_muscular', 'dia_semana']

class TreinoSerializer(serializers.ModelSerializer):
    exercicios = ExercicioSerializer(many=True, read_only=True)
    class Meta:
        model = Treino
        fields = ['id', 'nome_treino', 'dias_semana', 'objetivo', 'data_criacao', 'exercicios']