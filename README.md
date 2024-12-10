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


Comandos usados en back end:
 py --version
py -m ensurepip --upgrade /  py -m pip install --upgrade pip 
py -m pip install Django==5.1.2
py -m django --version
py -m django startproject [nombre_proyecto]
py manage.py startapp [nombre]
pip install  djangorestframework
npm install aws-sdk
pip install mysqlclient
py -m pip install mysqlclient //A mi solo me funciona con este

py manage.py makemigrations
py manage.py migrate
py manage.py runserver
py manage.py runserver 0.0.0.0:8000 // Con el IP

py manage.py migrate nombre migracion

py manage.py createsuperuser
pip install djangorestframework-simplejwt
py manage.py showmigrations

pip install django-cors-headers # para el cors headers para la conexion del backend con el frontend
npm install react-bootstrap bootstrap

Comandos usados en front end:
npm install react-router-dom
npm install -g json-server
json-server --watch db.json --port 3001 
npm run dev 

npm install react-icons --save
npm i react-icons
npm i --save @fortawesome/fontawesome-svg-core
npm install sweetalert2
npm install @emailjs/browser      
npm install react-bootstrap bootstrap 

npm install react-calendar
npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/interaction emailjs-com
npm install react-toastify
npm install --save font-awesome
npm install --save typeface-titillium-web  tipografia
npm install react-datepicker
 npm install aws-sdk 
npm install toastify-js



CHATBOT
npm install react-chatbot-kit

PARA CALENDARIO: 
npm install react-datepicker
npm install react-calendar   
Servicios y productos formularios:



Servicios CRUD Modularizados
A continuación se presenta la documentación para los servicios CRUD (POST, GET, PUT, PATCH, DELETE) implementados de forma modular. Todos los servicios reciben un EndPoint y en los casos de PUT, PATCH, y DELETE también reciben un objeto de datos (data), mientras que el servicio POST solo recibe el EndPoint.

GET: GetData
Descripción: Este servicio realiza una solicitud HTTP GET a un endpoint proporcionado, obteniendo datos desde el servidor y retornándolos como un objeto JSON. Si la solicitud falla, se lanza un error con detalles sobre el fallo.
Parámetro:
EndPoint (string): El endpoint de la API al cual se le realizará la solicitud GET. Este parámetro es obligatorio.
Respuesta:
Si la solicitud es exitosa, devuelve un objeto JSON con los datos obtenidos.
Si la solicitud falla, lanza un error con detalles sobre el fallo.

POST: PostData
Descripción: Este servicio realiza una solicitud HTTP POST a un endpoint proporcionado, enviando los datos del cuerpo de la solicitud al servidor. Este método se usa para crear nuevos recursos.
Parámetros:
EndPoint (string): El endpoint al cual se le enviará la solicitud POST. Este parámetro es obligatorio.
data (object): Los datos que se enviarán en el cuerpo de la solicitud. Este parámetro es obligatorio.
Respuesta:
Si la solicitud es exitosa, devuelve el objeto de respuesta del servidor en formato JSON.
Si la solicitud falla, lanza un error con detalles sobre el fallo.

PUT: PutData
Descripción: Este servicio realiza una solicitud HTTP PUT a un endpoint especificado, enviando los datos completos para actualizar un recurso existente en el servidor. Se utiliza para reemplazar un recurso completo.
Parámetros:
EndPoint (string): El endpoint al cual se enviará la solicitud PUT. Este parámetro es obligatorio.
data (object): Los datos que se enviarán en el cuerpo de la solicitud para actualizar el recurso. Este parámetro es obligatorio.
Respuesta:
Si la solicitud es exitosa, devuelve el objeto de respuesta del servidor en formato JSON.
Si la solicitud falla, lanza un error con detalles sobre el fallo.

PATCH: PatchData
Descripción: Este servicio realiza una solicitud HTTP PATCH a un endpoint específico, enviando los datos necesarios para realizar una actualización parcial de un recurso en el servidor. Se usa cuando solo se desea modificar una parte de un recurso.
Parámetros:
EndPoint (string): El endpoint al cual se le enviará la solicitud PATCH. Este parámetro es obligatorio.
data (object): Los datos que se enviarán en el cuerpo de la solicitud para actualizar parcialmente el recurso. Este parámetro es obligatorio.
Respuesta:
Si la solicitud es exitosa, devuelve el objeto de respuesta del servidor en formato JSON.
Si la solicitud falla, lanza un error con detalles sobre el fallo.


