from rest_framework.serializers import ModelSerializer
from base.models import Favorite


class FavoriteSerializer(ModelSerializer):
    class Meta:
        model = Favorite
        fields = '__all__'