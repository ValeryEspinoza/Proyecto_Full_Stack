import React from 'react'
import "../../Styles/Components_Styles/AboutUs_C_Styles/AboutUsForm.css"
import { Link } from 'react-router-dom';
import mision from '../../Img/Components_Img/about_mision.png'
import vision from '../../Img/Components_Img/about_vision.png'
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../config/i18n'


function AboutUsForm() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
    };
  return (
    <div className="about-us-container">

    <div className='divTitleAbout'>
    <h1 className="about-title">{t('about-title')}</h1>
    </div><br />

    <section className="intro-section">
        <p className='parrafoAbout'>
        {t('parrafoAbout')}
        </p><br /><br />
        <Link to="/Contact">
        <button className="contactUs">{t('contactUs')}</button>
        </Link>
      </section><br /><br />

<div className="sectionMV">
    <div className="contentM">
        <img className='imgMV' src={mision} alt="mision"/>
        <div className="text-block">
            <h2 className='titleMV'>{t('titleM')}</h2>
            <p className='textMision'>
            {t('textMision')}</p>
        </div>
    </div>
</div> <br />

<div className="sectionMV">
    <div className="contentV reverse">
        <div className="text-block">
            <h2 className='titleMV'>{t('titleV')}</h2>
            <p className='textVision'>{t('textVision')}</p>
        </div>
        <img className='imgMV' src={vision} alt="mision"/>
    </div>
</div><br /><br />
<div className="divTextoFinal">
    <p className="textoFinal">
    {t('textoFinal')}
    </p>
</div>


</div>
  )
}

export default AboutUsForm