import React, { useState } from 'react';
import "../../Styles/Components_Styles/Blog_Styles/Blog.css";
import { Link } from 'react-router-dom';
import mision from '../../Img/Components_Img/about_mision.png';
import vision from '../../Img/Components_Img/about_vision.png';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../config/i18n'

import art3 from '../../Img/Components_Img/art_3.png';
import art4 from '../../Img/Components_Img/art_4.png';
import art5 from '../../Img/Components_Img/art_5.png';

function Blog() {
  //Estado para controlar el modal y la imagen seleccionada
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  // Función para abrir el modal
  const openModal = (imageSrc) => {
    setModalImageSrc(imageSrc);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };


  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  return (
    <div className="blog-container">

      <div className='portadaBlog'>
        <h1 className="blog-title">{t('blog-title')}</h1>
      </div>
      
      <div className="divCardsBlog">
        <div className="cardBlog">
          <div className="imgCardBlog1"></div>
          <h3 className="cardBlogTitle">{t('cardBlogTitle1')}</h3>
          <p className="cardBlogDescription">{t('cardBlogDescription1')}</p>
          <Link to="/Article10Tips" className="cardBlogLink">{t('cardBlogLink')}</Link>
        </div>

        <div className="cardBlog">
          <div className="imgCardBlog2"></div>
          <h3 className="cardBlogTitle">{t('cardBlogTitle')}</h3>
          <p className="cardBlogDescription">{t('cardBlogDescription')}</p>
          <Link to="/ArticleGarden" className="cardBlogLink">{t('cardBlogLink')}</Link>
        </div>
      </div><br /><br /><br /><br />

      <div className="divTextoIntroBlog">
        <p className="textoIntroBlog"> {t('textoIntroBlog')}</p>
      </div><br /><br />

      <div className='contenedorArt'>
        
        <div className="blog-post">
          <div className="text">
            <h2 className='titleBlog'>{t('titleBlog1')}</h2>
            <h3 className='descBlog'>{t('descBlog1')}</h3>
            <p className='textBlog'>{t('textBlog1')}</p>
            <Link to="/ArticlePreventive">
              <button className="btnLeerMas">{t('cardBlogLink')}</button></Link>
          </div>
          <div className="image">
            <img 
              src={art3} 
              alt="art3" 
              onClick={() => openModal(art3)} //Abre el modal con la imagen
              className="clickable-image"
            />
          </div>
        </div>

        <div className="blog-post">
          <div className="text">
            <h2 className='titleBlog'>{t('titleBlog2')}</h2>
            <h3 className='descBlog'>{t('descBlog2')}</h3>
            <p className='textBlog'>
            {t('textBlog2')}</p>
            <Link to="/ArticleColor">
              <button className="btnLeerMas">{t('cardBlogLink')}</button>
            </Link>
          </div>
          <div className="image">
            <img 
              src={art4} 
              alt="art4" 
              onClick={() => openModal(art4)} //Abre el modal con la imagen
              className="clickable-image"
            />
          </div>
        </div>

        <div className="blog-post">
          <div className="text">
            <h2 className='titleBlog'>{t('titleBlog3')}</h2>
            <h3 className='descBlog'>{t('descBlog3')}</h3>
            <p className='textBlog'> {t('textBlog3')} </p>
            <Link to="/ArticleCloset">
              <button className="btnLeerMas">{t('cardBlogLink')}</button>
            </Link>
          </div>
          <div className="image">
            <img 
              src={art5} 
              alt="art5" 
              onClick={() => openModal(art5)} //Abre el modal con la imagen
              className="clickable-image"
            />
          </div>
        </div>

      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={modalImageSrc} alt="Modal" />
        </div>
      )}

    </div>
  );
}

export default Blog;
