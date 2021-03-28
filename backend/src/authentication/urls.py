from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
# from .models import Article
# from .views import (
    # article_list,
    # article_detail
# )

app_name = 'authentication'

urlpatterns = [
    path('', obtain_jwt_token),
    # path('<int:pk>/', article_detail),
]