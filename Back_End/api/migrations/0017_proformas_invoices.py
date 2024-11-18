# Generated by Django 5.1.2 on 2024-11-14 14:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_reviews'),
    ]

    operations = [
        migrations.CreateModel(
            name='proformas_invoices',
            fields=[
                ('proforma_id', models.AutoField(primary_key=True, serialize=False)),
                ('creation_date', models.DateTimeField()),
                ('expiration_date', models.DateTimeField()),
                ('materials_pdf', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.TextField()),
                ('quiantity', models.DecimalField(decimal_places=2, max_digits=4)),
                ('unit_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('sub_total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('taxes', models.DecimalField(decimal_places=2, max_digits=2)),
                ('total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('activo', models.BooleanField(default=True)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.clients')),
            ],
        ),
    ]