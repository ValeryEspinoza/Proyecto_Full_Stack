# Generated by Django 5.1.2 on 2024-11-18 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0030_alter_inventory_available_stock'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inventory',
            name='available_stock',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='inventory',
            name='entry_date',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='inventory',
            name='reserved_stock',
            field=models.IntegerField(blank=True),
        ),
    ]
