from django.urls import path
from api import views

urlpatterns = [
    path("confessions/", views.ConfessionView.as_view()),
    path("confessions/<int:id>", views.PkConfessionView.as_view()),
    path("signup/", views.signup),
    path("login/", views.login),
]