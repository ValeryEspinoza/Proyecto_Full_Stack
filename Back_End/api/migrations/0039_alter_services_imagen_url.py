# Generated by Django 5.1.2 on 2024-11-27 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0038_products_imagen_url_services_imagen_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='services',
            name='imagen_url',
            field=models.URLField(),
        ),
    ]
