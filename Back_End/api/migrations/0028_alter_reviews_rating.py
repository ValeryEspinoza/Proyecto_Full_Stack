# Generated by Django 5.1.2 on 2024-11-15 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0027_sells_details_comments'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reviews',
            name='rating',
            field=models.DecimalField(decimal_places=1, max_digits=3),
        ),
    ]
