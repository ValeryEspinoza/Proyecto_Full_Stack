from django.test import TestCase
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from .utils import reset_user_password  # Asegúrate de importar la función correctamente

class ResetUserPasswordTestCase(TestCase):
    
    def setUp(self):
        """
        Este método se ejecuta antes de cada prueba.
        Crea un usuario de prueba para las pruebas.
        """
        self.user = User.objects.create_user(username='testuser', email='test@example.com', password='oldpassword123')
        self.new_password = 'newpassword123'

    def test_reset_password_success(self):
        """
        Prueba que se pueda restablecer la contraseña de un usuario correctamente.
        """
        response = reset_user_password(self.user.id, self.new_password)
        
        # Verificar el mensaje de éxito
        self.assertEqual(response['message'], 'Contraseña restablecida exitosamente')
        
        # Verificar que la contraseña se haya actualizado
        self.user.refresh_from_db()  # Recarga el objeto para obtener los valores actualizados
        self.assertTrue(self.user.check_password(self.new_password))  # Verifica que la nueva contraseña sea correcta

    def test_reset_password_user_not_found(self):
        """
        Prueba que se devuelva un error si el usuario no se encuentra.
        """
        invalid_user_id = 9999  # Un ID de usuario que no existe
        response = reset_user_password(invalid_user_id, self.new_password)
        
        # Verificar que el mensaje de error es el esperado
        self.assertEqual(response['error'], 'Usuario no encontrado')

    def test_reset_password_invalid_user_id(self):
        """
        Prueba que no se lance una excepción si el ID del usuario no es válido.
        """
        invalid_user_id = 'invalid_id'  # Un ID de usuario inválido (tipo de dato incorrecto)
        response = reset_user_password(invalid_user_id, self.new_password)
        
        # Verificar que el mensaje de error sea el adecuado
        self.assertEqual(response['error'], 'Usuario no encontrado')