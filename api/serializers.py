from rest_framework import serializers
from project.models import IotChannel, Field


class IotChannelPublicSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()

    class Meta:
        model = IotChannel
        fields = ['id', 'name', 'descriptions', 'author']
        depth = 1

    def get_author(self, obj):
        return obj.author.username
