import React, { useState, useEffect } from "react";
import "../../Styles/Pages_Styles/Servicios.css";
import GetData from "../../Services/Get/GetData";
import IconSearch from "../../Img/Components_Img/icon_buscar2.png"

const ServiciosComponent = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from AWS
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await GetData('services');
        setServices(response);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      }
    };
    fetchServices();
  }, []);

  // Filter services based on the search term
  const filteredServices = services.filter((service) =>
    service.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* PORTADA */}
      <div className="portada">
        <h1 className="servicios-title">Our services</h1>
      </div>

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
        <header className="servicios-header">
          <h1 className="TitleList">List of services</h1>
        </header>
<br />
        <div className="servicios-search">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="servicios-search-input"
          />
          <div className="search-icon-container">
            <img
              src={IconSearch}
              alt="Buscar"
              className="search-icon"
            />
          </div>
        </div>
      </div>
      <br />


        <div className="servicios-list">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div key={service.service_id} className="servicio-card">
                {service.imagen_url && (
                  <div className="servicio-image">
                    <img
                      src={service.imagen_url}
                      alt={`Imagen de ${service.service}`}
                      className="servicio-img"
                    />
                  </div>
                )}
                <h2 className="servicio-title">{service.service}</h2>
                <p className="servicio-description">{service.description}</p>
              </div>
            ))
          ) : (
            <p>No se encontraron servicios.</p>
          )}

        </div>
      </div>
      <br /><br /><br /><br /><br />
    </div>
  );
};

export default ServiciosComponent;
