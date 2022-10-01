from django.urls import path
from . import views
from  .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (TokenRefreshView,)

urlpatterns = [
    path('', views.movies),
    path('movies/', views.movies),
    path('getmovies/', views.getMovies),
    path('movies/<id>', views.movies),
    path('favorites/', views.favorites),
    path('favorites/<id>', views.favorites),
    # Login/Signin:
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Register/Signup:
    path('register/', views.createUser),
]
