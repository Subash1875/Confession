from django.shortcuts import render, redirect
from app.forms.ConfessionForm import ConfessionForm
from django.contrib.auth.decorators import login_required
from app.models.ConfessionModel import Confessions


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