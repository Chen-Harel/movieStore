# Generated by Django 4.0.6 on 2022-10-04 05:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_merge_0009_movieimage_0010_favorite_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='MovieImage',
        ),
    ]