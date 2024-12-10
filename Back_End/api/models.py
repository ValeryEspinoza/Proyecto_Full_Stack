from django.db import models
from django.contrib.auth.models import User








# modelos sin llaves foraneas
class categories (models.Model):
    category_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, null=False)
    description = models.TextField(max_length=255, null=False)
    creation_Date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.name)

class suppliers (models.Model):
    supplier_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    direction = models.TextField(max_length=255, null=False)
    phone = models.CharField(max_length=15, null=False)
    email = models.CharField(max_length=100, null=False)
    register_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.name)

class paymenth_methods (models.Model):
    paymenth_method_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False)
    
    def __str__(self):
        return str(self.name)

class vacant(models.Model):
    vacant_id = models.AutoField(primary_key=True)
    tittle = models.CharField(max_length=255, null=False)
    description = models.TextField(max_length=255, null=False)
    requirements = models.TextField(max_length=255, null=False)
    publication_date = models.DateTimeField(auto_now_add=True)
    closing_date = models.DateTimeField(null=False)

    def __str__(self):
        return str(self.tittle)

class candidate (models.Model):
    candidate_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    email = models.EmailField(max_length=225, unique= True, null=False)
    address = models.CharField(max_length=250, null=False)
    birthday = models.DateField(null=False)
    curriculum = models.FileField(upload_to="Documentos/")
    message = models.TextField(max_length=255, null=False)
    def __str__(self):
        return str(self.name)

class tasks (models.Model):
    task_id = models.AutoField(primary_key=True)
    tittle = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    expire_date = models.DateTimeField(null=False)
    complete = models.BooleanField(default=False)
    def __str__(self):
        return str(self.tittle)

class events (models.Model):
    event_id = models.AutoField(primary_key=True)
    tittle = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    starting_date = models.DateField(null=False)
    ending_date = models.DateField(null=False)
    place = models.CharField(max_length=255, null=False)
    def __str__(self):
        return str(self.tittle)
    
    
class languages (models.Model):
    language_id = models.AutoField(primary_key=True)
    language = models.TextField(null=False)

    def __str__(self):
        return str(self.language)

class status (models.Model):
    status_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    
    def __str__(self):
        return str(self.name)

class priorities (models.Model):
    prority_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250, null=False)
    description = models.TextField(null=False)
    
    def __str__(self):
        return str(self.name)

class category_services (models.Model):
    category_services_id = models.AutoField(primary_key=True)
    name = models. CharField(max_length=250, null=False)
    description = models.TextField(null=False)
    
    def __str__(self):
        return str(self.name)
    
    
class areas (models.Model):
    area_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    
    
class Cita(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    address = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    Date = models.DateField()
    time = models.TimeField()

    def _str_(self):
        return f"{self.name} - {self.date} {self.time}"





#Modelos con llaves foraneas

class sub_categories_products (models.Model):
    sub_category_product_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    category = models.ForeignKey(categories, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.name)
  
class products(models.Model):
    product_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Permitir null en la base de datos
    creation_date = models.DateTimeField(null=False, auto_now_add=True)
    imagen_url = models.TextField(blank=True, max_length=2200)
    sub_categories_product = models.ForeignKey(sub_categories_products, on_delete=models.CASCADE)
    
    sub_categories_product = models.ForeignKey(sub_categories_products, on_delete=models.CASCADE)   
    def __str__(self):
        return str(self.name)
class inventory(models.Model):
    inventory_id = models.AutoField(primary_key=True)
    initial_stock = models.IntegerField(null=False)
    available_stock = models.IntegerField(null=False)
    reserved_stock = models.PositiveIntegerField(default=0)
    damaged_stock = models.IntegerField(null=False)
    entry_date = models.DateField(null=False, auto_now_add=True)
    product = models.ForeignKey(products, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.available_stock)

class jobs_positions(models.Model):
    position_id = models.AutoField(primary_key=True)
    position_name = models.CharField(max_length=255,  null=False)
    position_description = models.TextField(null=False)
    area = models.ForeignKey(areas, on_delete=models.CASCADE) 
    def __str__(self):
        return str(self.position_name)
 
class staff(models.Model):
    staff_id = models.AutoField(primary_key=True)
    ID = models.CharField(max_length=50, null=False, blank=True)
    name = models.CharField(max_length=100, null=False)
    last_name = models.CharField(max_length=100, null=False)
    email = models.EmailField(null=False, unique=True, max_length=254)
    phone_number = models.CharField(max_length=100, null=False)
    entry_date = models.DateField(null=False)
    position = models.ForeignKey(jobs_positions, on_delete=models.CASCADE)
    user= models.OneToOneField(User, on_delete=models.CASCADE, related_name="staff_profile")
    def __str__(self):
        return str(self.name)
   
class services(models.Model):
    service_id = models.AutoField(primary_key=True)
    service = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    imagen_url = models.TextField(max_length=2000)  
    category= models.ForeignKey(category_services, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.service)
    
   
class projects(models.Model):
    project_id = models.AutoField(primary_key=True)
    project_name = models.CharField(max_length=255, null=False)
    start_date = models.DateField(null=False)
    description =  models.TextField(null=False, max_length=200)
    end_date = models.DateField(null=False)
    status = models.ForeignKey( status, on_delete=models.CASCADE)
    priority = models.ForeignKey(priorities, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.project_name)
    
    
class clients (models.Model):
    client_id = models.AutoField(primary_key=True)
    ID = models.CharField(max_length=50, null=False, blank=True)
    name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null= False)
    email= models.EmailField(null=False)
    phone_number = models.CharField(max_length=15, null=False)
    register_date = models.DateTimeField(auto_now_add=True, null=False, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="client_profile")
    def __str__(self):
        return str(self.name)  
   
