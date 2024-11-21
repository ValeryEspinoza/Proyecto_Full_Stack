import React from 'react';
import './ArticlePage.css';

const ArticlePage = () => {
  return (
    <div className="article-container">
      <header className="article-header">
        <h1 className="article-title">Título del Artículo</h1>
        <p className="article-author">Por Autor - 21 de Noviembre, 2024</p>
      </header>

      <section className="article-image">
        <img src="https://via.placeholder.com/1200x600" alt="Imagen destacada" />
      </section>

      <section className="article-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat, metus nec scelerisque ullamcorper, magna purus
          elementum lorem, sit amet dictum risus sapien vel urna. Integer vitae lacus at turpis viverra gravida sit amet quis metus.
        </p>
        <p>
          Quisque suscipit, erat ac elementum fermentum, augue arcu malesuada ante, eget interdum justo elit eget urna. Cras faucibus,
          dui at sodales finibus, magna justo volutpat sapien, a euismod velit elit eget purus.
        </p>
        <p>
          Maecenas auctor, tortor vel vulputate volutpat, magna eros efficitur justo, sit amet sodales nunc purus eget velit. Aliquam erat
          volutpat. Donec cursus sit amet erat sed interdum.
        </p>
      </section>

      <footer className="article-footer">
        <button className="back-to-top">Volver arriba</button>
      </footer>
    </div>
  );
}

export default ArticlePage;
