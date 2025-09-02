from rest_framework import serializers
from app.models.ConfessionModel import Confessions


class ConfessionReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Confessions
        fields = "__all__"


class ConfessionWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Confessions
        fields = ["content"]