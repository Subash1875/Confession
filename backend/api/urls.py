from django.urls import path
from api import views

urlpatterns = [
    path("confessions/", views.ConfessionView.as_view()),
    path("confessions/<int:id>", views.PkConfessionView.as_view()),
    path("confessions/<str:user>", views.UserConfessions.as_view()),
    path("<int:id>/comments/", views.CommentView.as_view()),
    path("user/signup/", views.signup),
    path("user/login/", views.login),
]