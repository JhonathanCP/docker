# Generated by Django 3.2.16 on 2023-03-13 21:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('panel', '0003_solicitud'),
    ]

    operations = [
        migrations.AlterField(
            model_name='solicitud',
            name='red',
            field=models.CharField(max_length=100, null=True),
        ),
    ]