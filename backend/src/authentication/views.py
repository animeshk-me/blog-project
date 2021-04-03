from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializerNormal, UserSerializerRegister

from rest_framework_simplejwt.tokens import RefreshToken


# return the currently logged in user's data based on only the username
@api_view(['GET'])
def current_user_view(request):
    serializer = UserSerializerNormal(request.user) 
    print(serializer)
    return Response(serializer.data)


class UserRegister(APIView):
    # 'AllowAny': Because the user is till unregistered.
    permission_classes = (permissions.AllowAny,)

    # If serializer data is valid then save this user
    def post(self, request, format=None):
        serializer = UserSerializerRegister(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenView(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)