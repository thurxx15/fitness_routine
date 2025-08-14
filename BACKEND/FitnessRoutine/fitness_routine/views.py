from rest_framework import viewsets

from rest_framework import generics, permissions
from .serializer import UserSerializer

class UserCreate(generics.CreateAPIView):
    queryset = UserSerializer.Meta.model.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer
