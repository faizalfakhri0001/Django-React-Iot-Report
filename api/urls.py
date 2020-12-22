from django.urls import path

from .views import ChannelPublic

app_name = 'api'
urlpatterns = [
    path('channel/', ChannelPublic.as_view()),
]
