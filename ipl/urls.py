"""ipl URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

#static upload files
from django.conf.urls.static import static
from django.conf import settings

from mainpage.views import get_main_page, get_services, get_contacts, \
    get_info


urlpatterns = [
    path('main/', get_main_page, name='ph_main'),
    path('services/', get_services, name='ph_services'),
    path('contacts/', get_contacts, name='ph_contacts'),
    path('info/', get_info, name='ph_info'),
    path('admin/', admin.site.urls),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
