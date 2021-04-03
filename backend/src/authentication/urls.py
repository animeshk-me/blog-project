from django.urls import path
from .views import (
    current_user_view,
    UserRegister,
    BlacklistTokenView
)
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name = 'authentication'

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'), # LOGIN
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), # get refresh token
    path('current-user/', current_user_view, name='current_user'), # get current user data
    path('register-user/', UserRegister.as_view(), name='register_user'), # register new user
    path('logout/', BlacklistTokenView.as_view(), name='logout_blacklist'), #logout the user
    # path('<int:pk>/', article_detail),
]