from django.shortcuts import render, get_object_or_404
from api.Serializer import ConfessionSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from app.models.ConfessionModel import Confessions
from rest_framework import status

# Create your views here.
class ConfessionView(APIView):
    pass