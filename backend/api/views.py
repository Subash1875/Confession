from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes


# models
from app.models.ConfessionModel import Confessions
from django.contrib.auth.models import User

# serializers
from api.serializer.ConfessionSerializer import ConfessionReadSerializer, ConfessionWriteSerializer
from api.serializer.UserSerializer import UserSerializer


# Create your views here.
class ConfessionView(APIView):
    def get(self, request):
        confessions = Confessions.objects.all()
        result = ConfessionReadSerializer(confessions, many=True)
        return Response(result.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        confession = ConfessionWriteSerializer(data=request.data)

        if confession.is_valid():
            confession.save(user=request.user)
            return Response(status=status.HTTP_201_CREATED)
        
        return Response(confession.errors, status=status.HTTP_400_BAD_REQUEST)



class PkConfessionView(APIView):
    def get_confession(self, id):
        confession = get_object_or_404(Confessions, id=id)
        return confession

    def get(self, request, id):
        result = ConfessionReadSerializer(self.get_confession(id))
        return Response(result.data, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        confession = self.get_confession(id)
        result = ConfessionWriteSerializer(confession, data=request.data, partial=True)
        
        if result.is_valid():
            result.save()
            return Response(result.data, status=status.HTTP_200_OK)
        
        return Response(result.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        confession = self.get_confession(id)
        confession.delete()
        return Response(status=status.HTTP_200_OK)
    


class UserConfessions(APIView):
    def get(self, request, user):
        currentUser = get_object_or_404(User, username=user)
        confessions = currentUser.confessions.all()
        result = ConfessionReadSerializer(confessions, many=True)
        return Response(result.data, status=status.HTTP_200_OK)



@api_view(["POST"])
@permission_classes([AllowAny])
def signup(request):
    form = UserSerializer(data=request.data)

    if form.is_valid():
        form.save()
        user = User.objects.get(username=request.data["username"])
        user.set_password(raw_password=request.data["password"])
        user.save()
        
        token, _ = Token.objects.get_or_create(user=user)
        print(token)
        return Response({"token" : token.key, "username" : user.username}, status=status.HTTP_201_CREATED)
    
    return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(["POST"])
@permission_classes([AllowAny])
def login(request):
    user = get_object_or_404(User, username=request.data["username"])

    if not user.check_password(raw_password=request.data["password"]):
        return Response({"detail" : "password is incorrect"}, status=status.HTTP_400_BAD_REQUEST)
    
    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token" : token.key, "username" : user.username})