from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        fields = ['id', 'username', 'password', 'email']
    
    
class ProductSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Product
        fields = '__all__'
        
