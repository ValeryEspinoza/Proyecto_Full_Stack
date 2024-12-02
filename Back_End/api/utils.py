
# utils.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
import json


from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist

def reset_user_password(user_id, new_password):
    """
    Función para restablecer la contraseña de un usuario.
    """
    try:
        user = User.objects.get(id=user_id)
        user.set_password(new_password)  # Establece la nueva contraseña
        user.save()  # Guarda el usuario con la nueva contraseña
        return {'message': 'Contraseña restablecida exitosamente'}
    except ObjectDoesNotExist:
        return {'error': 'Usuario no encontrado'}



"""Forma personalizada del crud
@csrf_exempt
def handle_fetch_request(request, method='GET', required_fields=None, object_id=None):

    Función reutilizable para manejar solicitudes fetch en Django.
    - method: El tipo de solicitud HTTP (GET, POST, PUT, PATCH, DELETE)
    - required_fields: Una lista de campos requeridos en el cuerpo de la solicitud para POST/PUT/PATCH
    - object_id: El ID del recurso que se desea modificar o eliminar (si aplica)

    # Para GET, simplemente devolvemos un JsonResponse
    if method == 'GET':
        return JsonResponse({'message': 'GET request recibido'}, status=200)

    # Para POST, PUT, PATCH, procesamos los datos JSON
    if request.method in ['POST', 'PUT', 'PATCH']:
        try:
            data = JSONParser().parse(request)  # Parsea el cuerpo de la solicitud JSON

            # Verificar que se incluyan los campos necesarios (si es requerido)
            if required_fields:
                for field in required_fields:
                    if field not in data:
                        return JsonResponse(
                            {'error': f'Campo {field} requerido'},
                            status=400
                        )

            # Aquí puedes realizar cualquier lógica adicional de validación o procesamiento de los datos
            # Ejemplo: Guardar en base de datos, validar autenticación, etc.
            
            return JsonResponse({'message': 'Datos procesados correctamente', 'data': data}, status=200)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Error al procesar los datos JSON'}, status=400)

    # Para DELETE, eliminamos el recurso identificado por object_id
    if method == 'DELETE':
        if object_id is None:
            return JsonResponse({'error': 'ID del recurso es requerido para eliminar'}, status=400)
        
        # Aquí realizarías la lógica para eliminar el objeto de la base de datos
        # Por ejemplo, si estamos eliminando un objeto de tipo "User":
        # user = User.objects.get(id=object_id)
        # user.delete()

        # Si la eliminación es exitosa
        return JsonResponse({'message': f'Recurso con ID {object_id} eliminado correctamente'}, status=200)

    # Manejo de otros métodos HTTP no permitidos
    return JsonResponse({'error': 'Método no permitido'}, status=405)"""
