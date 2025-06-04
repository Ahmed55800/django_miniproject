from django.db import models

# Create your models here.

class Product(models.Model):
    x = [('electronics', 'Electronics'), ('clothing', 'Clothing'), ('books', 'Books'),('fighterjets', 'fighterjets')]
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.IntegerField()
    stock = models.IntegerField()
    seller = models.CharField(max_length=100)
    category = models.CharField(max_length=50,choices=x)
    def __str__(self):
        return self.name