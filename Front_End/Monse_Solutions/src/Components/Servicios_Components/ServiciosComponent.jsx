import React, { useState, useEffect } from "react";
import "../../Styles/Pages_Styles/Servicios.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetData from "../../Services/Get/GetData";

const ServiciosComponent = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Indicador de carga

  // Fetch data from the API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await GetData("api/services/");
        setServices(response);
        toast.success("Servicios cargados correctamente.");
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
        toast.error("Error al cargar los servicios.");
      } finally {
        setIsLoading(false); // Detiene el indicador de carga
      }
    };
    fetchServices();
  }, []);

  // Filtrar servicios basados en el término de búsqueda
  const filteredServices = services.filter((service) =>
    service.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* PORTADA */}
      <div className="portada">
        <h1 className="servicios-title">Our Services</h1>
      </div>

      {/* Información adicional */}
      <div className="divCajasTexto">
        <div className="cajaTexto">
          <h3 className="titleCaja">Experience</h3>
          <p className="parrafoCaja">
            We have an expert team ready to provide quality solutions to every
            client.
          </p>
        </div>
        <div className="cajaTexto">
          <h3 className="titleCaja">Top quality</h3>
          <p className="parrafoCaja">
            We guarantee the highest quality standards in materials and
            finishes.
          </p>
        </div>
      </div>

      {/* SERVICIOS */}
      <div className="servicios-container">
        <ToastContainer />
        <header className="servicios-header">
          <h1>Lista de Servicios</h1>
        </header>

        {/* Barra de búsqueda */}
        <div className="servicios-search">
          <input
            type="text"
            placeholder="Buscar servicios..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="servicios-search-input"
          />
        </div>

        {/* Indicador de carga */}
        {isLoading && <p className="loading-text">Cargando servicios...</p>}

        {/* Lista de servicios */}
        <div className="servicios-list">
          {!isLoading && filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div key={service.service_id} className="servicio-card">
                <h2 className="servicio-title">{service.service}</h2>
                <p className="servicio-description">{service.description}</p>
                <small className="servicio-category">
                  Categoría: {service.category}
                </small>
                {service.imagen_url ? (
                  <div className="servicio-image">
                    <img
                      src={service.imagen_url}
                      alt={`Imagen de ${service.service}`}
                      className="image"
                    />
                  </div>
                ) : (
                  <p className="no-image">No image available</p>
                )}
              </div>
            ))
          ) : (
            !isLoading && <p>No se encontraron servicios.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiciosComponent;

