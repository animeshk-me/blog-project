from django.db import models
from django.contrib.auth.models import User

class Author(models.Model):
    user   = models.OneToOneField(User, on_delete=models.CASCADE)
    ranking = models.IntegerField(default=0, blank=True, null=False)

    def __str__(self):
        return self.user.username
    