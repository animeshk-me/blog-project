from django.urls import path
from .models import Article
from .views import (
    article_list,
    article_detail,
    user_article_detail,
    user_article_list
)

app_name = 'article'

urlpatterns = [
    path('', article_list),
    path('<int:pk>/', article_detail),
    path('user/list/', user_article_list),
    path('user/<int:pk>/', user_article_detail)
]