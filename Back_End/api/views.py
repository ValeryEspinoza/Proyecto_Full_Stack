from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, BasePermission  # Permisos para JWT
from django.contrib.auth.models import User
from django.db.models import F
from .models import (
    categories, suppliers, paymenth_methods, vacant, candidate, events, languages, status, priorities,
    category_services, tasks, events, areas, sub_categories_products, products, inventory, jobs_positions,
    staff, services, projects, clients, sells, products_suppliers, staff_tasks, staff_events, projects_services,
    staff_projects, languages_clients, reviews, proformas_invoices, candidates_vacants,
    proformas_invoices_staff, proformas_invoices_services, sells_details
    )

from .serializers import (
    categoriesSerializer, suppliersSerializer, paymenth_methodsSerializer, vacantSerializer,
    candidateSerializer, eventsSerializer, tasksSerializer, languagesSerializer,
    statusSerializer, prioritiesSerializer, category_servicesSerializer,  areasSerializer, sub_categories_productsSerializer, productsSerializer,
    inventorySerializer, jobs_positionsSerializer, staffSerializer, servicesSerializer, projectsSerializer,
    clientsSerializer, sellsSerializer, products_suppliersSerializer, staff_tasksSerializer, staff_eventsSerializer,
    projects_servicesSerializer, staff_projectsSerializer, languages_clientsSerializer,
    reviewsSerializer, proformas_invoicesSerializer, candidates_vacantsSerializer,
    proformas_invoices_servicesSerializer, proformas_invoices_staffSerializer, sells_detailsSerializer
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
    
    """def perform_create(self, serializer): #Esta validando el role
        user = serializer.save()
        if user.role == User.Role.ADMIN:
            user.is_staff = True
            user.is_superuser = True
            user.save()"""
    
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsAdministrador]







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

class suppliersDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = suppliers.objects.all()
    serializer_class = suppliersSerializer
    
class paymenth_methodsListCreate(generics.ListCreateAPIView):
    queryset = paymenth_methods.objects.all()
    serializer_class = paymenth_methodsSerializer

class paymenth_methodsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = paymenth_methods.objects.all()
    serializer_class = paymenth_methodsSerializer
       
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
       
class eventsListCreate(generics.ListCreateAPIView):
    queryset = events.objects.all()
    serializer_class = eventsSerializer

class eventsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = events.objects.all()
    serializer_class = eventsSerializer
    
class tasksListCreate(generics.ListCreateAPIView):
    queryset = tasks.objects.all()
    serializer_class = tasksSerializer

class tasksDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = tasks.objects.all()
    serializer_class = tasksSerializer

class languagesListCreate(generics.ListCreateAPIView):
    queryset = languages.objects.all()
    serializer_class = languagesSerializer

class languagesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = languages.objects.all()
    serializer_class = languagesSerializer
    
class statusListCreate(generics.ListCreateAPIView):
    queryset = status.objects.all()
    serializer_class = statusSerializer

class statusDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = status.objects.all()
    serializer_class = statusSerializer

class prioritiesListCreate(generics.ListCreateAPIView):
    queryset = priorities.objects.all()
    serializer_class = prioritiesSerializer

class prioritiesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = priorities.objects.all()
    serializer_class = prioritiesSerializer

class category_servicesListCreate(generics.ListCreateAPIView):
    queryset = category_services.objects.all()
    serializer_class = category_servicesSerializer

class category_servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = category_services.objects.all()
    serializer_class = category_servicesSerializer
     
class areasListCreate(generics.ListCreateAPIView):
    queryset = areas.objects.all()
    serializer_class = areasSerializer

class areasDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = areas.objects.all()
    serializer_class = areasSerializer
   
   
   
   
   
   
 ##Vistas con foraneas   ****
class sub_categories_productsListCreate(generics.ListCreateAPIView):
    queryset = sub_categories_products.objects.all()
    serializer_class = sub_categories_productsSerializer
    
class sub_categories_productsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = sub_categories_products.objects.all()
    serializer_class = sub_categories_productsSerializer
 
class productsListCreate(generics.ListCreateAPIView):
    queryset = products.objects.all()
    serializer_class = productsSerializer

class productsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = products.objects.all()
    serializer_class = productsSerializer
    
class inventoryListCreate(generics.ListCreateAPIView):
    queryset = inventory.objects.all()
    serializer_class = inventorySerializer

class inventoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = inventory.objects.all()
    serializer_class = inventorySerializer
   
