# Configuración Inicial

## BACK END
### Configuración Inicial:
1. **Instalar Django y sus dependencias**:
   - Instalar Python 3.9 o superior
   - Instalar pip
   - Instalar Django mediante pip: 
     ```bash
     pip install django
     ```

2. **Crear un nuevo proyecto Django**:
   - Ejecutar el siguiente comando:
     ```bash
     django-admin startproject proyecto
     ```

3. **Crear una aplicación dentro del proyecto**:
   - Ejecutar el siguiente comando:
     ```bash
     python manage.py startapp aplicacion
     ```

4. **Configurar el archivo `settings.py`**:
   - Agregar la aplicación a la lista de aplicaciones instaladas.
   - Configurar la base de datos (por defecto se utiliza SQLite).

5. **Crear un modelo en la aplicación**:
   - Definir el modelo con sus campos y relaciones en el archivo `models.py`.

6. **Crear una migración para el modelo**:
   - Ejecutar los siguientes comandos:
     ```bash
     python manage.py makemigrations
     python manage.py migrate
     ```

---

# Funciones para Prevenir Ataques y Validar Datos

## Archivo `Validations.py`

El objetivo de las siguientes funciones es garantizar que los datos proporcionados por el usuario sean válidos, seguros y no contengan contenido malicioso o erróneo. A continuación, se describe cada función:

### 1. `validate_not_empty(value)`
**Propósito**: Verifica que el campo no esté vacío.

**Descripción**: Esta función asegura que el valor ingresado no sea una cadena vacía. Los campos vacíos pueden ser aprovechados en ataques de inyección o en situaciones donde la falta de datos puede resultar en un comportamiento inesperado en la aplicación.

**Prevención de ataques**: Impide que se procesen entradas vacías que podrían ser manipuladas para evitar validaciones posteriores o vaciar campos críticos de una aplicación.

---

### 2. `validate_min_characters(value, min_length)`
**Propósito**: Verifica que el valor tenga una longitud mínima.

**Descripción**: Asegura que el valor ingresado cumpla con un tamaño mínimo, en este caso, 5 caracteres. Esto es importante para prevenir entradas demasiado cortas que podrían ser utilizadas para inyectar código malicioso o causar errores en el procesamiento de datos.

**Prevención de ataques**: Limita la longitud mínima para prevenir ataques de inyección o overflow en los que el atacante podría enviar datos demasiado pequeños para pasar la validación de longitud.

---

### 3. `validate_max_characters(value, max_length)`
**Propósito**: Verifica que el valor no exceda la longitud máxima.

**Descripción**: Esta función garantiza que el valor no sea más largo que un límite especificado, en este caso, 200 caracteres. Limitar la longitud de los datos ayuda a prevenir ataques de denegación de servicio (DoS), desbordamientos de búfer, y puede reducir la posibilidad de que se almacenen datos excesivamente grandes que podrían explotar vulnerabilidades.

**Prevención de ataques**: La longitud excesiva de entradas podría ser aprovechada para afectar el rendimiento del sistema, atacar APIs o incluso sobrescribir datos críticos.

---

### 4. `validate_no_special_characters(value)`
**Propósito**: Verifica que el valor no contenga caracteres especiales.

**Descripción**: Esta función valida que el valor ingresado no contenga caracteres especiales que podrían ser utilizados para inyectar código malicioso, como HTML, JavaScript, o secuencias de escape. Los caracteres especiales pueden ser explotados en ataques como Cross-Site Scripting (XSS) o SQL Injection.

**Prevención de ataques**: Al evitar que el valor contenga caracteres especiales no deseados, se previene la ejecución de scripts maliciosos o la alteración del comportamiento de la base de datos o de la aplicación.

---

### 5. `sanitize_input(value)`
**Propósito**: Sanitiza el valor de entrada.

**Descripción**: Esta función realiza una limpieza del valor proporcionado por el usuario. La sanitización generalmente implica la eliminación o escape de caracteres peligrosos, como etiquetas HTML, secuencias de JavaScript, o cualquier contenido que pueda ser interpretado como código por el sistema. El propósito es prevenir ataques como Cross-Site Scripting (XSS), inclusión de código malicioso o inyección de código en aplicaciones web.

**Prevención de ataques**: La sanitización ayuda a limpiar los valores antes de que se utilicen en la aplicación, asegurando que el contenido no pueda ser interpretado de manera que permita la ejecución de código malicioso o afecte la seguridad de la base de datos.



