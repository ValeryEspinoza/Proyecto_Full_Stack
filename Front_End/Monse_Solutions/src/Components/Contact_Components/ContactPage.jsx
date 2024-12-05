import React from 'react';
import ContactForm from '../../Components/Contact_Components/ContactForm'; // Si es una exportación por defecto
import "../../Styles/Components_Styles/Contact_C_Styles/ContactPage.css"; // Importa los estilos}
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../config/i18n'

const ContactPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h1>{t('tituloContact')}</h1>
        <p>
        {t('textoContact')}
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>  {t('infoTituloContact')}</h3>
          <p><strong>{t('Phone')}:</strong> +506 8591 6349 </p>
          <p><strong>{t('Email')}:</strong> monsesolutions@gmail.com</p>
          <p><strong>{t('Website')}:</strong> www.monsesolutions.com</p>
          <p><strong>{t('Address')}:</strong> Nosara, Guanacaste, Costa Rica</p>

        <div className="contact-map">
        <h3>{t('textMap')}</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25909.994931056906!2d-85.6749919072774!3d9.977324235117372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e5390861f64b9%3A0xfdc77634e4481c5f!2sProvincia%20de%20Guanacaste%2C%20Nosara!5e1!3m2!1ses-419!2scr!4v1731602115981!5m2!1ses-419!2scr"
         width="400" 
         height="300">
        </iframe>
      </div>
        </div>
    
        <br />
        <div className="contact-form-container">
           <p>
           {t('contact_text')}
             </p>
             <ContactForm />

         </div>

        </div>
      </div>
  );
};

export default ContactPage;