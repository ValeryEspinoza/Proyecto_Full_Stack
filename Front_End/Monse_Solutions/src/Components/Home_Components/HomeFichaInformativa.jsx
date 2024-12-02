import React from 'react'
import "../../Styles/Components_Styles/Home_C_Styles/HomeFichaInformativa.css"
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../config/i18n'


function HomeFichaInformativa() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  return (
    <div className='bodyFicha'>
      <br />
      <div className='Texto'>

      <p>{t('Texto1')}</p>

      </div>
  
  </div>
  )
}

export default HomeFichaInformativa