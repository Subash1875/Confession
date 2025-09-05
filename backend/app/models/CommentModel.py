from django.db import models
from django.contrib.auth.models import User
from app.models.ConfessionModel import Confessions

class Comments(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    confession = models.ForeignKey(Confessions, on_delete=models.CASCADE, related_name="comments")
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.comment