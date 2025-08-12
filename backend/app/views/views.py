from django.shortcuts import render


def index(request):
    return render(request, "index.html")



def addConfession(request):
    return render(request, "addConfession.html")