from urllib import response
from django.http import JsonResponse
from django.shortcuts import render
from stack_data import Serializer

from base.serializer import FavoriteSerializer
from .models import Movie, Favorite, Order
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
        token['staff'] = user.is_staff
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
        Movie.objects.create(movie_name=request.data['movie_name'] ,release_date=request.data['release_date'], movie_price = request.data['movie_price'], movie_details=request.data['movie_details'])
        return JsonResponse({'POST':"Success"})
    if request.method == 'DELETE': #method delete a row
        movie_delete= Movie.objects.get(movie_id = id)
        movie_delete.delete()
        return JsonResponse({'DELETE SUCCESS': id})
    if request.method == 'PUT': #method delete a row
        movie_update=Movie.objects.get(movie_id = id)
        movie_update.movie_name =request.data['movie_name']
        movie_update.release_date =request.data['release_date']
        movie_update.save()
        return JsonResponse({'PUT SUCCESS': id})

@api_view(['GET'])
def getMovies(request,id=-1):
    if request.method == 'GET':    #method get all
        if int(id) > -1: #get single movie
            if int(id)> Movie.objects.count(): return JsonResponse({"Server: array out of range"})
            movie= Movie.objects.get(movie_id = id)
            return JsonResponse({
            "movie_name":movie.movie_name,
            "release_date":movie.release_date,
            "movie_details": movie.movie_details,
            },safe=False)
        else: # return all
            res=[] #create an empty list
            for movieObj in Movie.objects.all(): #run on every row in the table...
                res.append({"movie_name":movieObj.movie_name,
                "release_date":movieObj.release_date, "movie_details":movieObj.movie_details,
               "id":movieObj.movie_id
                }) #append row by to row to res list
            return JsonResponse(res,safe=False) #return array as json response

# favorites section
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getfavorites(request, user_id=0):
    if request.method =='GET':
        # if int(user_id) > 0:
        #     print("test")
        #     print(int(user_id))
        # else:
        res=[] #create an empty list
        favoriteList = Favorite.objects.filter(user_id=int(user_id))
        # for favoriteObj in favoriteList: #run on every row in the table...
        #     # print(int(id))
        #     res.append({"movie_name":favoriteObj.movie_name,
        #     "release_date":favoriteObj.release_date,
        #     "id":favoriteObj.favorite_id,
        #     }) #append row by to row to res list
        # print(favoriteList)
        serializer=FavoriteSerializer(favoriteList,many=True)
        return Response(serializer.data)
        # return JsonResponse(res,safe=False) #return array as json response

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addFavorite(request):
    Favorite.objects.create(movie_name=request.data['movie_name'] ,release_date=request.data['release_date'], user_id=request.data['user_id'])
    return JsonResponse({'POST':"Success"})

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteFavorite(request, id):
    if request.method == 'DELETE': #method delete a row
        favorite_delete= Favorite.objects.get(favorite_id = id)
        favorite_delete.delete()
        return JsonResponse({'DELETE SUCCESS': id})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def buymyfavorites(request):
    user_id=request.user.id
    favoritesList = request.data
    print(user_id)
    print(favoritesList)
    return Response(favoritesList)

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def addOrder(request):
#     order= request.data
#     user = request.user
#     new_order_id= Order.objects.create(user_id=user)
#     print(order)
#     for x in order:
#         # print(x)
#         # product_id=x["product_id"]
#         # print(product_id)
#         prod_id=Product.objects.get(_id=x["product_id"])
#         # category_id=Category.objects.get(_id=x["category_id"])
#         quantity=x["quantity"]
#         OrderDetail.objects.create(order_id

