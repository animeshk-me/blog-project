from django.db import models


class Article(models.Model):
    title   = models.CharField(("Enter title"), max_length=100)
    author = models.TextField(blank=False, null=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    content = models.TextField(blank=False, null=False)

    # active  = models.BooleanField(default=False)


    def get_absolute_url(self):
        return reverse("Blog_app:article-detail", kwargs={"my_id": self.id})