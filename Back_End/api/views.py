from rest_framework import generics
from rest_framework import viewsets
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, BasePermission  #Permisos para JWT
from django.contrib.auth.models import User
from django.db.models import F
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
import datetime
import re
from django.views.decorators.csrf import csrf_exempt




from .models import (
    categories, suppliers, paymenth_methods, vacant, candidate, events, languages, status, priorities,
    category_services, tasks, events, areas, sub_categories_products, products, inventory, jobs_positions,
    staff, services, projects, clients, sells, products_suppliers, staff_tasks, staff_events, projects_services,
    staff_projects, languages_clients, reviews, proformas_invoices, candidates_vacants,
    proformas_invoices_staff, proformas_invoices_services, sells_details, Cita
    )

from .serializers import (
    categoriesSerializer, suppliersSerializer, paymenth_methodsSerializer, vacantSerializer,
    candidateSerializer, eventsSerializer, tasksSerializer, languagesSerializer,
    statusSerializer, prioritiesSerializer, category_servicesSerializer,  areasSerializer, sub_categories_productsSerializer, productsSerializer,
    inventorySerializer, jobs_positionsSerializer, staffSerializer, servicesSerializer, projectsSerializer,
    clientsSerializer, sellsSerializer, products_suppliersSerializer, staff_tasksSerializer, staff_eventsSerializer,
    projects_servicesSerializer, staff_projectsSerializer, languages_clientsSerializer,
    reviewsSerializer, proformas_invoicesSerializer, candidates_vacantsSerializer,
    proformas_invoices_servicesSerializer, proformas_invoices_staffSerializer, sells_detailsSerializer, Cita_Serializer
)





#Configuraciones*******************************************************

## Esto modelo permite establecer roles de usuarios
class IsColaborador(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="colaborador").exists()
    
class IsAdministrador(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="administrador").exists()
    
class IsCliente(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="cliente").exists()


class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

            
    def login_user(request):
        if request.method == 'POST':
            password = request.POST['password']
            email = request.POST['email']
            
            # Intentar autenticar al usuario
            user = authenticate(request, email=email, password=password )
            
            if user is not None:
                # Si la autenticación es exitosa, iniciar la sesión
                login(request, user)
                return redirect('Dashboard')  # Redirigir al usuario a la página de inicio (o la página que prefieras)
            else:
                # Si las credenciales son incorrectas, mostrar un mensaje de error
                return render(request, 'login.html', {'error': 'Credenciales incorrectas'})

        return render(request, 'login.html')
        
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdministrador]
    
class UserListView(generics.ListAPIView):
    queryset = User.objects.all() 
    serializer_class = UserSerializer
    permission_classes = [IsAdministrador | IsCliente]




class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        if user.role == 'administrador' or user.role == 'colaborador':
            return Response({"message": "Acceso permitido"}, status=status.HTTP_200_OK)
        return Response({"message": "Acceso denegado"}, status=status.HTTP_403_FORBIDDEN)



class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]
    
    @csrf_exempt  # Desactiva la verificación CSRF para esta vista
    def get(self, request):
        print("Token recibido:", request.headers.get('Authorization'))  # Verifica que el token llega correctamente
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


##### Vistas sin foraneas**********************************************+

class categoriesListCreate(generics.ListCreateAPIView):
    queryset = categories.objects.all()
    serializer_class = categoriesSerializer
    permission_classes = [IsAuthenticated, IsAdministrador] 
    
    
class categoriesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = categories.objects.all()
    serializer_class = categoriesSerializer
    permission_classes = [IsAuthenticated, IsAdministrador] 
    
    
class suppliersListCreate(generics.ListCreateAPIView):
    queryset = suppliers.objects.all()
    serializer_class = suppliersSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class suppliersDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = suppliers.objects.all()
    serializer_class = suppliersSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
    
class paymenth_methodsListCreate(generics.ListCreateAPIView):
    queryset = paymenth_methods.objects.all()
    serializer_class = paymenth_methodsSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class paymenth_methodsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = paymenth_methods.objects.all()
    serializer_class = paymenth_methodsSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
    
class vacantListCreate(generics.ListCreateAPIView):
    queryset = vacant.objects.all()
    serializer_class = vacantSerializer

class vacantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = vacant.objects.all()
    serializer_class = vacantSerializer
    
class candidateListCreate(generics.ListCreateAPIView):
    queryset = candidate.objects.all()
    serializer_class = candidateSerializer

class candidateDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = candidate.objects.all()
    serializer_class = candidateSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
    
class eventsListCreate(generics.ListCreateAPIView):
    queryset = events.objects.all()
    serializer_class = eventsSerializer
    permission_classes = [IsAdministrador]
class eventsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = events.objects.all()
    serializer_class = eventsSerializer
    permission_classes = [IsAdministrador]
    
class tasksListCreate(generics.ListCreateAPIView):
    queryset = tasks.objects.all()
    serializer_class = tasksSerializer
    permission_classes = [IsAdministrador]
    
class tasksDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = tasks.objects.all()
    serializer_class = tasksSerializer
    permission_classes = [IsAdministrador]

class languagesListCreate(generics.ListCreateAPIView):
    queryset = languages.objects.all()
    serializer_class = languagesSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class languagesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = languages.objects.all()
    serializer_class = languagesSerializer
    permission_classes =[IsAuthenticated, IsAdministrador]
    
class statusListCreate(generics.ListCreateAPIView):
    queryset = status.objects.all()
    serializer_class = statusSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class statusDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = status.objects.all()
    serializer_class = statusSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]

class prioritiesListCreate(generics.ListCreateAPIView):
    queryset = priorities.objects.all()
    serializer_class = prioritiesSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class prioritiesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = priorities.objects.all()
    serializer_class = prioritiesSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]

class category_servicesListCreate(generics.ListCreateAPIView):
    queryset = category_services.objects.all()
    serializer_class = category_servicesSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        try:
            # Procesamos la solicitud POST
            return super().create(request, *args, **kwargs)
        except Exception as e:
            # Capturamos cualquier error y lo mostramos en la respuesta
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
class category_servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = category_services.objects.all()
    serializer_class = category_servicesSerializer
    permission_classes = [AllowAny]
    
class areasListCreate(generics.ListCreateAPIView):
    queryset = areas.objects.all()
    serializer_class = areasSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class areasDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = areas.objects.all()
    serializer_class = areasSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
    
class CitaListCreate(generics.ListCreateAPIView):
    queryset = Cita.objects.all()
    serializer_class =   Cita_Serializer
    permission_classes = [AllowAny]
    
class CitaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cita.objects.all()
    serializer_class = Cita_Serializer
    permission_classes = [AllowAny] 
   
from rest_framework.response import Response
from rest_framework import status

