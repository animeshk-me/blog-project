from rest_framework import serializers
from .models import Article


class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField(source="get_author_name")
    class Meta:
        model = Article
        fields = '__all__'
    def get_author(self, obj):
        if(obj.author is not None):
            return obj.author.user.first_name + " " + obj.author.user.last_name