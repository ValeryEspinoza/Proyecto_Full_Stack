from django.contrib.auth.models import User
from rest_framework import serializers

from .models import (
    categories, suppliers, paymenth_methods, vacant, candidate, events
    )

class categoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = categories
        fields = '__all__'
        
class suppliersSerializer(serializers.ModelSerializer):
    class Meta:
        model = suppliers
        fields = '__all__'
        
class paymenth_methodsSerializer(serializers.ModelSerializer):
    class Meta:
        model = paymenth_methods
        fields = '__all__'



class vacantSerializer(serializers.ModelSerializer):
    class Meta:
        model = vacant
        fields = '__all__'



class candidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = candidate
        fields = '__all__'
        
        
class eventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = events
        fields = '__all__'
        