# COMANDOS USADOS EN EL BACKEND

## Comandos de Python

- `py --version`: Muestra la versión instalada de Python.
- `py -m ensurepip --upgrade`: Asegura que el gestor de paquetes `pip` esté instalado y actualizado.
- `py -m pip install --upgrade pip`: Actualiza `pip` a la última versión disponible.
- `py -m pip install Django==5.1.2`: Instala la versión específica de Django.
- `py -m django --version`: Muestra la versión instalada de Django.
- `py -m django startproject [nombre_proyecto]`: Crea un nuevo proyecto de Django con el nombre especificado.
- `py manage.py startapp [nombre]`: Crea una nueva aplicación dentro del proyecto Django.
- `pip install djangorestframework`: Instala el paquete `djangorestframework` para construir API RESTful.
- `npm install aws-sdk`: Instala el SDK de AWS para interactuar con servicios como S3 o DynamoDB.
- `pip install mysqlclient`: Instala el cliente de MySQL para conectarse a bases de datos MySQL desde Django.
- `py -m pip install mysqlclient`: Otra forma de instalar el cliente MySQL, algunas configuraciones requieren esta versión.
- `py manage.py makemigrations`: Genera migraciones de bases de datos según los modelos definidos en las aplicaciones de Django.
- `py manage.py migrate`: Aplica las migraciones pendientes a la base de datos.
- `py manage.py runserver`: Inicia el servidor de desarrollo de Django en el puerto predeterminado (8000).
- `py manage.py runserver 0.0.0.0:8000`: Inicia el servidor de desarrollo en todas las interfaces de red disponibles (útil para conexión desde otros dispositivos).
- `py manage.py migrate nombre_migracion`: Aplica una migración específica.
- `py manage.py createsuperuser`: Crea un usuario administrador para acceder al panel de administración de Django.
- `pip install djangorestframework-simplejwt`: Instala la librería para agregar autenticación JWT a la API de Django.
- `py manage.py showmigrations`: Muestra todas las migraciones pendientes y aplicadas en el proyecto.
- `pip install django-cors-headers`: Instala la librería para manejar CORS (Cross-Origin Resource Sharing) y permitir la conexión entre el frontend y el backend.
- `npm install react-bootstrap bootstrap`: Instala las librerías de `react-bootstrap` y `bootstrap` para usar componentes de interfaz de usuario con estilos predefinidos.

---

# COMANDOS USADOS EN EL FRONT END
- `npm install react-router-dom`: Instala la librería para gestionar las rutas de navegación en una aplicación React.
- `npm install -g json-server`: Instala `json-server` globalmente para simular un backend usando archivos JSON.
- `json-server --watch db.json --port 3001`: Ejecuta `json-server` para observar cambios en el archivo `db.json` y servirlo en el puerto 3001.
- `npm run dev`: Inicia el servidor de desarrollo de la aplicación React.
- `npm install react-icons --save`: Instala la librería `react-icons` para usar iconos en la aplicación React.
- `npm i react-icons`: Otra forma de instalar la librería `react-icons`.
- `npm i --save @fortawesome/fontawesome-svg-core`: Instala FontAwesome para usar íconos vectoriales.
- `npm install sweetalert2`: Instala la librería `sweetalert2` para mostrar alertas estilizadas en la aplicación.
- `npm install @emailjs/browser`: Instala el cliente de `emailjs` para enviar correos desde el navegador.
- `npm install react-bootstrap bootstrap`: Instala `react-bootstrap` y `bootstrap` para usar componentes de diseño responsive en React.
- `npm install react-calendar`: Instala la librería `react-calendar` para usar un calendario interactivo en React.
- `npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/interaction emailjs-com`: Instala `FullCalendar` y dependencias relacionadas para integrar un calendario interactivo en la aplicación.
- `npm install react-toastify`: Instala `react-toastify` para mostrar notificaciones tipo "toast" en la aplicación.
- `npm install --save font-awesome`: Instala la librería FontAwesome para usar iconos vectoriales.
- `npm install --save typeface-titillium-web`: Instala la tipografía `Titillium Web` para la aplicación.
- `npm install react-datepicker`: Instala `react-datepicker` para incluir un selector de fechas en la interfaz de usuario.
- `npm install aws-sdk`: Instala el SDK de AWS para interactuar con los servicios de AWS.
- `npm install toastify-js`: Instala la librería `toastify-js` para mostrar notificaciones tipo "toast".

---

