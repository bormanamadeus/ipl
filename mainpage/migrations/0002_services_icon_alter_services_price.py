# Generated by Django 4.1.7 on 2023-04-09 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainpage', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='services',
            name='icon',
            field=models.FileField(default='', max_length=255, upload_to='icon', verbose_name='Образец письма'),
        ),
        migrations.AlterField(
            model_name='services',
            name='price',
            field=models.TextField(blank=True, null=True, verbose_name='Расценки'),
        ),
    ]
