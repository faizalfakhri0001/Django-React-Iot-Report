from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView, RetrieveAPIView
from project.models import IotChannel
from .serializers import IotChannelPublicSerializer


class ChannelPublic(ListAPIView):
    serializer_class = IotChannelPublicSerializer
    queryset = IotChannel.objects.all()
