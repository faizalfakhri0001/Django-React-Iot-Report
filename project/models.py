from django.db import models
from django.contrib.auth import get_user_model
from django.utils.crypto import get_random_string

User = get_user_model()


class IotChannel(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    descriptions = models.TextField()
    author = models.ForeignKey(User, related_name="channel", null=True, blank=True, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
    api_key = models.CharField(max_length=15, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"

    def save(self, *args, **kwargs):
        key = "Iot" + "." + get_random_string(11)
        self.api_key = key
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'Iot Channel'
        verbose_name_plural = 'Iot Channels'


class Field(models.Model):
    channel = models.ForeignKey(IotChannel, related_name="field", on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=50, null=True, blank=True)
    code = models.CharField(max_length=50, null=True, blank=True, editable=False)
    status = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name}"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)


class Data(models.Model):
    field = models.ForeignKey(Field, related_name="data", on_delete=models.CASCADE)
    value = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
