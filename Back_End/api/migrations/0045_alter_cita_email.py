# Generated by Django 5.1.4 on 2024-12-09 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0044_calendar_cita'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cita',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
    ]
