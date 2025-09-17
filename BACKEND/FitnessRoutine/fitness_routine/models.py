# fitness_routine/models.py

from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    # Níveis de experiência definidos como escolhas para consistência
    EXPERIENCIA_CHOICES = [
        ('iniciante', 'Iniciante'),
        ('intermediario', 'Intermediário'),
        ('avancado', 'Avançado'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    data_nascimento = models.DateField(null=True, blank=True)
    peso = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    altura = models.PositiveIntegerField(null=True, blank=True) # Em centímetros
    nivel_experiencia = models.CharField(max_length=20, choices=EXPERIENCIA_CHOICES, null=True, blank=True)

    def __str__(self):
        return f'Perfil de {self.user.username}'

# Adicione um signal para criar o perfil automaticamente quando um usuário for criado
from django.db.models.signals import post_save
from django.dispatch import receiver

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
    objetivo = models.CharField(max_length=100) # Ex: Hipertrofia, Resistência
    data_criacao = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Treino '{self.nome_treino}' de {self.user.username}"

class Exercicio(models.Model):
    treino = models.ForeignKey(Treino, on_delete=models.CASCADE, related_name='exercicios')
    nome_exercicio = models.CharField(max_length=100)
    series = models.CharField(max_length=20)
    repeticoes = models.CharField(max_length=20)
    descanso = models.CharField(max_length=50, help_text="Tempo de descanso entre as séries")
    grupo_muscular = models.CharField(max_length=50)

    def __str__(self):
        return self.nome_exercicio