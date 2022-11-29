from rest_framework.serializers import ModelSerializer
from base.models import Favorite, Movie
from rest_framework import serializers


class FavoriteSerializer(ModelSerializer):
    class Meta:
        model = Favorite
        fields = '__all__'

class APIsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Movie
        fields='__all__'