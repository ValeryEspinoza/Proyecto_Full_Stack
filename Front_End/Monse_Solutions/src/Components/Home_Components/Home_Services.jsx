import React from 'react'
import '../../Styles/Components_Styles/Home_C_Styles/Home_Services.css'
import Imagen_Servicio_Pintura from '../../Img/Components_Img/imagenPintura.webp'
import Imagen_Servicio_Madera from '../../Img/Components_Img/ImagenMadera.jpeg'
function Home_Services() {
  return (
    <div>
            <div className="services-container">
      <h2>Our Services</h2>
      <p className="subheading">Subheading</p>
      
      <div className="services-grid">
        <div className="service-card">
    
          <img
              src={Imagen_Servicio_Madera}
              alt="IMG"
              width="220"
              height="150"
            />
          <h3>Personalized Interior Design</h3>
          <p>Creating unique spaces that reflect the client's style.</p>
        </div>
        
        <div className="service-card">
          <div className="service-image"></div>
          <h3>High-Quality Flooring and Finishing Installation</h3>
          <p>Premium options in ceramic, wood, laminate, and vinyl.</p>
        </div>
        
        <div className="service-card">
          <div className="service-image"></div>
          <h3>Decorative Plastering and Painting</h3>
          <p>Application of special techniques and decorative finishes that elevate interiors.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home_Services