# Para el Chatbot
- `npm install react-chatbot-kit`: Instala la librería `react-chatbot-kit` para agregar un chatbot interactivo en la aplicación.

---

# Para el Calendario
- `npm install react-datepicker`: Instala `react-datepicker` para la selección de fechas.
- `npm install react-calendar`: Instala `react-calendar` para un calendario visual interactivo.
- `npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/interaction emailjs-com`: Instala las dependencias de `FullCalendar` para integración de un calendario en la aplicación.

---

# Para la Descarga de PDF
- `npm install jspdf`: Instala `jsPDF` para generar archivos PDF desde el navegador.
- `npm install jspdf-autotable`: Instala `jspdf-autotable` para agregar tablas a los archivos PDF generados con `jsPDF`.

---
# Para Integración con PayPal

- `npm install react-toastify @paypal/react-paypal-js jspdf`: Instala `react-toastify` para notificaciones, `@paypal/react-paypal-js` para la integración con PayPal y `jsPDF` para generar PDFs.

# Para integrar los gráficos
- `npm install chart.js react-chartjs-2`: Instala `react-chartjs-2

# SERVICIOS Y PRODUCTOS FORMULARIOS
## Servicios CRUD Modularizados

A continuación se presenta la documentación para los servicios CRUD (POST, GET, PUT, PATCH, DELETE) implementados de forma modular. Todos los servicios reciben un **EndPoint** y en los casos de **PUT**, **PATCH**, y **DELETE** también reciben un objeto de datos (**data**), mientras que el servicio **POST** solo recibe el **EndPoint**.

---

### GET: GetData

**Descripción**:  
Este servicio realiza una solicitud HTTP GET a un endpoint proporcionado, obteniendo datos desde el servidor y retornándolos como un objeto JSON. Si la solicitud falla, se lanza un error con detalles sobre el fallo.

**Parámetro**:
- **EndPoint** (string): El endpoint de la API al cual se le realizará la solicitud GET. Este parámetro es obligatorio.

**Respuesta**:
- Si la solicitud es exitosa, devuelve un objeto JSON con los datos obtenidos.
- Si la solicitud falla, lanza un error con detalles sobre el fallo.

---

### POST: PostData

**Descripción**:  
Este servicio realiza una solicitud HTTP POST a un endpoint proporcionado, enviando los datos del cuerpo de la solicitud al servidor. Este método se usa para crear nuevos recursos.

**Parámetros**:
- **EndPoint** (string): El endpoint al cual se le enviará la solicitud POST. Este parámetro es obligatorio.
- **data** (object): Los datos que se enviarán en el cuerpo de la solicitud. Este parámetro es obligatorio.

**Respuesta**:
- Si la solicitud es exitosa, devuelve el objeto de respuesta del servidor en formato JSON.
- Si la solicitud falla, lanza un error con detalles sobre el fallo.

---

### PUT: PutData

**Descripción**:  
Este servicio realiza una solicitud HTTP PUT a un endpoint especificado, enviando los datos completos para actualizar un recurso existente en el servidor. Se utiliza para reemplazar un recurso completo.

**Parámetros**:
- **EndPoint** (string): El endpoint al cual se enviará la solicitud PUT. Este parámetro es obligatorio.
- **data** (object): Los datos que se enviarán en el cuerpo de la solicitud para actualizar el recurso. Este parámetro es obligatorio.

**Respuesta**:
- Si la solicitud es exitosa, devuelve el objeto de respuesta del servidor en formato JSON.
- Si la solicitud falla, lanza un error con detalles sobre el fallo.

---

### PATCH: PatchData

**Descripción**:  
Este servicio realiza una solicitud HTTP PATCH a un endpoint específico, enviando los datos necesarios para realizar una actualización parcial de un recurso en el servidor. Se usa cuando solo se desea modificar una parte de un recurso.

**Parámetros**:
- **EndPoint** (string): El endpoint al cual se le enviará la solicitud PATCH. Este parámetro es obligatorio.
- **data** (object): Los datos que se enviarán en el cuerpo de la solicitud para actualizar parcialmente el recurso. Este parámetro es obligatorio.

**Respuesta**:
- Si la solicitud es exitosa, devuelve el objeto de respuesta del servidor en formato JSON.
- Si la solicitud falla, lanza un error con detalles sobre el fallo.

---

### DELETE: DeleteData

**Descripción**:  
Este servicio realiza una solicitud HTTP DELETE a un endpoint específico, solicitando la eliminación de un recurso en el servidor.

**Parámetros**:
- **EndPoint** (string): El endpoint al cual se le enviará la solicitud DELETE. Este parámetro es obligatorio.

**Respuesta**:
- Si la solicitud es exitosa, devuelve un mensaje de confirmación o una respuesta JSON.
- Si la solicitud falla, lanza un error con detalles sobre el fallo.


# Documentación de Componentes CRUD: Servicios, Productos, Eventos, Tareas, Usuarios

Los componentes de la aplicación siguen una arquitectura modular utilizando servicios CRUD (Crear, Leer, Actualizar, Eliminar) que permiten gestionar datos en diversas entidades como productos, eventos, tareas y usuarios. Además, algunos de estos componentes incluyen funcionalidades adicionales como filtrado de datos, carga de imágenes a servicios como Amazon Web Services (AWS) y la actualización de la base de datos con URLs de las imágenes cargadas. Todos los componentes están diseñados para ser responsivos y permiten la adición y edición de registros.

---

## 1. **Servicios**
### Descripción
Los servicios son funciones modulares que permiten interactuar con la API y realizar operaciones CRUD sobre las entidades. Los métodos disponibles son:
- **GET**: Recuperar los datos de la entidad.
- **POST**: Crear un nuevo recurso.
- **PUT**: Actualizar un recurso existente.
- **PATCH**: Actualizar parcialmente un recurso.
- **DELETE**: Eliminar un recurso.

### Funciones adicionales
- **Filtrado**: Permite buscar datos por un campo específico (por ejemplo, nombre).
- **Carga de imágenes a AWS**: Subida de imágenes a un almacenamiento en la nube como Amazon S3, almacenando la URL en la base de datos.

---

## 2. **Productos**
### Descripción
Permite gestionar todos los aspectos relacionados con los productos en la aplicación: agregar, editar, eliminar y buscar productos, además de cargar imágenes a AWS.

### Funcionalidad
- **Visualización**: Tabla con detalles como nombre, descripción, precio, subcategorías e imagen.
- **Edición**: Modificación de campos como nombre, descripción, precio, subcategoría e imagen.
- **Eliminación**: Elimina productos de la base de datos.
- **Creación**: Agregar productos mediante formularios interactivos.
- **Carga de imágenes**: Subida de imágenes a AWS con almacenamiento de URL en la base de datos.

### Flujo de Trabajo
1. Solicitud **GET** para obtener la lista de productos.
2. Visualización en una tabla con opciones para filtrar, editar, eliminar o agregar productos.
3. Formulario para agregar o editar productos, incluyendo carga de imágenes a AWS.
4. Solicitudes **PUT**, **PATCH**, o **DELETE** para editar o eliminar registros.

---

## 3. **Eventos**
### Descripción
Gestión de eventos con funcionalidades para visualización, creación, edición y eliminación. Incluye capacidad para agregar imágenes almacenadas en AWS.

### Funcionalidad
- **Visualización**: Lista o tabla con información como nombre, fecha, ubicación y descripción.
- **Edición**: Modificar detalles como nombre, fecha, descripción e imagen.
- **Eliminación**: Elimina eventos de la base de datos.
- **Creación**: Agregar eventos con carga opcional de imágenes a AWS.

### Flujo de Trabajo
1. Solicitud **GET** para obtener los eventos.
2. Visualización en una tabla con opciones de filtrado.
3. Agregar o editar eventos con imágenes cargadas a AWS.
4. Solicitudes **PUT**, **PATCH**, o **DELETE** para editar o eliminar eventos.

---

## 4. **Tareas**
### Descripción
Permite gestionar tareas con funcionalidades para visualización, creación, edición y eliminación. Admite carga de imágenes si es necesario.

### Funcionalidad
- **Visualización**: Lista de tareas con opciones para ver, editar y eliminar.
- **Edición**: Modificación de detalles como nombre, descripción y fecha de vencimiento.
- **Eliminación**: Permite eliminar tareas.
- **Creación**: Agregar nuevas tareas, con opción de cargar imágenes relacionadas.

### Flujo de Trabajo
1. Solicitud **GET** para obtener la lista de tareas.
2. Visualización en tabla con opciones de filtrado.
3. Formulario para agregar o editar tareas.
4. Solicitudes **PUT**, **PATCH**, o **DELETE** para editar o eliminar registros.

---

## 5. **Usuarios**
### Descripción
Gestión de cuentas de usuario. Los administradores pueden agregar, editar y eliminar usuarios, además de gestionar roles e imágenes de perfil.

### Funcionalidad
- **Visualización**: Lista o tabla de usuarios registrados.
- **Edición**: Modificar nombre, correo electrónico, rol e imagen de perfil.
- **Eliminación**: Permite eliminar cuentas.
- **Creación**: Agregar nuevos usuarios con imágenes de perfil almacenadas en AWS.

### Flujo de Trabajo
1. Solicitud **GET** para obtener todos los usuarios.
2. Visualización en tabla con opciones de filtrado.
3. Formularios para agregar o editar usuarios, incluyendo la carga de imágenes de perfil a AWS.
4. Solicitudes **PUT**, **PATCH**, o **DELETE** para editar o eliminar registros.

---

## **Resumen de Funcionalidades Adicionales**
1. **Filtrado por nombre**: Búsqueda por campos relevantes como nombre o correo electrónico.
2. **Carga de imágenes a AWS**: Gestión de imágenes multimedia con URLs almacenadas en la base de datos.
3. **Responsividad**: Adaptación a dispositivos móviles, tabletas y escritorios.
4. **Agregación y edición de datos**: Formularios interactivos para gestionar productos, eventos, tareas y usuarios.

Este enfoque modular garantiza una experiencia de usuario eficiente y permite la integración de servicios externos como AWS para la gestión de archivos multimedia.



# PROFILE CLIENT
## CalendarioCitas

Este componente permite gestionar un calendario de citas, donde los usuarios pueden seleccionar fechas y horas disponibles para programar una cita. Además, se envía una confirmación por correo electrónico y se ofrece la opción de descargar la confirmación en formato PDF.

## Flujo del Componente

1. **Hooks de estado**: 
   - `selectedDate`: Almacena la fecha seleccionada.
   - `availableTimes`: Almacena las horas disponibles para la fecha seleccionada.
   - `appointmentDetails`: Guarda los detalles de la cita.
   - `email`, `name`, `phone`, `address`: Información del usuario.
   - `isEmailProvided`: Indica si el email ha sido proporcionado.
   - `isSubmitting`: Controla el estado de envío de datos.
   - `updateKey`: Permite forzar una actualización del calendario.
   - `selectedTime`: Almacena la hora seleccionada.
   - `confirmedAppointment`: Almacena los detalles de la cita confirmada.
   - `isModalOpen`: Controla la apertura o cierre del modal.
   - `events`: Lista de eventos para mostrar en el calendario.
   - `availableHours`: Almacena horarios disponibles por fecha.

2. **Cargar Horarios Disponibles**:
   - Al cargar el componente, se realiza una solicitud `GET` para obtener los horarios disponibles y mostrar las fechas con horas disponibles en el calendario.
   - Se formatean los eventos y se actualizan los estilos del calendario para resaltar los días con disponibilidad.

3. **Selección de Fecha y Hora**:
   - El usuario puede seleccionar una fecha en el calendario, lo que carga las horas disponibles para esa fecha.
   - Una vez seleccionada una hora, se actualizan los detalles de la cita y se aplican estilos visuales a la hora seleccionada.

4. **Envío del Formulario**:
   - El usuario ingresa su correo electrónico, nombre, teléfono y dirección. Si todos los datos son correctos, se habilita el envío de la cita.
   - Se usa `emailjs` para enviar un correo electrónico con los detalles de la cita confirmada.

5. **Actualización de Horarios**:
   - Al confirmar la cita, se actualiza la disponibilidad del horario en el backend mediante una solicitud `POST`.

6. **Confirmación de Cita y PDF**:
   - Se envía un correo de confirmación y se ofrece la opción de descargar los detalles de la cita en formato PDF, utilizando `jsPDF`.

## Funciones Importantes

- `fetchHorarios`: Obtiene los horarios disponibles desde el backend.
- `handleDateClick`: Maneja la selección de la fecha en el calendario.
- `handleTimeSelect`: Maneja la selección de la hora.
- `handleEmailSubmit`: Envía el correo electrónico.
- `enviarConfirmacionCita`: Envía la confirmación por correo utilizando `emailjs`.
- `actualizarHorario`: Actualiza el horario seleccionado en el backend.
- `handleDownloadPDF`: Genera y descarga el archivo PDF con los detalles de la cita.

## Instalación

1. Instalar las dependencias necesarias:
   npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/interaction emailjs-com toastify-js react-toastify jsPDF
