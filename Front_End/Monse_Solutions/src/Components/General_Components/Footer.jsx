import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Components_Styles/Genaral_C_Styles/Footer.css'
import Logo_Negro2 from '../../Img/Components_Img/Logo_blanco.png';
import { BsInstagram,  BsFacebook, BsTiktok } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../config/i18n'


function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };
    return (
<footer className="custom-footer-distributed">

<div className="custom-footer-left">
  <h3>
    <img src={Logo_Negro2} alt="Logo" className="custom-footer-logo" />
  </h3>

  <div className="custom-footer-links"> 
    <Link to="/" className="custom-pagesFooter">{t('Home')}</Link>
    <span className="separator"> | </span>
    <Link to="/Servicios" className="custom-pagesFooter">{t('Services')}</Link>
    <span className="separator"> | </span>
    <Link to="/About" className="custom-pagesFooter">{t('About')}</Link>
    <span className="separator"> | </span>
    <Link to="/Contact" className="custom-pagesFooter">{t('Contact')}</Link>
    <span className="separator"> | </span>
    <Link to="/About" className="custom-pagesFooter">{t('Store')}</Link>
    <span className="separator"> | </span>
    <Link to="/Blog" className="custom-pagesFooter">{t('Blog')}</Link>
</div>

  <p className="custom-footer-company-name">Company Name © 2024</p>
</div>

<div className="custom-footer-center">

  <div>
    <i className="custom-direccionFooter"></i>
    <p className='custom-direccion'><span>Barrio Los Ángeles</span>Nosara, Guancaste, Costa Rica</p>
  </div>

  <div>
    <i className="custom-phone"></i>
    <p>(+506) 8591-6349</p>
  </div>

  <div>
    <p><a href="monsesolutions@gmail.com">monsesolutions@gmail.com</a></p>
  </div>

</div>

<div className="custom-footer-right">

  <p className="custom-footer-company-about">
    <span>{t('texto_footer')}</span>
    Monse Solutions es una empresa especializada en acabados y remodelaciones, 
    dedicada a transformar espacios y mejorar la funcionalidad y estética de hogares y oficinas. 
  </p>

  <div className="custom-footer-icons">
  <a className='custom-rrss' href="https://www.instagram.com/andres_monsesolutions/" target="_blank" rel="noopener noreferrer">
    <BsInstagram size={24} />
  </a>
  <a className='custom-rrss' href="https://www.facebook.com/profile.php?id=100039796124979" target="_blank" rel="noopener noreferrer">
    <BsFacebook size={24} />
  </a>
  <a className='custom-rrss' href="#">
    <BsTiktok size={24} />
  </a>
</div>


</div>

</footer>

    );
}

export default Footer;
