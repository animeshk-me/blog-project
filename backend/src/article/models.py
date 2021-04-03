from django.db import models
from authors.models import Author

class Article(models.Model):
    title   = models.CharField(("Enter title"), max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, blank=True, null=True)
    # author = models.TextField(blank=False, null=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    content = models.TextField(blank=False, null=False)
    # likes = models.IntegerField(default=0, null=False)
    # dislikes = models.IntegerField(default=0, null=False)

    def __str__(self):
        return self.title
    