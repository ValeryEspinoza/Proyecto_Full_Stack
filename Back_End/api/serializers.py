from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.models import User, Group
from .validations import validate_not_empty, validate_min_characters, validate_max_characters, validate_no_special_characters, sanitize_input, validate_date_format, validate_datetime_format, validate_email_caracters, validate_price, validate_Quiantity, validate_negative_values
from django.db.models import Sum


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
    role=serializers.CharField(write_only=True) #esto es para que no se muestre en la respuesta
    class Meta:
        model = User
        fields = ['id', 'role', 'password', 'username', 'email', 'first_name', 'last_name', 'is_superuser', 'is_staff', 'is_active']

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
    
    def validate_name(self, value):
        
        # Validaciones personalizadas
        validate_not_empty(value)  # Verifica que no esté vacío
        validate_min_characters(value, 5)  # Verifica la longitud mínima
        validate_max_characters(value, 200)  # Verifica la longitud máxima
        validate_no_special_characters(value)  # Verifica que no haya caracteres especiales
        
        # Sanitizar el valor
        value = sanitize_input(value)  # Llamamos a la función sanitize_input para limpiar el valor
        
        # Devolvemos el valor procesado
        return value
    
    def validate_description(self, value):

        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_max_characters(value, 255)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        
        return value                 
           
class suppliersSerializer(serializers.ModelSerializer):
    class Meta:
        model = suppliers
        fields = '__all__'
        
    def validate_name(self, value):
        
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 200)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        
        return value
    
    def validate_direction(self, value):
        
        validate_not_empty(value)
        validate_min_characters(value, 20)
        validate_max_characters(value, 255)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        
        return value
        
    def validate_phone(self, value):
                
        validate_not_empty(value)
        validate_min_characters(value, 8)
        validate_max_characters(value, 16)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        
        return value
    def validate_email(self, value):
        validate_not_empty(value)
        validate_email_caracters(value)
        validate_max_characters(value, 100)
        validate_min_characters(value, 15)
        value= sanitize_input(value)
        
        return value
        
        
        
class paymenth_methodsSerializer(serializers.ModelSerializer):
    class Meta:
        model = paymenth_methods
        fields = '__all__'
        
    def validate_name(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 100)   
        return value



class vacantSerializer(serializers.ModelSerializer):
    class Meta:
        model = vacant
        fields = '__all__'
        
    def validate_name(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 225)
        return value
    
    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 225)
        return value
    def validate_requirements(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 225)
        return value
    
    def validate_closing_date (self, value):
         value = validate_datetime_format(value)
         return value
     
        

class candidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = candidate
        fields = '__all__'
        
    def validate_name(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 6)
        validate_max_characters(value, 50)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        return value
    def validate_last_name(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 6)
        validate_max_characters(value, 50)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        return value

    def validate_email(self, value):
        validate_not_empty(value)
        validate_email_caracters(value)
        validate_max_characters(value, 100)
        validate_min_characters(value, 15)
        value= sanitize_input(value)
        
        return value
    
    def validate_address(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_min_characters(value, 250)
        value= sanitize_input(value)
        
        return value
    
    def validate_birthday(self, value):
        validate_not_empty(value)
        value = validate_date_format(value)
        return value
    
    def validate_message(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_max_characters(value, 225)
        value= sanitize_input(value)
        return value
        
     
class tasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = tasks
        fields = ['tittle','description', 'expire_date', 'complete']
        
    def validate_tittle(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 225)
        value= sanitize_input(value)
        return value
    
    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 225)
        value= sanitize_input(value)
        return value
    def validate_starting_date(self, value):
        validate_not_empty(value)
        validate_no_special_characters(value)
        value = validate_date_format(value)
        
        return value
    
    def validate_ending_date(self, value):
        validate_not_empty(value)
        validate_no_special_characters(value)
        value = validate_date_format(value)
        
        return value
    def validate_place(self,value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 225)
        value= sanitize_input(value)
        return value
        
        
   
        
class eventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = events
        fields = ['tittle', 'description', 'starting_date', 'ending_date', 'place']
        
    def validate_tittle(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 225)
        value= sanitize_input(value)
        return value
    
    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 225)
        value= sanitize_input(value)
        return value
    
    def starting_date(self, value):
        validate_email_caracters(value)
        return value
    
    def ending_date(self, value):
        validate_email_caracters(value)
        return
    
    def validate_place(self,value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 225)
        value= sanitize_input(value)
        return value              

class languagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = languages
        fields = '__all__'     
        
    def language(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 15)
        value= sanitize_input(value)
        return value
        
        
