# Generated by Django 4.0.6 on 2022-11-29 21:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0020_movie_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='image',
        ),
    ]