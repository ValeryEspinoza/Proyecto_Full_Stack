from rest_framework import serializers
from datetime import datetime
import re
from django.utils.html import escape, strip_tags


#GENERALS FUNTIONS*********************************************

def validate_not_empty(value):# Función de validación general para espacios vacíos
    if not value.strip():  # Si el valor solo contiene espacios vacíos
        raise serializers.ValidationError("Este campo no puede estar vacío ni contener solo espacios.")


def validate_min_characters(value, min_chars): #Funcion de caracteres mínimos
    if len(value) < min_chars:
        raise serializers.ValidationError(f"Este campo debe tener al menos {min_chars} caracteres.")

def validate_max_characters(value, max_chars):
    if len(value) > max_chars:
        raise serializers.ValidationError(f"Este campo no puede tener más de {max_chars} caracteres.")


def validate_email_caracters(value):
    # Verificar que ambos '@' y '.' estén presentes
    if "@" not in value or "." not in value:
        raise serializers.ValidationError("El correo electrónico debe contener '@' y un punto ('.').")
    
    # Expresión regular robusta para correos electrónicos
    email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

    # Comprobamos si el valor cumple con el patrón de un correo electrónico
    if not re.match(email_regex, value):
        raise serializers.ValidationError("El correo electrónico no tiene un formato válido.") 
    
    return value

#Por probar no esta funcionando
def validate_datetime_format(value): # Se define el formato deseado
    
    formato = "%Y-%m-%d %H:%M:%S"  # 'YYYY-MM-DD HH:MM:SS'

    try:
        # Intentar convertir la cadena de texto en un objeto datetime
        datetime.strptime(value, formato)
    except ValueError:
        # Si ocurre un error, significa que no coincide con el formato
        raise serializers.ValidationError(f"El valor debe estar en el formato {formato}.")


def validate_date_format(value): # Función personalizada para validar el formato de fecha
    # Define el formato deseado
    formato = "%Y-%m-%d"  # 'YYYY-MM-DD'

    try:
        # Intentar convertir la cadena de texto en un objeto datetime
        datetime.strptime(value, formato)
    except ValueError:
        # Si ocurre un error, significa que no coincide con el formato
        raise serializers.ValidationError(f"El valor debe estar en el formato {formato}.")


def validate_no_special_characters(value): # Definir un validador personalizado para caracteres peligrosos
    # Define una expresión regular que detecte caracteres peligrosos
    prohibited_characters = re.compile(r'[<>%$&\'";=\\|{}#@]')
    
    # Verificar si el valor contiene caracteres peligrosos
    if prohibited_characters.search(value):
        raise serializers.ValidationError("El valor contiene caracteres no permitidos.")

    return value

def sanitize_input(value): #    Elimina las etiquetas HTML y escapa los caracteres especiales.

    # Eliminar las etiquetas HTML
    stripped_value = strip_tags(value)
    
    # Escapar los caracteres especiales
    sanitized_value = escape(stripped_value)
    
    return sanitized_value


def validate_price(value, min_price, decimal_places):
    # Validar que el precio no esté vacío
    if not value:  # Si el valor solo contiene espacios vacíos
        raise serializers.ValidationError("Este campo no puede estar vacío ni contener solo espacios.")
    
    # Validar que el precio no contenga caracteres especiales    
    if value <= 0 or value < min_price:
        raise serializers.ValidationError(
            f"El precio no puede ser menor que {min_price}, ni igual a 0, ni negativo."
        )
        
    decimal_pattern = r'^\d+(\.\d{1,' + str(decimal_places) + '})?$'

    # Validar que el valor tenga el formato correcto de decimales
    value_str = str(value)
    if not re.match(decimal_pattern, value_str):
        raise serializers.ValidationError(f"El precio debe tener como máximo {decimal_places} decimales.")        

        
        
def validate_Quiantity(value, min_quiantity):
    # Validar que el precio no esté vacío
    if not value:  # Si el valor solo contiene espacios vacíos
        raise serializers.ValidationError("Este campo no puede estar vacío.")
    # Validar que el precio no contenga caracteres especiales
    
    
    if value < 0 or value < min_quiantity:
        raise serializers.ValidationError(
            f"La cantidad no puede ser menor que {min_quiantity}, ni negativo."
        )
        
def validate_negative_values(value):
    # Validar que el precio no esté vacío

    
    if value < 0 :
        raise serializers.ValidationError(
            f"La cantidad no puede ser menor menor a cero"
        )