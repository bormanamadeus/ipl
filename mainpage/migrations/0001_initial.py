# Generated by Django 4.1.7 on 2023-03-11 21:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Services',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='Услуга')),
                ('content', models.TextField(blank=True, null=True, verbose_name='Описание')),
                ('price', models.FloatField(blank=True, null=True, verbose_name='Цена')),
                ('document', models.FileField(default='', max_length=255, upload_to='clip', verbose_name='Образец письма')),
                ('published', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Опубликовано')),
            ],
            options={
                'verbose_name': 'Услуга',
                'verbose_name_plural': 'Услуги',
                'ordering': ['-published'],
            },
        ),
    ]
