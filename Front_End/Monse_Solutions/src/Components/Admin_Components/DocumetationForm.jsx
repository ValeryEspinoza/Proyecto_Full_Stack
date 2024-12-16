import React, { useState } from 'react';
import '../../Styles/Components_Styles/Admin_C_Styles/DocumentationForm.css';

const DocumentationForm = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (

  <div className="documentation-container">
 
  {/* Modal */}
  {modalContent && (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <p>{modalContent}</p>
      </div>
    </div>
  )}
      <h1 className="documentation-header">Documentación de la Plataforma</h1>
      <p className="documentation-description">
        En esta sección encontrarás la documentación completa sobre cómo usar la plataforma. A continuación, se detallan las secciones de servicios, productos, tareas, eventos, usuarios, filtros, y más.
      </p>

      <div className="documentation-sections">

{/* Sección de Servicios */}
        <div className="documentation-section">
          <h2 className="section-title">Servicios</h2>
          <p className="section-description"> Los servicios de la plataforma permiten gestionar diversos aspectos de tu cuenta, tareas y eventos. </p>
          <button className="documentation-btn" onClick={() => 
  openModal(
    <>
      <h2>Services Form: Gestión de Servicios</h2>
      <p>La página "Services Form" está diseñada para gestionar servicios dentro de la plataforma. Su funcionalidad incluye:</p>
      <ul>
        <li><strong>Añadir un Nuevo Servicio:</strong> El formulario permite al usuario ingresar datos clave como:
          <ul>
            <li><strong>Nombre del servicio:</strong> Identificador único del servicio.</li>
            <li><strong>Descripción:</strong> Información detallada sobre el servicio.</li>
            <li><strong>Imagen representativa:</strong> Un archivo de imagen que visualmente identifica el servicio.</li>
          </ul>
          Al completar y enviar el formulario, el nuevo servicio se guarda en la base de datos.
        </li>
        <li><strong>Visualización de Servicios:</strong> Todos los servicios creados se muestran en una página dedicada llamada "Servicios". Cada servicio se presenta con su nombre, descripción e imagen, ofreciendo una vista clara y organizada para los usuarios.</li>
        <li><strong>Edición de Servicios:</strong> Los servicios existentes pueden ser modificados para actualizar su información o imagen. Esto se realiza desde la misma página o desde la página de servicios, donde cada servicio tiene un botón para editar. Al guardar los cambios, la información actualizada se refleja en la plataforma.</li>
        <li><strong>Eliminación de Servicios:</strong> Los usuarios tienen la opción de eliminar un servicio que ya no sea necesario. Un botón dedicado en la lista de servicios permite esta acción, garantizando que los servicios innecesarios sean removidos fácilmente.</li>
      </ul>
    </>
  )
}>
  Más Información
</button>

        </div>

{/* Sección de Productos */}
      <div className="documentation-section">
          <h2 className="section-title">Productos</h2>
          <p className="section-description">Aquí puedes ver, agregar, eliminar y editar productos dentro de la plataforma.</p>
          <button className="documentation-btn" onClick={() => 
  openModal(
    <>
      <h2>Products Form: Gestión de Productos</h2>
      <p>La página "Products Form" está diseñada para gestionar productos dentro de la plataforma. Su funcionalidad incluye:</p>
      <ul>
        <li><strong>Añadir un Nuevo Producto:</strong> Los usuarios pueden crear productos ingresando detalles como:
          <ul>
            <li><strong>Nombre:</strong> Identificador del producto.</li>
            <li><strong>Descripción:</strong> Información detallada sobre el producto.</li>
            <li><strong>Precio:</strong> Costo del producto.</li>
            <li><strong>Categoría:</strong> Clasificación del producto para facilitar su organización.</li>
            <li><strong>Imagen representativa:</strong> Un archivo visual que identifica el producto.</li>
          </ul>
          Esto permite que los productos estén organizados y listos para su visualización.
        </li>
        <li><strong>Visualización de Productos:</strong> Los productos creados se listan en la página de "Tienda", mostrando información clave como el nombre, precio e imagen. Esto facilita una navegación y administración eficiente.</li>
        <li><strong>Edición de Productos:</strong> Los productos existentes pueden ser modificados para actualizar detalles como el precio, descripción o imagen. Esto asegura que la información del producto esté siempre actualizada.</li>
        <li><strong>Eliminación de Productos:</strong> Permite eliminar productos obsoletos o innecesarios con facilidad, garantizando que la lista de productos esté limpia y relevante. Esta funcionalidad está dirigida a administradores o usuarios autorizados, ayudándoles a mantener el catálogo de productos organizado y accesible para los clientes.</li>
      </ul>
    </>
  )
}>
  Más Información
</button>

      </div>

{/* Sección de Tareas */}
    <div className="documentation-section">
      <h2 className="section-title">Tareas</h2>
      <p className="section-description">Aquí puedes ver, agregar, eliminar y editar productos dentro de la plataforma.</p>
      <button className="documentation-btn" onClick={() => 
  openModal(
    <>
      <h2>TaskForm: Gestión de Tareas</h2>
      <p>La página "TaskForm" está diseñada para gestionar tareas por medio de un formulario, integrando su visualización en un calendario interactivo. Su funcionalidad incluye:</p>
      <ul>
        <li><strong>Creación de Nuevas Tareas:</strong> Los usuarios pueden añadir tareas ingresando detalles como título, descripción y fecha. Esto ayuda a organizar proyectos y responsabilidades de manera estructurada.</li>
        <li><strong>Visualización en el Calendario:</strong> Las tareas creadas se muestran automáticamente en el calendario, permitiendo a los usuarios identificar eventos y actividades de manera visual e intuitiva. Cada tarea aparece en la fecha correspondiente con detalles esenciales.</li>
        <li><strong>Edición de Tareas:</strong> Las tareas existentes pueden ser modificadas directamente desde la página de tareas, permitiendo ajustar fechas, descripciones u otras propiedades según sea necesario.</li>
        <li><strong>Eliminación de Tareas:</strong> Los usuarios pueden eliminar tareas completadas o que ya no sean relevantes, manteniendo el calendario limpio y funcional.</li>
      </ul>
      <p>Este sistema es ideal para gestionar proyectos, asignar responsabilidades y realizar un seguimiento de las actividades pendientes en un formato cronológico y visualmente claro.</p>
    </>
  )
}>
  Más Información
</button>
    </div>

{/* Sección de Eventos */}
   <div className="documentation-section">
      <h2 className="section-title">Eventos</h2>
      <p className="section-description">Aquí puedes ver, agregar, eliminar y editar productos dentro de la plataforma.</p>
      <button className="documentation-btn" onClick={() => 
  openModal(
    <>
      <h2>Event Form: Gestión de Eventos</h2>
      <p>La página "Event Form" está diseñada para gestionar eventos dentro de la plataforma, integrándose con un calendario interactivo. Su funcionalidad incluye:</p>
      <ul>
        <li><strong>Creación de Nuevos Eventos:</strong> Los usuarios pueden añadir eventos proporcionando detalles como:
          <ul>
            <li><strong>Título:</strong> Identificador del evento.</li>
            <li><strong>Descripción:</strong> Información detallada sobre la actividad o reunión.</li>
            <li><strong>Fecha:</strong> Día y hora en que se llevará a cabo el evento.</li>
          </ul>
          Esto ayuda a organizar actividades y reuniones importantes.
        </li>
        <li><strong>Visualización en el Calendario:</strong> Los eventos creados se muestran automáticamente en el calendario, ofreciendo una representación visual clara de las fechas importantes. Cada evento aparece con información básica en la fecha correspondiente.</li>
        <li><strong>Edición de Eventos:</strong> Los eventos existentes pueden ser actualizados para reflejar cambios en el horario, la ubicación u otros detalles relevantes, desde la página de eventos.</li>
        <li><strong>Eliminación de Eventos:</strong> Los usuarios pueden eliminar eventos pasados o innecesarios, manteniendo el calendario limpio y organizado.</li>
      </ul>
      <p>Este sistema es ideal para planificar y realizar un seguimiento de actividades clave, reuniones y otros compromisos importantes, con una interfaz visual que facilita la gestión del tiempo.</p>
    </>
  )
}>
  Más Información
</button>

    </div>
{/* Sección de Filtros */}
   <div className="documentation-section">
      <h2 className="section-title">Barra de busqueda</h2>
      <p className="section-description">Aquí puedes ver, agregar, eliminar y editar productos dentro de la plataforma.</p>
      <button className="documentation-btn" onClick={() => 
  openModal(
    <>
      <h2>Barra de Búsqueda: Funcionalidad y Uso</h2>
      <p>La barra de búsqueda en la plataforma está diseñada para ayudar a los usuarios a encontrar información de manera rápida y eficiente. Su funcionamiento incluye:</p>
      <ul>
        <li><strong>Entrada de Texto:</strong> El usuario ingresa palabras clave o términos específicos relacionados con el elemento que desea buscar, como nombres de servicios, productos, tareas o eventos.</li>
        <li><strong>Filtrado Dinámico:</strong> Mientras el usuario escribe, la barra de búsqueda puede filtrar automáticamente los resultados relevantes en tiempo real, utilizando coincidencias parciales o exactas. Esto agiliza el proceso de encontrar información específica.</li>
        <li><strong>Resultados Relevantes:</strong> Los resultados de la búsqueda se muestran en una lista, destacando los elementos que coinciden con los términos ingresados. Esto puede incluir detalles básicos como nombres, descripciones o fechas, según el contexto.</li>
      </ul>
      <p>La barra de búsqueda es una herramienta clave para optimizar la navegación y garantizar que los usuarios puedan acceder rápidamente a la información deseada en la plataforma.</p>
    </>
  )
}>
  Más Información
</button>

    </div>

      
    </div>

    </div>
  );
};

export default DocumentationForm;









 