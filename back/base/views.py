from django.http import JsonResponse
from django.shortcuts import render
from .models import Movie, Favorite
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

# Authentication code START
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        # ...
        return token
# Authentication code END

#Login
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



# Create your views here.
def index(r):
    return JsonResponse({"Server":"running"})

#Register/Create a user
@api_view(['POST'])
def createUser(request):
    User.objects.create_user(username=request.data['username'], email=request.data['email'], password=request.data['password'])
    return JsonResponse({"Server":"User created successfully"})

# desc ,price,prodName,createdTime, _id
@api_view(['POST','DELETE','PUT'])
@permission_classes([IsAuthenticated])
def movies(request,id=-1):
    if request.method == 'POST': #method post add new row
        movie_name =request.data['movie_name']
        Movie.objects.create(movie_name=request.data['movie_name'] ,release_date=request.data['release_date'])
        return JsonResponse({'POST':"Success"})
    if request.method == 'DELETE': #method delete a row
        movie_delete= Movie.objects.get(_id = id)
        movie_delete.delete()
        return JsonResponse({'DELETE SUCCESS': id})
    if request.method == 'PUT': #method delete a row
        movie_update=Movie.objects.get(_id = id)
        movie_update.movie_name =request.data['movie_name']
        movie_update.release_date =request.data['release_date']
        movie_update.save()
        return JsonResponse({'PUT SUCCESS': id})

@api_view(['GET'])
def getMovies(request,id=-1):
    if request.method == 'GET':    #method get all
        if int(id) > -1: #get single movie
            if int(id)> Movie.objects.count(): return JsonResponse({"Server: array out of range"})
            movie= Movie.objects.get(_id = id)
            return JsonResponse({
            "movie_name":movie.movie_name,
            "release_date":movie.release_date
            },safe=False)
        else: # return all
            res=[] #create an empty list
            for movieObj in Movie.objects.all(): #run on every row in the table...
                res.append({"movie_name":movieObj.movie_name,
                "release_date":movieObj.release_date,
               "id":movieObj._id
                }) #append row by to row to res list
            return JsonResponse(res,safe=False) #return array as json response

@api_view(['GET','DELETE','POST'])
@permission_classes([IsAuthenticated])
def favorites(request, id=-1):
    if request.method=='GET':
        res=[] #create an empty list
        for favoriteObj in Favorite.objects.all(): #run on every row in the table...
            res.append({"movie_name":favoriteObj.movie_name,
            "release_date":favoriteObj.release_date,
            "id":favoriteObj._id
            }) #append row by to row to res list
        return JsonResponse(res,safe=False) #return array as json response
    if request.method == 'POST': #method post add new row
        movie_name =request.data['movie_name']
        Favorite.objects.create(movie_name=request.data['movie_name'] ,release_date=request.data['release_date'])
        return JsonResponse({'POST':"Success"})
    if request.method == 'DELETE': #method delete a row
        favorite_delete= Favorite.objects.get(_id = id)
        favorite_delete.delete()
        return JsonResponse({'DELETE SUCCESS': id})
