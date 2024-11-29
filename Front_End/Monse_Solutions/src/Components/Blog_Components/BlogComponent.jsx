import React, { useState } from 'react';
import "../../Styles/Components_Styles/Blog_Styles/Blog.css";
import { Link } from 'react-router-dom';
import mision from '../../Img/Components_Img/about_mision.png';
import vision from '../../Img/Components_Img/about_vision.png';

import art3 from '../../Img/Components_Img/art_3.png';
import art4 from '../../Img/Components_Img/art_4.png';
import art5 from '../../Img/Components_Img/art_5.png';

function Blog() {
  // Estado para controlar el modal y la imagen seleccionada
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

  return (
    <div className="blog-container">

      <div className='portadaBlog'>
        <h1 className="blog-title">The Monse Solutions Blog</h1>
      </div>
      
      <div className="divCardsBlog">
        <div className="cardBlog">
          <div className="imgCardBlog1"></div>
          <h3 className="cardBlogTitle">10 basic maintenance tips<br />for your home</h3>
          <p className="cardBlogDescription">
            Keeping your home in good condition not only enhances 
            its appearance but also prevents...
          </p>
          <Link to="/Article10Tips" className="cardBlogLink">Leer más...
          </Link>
        </div>

        <div className="cardBlog">
          <div className="imgCardBlog2"></div>
          <h3 className="cardBlogTitle">Learn how to plan<br />a seasonal garden</h3>
          <p className="cardBlogDescription">
            Creating a seasonal garden is a wonderful way to enjoy fresh blooms, 
            vibrant colors...
          </p>
          <Link to="/ArticleGarden" className="cardBlogLink">Leer más...
          </Link>
        </div>
      </div><br /><br /><br /><br />

      <div className="divTextoIntroBlog">
        <p className="textoIntroBlog">
          ¡From practical tips to industry trend analysis, our blog is a resource designed 
          to inspire you. Join us on this journey toward innovation and discover how our 
          solutions can make a difference!
        </p>
      </div><br /><br />

      <div className='contenedorArt'>
        
        <div className="blog-post">
          <div className="text">
            <h2 className='titleBlog'>Preventive home maintenance</h2>
            <h3 className='descBlog'>An essential guide to protect your investment</h3>
            <p className='textBlog'>
              Preventive maintenance in the home not only helps extend the life of your home’s 
              components, but it also prevents unexpected expenses and keeps your space safe and 
              functional. In this article, we share practical tips for effectively caring 
              for your home, ensuring it’s always in top condition...
            </p>
            <Link to="/Contact">
              <button className="btnLeerMas">Read more...</button>
            </Link>
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
            <h2 className='titleBlog'>Explore color ideas for your spaces</h2>
            <h3 className='descBlog'>Transform your home with the perfect palette</h3>
            <p className='textBlog'>
              When it comes to home design and decor, one of the most powerful tools you have 
              at your disposal is color. The right palette can completely transform the atmosphere 
              of a room, making it feel larger, cozier, or even more energized..
            </p>
            <Link to="/Contact">
              <button className="btnLeerMas">Read more...</button>
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
            <h2 className='titleBlog'>Discover how to transform small closets</h2>
            <h3 className='descBlog'>Maximize storage and style in every inch</h3>
            <p className='textBlog'>
              A small closet doesn’t have to feel cramped or disorganized. With a little creativity 
              and the right approach, even the most compact spaces can be transformed into functional, 
              organized, and stylish storage areas...
            </p>
            <Link to="/Contact">
              <button className="btnLeerMas">Read more...</button>
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
