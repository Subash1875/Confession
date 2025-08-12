from django.db import models
from django.contrib.auth.models import User

class Confessions(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="confessions")
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)