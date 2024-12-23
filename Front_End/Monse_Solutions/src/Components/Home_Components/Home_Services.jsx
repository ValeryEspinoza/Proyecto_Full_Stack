import React, { useState, useEffect } from 'react';
import '../../Styles/Components_Styles/Home_C_Styles/Home_Services.css';
import { useTranslation } from 'react-i18next'; 
import '../../config/i18n';
import OpenGet from '../../Services/Get/OpenGet';
import { Link } from 'react-router-dom';


function Home_Services() {
  const { t, i18n } = useTranslation();
  const [randomServices, setRandomServices] = useState([]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); 
  };

  useEffect(() => {
    const fetchAndSetServices = async () => {
      try {
        const services = await OpenGet('services'); // Obtén los servicios desde el backend
        if (services.length > 0) {
          // Selecciona 3 servicios aleatorios
          const shuffled = services.sort(() => 0.5 - Math.random());
          setRandomServices(shuffled.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchAndSetServices();
  }, []);

  return (
    <div>
      <div className="services-container">
        <h2 className="Titulo_Services">{t('Titulo_Services')}</h2>
        <br />
        <div className="services_grid">
          {randomServices.map((service) => (
            <div key={service.service_id} className="services_card">
              {service.imagen_url && (
                <img
                  src={service.imagen_url}
                  alt={`Imagen de ${service.service}`}
                  className="services_image"
                />
              )}
              <h3 className="Nombre_Services">{service.service}</h3>
              <p>{service.description}</p>
              <button className="button-content-home">      
                    <Link to="/Contact" className="button-Services-home">
                        <span className="span-services-home">Get a Quote</span>
                    </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      <br />
    </div>
  );
}

export default Home_Services;
