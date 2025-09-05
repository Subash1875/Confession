from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import messages

from app.models.ConfessionModel import Confessions
from app.models.CommentModel import Comments

from app.forms.ConfessionForm import ConfessionForm
from app.forms.CommentForm import CommentForm


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


@login_required(login_url="login")
def profile(request, user):

    try:
        checkUser = User.objects.get(username=user)
        confessions = checkUser.confessions.all()
    except User.DoesNotExist:
        checkUser = None
        confessions = []

    return render(request, "profile.html", {"confessions" : confessions, "user" : checkUser})



@login_required(login_url="login")
def PkConfession(request, id):
    confession = get_object_or_404(Confessions, id=id)
    comments = confession.comments.all()

    if request.method == "POST":
        commentForm = CommentForm(request.POST)

        if commentForm.is_valid():
            commentForm = commentForm.save(commit=False)
            commentForm.user = request.user
            commentForm.confession = confession
            commentForm.save()
            return redirect("confession", id=confession.id)
    else:
        commentForm = CommentForm()

    return render(request, "Confession.html", {"confession" : confession, "commentForm" : commentForm, "comments" : comments})