import React from 'react'
import '../../Styles/Pages_Styles/Servicios.css'
import Imagen_Servicio_Madera from '../../Img/Components_Img/ImagenMadera.jpeg'
import Imagen_Gypsum from '../../Img/Components_Img/gypsum.jpeg'
import Imagen_Estuco from '../../Img/Components_Img/estuco.jpg'
import Imagen_Metal from '../../Img/Components_Img/metal.jpg'



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

  {/* SERVICIOS  */ }
  


<div className="services-container">
<div className="services-grid">
  
{/*Trabajos en Acabados*/ }
 <div className="Finishing_Work">                           
    <h2>Finishing Work</h2>

   {/* Acabados en madera  */ }

         <div className="service_Finishing_Work">
            <img src={Imagen_Servicio_Madera} alt="IMG" width="220"  height="150" />
            <h3>Wood finishes</h3>
            <p>Wood finishes protect and enhance furniture and other wooden surfaces, 
              guaranteeing durability, aesthetics and resistance.</p>
         </div>


    {/* Acabados en yeso (gypsum)  */ }

        <div className="service_Finishing_Work">
        <img src={Imagen_Gypsum} alt="IMG" width="220"  height="150" />
            <h3>Gypsum finishes</h3>
            <p>Gypsum finishes offer smooth and durable surfaces for interiors and 
              exteriors,improving aesthetics and protection.</p>
        </div>

    {/* Aplicaciones de estuco  */ }   

          <div className="service_Finishing_Work">
          <img src={Imagen_Estuco} alt="IMG" width="220"  height="150" />
            <h3>Stucco applications</h3>
            <p>Stucco applications are durable coatings for exterior walls,
               offering weather resistance and aesthetic appeal.</p>
          </div>

    {/* Acabados en metal */ }   
          <div className="service_Finishing_Work">
            <img src={Imagen_Metal} alt="IMG" width="220"  height="150" />
            <h3>Metal finishes</h3>
            <p>Metal finishes are protective and decorative coatings applied
               to metal surfaces, enhancing durability and appearance.</p>
         </div>
 </div>
</div>
</div>
</div>
  )
}

export default Servicios;
