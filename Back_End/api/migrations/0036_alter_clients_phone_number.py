# Generated by Django 5.1.2 on 2024-11-21 21:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0035_rename_user_id_clients_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clients',
            name='phone_number',
            field=models.CharField(max_length=16),
        ),
    ]