class jobs_positionsListCreate(generics.ListCreateAPIView):
    queryset = jobs_positions.objects.all()
    serializer_class = jobs_positionsSerializer

class jobs_positionsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = jobs_positions.objects.all()
    serializer_class = jobs_positionsSerializer
    
class staffListCreate(generics.ListCreateAPIView):
    queryset = staff.objects.all()
    serializer_class = staffSerializer

class staffDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = staff.objects.all()
    serializer_class = staffSerializer 
     
class servicesListCreate(generics.ListCreateAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer

class servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = services.objects.all()
    serializer_class = servicesSerializer 
    
class projectsListCreate(generics.ListCreateAPIView):
    queryset = projects.objects.all()
    serializer_class = projectsSerializer

class projectsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = projects.objects.all()
    serializer_class = projectsSerializer 
     
class clientsListCreate(generics.ListCreateAPIView):
    queryset = clients.objects.all()
    serializer_class = clientsSerializer

class clientsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = clients.objects.all()
    serializer_class = clientsSerializer 
    
class sellsListCreate(generics.ListCreateAPIView):
    queryset = sells.objects.all()
    serializer_class = sellsSerializer

class sellsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = sells.objects.all()
    serializer_class = sellsSerializer 
    
class reviewsListCreate(generics.ListCreateAPIView):
    queryset = reviews.objects.all()
    serializer_class = reviewsSerializer

class reviewsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = reviews.objects.all()
    serializer_class = reviewsSerializer 
     
class proformas_invoicesListCreate(generics.ListCreateAPIView):
    queryset = proformas_invoices.objects.all()
    serializer_class = proformas_invoicesSerializer

class proformas_invoicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = proformas_invoices.objects.all()
    serializer_class = proformas_invoicesSerializer 
    
    
        
   
    
    
#Tablas intermedias
class products_suppliersListCreate(generics.ListCreateAPIView):
    queryset = products_suppliers.objects.all()
    serializer_class = products_suppliersSerializer

class products_suppliersDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = products_suppliers.objects.all()
    serializer_class = products_suppliersSerializer
    
class staff_tasksListCreate(generics.ListCreateAPIView):
    queryset = staff_tasks.objects.all()
    serializer_class = staff_tasksSerializer

class staff_tasksDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = staff_tasks.objects.all()
    serializer_class = staff_tasksSerializer
       
class staff_eventsListCreate(generics.ListCreateAPIView):
    queryset = staff_events.objects.all()
    serializer_class = staff_eventsSerializer

class staff_eventsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = staff_events.objects.all()
    serializer_class = staff_eventsSerializer
    
class projects_servicesListCreate(generics.ListCreateAPIView):
    queryset = projects_services.objects.all()
    serializer_class = projects_servicesSerializer

class projects_servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = projects_services.objects.all()
    serializer_class = projects_servicesSerializer
    
class staff_projectsListCreate(generics.ListCreateAPIView):
    queryset = staff_projects.objects.all()
    serializer_class = staff_projectsSerializer

class staff_projectsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = staff_projects.objects.all()
    serializer_class = staff_projectsSerializer
    
class languages_clientsListCreate(generics.ListCreateAPIView):
    queryset = languages_clients.objects.all()
    serializer_class = languages_clientsSerializer

class languages_clientsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = languages_clients.objects.all()
    serializer_class = languages_clientsSerializer
    
class candidates_vacantsListCreate(generics.ListCreateAPIView):
    queryset = candidates_vacants.objects.all()
    serializer_class = candidates_vacantsSerializer

class candidates_vacantsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = candidates_vacants.objects.all()
    serializer_class = candidates_vacantsSerializer
    
class proformas_invoices_servicesListCreate(generics.ListCreateAPIView):
    queryset = proformas_invoices_services.objects.all()
    serializer_class = proformas_invoices_servicesSerializer

class proformas_invoices_servicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = proformas_invoices_services.objects.all()
    serializer_class = proformas_invoices_servicesSerializer
    
class proformas_invoices_staffListCreate(generics.ListCreateAPIView):
    queryset = proformas_invoices_staff.objects.all()
    serializer_class = proformas_invoices_staffSerializer

class proformas_invoices_staffDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = proformas_invoices_staff.objects.all()
    serializer_class = proformas_invoices_staffSerializer
    
class sells_detailsListCreate(generics.ListCreateAPIView):
    queryset = sells_details.objects.all()
    serializer_class = sells_detailsSerializer

class sells_detailsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = sells_details.objects.all()
    serializer_class = sells_detailsSerializer