from django.urls import path
from app.views import authViews, views


urlpatterns = [
    path("", views.index, name="index"),
    path("addConfession", views.addConfession, name="addConfession"),
    path("<str:user>/profile", views.profile, name="profile"),

    # auth routes
    path("signup", authViews.signup, name="signup"),
    path("login", authViews.userLogin, name="login"),
    path("logout", authViews.userLogout, name="logout"),
]