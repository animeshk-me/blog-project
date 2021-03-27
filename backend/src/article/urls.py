from django.urls import path
from .models import Article
from .views import (
    article_list,
    article_detail
)

app_name = 'article'

urlpatterns = [
    path('', article_list),
    path('<int:pk>/', article_detail),
]