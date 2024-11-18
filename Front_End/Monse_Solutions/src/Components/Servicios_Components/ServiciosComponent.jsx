import React from 'react'
import '../../Styles/Pages_Styles/Servicios.css'
import Imagen_Servicio_Madera from '../../Img/Components_Img/ImagenMadera.jpeg'



function Servicios() {
  return (
    <div>
      <div className='portada'>
      <h1 className="servicios-title">Our services</h1>
      </div>

    <div class="divCajasTexto">

       <div class="cajaTexto">
        <h3 className='titleCaja'>Experience</h3>
        <p className='parrafoCaja'>We have an expert team ready to 
          provide quality solutions to every client.</p>
      </div>

      <div class="cajaTexto">
        <h3 className='titleCaja'>Calidad Superior</h3>
        <p className='parrafoCaja'>We guarantee the highest quality 
          standards in materials and finishes.</p>
      </div>

</div>


      <div className="services-container">
        <div className="services-grid">
          <div className="service-card">
            <img src={Imagen_Servicio_Madera} alt="IMG" width="220" height="150" />
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

export default Servicios;
