import React, { useEffect } from 'react';
import '../../Styles/Components_Styles/Home_C_Styles/Connect_with_us.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../config/i18n'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

function Connect_with_us() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: false, // Ejecuta la animación solo una vez
    });
  }, []);

  return (
    <div
      className="Información"
      data-aos="fade-up" // Aplica la animación "fade-up"
      data-aos-duration="1000" // Duración de la animación
      data-aos-delay="200" // Retardo antes de iniciar la animación
    >
      <br /><br /><br /><br />
      <h1 className='TextoPrincipal'>{t('TextoPrincipal')}</h1>
      <h4 className='Texto'>{t('Texto')}</h4>
      <Link to="/Contact">
        <button className='BotonContactenos'>{t('BotonContactenos')}</button>
      </Link>
      <br /><br /><br /><br />
    </div>
  );
}

export default Connect_with_us;