class HorariosDisponibles(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        # Rango de fechas: desde hoy hasta 30 días hacia adelante
        fecha_inicio = datetime.date.today()
        fecha_fin = fecha_inicio + datetime.timedelta(days=60)

        # Definir los bloques horarios disponibles por día (en formato de 24 horas)
        bloques_horarios = [
            ('08:00', '09:00'),
            ('09:00', '10:00'),
            ('10:00', '11:00'),
            ('11:00', '12:00'),
            ('13:00', '14:00'),
            ('14:00', '15:00'),
            ('15:00', '16:00'),
            ('16:00', '17:00')
        ]

        # Inicializamos un diccionario vacío para los horarios disponibles
        fechas_disponibles = {}

        # Generar las fechas y horarios disponibles dentro del rango
        fecha_actual = fecha_inicio
        while fecha_actual <= fecha_fin:
            fecha_str = fecha_actual.strftime('%Y-%m-%d')
            fechas_disponibles[fecha_str] = [hora for hora, _ in bloques_horarios]
            fecha_actual += datetime.timedelta(days=1)

        # Obtener las citas ya reservadas
        citas = Cita.objects.all()

        # Excluir las horas ya reservadas de los horarios disponibles
        for cita in citas:
            fecha = str(cita.date)  # Obtener la fecha de la cita
            hora = cita.time.strftime("%H:%M")  # Obtener la hora de la cita en formato 24 horas

            # Si la fecha y hora están disponibles, se elimina de la lista de opciones
            if fecha in fechas_disponibles and hora in fechas_disponibles[fecha]:
                fechas_disponibles[fecha].remove(hora)

        # Retornar los horarios disponibles en formato JSON
        return Response(fechas_disponibles)


    # Método para verificar si existe una cita con el mismo correo
    def get_by_email(self, request):
        email = request.query_params.get('email')
        if not email:
            return Response({"Error": "El correo electrónico es requerido."}, status=status.HTTP_400_BAD_REQUEST)
        
        # Verificar si hay citas con el mismo correo
        cita_existente = Cita.objects.filter(email=email).exists()
        if cita_existente:
            return Response({"Error": "Ya existe una cita agendada con este correo electrónico."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"message": "No existe una cita con este correo."}, status=status.HTTP_200_OK)


    def post(self, request):
        # Rango de fechas: desde hoy hasta 30 días hacia adelante
        fecha_inicio = datetime.date.today()
        fecha_fin = fecha_inicio + datetime.timedelta(days=30)

        # Definir los bloques horarios disponibles por día (en formato de 24 horas)
        bloques_horarios = [
            ('08:00', '09:00'),
            ('09:00', '10:00'),
            ('10:00', '11:00'),
            ('11:00', '12:00'),
            ('13:00', '14:00'),
            ('14:00', '15:00'),
            ('15:00', '16:00'),
            ('16:00', '17:00')
        ]

        # Inicializamos un diccionario vacío para los horarios disponibles
        fechas_disponibles = {}

        # Generar las fechas y horarios disponibles dentro del rango
        fecha_actual = fecha_inicio
        while fecha_actual <= fecha_fin:
            fecha_str = fecha_actual.strftime('%Y-%m-%d')
            fechas_disponibles[fecha_str] = [hora for hora, _ in bloques_horarios]
            fecha_actual += datetime.timedelta(days=1)

        # Obtener las citas ya reservadas
        citas = Cita.objects.all()

        # Excluir las horas ya reservadas de los horarios disponibles
        for cita in citas:
            fecha = str(cita.date)  # Obtener la fecha de la cita
            hora = cita.time.strftime("%H:%M")  # Obtener la hora de la cita en formato 24 horas
            # Si la fecha y hora están disponibles, se elimina de la lista de opciones
            if fecha in fechas_disponibles and hora in fechas_disponibles[fecha]:
                fechas_disponibles[fecha].remove(hora)

        # Obtener los datos del POST
        name = request.data.get('name')
        phone = request.data.get('phone')
        address = request.data.get('address')
        email = request.data.get('email')
        fecha_solicitada = request.data.get('date')
        hora_solicitada = request.data.get('time')
        

        # Validación: verificar que todos los campos estén presentes
        if not name or not phone or not address or not email or not fecha_solicitada or not hora_solicitada:
            return Response(
                {"Error": "Todos los campos son obligatorios."},
                status=status.HTTP_400_BAD_REQUEST
            )
            
            
        # Validación de formato de fecha (YYYY-MM-DD)
        if not re.match(r'^\d{4}-\d{2}-\d{2}$', fecha_solicitada):
            return Response(
                {"detail": "El formato de la fecha es incorrecto. Debe ser YYYY-MM-DD."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Validación de formato de hora (HH:MM 24 horas)
        if not re.match(r'^[0-2][0-9]:[0-5][0-9]$', hora_solicitada):
            return Response(
                {"detail": "El formato de la hora es incorrecto. Debe ser HH:MM en formato 24 horas."},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        # Validación: verificar si la fecha y hora solicitada están disponibles
        if fecha_solicitada not in fechas_disponibles or hora_solicitada not in fechas_disponibles[fecha_solicitada]:
            return Response(
                {"Error": "La fecha y hora solicitada no están disponibles."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Si todo es válido, se elimina la hora de la lista de disponibles y se guarda la cita
        fechas_disponibles[fecha_solicitada].remove(hora_solicitada)

        nueva_cita = Cita(
            name=name,
            phone=phone,
            address=address,
            email=email,
            date=fecha_solicitada,
            time=datetime.datetime.strptime(hora_solicitada, "%H:%M").time()
        )
        nueva_cita.save()

        # Respuesta exitosa
        return Response(
            {"Error": "Cita creada con éxito."},
            status=status.HTTP_201_CREATED
        )
   
 ##Vistas con foraneas   ****
class sub_categories_productsListCreate(generics.ListCreateAPIView):
    queryset = sub_categories_products.objects.all()
    serializer_class = sub_categories_productsSerializer
    permission_classes = [IsAdministrador]  # Solo para pruebas

class sub_categories_productsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = sub_categories_products.objects.all()
    serializer_class = sub_categories_productsSerializer
    permission_classes = [IsAdministrador]
 
 
class productsListCreate(generics.ListCreateAPIView):
    queryset = products.objects.all()
    serializer_class = productsSerializer
    permission_classes = [IsAdministrador]

class productsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = products.objects.all()
    serializer_class = productsSerializer
    permission_classes = [IsAdministrador]
   

    
# Consulta Productos con stock disponible    
"""class productos_stock_disponible(generics.ListAPIView):
    queryset = products.objects.filter(stock__gt=0)
    serializer_class = productsSerializer 
    permission_classes = [IsAuthenticated, IsAdministrador]

    def get_queryset(self):
        # Filtrar productos con inventarios que tienen stock disponible
       return products.objects.filter(inventory__available_stock__gt=0).distinct()

"""
 
#Consulta  productos por sub categorías  
class Productos_Por_Sub_Categoria(generics.ListAPIView):
    serializer_class = productsSerializer  
    queryset = products.objects.all()
    permission_classes = [AllowAny]
    
    
    #def get_queryset(self):
       # id_SubCategoryE= self.kwargs['sub_categories_product_id']
        #productofiltrado = products.objects.filter(sub_categories_product_id=id_SubCategoryE).select_related('id_category')  
        #categoriafiltrada = Categories.objects.filter(id_category = id_categoryE)
        
        #return productofiltrado
    
    
    
class inventoryListCreate(generics.ListCreateAPIView):
    queryset = inventory.objects.all()
    serializer_class = inventorySerializer
    permission_classes = [IsAuthenticated, IsAdministrador]

    def get(self, request):
        return Response({"message": "This is a protected route!"})
    
class inventoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = inventory.objects.all()
    serializer_class = inventorySerializer
    permission_classes =[IsAuthenticated,IsAdministrador]
    def get(self, request):
        return Response({"message": "This is a protected route!"})

class jobs_positionsListCreate(generics.ListCreateAPIView):
    queryset = jobs_positions.objects.all()
    serializer_class = jobs_positionsSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class jobs_positionsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = jobs_positions.objects.all()
    serializer_class = jobs_positionsSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
    
class staffListCreate(generics.ListCreateAPIView):
    queryset = staff.objects.all()
    serializer_class = staffSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class staffDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = staff.objects.all()
    serializer_class = staffSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
     
class servicesListCreate(generics.ListCreateAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer
    permission_classes = [AllowAny]

class servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer 
    permission_classes = [AllowAny]
    
class projectsListCreate(generics.ListCreateAPIView):
    queryset = projects.objects.all()
    serializer_class = projectsSerializer
    

class projectsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = projects.objects.all()
    serializer_class = projectsSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
     
class clientsListCreate(generics.ListCreateAPIView):
    queryset = clients.objects.all()
    serializer_class = clientsSerializer
    permission_classes = [AllowAny]

class clientsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = clients.objects.all()
    serializer_class = clientsSerializer 
    permission_classes = [AllowAny]
    
class sellsListCreate(generics.ListCreateAPIView):
    queryset = sells.objects.all()
    serializer_class = sellsSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class sellsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = sells.objects.all()
    serializer_class = sellsSerializer 
    
class reviewsListCreate(generics.ListCreateAPIView):
    queryset = reviews.objects.all()
    serializer_class = reviewsSerializer
    permission_classes = [AllowAny]
    
    
class reviewsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = reviews.objects.all()
    serializer_class = reviewsSerializer
    permission_classes = [AllowAny]
     
class proformas_invoicesListCreate(generics.ListCreateAPIView):
    queryset = proformas_invoices.objects.all()
    serializer_class = proformas_invoicesSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]

class proformas_invoicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = proformas_invoices.objects.all()
    serializer_class = proformas_invoicesSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
    
    
        
   
    
    
#Tablas intermedias
class products_suppliersListCreate(generics.ListCreateAPIView):
    queryset = products_suppliers.objects.all()
    serializer_class = products_suppliersSerializer
    permission_classes = [AllowAny]
    #permission_classes = [IsAuthenticated, IsAdministrador]
class products_suppliersDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = products_suppliers.objects.all()
    serializer_class = products_suppliersSerializer
    permission_classes = [AllowAny]
    #permission_classes = [IsAuthenticated, IsAdministrador]
    
class staff_tasksListCreate(generics.ListCreateAPIView):
    queryset = staff_tasks.objects.all()
    serializer_class = staff_tasksSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class staff_tasksDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = staff_tasks.objects.all()
    serializer_class = staff_tasksSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
       
class staff_eventsListCreate(generics.ListCreateAPIView):
    queryset = staff_events.objects.all()
    serializer_class = staff_eventsSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class staff_eventsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = staff_events.objects.all()
    serializer_class = staff_eventsSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
        
class projects_servicesListCreate(generics.ListCreateAPIView):
    queryset = projects_services.objects.all()
    serializer_class = projects_servicesSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class projects_servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = projects_services.objects.all()
    serializer_class = projects_servicesSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
    
class staff_projectsListCreate(generics.ListCreateAPIView):
    queryset = staff_projects.objects.all()
    serializer_class = staff_projectsSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class staff_projectsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = staff_projects.objects.all()
    serializer_class = staff_projectsSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
    
class languages_clientsListCreate(generics.ListCreateAPIView):
    queryset = languages_clients.objects.all()
    serializer_class = languages_clientsSerializer
    permission_classes = [AllowAny]

class languages_clientsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = languages_clients.objects.all()
    serializer_class = languages_clientsSerializer
    permission_classes = [AllowAny]
    
class candidates_vacantsListCreate(generics.ListCreateAPIView):
    queryset = candidates_vacants.objects.all()
    serializer_class = candidates_vacantsSerializer

class candidates_vacantsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = candidates_vacants.objects.all()
    serializer_class = candidates_vacantsSerializer
    permission_classes =[IsAuthenticated, IsColaborador]
    
class proformas_invoices_servicesListCreate(generics.ListCreateAPIView):
    queryset = proformas_invoices_services.objects.all()
    serializer_class = proformas_invoices_servicesSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class proformas_invoices_servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = proformas_invoices_services.objects.all()
    serializer_class = proformas_invoices_servicesSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
    
class proformas_invoices_staffListCreate(generics.ListCreateAPIView):
    queryset = proformas_invoices_staff.objects.all()
    serializer_class = proformas_invoices_staffSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]
class proformas_invoices_staffDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = proformas_invoices_staff.objects.all()
    serializer_class = proformas_invoices_staffSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]

class sells_detailsListCreate(generics.ListCreateAPIView):
    queryset = sells_details.objects.all()
    serializer_class = sells_detailsSerializer
    permission_classes = [AllowAny]
    #permission_classes = [IsAuthenticated, IsAdministrador]
class sells_detailsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = sells_details.objects.all()
    serializer_class = sells_detailsSerializer
    permission_classes = [AllowAny]
  
  

 
 
""" Vista para reestablecer la contraseña
from django.http import JsonResponse
from .utils import reset_user_password
from rest_framework.parsers import JSONParser

@csrf_exempt
def reset_password(request, user_id):

    Vista para restablecer la contraseña de un usuario.

    if request.method == 'POST':
        # Aquí procesamos la solicitud y usamos la función modular para restablecer la contraseña
        try:
            data = JSONParser().parse(request)
            new_password = data.get('new_password')

            if not new_password:
                return JsonResponse({'error': 'La contraseña es requerida'}, status=400)
            
            # Usamos la función modular
            response = reset_user_password(user_id, new_password)

            # Si la respuesta contiene un mensaje de éxito, devolvemos éxito
            if 'message' in response:
                return JsonResponse(response, status=200)

            # Si contiene un error, lo devolvemos
            return JsonResponse(response, status=404)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Método no permitido'}, status=405)
    
"""