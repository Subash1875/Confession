# components
from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required


# forms
from app.forms.CustomUserForm import CustomUserForm
from app.forms.CustomLoginForm import CustomLoginForm


# views
def signup(request):
    if request.method == "POST":
        userForm = CustomUserForm(request.POST)

        if userForm.is_valid():
            user = userForm.save()
            login(request, user)
            return redirect("index")

    else:
        userForm = CustomUserForm()

    return render(request, "signup.html", {"userForm" : userForm})


def userLogin(request):
    if request.method == "POST":
        loginForm = CustomLoginForm(request, data=request.POST)

        if loginForm.is_valid():
            user = loginForm.get_user()
            print(user)
            login(request, user)
            return redirect("index")
        
    else:
        loginForm = CustomLoginForm()

    return render(request, "login.html", {"loginForm" : loginForm})


@login_required(login_url="login")
def userLogout(request):
    logout(request)
    return redirect("login")