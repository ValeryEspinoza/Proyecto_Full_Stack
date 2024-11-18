# Generated by Django 5.1.2 on 2024-11-14 13:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_services'),
    ]

    operations = [
        migrations.CreateModel(
            name='projects',
            fields=[
                ('project_id', models.AutoField(primary_key=True, serialize=False)),
                ('project_name', models.CharField(max_length=255)),
                ('start_date', models.DateField()),
                ('description', models.TextField(max_length=200)),
                ('end_date', models.DateField()),
                ('priority', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.priorities')),
                ('status', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.status')),
            ],
        ),
    ]