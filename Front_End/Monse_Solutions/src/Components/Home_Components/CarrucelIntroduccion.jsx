import React from 'react';
import Video from '../../Img/Components_Img/portada_home.mp4'; // Ejemplo de video importado
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Styles/Components_Styles/Home_C_Styles/CarrucelIntroduccion.css";

import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../config/i18n'

function VideoPortada() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  return (
    <div className='contenedorVideoPortada'>
      <video
        className="d-block w-100 video-portada"
        src={Video} 
        autoPlay
        loop
        muted
      />
      <div className="overlay">
        <h1 className="textoOverlay">{t('textoBienvenida')}</h1>
      </div>
    </div>
  );
}

export default VideoPortada;


