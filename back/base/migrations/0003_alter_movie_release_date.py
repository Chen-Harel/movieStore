# Generated by Django 4.0.6 on 2022-08-11 08:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_movie_delete_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='release_date',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]