class statusSerializer(serializers.ModelSerializer):
    class Meta:
        model = status
        fields = '__all__' 
    
    def validate_name(self, values):
        validate_not_empty(value)  # Verifica que no esté vacío
        validate_min_characters(value, 5)  # Verifica la longitud mínima
        validate_max_characters(value, 250)  # Verifica la longitud máxima
        validate_no_special_characters(value)  # Verifica que no haya caracteres especiales
        value = sanitize_input(value)  # Llamamos a la función sanitize_input para limpiar el valor
        return value
    
    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_max_characters(value, 255)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        return value
        
        
class prioritiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = priorities
        fields ='__all__'  
        
    def validate_name(self, values):
        validate_not_empty(value)  # Verifica que no esté vacío
        validate_min_characters(value, 5)  # Verifica la longitud mínima
        validate_max_characters(value, 250)  # Verifica la longitud máxima
        validate_no_special_characters(value)  # Verifica que no haya caracteres especiales
        value = sanitize_input(value)  # Llamamos a la función sanitize_input para limpiar el valor
        return value

    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_max_characters(value, 250)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        return value
        
        
        
class category_servicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = category_services
        fields = '__all__'  
        
    def validate_name(self, values):
        validate_not_empty(value)  # Verifica que no esté vacío
        validate_min_characters(value, 5)  # Verifica la longitud mínima
        validate_max_characters(value, 250)  # Verifica la longitud máxima
        validate_no_special_characters(value)  # Verifica que no haya caracteres especiales
        value = sanitize_input(value)  # Llamamos a la función sanitize_input para limpiar el valor
        return value

    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_max_characters(value, 250)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        return value


class areasSerializer(serializers.ModelSerializer):
    class Meta:
        model = areas
        fields = '__all__'  
        
    def validate_name(self, values):
        validate_not_empty(value)  # Verifica que no esté vacío
        validate_min_characters(value, 5)  # Verifica la longitud mínima
        validate_max_characters(value, 250)  # Verifica la longitud máxima
        validate_no_special_characters(value)  # Verifica que no haya caracteres especiales
        value = sanitize_input(value)  # Llamamos a la función sanitize_input para limpiar el valor
        return value

    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_max_characters(value, 250)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        return value



      
        

#Tablas que contienen foraneas *********
class sub_categories_productsSerializer(serializers.ModelSerializer):
    class Meta:
        model = sub_categories_products
        fields = '__all__'  
        
    def validate_name(self, value):
        validate_not_empty(value)  # Verifica que no esté vacío
        validate_min_characters(value, 5)  # Verifica la longitud mínima
        validate_max_characters(value, 250)  # Verifica la longitud máxima
        validate_no_special_characters(value)  # Verifica que no haya caracteres especiales
        value = sanitize_input(value)  # Llamamos a la función sanitize_input para limpiar el valor
        return value

    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_max_characters(value, 250)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        return value
        
    def validate_price(self, value):
        validate_not_empty(value)
        validate_no_special_characters
        return value
        

class productsSerializer(serializers.ModelSerializer):
    class Meta:
        model = products
        fields = ['product_id', 'name', 'description', 'price', 'creation_date', 'sub_categories_product', 'imagen_url']

    def validate_name(self, value):
        validate_not_empty(value)  # Verifica que no esté vacío
        validate_min_characters(value, 5)  # Verifica la longitud mínima
        validate_max_characters(value, 250)  # Verifica la longitud máxima
        validate_no_special_characters(value)  # Verifica que no haya caracteres especiales
        value = sanitize_input(value)  # Llamamos a la función sanitize_input para limpiar el valor
        return value

    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_max_characters(value, 250)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        return value


      

        
class inventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = inventory
        fields = '__all__' 
       
    def validate_initial_stock(self, value):
        validate_Quiantity(value, 1)
        return value
    
    def validate_available_stock(self, value):
        validate_negative_values(value)
        return value
    def validate_reserved_stock(self, value):
        validate_negative_values(value)
        return value
    
    def validate_damaged_stock(self, value):
        validate_negative_values(value)
        return value



    
        
class jobs_positionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = jobs_positions
        fields = '__all__' 
    
    def validate_name(self, value):
        validate_not_empty(value)  # Verifica que no esté vacío
        validate_min_characters(value, 5)  # Verifica la longitud mínima
        validate_max_characters(value, 250)  # Verifica la longitud máxima
        validate_no_special_characters(value)  # Verifica que no haya caracteres especiales
        value = sanitize_input(value)  # Llamamos a la función sanitize_input para limpiar el valor
        return value

    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_max_characters(value, 250)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        return value
       
