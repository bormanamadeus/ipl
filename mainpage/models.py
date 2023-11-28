from django.db import models

#TODO Add field
# 1.   
class Services(models.Model):
    title = models.CharField(max_length=50, verbose_name='Услуга')
    content = models.TextField(null=True, blank=True, verbose_name='Описание')
    #price = models.FloatField(null=True, blank=True, verbose_name='Цена')
    price = models.TextField(null=True, blank=True, verbose_name='Расценки')
    document = models.FileField(upload_to='clip', null=True, default='', 
                                blank=True, max_length=255, verbose_name='Образец письма')
    icon = models.FileField(upload_to='icon', null=True, default='', 
                            blank=True, max_length=255, verbose_name='Иконка услуги')
    published = models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Опубликовано')

    class Meta:
        verbose_name_plural = 'Услуги'
        verbose_name = 'Услуга'
        ordering = ['-published']
