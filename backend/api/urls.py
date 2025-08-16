from django.urls import path
from api import views

urlpatterns = [
    path("confession/<int:pk>", views.ConfessionView.as_view()),
    path("confession/", views.ConfessionView.as_view())
]