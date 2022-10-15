# Generated by Django 4.0.6 on 2022-10-03 16:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_rename_user_id_favorite_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='MovieImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movie_img', models.ImageField(upload_to='images/')),
                ('movie_name', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='base.movie')),
            ],
        ),
    ]
