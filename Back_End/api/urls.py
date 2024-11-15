from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    
    
#esta es la URL del login que devuelve el token*****************
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Para obtener token de acceso y refresco
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Para refrescar el token de acceso
    
    path('register/', views.UserListCreate.as_view(), name='user-list'), 
    path('register/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),    
    

    
#Tablas sin relaciones foraneas *********************
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
    
    #tasks
    path('tasks/', views.tasksListCreate.as_view(),name='tasks-list'),
    path('tasks/<int:pk>/', views.tasksDetail.as_view(), name='tasks-detai'),
    
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

    #areas
    path('areas/', views.areasListCreate.as_view(), name='areas-list'),
    path('areas/<int:pk>/', views.areasDetail.as_view(), name='areas-detail'),

#Tablas con relaciones foraneas**************
    #Sub_Categories_products
    path('sub_categories_products/', views.sub_categories_productsListCreate.as_view(), name='sub_categories_products-list'),
    path('sub_categories_products/<int:pk>/', views.sub_categories_productsDetail.as_view(), name='category_services-detail'),

   #Products
    path('products/', views.productsListCreate.as_view(),name='products-list'),
    path('products/<int:pk>/', views.productsDetail.as_view(), name='products-detai'),
    
   #inventory
    path('inventory/', views.inventoryListCreate.as_view(),name='inventory-list'),
    path('inventory/<int:pk>/', views.inventoryDetail.as_view(), name='inventory-detai'),
    
    #jobs_positions
    path('jobs_positions/', views.jobs_positionsListCreate.as_view(), name='jobs_positions-list'),
    path('jobs_positions/<int:pk>/', views.jobs_positionsDetail.as_view(), name='jobs_positions-detail'),


    #staff
    path('staff/', views.staffListCreate.as_view(),name='staff-list'),
    path('staff/<int:pk>/', views.staffDetail.as_view(), name='staff-detai'),


    path('services/', views.servicesListCreate.as_view(),name='services-list'),
    path('services/<int:pk>/', views.servicesDetail.as_view(), name='services-detai'), 
    
    path('projects/', views.projectsListCreate.as_view(),name='projects-list'),
    path('projects/<int:pk>/', views.projectsDetail.as_view(), name='projects-detai'),   
    
    path('clients/', views.clientsListCreate.as_view(),name='clients-list'),
    path('clients/<int:pk>/', views.clientsDetail.as_view(), name='clients-detai'), 
    
    path('sells/', views.sellsListCreate.as_view(),name='sells-list'),
    path('sells/<int:pk>/', views.sellsDetail.as_view(), name='sells-detai'), 
    
    path('reviews/', views.reviewsListCreate.as_view(),name='reviews-list'),
    path('reviews/<int:pk>/', views.reviewsDetail.as_view(), name='reviews-detai'), 

    path('proformas_invoices/', views.proformas_invoicesListCreate.as_view(),name='proformas_invoices-list'),
    path('proformas_invoices/<int:pk>/', views.proformas_invoicesDetail.as_view(), name='proformas_invoices-detai'), 
     

     
# URL de tablas intermedias**********************
    path('products_suppliers/', views.products_suppliersListCreate.as_view(),name='products_suppliers-list'),
    path('products_suppliers/<int:pk>/', views.products_suppliersDetail.as_view(), name='products_suppliers-detai'),
 
    path('staff_tasks/', views.staff_tasksListCreate.as_view(),name='staff_tasks-list'),
    path('staff_tasks/<int:pk>/', views.staff_tasksDetail.as_view(), name='staff_tasks-detai'),

    path('staff_events/', views.staff_eventsListCreate.as_view(),name='staff_events-list'),
    path('staff_events/<int:pk>/', views.staff_eventsDetail.as_view(), name='staff_events-detai'), 
       

    path('projects_services/', views.projects_servicesListCreate.as_view(),name='projects_services-list'),
    path('projects_services/<int:pk>/', views.projects_servicesDetail.as_view(), name='projects_services-detai'), 
 
    path('staff_projects/', views.staff_projectsListCreate.as_view(),name='staff_projects-list'),
    path('staff_projects/<int:pk>/', views.staff_projectsDetail.as_view(), name='staff_projects-detai'), 
       
    path('languages_clients/', views.languages_clientsListCreate.as_view(),name='languages_clients-list'),
    path('languages_clients/<int:pk>/', views.languages_clientsDetail.as_view(), name='languages_clients-detai'), 
     
    path('candidates_vacants/', views.candidates_vacantsListCreate.as_view(),name='candidates_vacants-list'),
    path('candidates_vacants/<int:pk>/', views.candidates_vacantsDetail.as_view(), name='candidates_vacants-detai'), 
         
    path('proformas_invoices_services/', views.proformas_invoices_servicesListCreate.as_view(),name='proformas_invoices_services-list'),
    path('proformas_invoices_services/<int:pk>/', views.proformas_invoices_servicesDetail.as_view(), name='proformas_invoices_services-detai'), 
         
    path('proformas_invoices_staff/', views.proformas_invoices_staffListCreate.as_view(),name='proformas_invoices_staff-list'),
    path('proformas_invoices_staff/<int:pk>/', views.proformas_invoices_staffDetail.as_view(), name='proformas_invoices_staff-detai'), 
         
    path('sells_details/', views.sells_detailsListCreate.as_view(),name='sells_details-list'),
    path('sells_details/<int:pk>/', views.sells_detailsDetail.as_view(), name='sells_details-detai'), 
     

]

   
    
    




