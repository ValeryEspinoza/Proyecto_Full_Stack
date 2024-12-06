import React from 'react';
import '../../Styles/Components_Styles/Admin_C_Styles/DocumentationForm.css'; // Asegúrate de que este archivo exista para los estilos

const DocumentationForm = () => {
  return (
    <div className="documentation-container">
      <h1 className="documentation-header">Documentación de la Plataforma</h1>
      <p className="documentation-description">
        En esta sección encontrarás la documentación completa sobre cómo usar la plataforma. A continuación, se detallan las secciones de servicios, productos, tareas, eventos, usuarios, filtros, y más.
      </p>

      <div className="documentation-sections">
        {/* Sección de Servicios */}
        <div className="documentation-section">
          <h2 className="section-title">Servicios</h2>
          <p className="section-description">
            Los servicios de la plataforma permiten gestionar diversos aspectos de tu cuenta, tareas y eventos.
          </p>
          <button className="documentation-btn">Más Información</button>
        </div>

        {/* Sección de Productos */}
        <div className="documentation-section">
          <h2 className="section-title">Productos</h2>
          <p className="section-description">
            Aquí puedes ver, agregar, eliminar y editar productos dentro de la plataforma.
          </p>
          <button className="documentation-btn">Ver Productos</button>
          <button className="documentation-btn">Agregar Producto</button>
        </div>

        {/* Sección de Tareas */}
        <div className="documentation-section">
          <h2 className="section-title">Tareas</h2>
          <p className="section-description">
            Las tareas te permiten gestionar proyectos, asignar responsabilidades y dar seguimiento a los avances.
          </p>
          <button className="documentation-btn">Ver Tareas</button>
          <button className="documentation-btn">Agregar Tarea</button>
          <button className="documentation-btn">Eliminar Tarea</button>
          <button className="documentation-btn">Editar Tarea</button>
        </div>

        {/* Sección de Eventos */}
        <div className="documentation-section">
          <h2 className="section-title">Eventos</h2>
          <p className="section-description">
            Los eventos te permiten organizar actividades y gestionar invitaciones.
          </p>
          <button className="documentation-btn">Ver Eventos</button>
          <button className="documentation-btn">Agregar Evento</button>
          <button className="documentation-btn">Eliminar Evento</button>
          <button className="documentation-btn">Editar Evento</button>
        </div>

        {/* Sección de Usuarios */}
        <div className="documentation-section">
          <h2 className="section-title">Usuarios</h2>
          <p className="section-description">
            Administra los usuarios de la plataforma, puedes agregar, eliminar y editar cuentas de usuario.
          </p>
          <button className="documentation-btn">Ver Usuarios</button>
          <button className="documentation-btn">Agregar Usuario</button>
          <button className="documentation-btn">Eliminar Usuario</button>
          <button className="documentation-btn">Editar Usuario</button>
        </div>

        {/* Sección de Filtros */}
        <div className="documentation-section">
          <h2 className="section-title">Filtros</h2>
          <p className="section-description">
            Aprende a usar filtros para buscar información específica dentro de la plataforma.
          </p>
          <button className="documentation-btn">Aplicar Filtro</button>
          <button className="documentation-btn">Limpiar Filtros</button>
        </div>

        {/* Consultas Específicas */}
        <div className="documentation-section">
          <h2 className="section-title">Consultas Específicas</h2>
          <p className="section-description">
            Realiza consultas específicas a la base de datos para obtener la información que necesitas.
          </p>
          <button className="documentation-btn">Hacer Consulta</button>
        </div>
      </div>
    </div>
  );
};

export default DocumentationForm;
