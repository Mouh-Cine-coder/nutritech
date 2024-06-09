from django.db import models
from django.contrib.auth.models import User

class ProductType(models.TextChoices):
    Pesticides = 'Pesticides'
    BigPlant = 'BigPlant'
    SmallPlant = 'SmallPlant'
    Fertilizer = 'Fertilizer'



class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='files/images')
    amount = models.PositiveIntegerField(default=0, null=True)
    category = models.CharField(
        max_length=20,
        choices=ProductType.choices,
        default=ProductType.Pesticides
    )
    
    def __str__(self):
        return self.name