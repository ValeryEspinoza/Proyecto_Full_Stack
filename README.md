# Plataforma Web para Monse Solutions

## Información General

**Nombre del Proyecto:** Plataforma Web para Monse Solutions – Gestión de Remodelación y Acabados  
---
## Tecnologías Utilizadas

**Frontend:**  
- React.js  

**Backend:**  
- Django  

**Almacenamiento:**  
- Amazon Web Services (AWS)
  
**Base de datos:**  
- MySQL (administrada con MySQL Workbench)
---
## Equipo de Desarrollo

- **Valery Espinoza Quirós**  
- **Angie Peña Mendoza**  
- **Michell López López**  
- **Emel Mayorga López**  
---
## Introducción
Monse Solutions es una empresa dedicada a **remodelaciones y acabados**, enfocada en transformar espacios con calidad e innovación. Esta plataforma tiene como objetivo mejorar la **gestión interna de proyectos**, fortalecer la comunicación con clientes y ampliar su presencia en línea.
---
## Problema a Solucionar

Monse Solutions necesita una solución digital que permita:
- Gestionar proyectos de manera organizada.
- Mejorar la comunicación entre colaboradores y clientes.
- Optimizar procesos operativos.
---
## Objetivo General
Desarrollar una plataforma web moderna para la gestión interna de proyectos y comunicación con clientes, además de ofrecer información sobre los servicios de Monse Solutions.
---
## Objetivos Específicos

1. **Exposición de la Marca:** Mostrar servicios, valores y filosofía empresarial.
2. **Aumentar la Interacción:** Facilitar comunicación entre clientes y staff mediante chat y agenda de citas.
3. **Optimizar la Gestión de Proyectos:** Mejorar el control administrativo y seguimiento en tiempo real.

---

## Alcance del Proyecto

La plataforma tendrá dos enfoques principales:

1. **Gestión Interna de Proyectos:**
   - Asignación y seguimiento de tareas.
   - Calendarios, recordatorios y proformas.
   - Dashboard administrativo.

2. **Portal para Clientes:**
   - Consulta del estado de proyectos.
   - Comunicación en tiempo real (chat).
   - Tienda virtual para adquisición de productos.

---

## Funcionalidades Principales

1. **Página Principal (Home):**
   - Barra de navegación.
   - Información de servicios.
   - Testimonios de clientes.
   - ChatBot con respuestas predeterminadas.

2. **Servicios:**
   - Descripción detallada y ejemplos de trabajos anteriores.

3. **Tienda Virtual:**
   - Venta de kits y productos especializados.
   - Integración con el blog.

4. **Dashboard Administrativo:**
   - Gestión de tareas, eventos y comunicación interna.

5. **Agenda de Visitas/Reuniones:**
   - Calendario interactivo con disponibilidad de citas.

6. **Gestión de Usuarios:**
   - Registro, autenticación y control de accesos.

7. **Blog:**
   - Recomendaciones sobre mantenimiento y uso de productos.

8. **Traducción Automática:**
   - Uso de Google Translate para accesibilidad multilingüe.

9. **Seguridad y Almacenamiento:**
   - Implementación de Amazon Web Services (AWS).
   - Cumplimiento con GDPR mediante cookies.

---

# Plataforma Web para Monse Solutions

## Estructura de Archivos

```plaintext
├── frontend/                 # Desarrollo Frontend
├── backend/                  # Desarrollo Backend
├── database/                 # Modelado y scripts de la base de datos
├── docs/                     # Documentación del proyecto
└── README.md                 # Este archivo
```

---

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

**Prevención de ataques**: Impide el envío de entradas vacías que podrían ser manipuladas para evitar validaciones posteriores.

---

### 2. `validate_min_characters(value, min_length)`
**Propósito**: Verifica que el valor tenga una longitud mínima.

**Prevención de ataques**: Limita la longitud mínima para prevenir ataques de inyección o datos mal formateados.

---

### 3. `validate_max_characters(value, max_length)`
**Propósito**: Verifica que el valor no exceda la longitud máxima.

**Prevención de ataques**: Evita ataques DoS y desbordamientos.

---

### 4. `validate_no_special_characters(value)`
**Propósito**: Verifica que el valor no contenga caracteres especiales.

**Prevención de ataques**: Evita XSS y SQL Injection al eliminar caracteres peligrosos.

---

### 5. `sanitize_input(value)`
**Propósito**: Sanitiza el valor de entrada eliminando caracteres peligrosos.

**Prevención de ataques**: Previene la ejecución de código malicioso.

---

# COMANDOS USADOS EN EL BACKEND

## Comandos de Python
- `py --version`: Muestra la versión instalada de Python.
- `py -m pip install --upgrade pip`: Actualiza pip a la última versión disponible.
- `pip install djangorestframework`: Instala el paquete REST.
- `py manage.py startapp [nombre]`: Crea una nueva aplicación en Django.
- `py manage.py makemigrations`: Genera migraciones.
- `py manage.py migrate`: Aplica las migraciones.
- `py manage.py runserver`: Inicia el servidor Django.
- `py manage.py createsuperuser`: Crea un superusuario.
- `pip install django-cors-headers`: Maneja CORS.

---

# COMANDOS USADOS EN EL FRONT END

- `npm install react-router-dom`: Instala React Router.
- `npm install react-icons --save`: Instala iconos en React.
- `npm install react-toastify`: Instala notificaciones tipo toast.
- `npm install @fullcalendar/react @fullcalendar/daygrid`: Instala FullCalendar.
- `npm install jspdf jspdf-autotable`: Genera PDFs.
- `npm install @paypal/react-paypal-js`: Integración de PayPal.
- `npm install aos --save`: Animaciones con AOS.

---

# Servicios CRUD Modularizados

### GET: `GetData`
Realiza solicitudes GET a un endpoint y retorna datos JSON.

### POST: `PostData`
Envía datos al servidor mediante POST.

### PUT: `PutData`
Actualiza un recurso existente enviando datos completos.

### PATCH: `PatchData`
Actualiza parcialmente un recurso mediante PATCH.

### DELETE: `DeleteData`
Solicita la eliminación de un recurso en el servidor.

---

# Documentación de Componentes CRUD

## 1. **Servicios**
Permite realizar operaciones CRUD de manera modular.

## 2. **Productos**
Gestión completa de productos: agregar, editar, eliminar y filtrar datos.

## 3. **Eventos**
Gestión de eventos con funcionalidad de carga de imágenes.

## 4. **Tareas**
Permite la visualización y gestión de tareas pendientes.

## 5. **Usuarios**
Administración de usuarios con control de roles y permisos.

---

# PROFILE CLIENT - Calendario de Citas

## Flujo del Componente
1. **Selección de Fecha y Hora**: Permite elegir una cita mediante un calendario interactivo.
2. **Envío del Formulario**: Los datos del usuario son validados y se confirma la cita.
3. **Envío de Correo**: Utiliza `emailjs` para enviar confirmaciones por correo.
4. **Generación de PDF**: Utiliza `jsPDF` para descargar detalles de la cita.

## Instalación
```bash
npm install @fullcalendar/react @fullcalendar/daygrid emailjs-com jspdf
```

---

# Integraciones y Librerías
- **ChatBot**: `react-chatbot-kit`
- **Calendario**: `react-calendar`, `react-datepicker`, `FullCalendar`
- **Generación de PDF**: `jspdf`, `jspdf-autotable`
- **PayPal**: `@paypal/react-paypal-js`
- **Gráficos**: `chart.js`, `react-chartjs-2`
- **Animaciones**: `aos`

---
