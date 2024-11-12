from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.models import User, Group



from .models import (
    categories,
    suppliers,
    paymenth_methods,
    vacant, candidate,
    events, languages,
    status, priorities,
    category_services,
    sub_categories_products,
    products
    )


     
#Serializer de auth_user 
class UserSerializer(serializers.ModelSerializer):
    role=serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['id', 'role', 'password', 'username', 'email', 'first_name', 'last_name']

    def create(self, validated_data):
        # Extrae la contraseña del validated_data
       
        # Extrae el campo adicional 'group' que se usará para el grupo
        role = validated_data.pop('role')  # Asegúrate de que el nombre sea correcto
        # Crea el usuario sin guardar la contraseña aún
        user = User(**validated_data)
        # Establece la contraseña usando el método set_password
        user.set_password(validated_data['password'])
        # Guarda el usuario en la base de datos
        user.save()



        # Asigna el usuario al grupo si 'roll' es proporcionado
        if role:
            try:
                group = Group.objects.get(name=role)
                user.groups.add(group)  # Aquí se usa add(), que es correcto                                
            except Group.DoesNotExist:
                raise serializers.ValidationError(f"El grupo '{role}' no existe. ")
                    
        return user


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
        

class languagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = languages
        fields = '__all__'     
        
        
class statusSerializer(serializers.ModelSerializer):
    class Meta:
        model = status
        fields = '__all__'  
        
        
class prioritiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = priorities
        fields = '__all__'  
        
class category_servicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = category_services
        fields = '__all__'  

class sub_categories_productsSerializer(serializers.ModelSerializer):
    class Meta:
        model = sub_categories_products
        fields = '__all__'  
    
class productsSerializer(serializers.ModelSerializer):
    class Meta:
        model = products
        fields = '__all__'