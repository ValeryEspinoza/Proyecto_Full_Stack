import React from 'react'
import '../../Styles/Pages_Styles/Servicios.css'
import Imagen_Servicio_Madera from '../../Img/Components_Img/ImagenMadera.jpeg'
import Imagen_Gypsum from '../../Img/Components_Img/gypsum.jpeg'
import Imagen_Estuco from '../../Img/Components_Img/estuco.jpg'
import Imagen_Metal from '../../Img/Components_Img/metal.jpg'
import Imagen_Estructura_Metalica from '../../Img/Components_Img/Estructuras_metálicas.jpg'
import Imagen_Acabados_metalicas from '../../Img/Components_Img/Acabados_metalicos.jpg'
import Imagen_Remodelaciones from '../../Img/Components_Img/remodelacion.jpg'
import Imagen_Reestructuracion from '../../Img/Components_Img/Reestructuración.webp'
import Imagen_Albañileria from '../../Img/Components_Img/Albañileria.jpg'
import Imagen_Mantenimiento from '../../Img/Components_Img/Mantenimiento.jpg'



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

         <div >
            <img src={Imagen_Servicio_Madera} alt="IMG" width="220"  height="150" />
            <h3>Wood finishes</h3>
            <p>Wood finishes protect and enhance furniture and other wooden surfaces, 
              guaranteeing durability, aesthetics and resistance.</p>
         </div>


    {/* Acabados en yeso (gypsum)  */ }

        <div>
        <img src={Imagen_Gypsum} alt="IMG" width="220"  height="150" />
            <h3>Gypsum finishes</h3>
            <p>Gypsum finishes offer smooth and durable surfaces for interiors and 
              exteriors,improving aesthetics and protection.</p>
        </div>

    {/* Aplicaciones de estuco  */ }   

          <div>
          <img src={Imagen_Estuco} alt="IMG" width="220"  height="150" />
            <h3>Stucco applications</h3>
            <p>Stucco applications are durable coatings for exterior walls,
               offering weather resistance and aesthetic appeal.</p>
          </div>

    {/* Acabados en metal */ }   
          <div>
            <img src={Imagen_Metal} alt="IMG" width="220"  height="150" />
            <h3>Metal finishes</h3>
            <p>Metal finishes are protective and decorative coatings applied
               to metal surfaces, enhancing durability and appearance.</p>
         </div>


{/*structuras y Metalurgia*/ } 

    <div>
      <h2>Structures and Metalurgy</h2>

      <div>
           <img src={Imagen_Estructura_Metalica} alt="IMG" width="220"  height="150" />
            <h3>Metal finishes</h3>
            <p>Treatments and coatings to improve the aesthetics and durability of the metal.</p>
      </div>
      
      <div>
           <img src={Imagen_Acabados_metalicas} alt="IMG" width="220"  height="150" />
            <h3>Metal finishes</h3>
            <p>Treatments and coatings to improve the aesthetics and durability of the metal.</p>
      </div>
      
{/*Remodelaciones y Obras*/ } 
  <div>
    <h2>Remodeling and Works</h2>

       <div>
           <img src={Imagen_Remodelaciones} alt="IMG" width="220"  height="150" />
            <h3>Renovations</h3>
            <p>We transform and renew your home with personalized solutions, improving functionality and aesthetics.</p>
      </div>

      <div>
           <img src={Imagen_Reestructuracion} alt="IMG" width="220"  height="150" />
            <h3>Restructuring of spaces</h3>
            <p>Optimiza y renueva tus espacios con nuestros servicios de remodelación y acabados de calidad. </p>
      </div> 

      
      <div>
           <img src={Imagen_Albañileria} alt="IMG" width="220"  height="150" />
            <h3>General masonry</h3>
            <p>We offer general masonry, carrying out construction and remodeling work with quality and precision. </p>
      </div>    


{/*  Mantenimiento Preventivo y Correctivo */ }   

<div>
  <h2>Maintenance Preventive and Corrective</h2>

       <div>
           <img src={Imagen_Mantenimiento} alt="IMG" width="220"  height="150" />
            <h3>general maintenance</h3>
            <p>We offer general maintenance to keep your spaces in optimal conditions. </p>
       </div>
</div>

  </div>


    </div>   
 </div>
</div>
</div>
</div>
  )
}

export default Servicios;
