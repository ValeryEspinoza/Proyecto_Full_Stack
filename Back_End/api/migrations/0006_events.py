# Generated by Django 5.1.2 on 2024-11-12 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_candidate'),
    ]

    operations = [
        migrations.CreateModel(
            name='events',
            fields=[
                ('event_id', models.AutoField(primary_key=True, serialize=False)),
                ('tittle', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('starting_date', models.DateField()),
                ('ending_date', models.DateField()),
                ('place', models.CharField(max_length=255)),
            ],
        ),
    ]
