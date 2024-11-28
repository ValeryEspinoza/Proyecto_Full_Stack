Configuración Inicial:



BACK END:
Configuración Inicial:
1. Instalar Django y sus dependencias:
- Instalar Python 3.9 o superior
- Instalar pip
- Instalar Django mediante pip: pip install django
2. Crear un nuevo proyecto Django:
- django-admin startproject proyecto
3. Crear una aplicación dentro del proyecto:
- python manage.py startapp aplicacion
4. Configurar el archivo settings.py:
- Agregar la aplicación a la lista de aplicaciones instaladas
- Configurar la base de datos (por defecto se utiliza SQLite)
5. Crear un modelo en la aplicación:
- models.py: definir el modelo con sus campos y relaciones
6. Crear una migración para el modelo:
- python manage.py makemigrations
- python manage.py migrate


Funciones para Prevenir Ataques y Validar Datos Archivo Validations.py

El objetivo de las siguientes funciones es garantizar que los datos proporcionados por el usuario sean válidos, seguros y no contengan contenido malicioso o erróneo. A continuación, se describe cada función:

1. validate_not_empty(value)
Propósito: Verifica que el campo no esté vacío.

Descripción: Esta función asegura que el valor ingresado no sea una cadena vacía. Los campos vacíos pueden ser aprovechados en ataques de inyección o en situaciones donde la falta de datos puede resultar en un comportamiento inesperado en la aplicación.
Prevención de ataques: Impide que se procesen entradas vacías que podrían ser manipuladas para evitar validaciones posteriores o vaciar campos críticos de una aplicación.

2. validate_min_characters(value, min_length)
Propósito: Verifica que el valor tenga una longitud mínima.

Descripción: Asegura que el valor ingresado cumpla con un tamaño mínimo, en este caso, 5 caracteres. Esto es importante para prevenir entradas demasiado cortas que podrían ser utilizadas para inyectar código malicioso o causar errores en el procesamiento de datos.
Prevención de ataques: Limita la longitud mínima para prevenir ataques de inyección o overflow en los que el atacante podría enviar datos demasiado pequeños para pasar la validación de longitud.

3. validate_max_characters(value, max_length)
Propósito: Verifica que el valor no exceda la longitud máxima.

Descripción: Esta función garantiza que el valor no sea más largo que un límite especificado, en este caso, 200 caracteres. Limitar la longitud de los datos ayuda a prevenir ataques de denegación de servicio (DoS), desbordamientos de búfer, y puede reducir la posibilidad de que se almacenen datos excesivamente grandes que podrían explotar vulnerabilidades.
Prevención de ataques: La longitud excesiva de entradas podría ser aprovechada para afectar el rendimiento del sistema, atacar APIs o incluso sobrescribir datos críticos.


4. validate_no_special_characters(value)
Propósito: Verifica que el valor no contenga caracteres especiales.

Descripción: Esta función valida que el valor ingresado no contenga caracteres especiales que podrían ser utilizados para inyectar código malicioso, como HTML, JavaScript, o secuencias de escape. Los caracteres especiales pueden ser explotados en ataques como Cross-Site Scripting (XSS) o SQL Injection.
Prevención de ataques: Al evitar que el valor contenga caracteres especiales no deseados, se previene la ejecución de scripts maliciosos o la alteración del comportamiento de la base de datos o de la aplicación.


5. sanitize_input(value)
Propósito: Sanitiza el valor de entrada.

Descripción: Esta función realiza una limpieza del valor proporcionado por el usuario. La sanitización generalmente implica la eliminación o escape de caracteres peligrosos, como etiquetas HTML, secuencias de JavaScript, o cualquier contenido que pueda ser interpretado como código por el sistema. El propósito es prevenir ataques como Cross-Site Scripting (XSS), inclusión de código malicioso o inyección de código en aplicaciones web.
Prevención de ataques: La sanitización ayuda a limpiar los valores antes de que se utilicen en la aplicación, asegurando que el contenido no pueda ser interpretado de manera que permita la ejecución de código malicioso o afecte la seguridad de la base de datos.


