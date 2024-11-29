import React from 'react'
import '../../Styles/Components_Styles/Home_C_Styles/Home_Services.css'
import Imagen_Servicio_Madera from '../../Img/Components_Img/ImagenMadera.jpeg'
import Imagen_Servicio_Pintura from '../../Img/Components_Img/servPintura.png'
import Imagen_Servicio_Jardin from '../../Img/Components_Img/servJardin.png'
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../config/i18n'
function Home_Services() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };
  return (
    <div>
            <div className="services-container">
            <h2 className='Titulo_Services'>{t('Titulo_Services')}</h2>
      <br />

      
      <div className="services_grid">
        <div className="services_card">
    
          <img
              src={Imagen_Servicio_Madera}
              alt="IMG"
             className='services_image'
            /> 
            
            <h3 className='Nombre_Services'><br />{t('Nombre_Services')}</h3>

            <p>{t('Descripcion_Services')}</p> </div>
        
        <div className="services_card">
        <img
              src={Imagen_Servicio_Pintura}
              alt="IMG"
             className='services_image'
            /> 
         <h3 className='Nombre_Services'><br />{t('Nombre_Services_Pintura')}</h3>
          <p className='Descripcion_Services_pintura'>{t('Descripcion_Services_pintura')}</p>
        </div>
        
        <div className="services_card">
        <img
              src={Imagen_Servicio_Jardin}
              alt="IMG"
             className='services_image'
            /> 
          <h3 className='Nombre_Services_exterior' ><br />{t('Nombre_Services_exterior')}</h3>
          <p className= "Descripcion_Services_exterior">{t('Descripcion_Services_exterior')}</p>
        </div>
      </div>
    </div>
    <br /><br />
    </div>
  )
}

export default Home_Services