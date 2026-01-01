from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE,
                               related_name='posts')
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=((0, 'Draft'), (1, 'Published')), default=0)

    def __str__(self):
        return self.title