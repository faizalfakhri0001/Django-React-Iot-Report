from django.contrib import admin
from .models import Data, Field, IotChannel


class DataAdmin(admin.TabularInline):
    model = Data


class FieldAdmin(admin.ModelAdmin):
    inlines = [DataAdmin]
    ordering = ('id',)
    readonly_fields = ('code',)

    class Meta:
        model = Field


class IotChannelAdmin(admin.ModelAdmin):
    list_display = ('name', )
    list_filter = ('status', )
    search_fields = ('name',)
    readonly_fields = ('api_key',)
    date_hierarchy = 'created_at'
    ordering = ('id',)
    # exclude = ('author',)

    def save_model(self, request, obj, form, change):
        obj.author = request.user
        super().save_model(request, obj, form, change)


admin.site.register(IotChannel, IotChannelAdmin)
admin.site.register(Field, FieldAdmin)
