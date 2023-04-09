from django.db import models

#TODO Add field
# 1.   
class Services(models.Model):
    title = models.CharField(max_length=50, verbose_name='Услуга')
    content = models.TextField(null=True, blank=True, verbose_name='Описание')
    price = models.FloatField(null=True, blank=True, verbose_name='Цена')
    document = models.FileField(upload_to='clip', default='', max_length=255, verbose_name='Образец письма')
    published = models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Опубликовано')

    class Meta:
        verbose_name_plural = 'Услуги'
        verbose_name = 'Услуга'
        ordering = ['-published']