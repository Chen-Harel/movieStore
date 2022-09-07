from django.db import models
from django.contrib.auth.models import User
 
 
class Movie(models.Model):
    movie_name = models.CharField(max_length=50,null=True,blank=True)
    release_date = models.IntegerField(null=True, blank=True)
    _id=models.AutoField(primary_key=True,editable=False)
    fields =['_id','desc','price']
   
    def __str__(self):
        return self.movie_name

class Favorite(models.Model):
    movie_name = models.CharField(max_length=50, null=True,blank=True)
    release_date = models.IntegerField(null=True,blank=True)
    _id=models.AutoField(primary_key=True, editable=False)
    fields =['_id','desc','price']

    def __str__(self):
        return self.movie_name
        