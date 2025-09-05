from rest_framework import serializers
from app.models.CommentModel import Comments


class CommentWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ["comment"]


class CommentReadSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    class Meta:
        model = Comments
        fields = ["user", "comment"]