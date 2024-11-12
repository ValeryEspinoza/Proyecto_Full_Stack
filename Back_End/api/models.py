from django.db import models

# Create your models here.
class categories (models.Model):
    category_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(max_length=255, null=False)
    creation_Date = models.DateTimeField(auto_now_add=True)

class suppliers (models.Model):
    supplier_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    direction = models.TextField(max_length=255, null=False)
    phone = models.CharField(max_length=15, null=False)
    email = models.CharField(max_length=100, null=False)
    register_date = models.DateTimeField(auto_now_add=True)

class paymenth_methods (models.Model):
    paymenth_method_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False)

class vacant(models.Model):
    vacant_id = models.AutoField(primary_key=True)
    tittle = models.CharField(max_length=255, null=False)
    description = models.TextField(max_length=255, null=False)
    requirements = models.TextField(max_length=255, null=False)
    publication_date = models.DateTimeField(auto_now_add=True)
    closing_date = models.DateTimeField(null=False)

class candidate (models.Model):
    candidate_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    email = models.EmailField(max_length=225, unique= True, null=False)
    address = models.CharField(max_length=250, null=False)
    birthday = models.DateField(null=False)
    curriculum = models.FileField(upload_to="Documentos/")
    message = models.TextField(max_length=255, null=False)


class events (models.Model):
    event_id = models.AutoField(primary_key=True)
    tittle = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    starting_date = models.DateField(null=False)
    ending_date = models.DateField(null=False)
    place = models.CharField(max_length=255, null=False)
    
    
class languages (models.Model):
    language_id = models.AutoField(primary_key=True)
    language = models.TextField(null=False)

class status (models.Model):
    status_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)

class priorities (models.Model):
    prority_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250, null=False)
    description = models.TextField(null=False)

class category_services (models.Model):
    category_services_id = models.AutoField(primary_key=True)
    name = models. CharField(max_length=250, null=False)
    description = models.TextField(null=False)

class sub_categories_products (models.Model):
    sub_category_product_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    category_id = models.ForeignKey(categories, on_delete=models.CASCADE)
    
class products (models.Model):
    product_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255,  null=False)
    description = models.TextField(null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=False)
    creation_date = models.TimeField(null=False)
    sub_categories_product_id = models.ForeignKey(sub_categories_products, on_delete=models.CASCADE)


