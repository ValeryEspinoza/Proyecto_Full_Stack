# Generated by Django 5.1.2 on 2024-11-15 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0025_alter_products_creation_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='creation_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]