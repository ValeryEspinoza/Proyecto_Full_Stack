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
    category_services, tasks, events, areas, sub_categories_products, products, inventory, jobs_positions,
    staff, services, projects, clients, sells, products_suppliers, staff_tasks, staff_events, projects_services,
    staff_projects, languages_clients, reviews, proformas_invoices, candidates_vacants, proformas_invoices_services, 
    proformas_invoices_staff, sells_details
    )






#Serializers configuracion- Principales
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






#Serializers de modelos sin llaves foráneas

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
        
        

class tasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = tasks
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


class areasSerializer(serializers.ModelSerializer):
    class Meta:
        model = areas
        fields = '__all__'  



      
        

#Tablas que contienen foraneas *********
class sub_categories_productsSerializer(serializers.ModelSerializer):
    class Meta:
        model = sub_categories_products
        fields = '__all__'  
        

class productsSerializer(serializers.ModelSerializer):
    class Meta:
        model = products
        fields = '__all__'
        
      

        
class inventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = inventory
        fields = '__all__'               
        
class jobs_positionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = jobs_positions
        fields = '__all__' 
       
class staffSerializer(serializers.ModelSerializer):
    class Meta:
        model = staff
        fields = '__all__'

class servicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = services
        fields = '__all__'       
        

class projectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = projects
        fields = '__all__'               
                  
               
class clientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = clients
        fields = '__all__'               
       
       
       
class sellsSerializer(serializers.ModelSerializer):
    class Meta:
        model = sells
        fields = '__all__'     
        
class reviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = reviews
        fields = '__all__'             
           
           
class proformas_invoicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = proformas_invoices
        fields = '__all__'             
           
       
       
        
        
        
        
#Tabla intermedias***********
class products_suppliersSerializer(serializers.ModelSerializer):
    class Meta:
        model = products_suppliers
        fields = '__all__'
        

class staff_tasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = staff_tasks
        fields = '__all__'
        
        
class staff_eventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = staff_events
        fields = '__all__'
        
         
class projects_servicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = projects_services
        fields = '__all__'               
                  
                
                  
class staff_projectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = staff_projects
        fields = '__all__'           
        
class languages_clientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = languages_clients
        fields = '__all__'           
        
class candidates_vacantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = candidates_vacants
        fields = '__all__'           


class proformas_invoices_servicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = proformas_invoices_services
        fields = '__all__'           


class proformas_invoices_staffSerializer(serializers.ModelSerializer):
    class Meta:
        model = proformas_invoices_staff
        fields = '__all__'           
        

class sells_detailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = sells_details
        fields = '__all__'           


