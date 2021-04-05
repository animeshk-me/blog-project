from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Article

from rest_framework import status, permissions, generics, filters
from django.contrib import messages

from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ArticleSerializer


#***************************** Allowed to all ************************************#


# @api_view(['GET'])
class ArticleSearchAPIView(generics.ListCreateAPIView):
    search_fields = ['title', 'content']
    filter_backends = (filters.SearchFilter,)
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

# @csrf_exempt
@api_view(['GET'])
def article_list(request):
    if request.method == 'GET':
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)


# Basic RUD operations
@api_view(['GET', 'PUT'])
def article_detail(request, pk):
    try:
        article = Article.objects.get(pk=pk)
    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':         # retrieve
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    elif request.method == 'PUT':        # likes/dislikes
        data = JSONParser().parse(request) 
        serializer = ArticleSerializer(article, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



#*********************************************************************************#

#*********************** Only for current auth user ******************************#
# @csrf_exempt
@api_view(['GET', 'POST'])
def user_article_list(request):
    permission_classes = (permissions.IsAuthenticated,)
    if request.method == 'GET':
        articles = request.user.author.article_set.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ArticleSerializer(data=data)
        if serializer.is_valid():
            serializer_data = serializer.validated_data
            print(serializer_data)
            instance = Article.objects.create(
                title=serializer_data['title'],
                author=request.user.author,
                content=serializer_data['content']
            )
            instance.save()
            return Response(serializer_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Basic RUD operations
@api_view(['GET', 'PUT', 'DELETE'])
def user_article_detail(request, pk):
    permission_classes = (permissions.IsAuthenticated,)
    try:
        article = Article.objects.get(pk=pk)
    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':         # retrieve
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    elif request.method == 'PUT':        # update
        data = JSONParser().parse(request) 
        serializer = ArticleSerializer(article, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':  # delete
        article.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)