class staffSerializer(serializers.ModelSerializer):
    class Meta:
        model = staff
        fields = '__all__'
    
    def validate_name(self, value):
        validate_not_empty(value)  # Verifica que no esté vacío
        validate_min_characters(value, 5)  # Verifica la longitud mínima
        validate_max_characters(value, 250)  # Verifica la longitud máxima
        validate_no_special_characters(value)  # Verifica que no haya caracteres especiales
        value = sanitize_input(value)  # Llamamos a la función sanitize_input para limpiar el valor
        return value
    def validate_email(self, value):
        validate_email_caracters(value)
        return value
    def validate_phone(self, value):
        validate_min_characters(value, 10)
        return value
    

class servicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = services
        fields = ['service', 'description', 'category', 'imagen_url']    
    
    def crear_servicio(request):
        if request.method == 'POST':
            service = request.POST.get('service')
            description = request.POST.get('description')
            imagen_url = request.POST.get('imagen_url')  # Asegúrate de que esto sea una URL válida
            category = request.POST.get('category')

            nuevo_servicio = service(
                service=service,
                description=description,
                imagen_url=imagen_url,
                category=category
            )
            nuevo_servicio.save()  # Guarda el objeto en la base de datos
            
    def validate_services(self, value):
        validate_not_empty(value)
        validate_max_characters(value, 255)
        return value
    
    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_max_characters(value, 255)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        return value
        

class projectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = projects
        fields = '__all__'    
        
    def validate_project_name(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 255)
        validate_no_special_characters(value)
        value = sanitize_input(value)
        return value
    
    def validate_start_date(self, value):
        validate_date_format(value)
        return value
    
    def validate_end_date(self, value):
        validate_date_format(value)
        return value
    
    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_max_characters(value, 255)
        validate_no_special_characters(value)
        value = sanitize_input(value)
        return value
    
                  
               
class clientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = clients
        fields = '__all__'   
    
    def  validate_name(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 50)
        validate_no_special_characters(value)
        value = sanitize_input(value)
        return value
    
    def last_name(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_max_characters(value, 50)
        validate_no_special_characters(value)
        value = sanitize_input(value)
        return value
    def validate_email(self, value):
        validate_email_caracters(value)
        return value       
       
       
class sellsSerializer(serializers.ModelSerializer):
    class Meta:
        model = sells
        fields = '__all__'    
        
    def validate_quiantity(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 1)
        validate_negative_values(value)
        return value
    def validate_total(self, value):
        validate_not_empty(value)
        validate_negative_values(value)
        return value
        
class reviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = reviews
        fields = '__all__' 
    
    def validate_review(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 5)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        return value
    
    def validate_rating(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 1)
        validate_max_characters(value, 5)
        validate_max_characters(value)
        return value
           
           
class proformas_invoicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = proformas_invoices
        fields = '__all__'         
        
    def validate_expiration_date(self, value):
        validate_datetime_format(value)
        return value
    
    def validate_total(self, value):
        validate_not_empty(value)
        validate_negative_values(value)
        return value
    def validate_description(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 10)
        validate_max_characters(value, 255)
        validate_no_special_characters(value)
        value= sanitize_input(value)
        return value
    def validate_sub_total(self, value):
        validate_not_empty(value)
        validate_negative_values(value)
        return value
    def validate_unit_price(self, value):
        validate_not_empty(value)
        validate_negative_values(value)
        return value
    def validate_quantity(self, value):
        validate_not_empty(value)
        validate_min_characters(value, 1)
        validate_negative_values(value)
        return value
    
           
       
       
        
        
        
        
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
        
    def validate_comments(self, value):
        validate_no_special_characters(value)
        validate_min_characters(value, 10)
        validate_not_empty(value)
        value = sanitize_input(value)
        return value


#CONSULTAS

# Serializador de Detalles de Venta
class sells_detailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = sells_details
        fields = ['sell_details_id', 'product', 'sell', 'quiantity'] 

# Serializador de Venta
class sellSerializer(serializers.ModelSerializer):
    class Meta:
        model = sells
        fields = ['sell_id', 'sell_date']  
# Serializador de Producto
#class productsSerializer(serializers.ModelSerializer):
    #class Meta:
        #model = products
        #fields = ['product_id', 'name', 'description']  

class ProductSalesSerializer(serializers.ModelSerializer):
    total_sold = serializers.IntegerField(read_only=True)  
    class Meta:
        model = products
        fields = ['product_id', 'name', 'description', 'total_sold']
    
    def to_representation(self, instance):
        # Se obtiene el total de unidades vendidas de cada producto
        total_sold = sells_details.objects.filter(product=instance).aggregate(Sum('quiantity'))['quiantity__sum']
        representation = super().to_representation(instance)
        representation['total_sold'] = total_sold if total_sold else 0
        return representation