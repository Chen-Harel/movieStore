from django.urls import path
from . import views
from  .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (TokenRefreshView,)

urlpatterns = [
    path('', views.movies),
    # Movies
    path('movies/', views.movies),
    path('getmovies/', views.getMovies),
    path('movies/<id>', views.movies),
    # Favorites
    path('getfavorites/', views.getfavorites),
    path('getfavorites/<user_id>', views.getfavorites),
    path('addfavorite/', views.addFavorite),
    path('deletefavorite/<id>', views.deleteFavorite),
    path('buymyfavorites/', views.buymyfavorites),
    path('buymyfavorites/<id>', views.buymyfavorites),
    # Login/Signin:
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Register/Signup:
    path('register/', views.createUser),
]
