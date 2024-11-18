# Generated by Django 5.1.2 on 2024-11-14 13:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_languages_clients'),
    ]

    operations = [
        migrations.CreateModel(
            name='reviews',
            fields=[
                ('review_id', models.AutoField(primary_key=True, serialize=False)),
                ('review', models.TextField()),
                ('date', models.DateField(auto_now_add=True)),
                ('rating', models.DecimalField(decimal_places=1, max_digits=2)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.clients')),
            ],
        ),
    ]
