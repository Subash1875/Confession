from rest_framework import serializers
from app.models.ConfessionModel import Confessions


class ConfessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Confessions
        fields = ["content"]