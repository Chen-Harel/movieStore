# Generated by Django 4.0.6 on 2022-11-29 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0017_movie_movie_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='image',
            field=models.ImageField(null=True, upload_to='Posted_images'),
        ),
    ]
