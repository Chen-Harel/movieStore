# Generated by Django 4.0.6 on 2022-08-11 20:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_movie_release_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('movie_name', models.CharField(blank=True, max_length=50, null=True)),
                ('release_date', models.IntegerField(blank=True, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
            ],
        ),
    ]
