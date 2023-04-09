from django.shortcuts import render, redirect
from django.http import HttpResponse, FileResponse, JsonResponse, StreamingHttpResponse, HttpResponseRedirect, HttpResponseNotFound, HttpResponseBadRequest
from django.template.loader import get_template, render_to_string
from django.template.response import TemplateResponse
from django.urls import reverse, reverse_lazy

from django.views.generic.base import TemplateView, View

from .models import Services


def get_main_page(request, **kwargs):
    context = create_context(request)
    return render(request, 'main/main.html', context)


def get_services(request, **kwargs):
    context = create_context(request)
    return render(request, 'services/services.html', context)


def get_contacts(request, **kwargs):
    context = create_context(request)
    return render(request, 'contacts/contacts.html', context)


def get_info(request, **kwargs):
    context = create_context(request)
    return render(request, 'info/info.html', context)

def create_context(request):
    services = Services.objects.all()
    path = request.path[1:-1]
    context = {'services': services, 'path': path}
    print('Путь: ', request.path)
    return context
