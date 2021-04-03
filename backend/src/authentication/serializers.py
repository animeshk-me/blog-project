from rest_framework import serializers
# from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import User
from authors.models import Author

class UserSerializerNormal(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class UserSerializerRegister(serializers.ModelSerializer):

    # token = serializers.SerializerMethodField()
    # password = serializers.CharField(write_only=True)

    # def get_token(self, obj):
    #     api_settings.
    #     jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
    #     jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

    #     payload = jwt_payload_handler(obj)
    #     token = jwt_encode_handler(payload)
    #     return token

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', )

    def create(self, validated_data):
        username_new = validated_data.pop('username')
        password_new = validated_data.pop('password')
        first_name_new = validated_data.pop('first_name')
        last_name_new = validated_data.pop('last_name')
        instance = User.objects.create_user(
            username_new,
            password = password_new,
            first_name=first_name_new,  
            last_name=last_name_new
        )
        # return user
        instance.save()
        new_author = Author.objects.create(user=instance, ranking=0)
        new_author.save()
        return instance
