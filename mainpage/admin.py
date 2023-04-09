from django.contrib import admin

from .models import Services


class ServicesAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'price', 'published')
    list_display_links = ('title', 'content')
    search_fields = ('title', 'content')


admin.site.register(Services, ServicesAdmin)
