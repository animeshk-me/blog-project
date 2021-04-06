"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
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
from django.urls import path, include, re_path
from django.views.generic import TemplateView


react_views_regex = r'\/|\b'.join([
    'contact',
    'about',
    'register',
    'login',
]) + r'\/'


urlpatterns = [
    path('admin/', admin.site.urls),
    path('articles/', include('article.urls')),
    path('api/', include('authentication.urls')),
    path('', TemplateView.as_view(template_name="index.html"), name='index'),
    re_path(react_views_regex, TemplateView.as_view(template_name="index.html"), name='index'),
    path('article-list/<int:id>', TemplateView.as_view(template_name="index.html"), name='index'),
    path('my-articles/', TemplateView.as_view(template_name="index.html"), name='index'),
    path('my-articles/<int:id>', TemplateView.as_view(template_name="index.html"), name='index'),
    path('my-articles/new/', TemplateView.as_view(template_name="index.html"), name='index'),
    
    # re_path(r'^(?:*)/?$', TemplateView.as_view(template_name="index.html")),

    # re_path(r'^api/students/$', views.students_list),
    # re_path(r'^api/students/([0-9])$', views.students_detail),

]
