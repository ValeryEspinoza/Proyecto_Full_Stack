import React from 'react'
import '../../Styles/Components_Styles/Home_C_Styles/Connect_with_us.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../config/i18n'


function Connect_with_us() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  return (
    <div className='Información'>
      <br /><br /><br /><br />
      <h1 className='TextoPrincipal'>{t('TextoPrincipal')}</h1>
      <h4 className='Texto'> {t('Texto')}</h4> 
      <Link to="/Contact"><button className='BotonContactenos'>{t('BotonContactenos')}</button></Link>


      <br /><br /><br /><br />
    </div>
  )
}

export default Connect_with_us