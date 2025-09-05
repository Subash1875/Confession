from django.contrib import admin
from app.models.ConfessionModel import Confessions
from app.models.CommentModel import Comments

# Register your models here.
admin.site.register(Confessions)
admin.site.register(Comments)