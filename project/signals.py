from django.db.models.signals import post_save, post_delete, pre_save
from django.dispatch import receiver
from .models import IotChannel, Field


@receiver(post_save, sender=IotChannel)
def create_ApiKey(sender, instance, created, **kwargs):
    if created:
        Field.objects.create(channel=instance, name=str(instance.name) + " Field", code=str(instance.api_key))