class sells(models.Model):
    sell_id = models.AutoField(primary_key=True)
    sell_date = models.DateTimeField(auto_now_add=True)
    discount_applied = models.DecimalField(max_digits=5, decimal_places=2)
    quiantity = models.IntegerField(null=False)
    taxes = models.DecimalField(max_digits=5, decimal_places=2)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    client = models.ForeignKey(clients, on_delete=models.CASCADE)
    staff = models.ForeignKey(staff, on_delete=models.CASCADE)
    payment_method = models.ForeignKey(paymenth_methods, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.sell_date)  
      
    
    
class reviews(models.Model):
    review_id = models.AutoField(primary_key=True)
    review = models.TextField(null=False)
    date = models.DateField(auto_now_add=True)
    rating = models.DecimalField( max_digits=3, decimal_places=1)
    client = models.ForeignKey(clients, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.review)  
    


class proformas_invoices (models.Model):
    proforma_id = models.AutoField(primary_key=True)
    creation_date= models.DateTimeField(null=False)
    expiration_date = models.DateTimeField(null=False)
    materials_pdf = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=False, max_length=300)
    quiantity = models.DecimalField( max_digits=5, decimal_places=2, null=False)
    unit_price = models.DecimalField( max_digits=10, decimal_places=2, null=False)
    sub_total = models.DecimalField(max_digits=10, decimal_places=2)
    taxes = models.DecimalField(max_digits=5, decimal_places=2)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    activo = models.BooleanField(default=True)
    client = models.ForeignKey(clients, on_delete=models.CASCADE)

    
    
    
    

    
    
#Modelos con relaciones intermedias
class products_suppliers (models.Model):
    product_supplier_id = models.AutoField(primary_key=True)
    product = models.ForeignKey(products, on_delete=models.CASCADE)
    supplier = models.ForeignKey(suppliers, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.product_supplier_id)
    
      
class staff_tasks (models.Model):
    staff_task_id = models.AutoField(primary_key=True)
    staff = models.ForeignKey(staff, on_delete=models.CASCADE)
    task = models.ForeignKey(tasks, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.staff_task_id)

class staff_events (models.Model):
    staff_events_id = models.AutoField(primary_key=True)
    staff = models.ForeignKey(staff, on_delete=models.CASCADE)
    events = models.ForeignKey(events, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.staff_events_id)
   
class projects_services (models.Model):
    project_services_id = models.AutoField(primary_key=True)
    service = models.ForeignKey(services, on_delete= models.CASCADE)
    project = models.ForeignKey(projects, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.project_services_id)
    
class staff_projects (models.Model):
    staff_projects_id = models.AutoField(primary_key=True)
    staff = models.ForeignKey(staff, on_delete=models.CASCADE)
    project = models.ForeignKey(projects, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.staff_projects_id)
    
class languages_clients (models.Model):
    language_client_id = models.AutoField(primary_key=True)
    language = models.ForeignKey(languages, on_delete=models.CASCADE)
    client = models.ForeignKey(clients, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.language_client_id )
    
class candidates_vacants(models.Model):
    candidate_vacant_id = models.AutoField(primary_key=True)
    candidate = models.ForeignKey(candidate, on_delete=models.CASCADE)
    vacant = models.ForeignKey(vacant, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.candidate_vacant_id )


class proformas_invoices_services (models.Model):
    proforma_invoice_service_id = models.AutoField(primary_key=True)
    proforma_invoice = models.ForeignKey(proformas_invoices, on_delete=models.CASCADE)
    service = models.ForeignKey(services, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.proforma_invoice_service_id )
    
class proformas_invoices_staff (models.Model):
    proforma_invoice_staff_id = models.AutoField(primary_key=True)
    proforma_invoice = models.ForeignKey(proformas_invoices, on_delete=models.CASCADE)
    staff = models.ForeignKey(staff, on_delete=models.CASCADE)
    
    
class sells_details (models.Model):
    sell_details_id = models.AutoField(primary_key=True)
    comments= models.TextField(max_length=200, null=False, blank=True)
    sell = models.ForeignKey(sells, on_delete=models.CASCADE)
    product = models.ForeignKey(products, on_delete=models.CASCADE)
    
#Tabla Poliforma   
class calendar (models.Model):
    calendar_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False)
    date = models.DateField(null=False)
    description = models.TextField(max_length=200, null=False, blank=True)


