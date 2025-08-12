from django.shortcuts import render, redirect, get_object_or_404
from app.forms.ConfessionForm import ConfessionForm
from django.contrib.auth.decorators import login_required
from app.models.ConfessionModel import Confessions
from django.contrib.auth.models import User
from django.contrib import messages


@login_required(login_url="login")
def index(request):
    confessions = Confessions.objects.all()

    return render(request, "index.html", {"confessions" : confessions})


@login_required(login_url="login")
def addConfession(request):
    if request.method == "POST":
        confessionForm = ConfessionForm(request.POST)

        if confessionForm.is_valid():
            confessionForm = confessionForm.save(commit=False)
            confessionForm.user = request.user
            confessionForm.save()
            return redirect("index")

    else:
        confessionForm = ConfessionForm()

    return render(request, "addConfession.html", {"confessionForm" : confessionForm})


def profile(request, user):

    try:
        checkUser = User.objects.get(username=user)
        confessions = checkUser.confessions.all()
    except User.DoesNotExist:
        checkUser = None
        confessions = []

    return render(request, "profile.html", {"confessions" : confessions, "user" : checkUser})