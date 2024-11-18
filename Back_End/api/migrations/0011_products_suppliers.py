# Generated by Django 5.1.2 on 2024-11-14 13:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_sells'),
    ]

    operations = [
        migrations.CreateModel(
            name='products_suppliers',
            fields=[
                ('product_supplier_id', models.AutoField(primary_key=True, serialize=False)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.products')),
                ('supplier', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.suppliers')),
            ],
        ),
    ]
