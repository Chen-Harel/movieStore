from django.db import models
from django.contrib.auth.models import User
 
 
class Movie(models.Model):
    movie_name = models.CharField(max_length=50,null=True,blank=True)
    release_date = models.IntegerField(null=True, blank=True)
    movie_price = models.IntegerField(null=True, blank=True)
    movie_details = models.TextField(null=True, blank=True)
    movie_id=models.AutoField(primary_key=True,editable=False)
    # image=models.ImageField(upload_to='Posted_images', null=True)
    fields =['movieid','desc','price']
   
    def __str__(self):
        return self.movie_name

class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    movie_name = models.CharField(max_length=50, null=True,blank=True)
    release_date = models.IntegerField(null=True,blank=True)
    favorite_id=models.AutoField(primary_key=True, editable=False)
    fields =['favoriteid','desc','price']

    def __str__(self):
        return self.movie_name

class Order(models.Model):
    order_id = models.AutoField(primary_key=True, editable=False)
    movie_name = models.CharField(max_length=50, null=True,blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    date_ordered = models.DateField(auto_now_add=True)
    time_ordered = models.TimeField(auto_now_add=True)