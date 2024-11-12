from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, BasePermission  # Permisos para JWT
from django.contrib.auth.models import User
from django.db.models import F

# Create your views here.
from .models import (
    categories,
    suppliers,
    paymenth_methods,
    vacant,
    candidate,
    events, languages,
    status,
    priorities,
    category_services,
    sub_categories_products,
    products
    )

from .serializers import (
    categoriesSerializer,
    suppliersSerializer,
    paymenth_methodsSerializer,
    vacantSerializer,
    candidateSerializer,
    eventsSerializer,
    languagesSerializer,
    statusSerializer,
    prioritiesSerializer,
    category_servicesSerializer,
    sub_categories_productsSerializer,
    productsSerializer
)




#Configuraciones


## Esto modelo permite establecer roles de usuarios
class IsColaborador(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="colaborador").exist()
    
class IsAdministrador(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="administrador").exist()
    
class IsCliente(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="cliente").exist()




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
    permission_classes = [AllowAny]



##### Vistas sin foraneas

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
   
   
   
   
   
   
 ##Vistas con foraneas   
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