"""# api/tests/test_models.py
from django.test import TestCase
from django.contrib.auth.models import User
from api.models import Staff, JobsPositions

class StaffModelTest(TestCase):

    def setUp(self):
        # Crear un superusuario de ejemplo
        self.superuser = User.objects.create_superuser(username='admin', email='admin@example.com', password='adminpassword')

        # Crear una posición de trabajo
        self.position = JobsPositions.objects.create(position_name="Software Engineer", position_description="Develops software")

        # Crear una instancia de Staff relacionada con el superusuario y la posición
        self.staff = Staff.objects.create(
            name='John', 
            last_name='Doe', 
            email='johndoe@example.com', 
            phone_number='1234567890', 
            entry_date='2024-01-01', 
            position=self.position, 
            user=self.superuser  # Usando el superusuario
        )

    def test_staff_creation(self):
        # Verificar que el Staff se creó correctamente
        self.assertEqual(self.staff.name, 'John')
        self.assertEqual(self.staff.last_name, 'Doe')
        self.assertEqual(self.staff.email, 'johndoe@example.com')
        self.assertEqual(self.staff.phone_number, '1234567890')
        self.assertEqual(str(self.staff.position), 'Software Engineer')

    def test_staff_user_relationship(self):
        # Verificar que la relación OneToOne entre Staff y User (superusuario) es correcta
        self.assertEqual(self.staff.user.username, 'admin')
        self.assertTrue(self.staff.user.is_superuser)  # Verificar que es un superusuario
        self.assertEqual(self.staff.user.staff_profile, self.staff)

    def test_staff_position_relationship(self):
        # Verificar que la relación ForeignKey entre Staff y JobsPositions es correcta
        self.assertEqual(self.staff.position.position_name, 'Software Engineer')
"""