DELETE: DeleteData
Descripción: Este servicio realiza una solicitud HTTP DELETE a un endpoint específico, solicitando la eliminación de un recurso en el servidor.
Parámetros:
EndPoint (string): El endpoint al cual se le enviará la solicitud DELETE. Este parámetro es obligatorio.
Respuesta:
Si la solicitud es exitosa, devuelve un mensaje de confirmación o una respuesta JSON.
Si la solicitud falla, lanza un error con detalles sobre el fallo.



Documentación de Componentes CRUD: Servicios, Productos, Eventos, Tareas, Usuarios
Los componentes de la aplicación siguen una arquitectura modular utilizando servicios CRUD (Crear, Leer, Actualizar, Eliminar) que permiten gestionar datos en diversas entidades como productos, eventos, tareas y usuarios. Además, algunos de estos componentes incluyen funcionalidades adicionales como filtrado de datos, carga de imágenes a servicios como Amazon Web Services (AWS) y la actualización de la base de datos con URLs de las imágenes cargadas. Todos los componentes están diseñados para ser responsivos y permiten la adición y edición de registros.

1. Servicios
Descripción: Los servicios son funciones modulares que permiten interactuar con la API y realizar operaciones CRUD sobre las entidades. Los métodos disponibles son:

GET: Recuperar los datos de la entidad.
POST: Crear un nuevo recurso.
PUT: Actualizar un recurso existente.
PATCH: Actualizar parcialmente un recurso.
DELETE: Eliminar un recurso.
Además de las operaciones CRUD, estos servicios pueden incluir funciones de filtrado y carga de archivos.

Funciones adicionales:

Filtrado: La función de filtrado permite que los datos puedan ser buscados por un campo específico (por ejemplo, nombre).
Carga de imágenes a AWS: Se permite subir imágenes a un almacenamiento en la nube (como Amazon S3), y la URL de la imagen se almacena en la base de datos.
2. Productos
Descripción: El componente Productos permite gestionar todos los aspectos relacionados con los productos dentro de la aplicación. Los usuarios pueden agregar nuevos productos, editar productos existentes, eliminar productos y buscar productos por nombre. Además, el componente incluye una funcionalidad para cargar imágenes a AWS y almacenar la URL en la base de datos.

Funcionalidad:

Visualización: Los productos se muestran en una tabla con detalles como nombre, descripción, precio, subcategorías y imagen. Se implementa un sistema de búsqueda para filtrar los productos por nombre.
Edición: Permite modificar los campos de un producto, como el nombre, descripción, precio, subcategoría y la imagen. Se puede editar un producto desde la tabla o mediante un formulario.
Eliminación: Permite eliminar productos de la base de datos.
Creación: Permite agregar un nuevo producto mediante un formulario con la opción de cargar una imagen que se sube a AWS.
Carga de imagen: Las imágenes de los productos se cargan a un servicio como Amazon S3. La URL de la imagen se guarda en la base de datos.
Funciones adicionales:

Filtrado por nombre: Los productos pueden ser filtrados mediante un campo de búsqueda que filtra por el nombre del producto.
Carga de imagen a AWS: El usuario puede cargar una imagen al agregar o editar un producto. Esta imagen se sube a Amazon S3, y la URL de la imagen se guarda en el producto.
Responsividad: El componente es totalmente responsivo, adaptándose a diferentes tamaños de pantalla, como en dispositivos móviles o tabletas.
Flujo de Trabajo:

Al cargar el componente, se realiza una solicitud GET a la API para obtener la lista de productos.
Los productos se muestran en una tabla donde cada fila tiene opciones para editar, eliminar o ver más detalles. También se permite filtrar por nombre.
Para crear un producto, el usuario completa un formulario que incluye campos para nombre, descripción, precio, subcategoría y carga de imagen.
La imagen cargada es enviada a AWS, y la URL es almacenada en el producto.
Para editar un producto, se realiza una solicitud PUT o PATCH con los nuevos datos, incluyendo la URL de la imagen si es modificada.
Para eliminar un producto, se realiza una solicitud DELETE para eliminarlo de la base de datos.
3. Eventos
Descripción: El componente Eventos permite gestionar los eventos, permitiendo su visualización, creación, edición y eliminación. Al igual que con los productos, el componente es completamente responsivo y tiene capacidad para agregar imágenes que se almacenan en AWS.

