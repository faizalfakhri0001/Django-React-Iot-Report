from django.urls import re_path, path

from .consumers import DataConsumer

websocket_urlpatterns = [
    # re_path(r'ws/channel/(?P<api_key>\w+)/$', DataConsumer),
    path('channel/<str:room>/', DataConsumer),
]
