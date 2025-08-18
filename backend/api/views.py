from django.shortcuts import render, get_object_or_404
from api.Serializer import ConfessionSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from app.models.ConfessionModel import Confessions
from rest_framework import status

# Create your views here.
class ConfessionView(APIView):
    def get(self, request):
        confessions = Confessions.objects.all()
        result = ConfessionSerializer(confessions, many=True)
        return Response(result.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        confession = ConfessionSerializer(data=request.data)

        if confession.is_valid():
            confession.save(user=request.user)
            return Response(status=status.HTTP_201_CREATED)
        
        return Response(confession.errors, status=status.HTTP_400_BAD_REQUEST)



class PkConfessionView(APIView):
    def get_confession(self, id):
        confession = get_object_or_404(Confessions, id=id)
        return confession

    def get(self, request, id):
        result = ConfessionSerializer(self.get_confession(id))
        return Response(result.data, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        confession = self.get_confession(id)
        result = ConfessionSerializer(confession, data=request.data, partial=True)
        
        if result.is_valid():
            result.save()
            return Response(result.data, status=status.HTTP_200_OK)
        
        return Response(result.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        confession = self.get_confession(id)
        confession.delete()
        return Response(status=status.HTTP_200_OK)