Funcionalidad:

Visualización: Los eventos se muestran en una lista o tabla con información como nombre, fecha, ubicación, y descripción.
Edición: Permite editar detalles de un evento, como nombre, fecha, descripción y agregar o actualizar la imagen del evento.
Eliminación: Permite eliminar eventos de la base de datos.
Creación: Los usuarios pueden crear eventos, incluyendo la opción de cargar una imagen que se almacena en AWS.
Flujo de Trabajo:

Al cargar el componente, se hace una solicitud GET para obtener los eventos.
Los eventos se visualizan en una tabla. Se pueden filtrar por nombre o fecha.
Al agregar o editar un evento, se permite la carga de imágenes, las cuales se suben a AWS y su URL se guarda en el evento.
Las ediciones se realizan mediante PUT o PATCH, y las eliminaciones con DELETE.
4. Tareas
Descripción: El componente Tareas se utiliza para gestionar las tareas, permitiendo su visualización, creación, edición y eliminación. Este componente también permite la carga de imágenes si es necesario.

Funcionalidad:

Visualización: Muestra una lista de tareas, con opciones para ver, editar y eliminar tareas.
Edición: Permite modificar detalles como nombre, descripción y fecha de vencimiento de una tarea.
Eliminación: Permite eliminar tareas.
Creación: Los usuarios pueden agregar nuevas tareas, incluyendo la opción de cargar una imagen relacionada con la tarea.
Flujo de Trabajo:

Se realiza una solicitud GET para obtener la lista de tareas.
Las tareas se muestran en una tabla donde se pueden filtrar por nombre o fecha.
Las tareas se pueden editar, y se utiliza PUT o PATCH para enviar los cambios al servidor.
Se pueden eliminar tareas con una solicitud DELETE.
5. Usuarios
Descripción: El componente Usuarios permite gestionar las cuentas de usuario dentro de la aplicación. Los administradores pueden agregar, editar y eliminar usuarios, y también gestionar su información, como el rol y la imagen de perfil, que se puede cargar a AWS.

Funcionalidad:

Visualización: Los usuarios registrados se muestran en una lista o tabla.
Edición: Los administradores pueden editar los detalles de los usuarios, como nombre, correo electrónico, rol y la imagen de perfil.
Eliminación: Permite eliminar cuentas de usuario.
Creación: Los administradores pueden agregar nuevos usuarios y cargar imágenes de perfil que se almacenan en AWS.
Flujo de Trabajo:

Al cargar el componente, se realiza una solicitud GET para obtener todos los usuarios.
Los usuarios se visualizan en una tabla. Es posible buscar usuarios por nombre o correo electrónico.
Para editar un usuario, se permite modificar el nombre, correo electrónico, rol y imagen de perfil.
La imagen de perfil se sube a AWS, y su URL se almacena en la base de datos.
Las ediciones se realizan mediante PUT o PATCH, y la eliminación se realiza con DELETE.
Resumen de Funcionalidades Adicionales
Filtrado por nombre (productos, tareas, usuarios): Permite buscar por nombre, correo electrónico o cualquier otro campo relevante.
Carga de imágenes a AWS: Los productos, eventos, tareas y usuarios pueden tener imágenes cargadas a Amazon S3. La URL de la imagen se almacena en la base de datos para ser utilizada posteriormente.
Responsividad: Todos los componentes están diseñados para ser responsivos, lo que significa que se adaptan a diferentes tamaños de pantalla, asegurando una experiencia de usuario óptima en dispositivos móviles, tabletas y escritorios.
Agregación y edición de datos: Los usuarios pueden agregar y editar productos, servicios, eventos, tareas, y usuarios a través de formularios interactivos. Las imágenes se cargan a la nube y se gestionan mediante URL almacenadas en la base de datos.
Este enfoque modular garantiza una experiencia de usuario consistente y eficiente, además de permitir la integración de servicios externos como AWS para la gestión de archivos multimedia.


PAYPAL:
npm install react-toastify @paypal/react-paypal-js jspdf