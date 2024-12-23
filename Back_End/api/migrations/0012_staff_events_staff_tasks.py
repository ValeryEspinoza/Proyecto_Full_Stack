# Generated by Django 5.1.2 on 2024-11-14 13:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_products_suppliers'),
    ]

    operations = [
        migrations.CreateModel(
            name='staff_events',
            fields=[
                ('staff_events_id', models.AutoField(primary_key=True, serialize=False)),
                ('events', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.events')),
                ('staff', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.staff')),
            ],
        ),
        migrations.CreateModel(
            name='staff_tasks',
            fields=[
                ('staff_task_id', models.AutoField(primary_key=True, serialize=False)),
                ('staff', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.staff')),
                ('task', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.tasks')),
            ],
        ),
    ]
