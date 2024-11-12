from django.urls import path
from . import views

"""from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)"""


urlpatterns = [
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
    
    #esta es la URL del token
    #path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Para obtener token de acceso y refresco
    #path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Para refrescar el token de acceso

    
]