from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    
    
    #esta es la URL del login que devuelve el token
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Para obtener token de acceso y refresco
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Para refrescar el token de acceso
    
    path('register/', views.UserListCreate.as_view(), name='user-list'), 
    path('register/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),    
    

    

    #Categorias de productos
    path('categories/', views.categoriesListCreate.as_view(), name='categories-list'),
    path('categories/<int:pk>/', views.categoriesDetail.as_view(), name='categories-detail'),

    #Proveedores
    path('suppliers/', views.suppliersListCreate.as_view(), name='suppliers-list'),
    path('suppliers/<int:pk>/', views.suppliersDetail.as_view(), name='suppliers-detail'),

    #Metodos de pago
    path('paymenth_methods/', views.paymenth_methodsListCreate.as_view(), name='paymenth_methods-list'),
    path('paymenth_methods/<int:pk>/', views.paymenth_methodsDetail.as_view(), name='paymenth_methods-detail'),

    #Vacantes/ Puestos disponibles
    path('vacant/', views.vacantListCreate.as_view(), name='vacant-list'),
    path('vacant/<int:pk>/', views.vacantDetail.as_view(), name='vacant-detail'),

    #Candidatos postulantes
    path('candidate/', views.candidateListCreate.as_view(), name='candidate-list'),
    path('candidate/<int:pk>/', views.candidateDetail.as_view(), name='candidate-detail'),
    
    #Eventos o citas
    path('events/', views.eventsListCreate.as_view(), name='events-list'),
    path('events/<int:pk>/', views.eventsDetail.as_view(), name='events-detail'),
    
    #Lenguajes
    path('languages/', views.languagesListCreate.as_view(), name='languages-list'),
    path('languages/<int:pk>/', views.languagesDetail.as_view(), name='languages-detail'),
    
    #Status
    path('status/', views.statusListCreate.as_view(), name='status-list'),
    path('status/<int:pk>/', views.statusDetail.as_view(), name='status-detail'),
    
    #Priorities
    path('priorities/', views.prioritiesListCreate.as_view(), name='priorities-list'),
    path('priorities/<int:pk>/', views.prioritiesDetail.as_view(), name='priorities-detail'),
    
    #Category_services
    path('category_services/', views.category_servicesListCreate.as_view(), name='category_services-list'),
    path('category_services/<int:pk>/', views.category_servicesDetail.as_view(), name='category_services-detail'),

    #Sub_Categories_products
    path('sub_categories_products/', views.sub_categories_productsListCreate.as_view(), name='sub_categories_products-list'),
    path('sub_categories_products/<int:pk>/', views.sub_categories_productsDetail.as_view(), name='category_services-detail'),


    #Products
    path('prodcuts/', views.productsListCreate.as_view(),name='products-list'),
    path('prodcuts/<int:pk>/', views.productsDetail.as_view(), name='products-detai'),
    #esta es la URL del token
    #path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Para obtener token de acceso y refresco
    #path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Para refrescar el token de acceso

    
]