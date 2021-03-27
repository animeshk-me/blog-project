from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Article

from rest_framework import status
from django.contrib import messages

from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ArticleSerializer

# def blog_home_view(request):
#     return render(request, 'blogtemp/blog_home.html', {})



# def article_detail_view(request, my_id):
#     try:
#         obj = Article.objects.get(id=my_id)
#     except Article.DoesNotExist:
#         raise Http404
#     my_context = {
#         'article_object' : obj

#     }
#     return render(request, 'blogtemp/article_detail.html', my_context) 



# def article_create_view(request):
#     my_form = ArticleForm(request.POST or None)

#     if my_form.is_valid():
#         my_form.save()
#         my_form = ArticleForm()
#     my_context = {
#         'form' : my_form

#     }
#     messages.info(request, 'A new article created.')
#     return render(request, 'blogtemp/article_create.html', my_context)


# def article_list_view(request):
#     queryset = Article.objects.all()
#     my_context = {
#         'Object_list': queryset

#     }
#     return render(request, 'blogtemp/article_list.html', my_context)


# def article_delete_view(request, my_id):
#     try:
#         obj = Article.objects.get(id=my_id)
#     except Article.DoesNotExist:
#         raise Http404
#     if request.method == 'POST':
#         obj.delete()
#         return redirect('/blogs/all/')
#     my_context = {
#         'article_object' : obj

#     }
#     messages.info(request, 'Deleted successfully, redirecting to the home page.')
#     return render(request, 'blogtemp/article_delete.html', my_context)


# @csrf_exempt
@api_view(['GET', 'POST'])
def article_list(request):
    if request.method == 'GET':
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ArticleSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Basic RUD operations
@api_view(['GET', 'PUT', 'DELETE'])
def article_detail(request, pk):
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