from django.urls import path
from app.views import authViews, views


urlpatterns = [
    path("", views.index, name="index"),

    # auth routes
    path("signup", authViews.signup, name="signup"),
    path("login", authViews.userLogin, name="login"),
    path("logout", authViews.userLogout, name="logout"),
]