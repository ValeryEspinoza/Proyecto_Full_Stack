# Generated by Django 5.1.2 on 2024-11-21 18:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0033_clients_id_staff_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='clients',
            old_name='user',
            new_name='user_id',
        ),
    ]
