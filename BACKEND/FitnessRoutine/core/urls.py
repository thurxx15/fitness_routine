# urls.py (VERSÃO CORRIGIDA E SIMPLIFICADA)

from django.urls import path
from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from fitness_routine.views import (
    UserCreate, UserProfileView, GerarTreinoView, 
    TreinoListView, LogoutView, TreinoDetailView # <-- Apenas TreinoDetailView é necessária aqui
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # Rotas de Autenticação e Usuário
    path('api/register/', UserCreate.as_view(), name='user_register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/me/', UserProfileView.as_view(), name='user_profile'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
    
    # Rotas de Treino
    path('api/treinos/', TreinoListView.as_view(), name='treino_list'),
    path('api/gerar-treino/', GerarTreinoView.as_view(), name='gerar_treino'),

    path('api/logout/', LogoutView.as_view(), name='logout'),
    path('api/treino-detalhe/<int:pk>/', TreinoDetailView.as_view(), name='treino-detail'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)