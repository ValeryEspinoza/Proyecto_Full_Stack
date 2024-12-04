import React from 'react'
import '../../Styles/Pages_Styles/Servicios.css'
import Imagen_Servicio_Madera from '../../Img/Components_Img/ImagenMadera.jpeg'
import Imagen_Gypsum from '../../Img/Components_Img/gypsum.jpeg'
import Imagen_Estuco from '../../Img/Components_Img/estuco.jpg'
import Imagen_Metal from '../../Img/Components_Img/metal.jpg'
import Imagen_Estructura_Metalica from '../../Img/Components_Img/Estructuras_metálicas.jpg'
import Imagen_Acabados_metalicas from '../../Img/Components_Img/Acabados_metalicos.jpg'
import Imagen_Remodelaciones from '../../Img/Components_Img/remodelacion.jpg'
import Imagen_Reestructuracion from '../../Img/Components_Img/Reestructuracion.webp'
import Imagen_Albañileria from '../../Img/Components_Img/Albañileria.jpg'
import Imagen_Mantenimiento from '../../Img/Components_Img/Mantenimiento.jpg'
import { useState, useEffect } from 'react'
import GetServices from '../../Services/Get/GetServices'



function Servicios() {
  const [Services, setServices] = useState([]);

  useEffect(() => {
      const fetchServices = async () => {
        const Datos = await GetServices();
       
        
        setServices(Datos);
   
      };
      fetchServices();
    }, [])
  return (
  <div>

    <div className='portada'>
      <h1 className="servicios-title">Our services</h1>
    </div>

    <div className="divCajasTexto">
       <div className="cajaTexto">
        <h3 className='titleCaja'>Experience</h3>
        <p className='parrafoCaja'>We have an expert team ready to 
          provide quality solutions to every client.</p>
    </div>

    <div className="cajaTexto">
        <h3 className='titleCaja'>Top quality</h3>
        <p className='parrafoCaja'>We guarantee the highest quality 
          standards in materials and finishes.</p>
    </div>

</div>

  {/* SERVICIOS  */ }
  
<div> </div>


 <div className="servicios_contenedor">
        <div className="servicio">
          <img src={Imagen_Servicio_Madera} alt="Wood finishes" className='servicio_imagen' />
          <h3 className='servicio_titulo' >Wood finishes</h3>
          <p className='servicio_texto' >Wood finishes protect and enhance furniture and other wooden surfaces, guaranteeing durability, aesthetics, and resistance.</p>
        </div>

        <div className="servicio">
          <img src={Imagen_Gypsum} alt="Gypsum finishes" className='servicio_imagen' />
          <h3 className='servicio_titulo'>Gypsum finishes</h3>
          <p className='servicio_texto'>Gypsum finishes offer smooth and durable surfaces for interiors and exteriors, improving aesthetics and protection.</p>
        </div>

        <div className="servicio">
          <img src={Imagen_Estuco} alt="Stucco applications"  className='servicio_imagen' />
          <h3 className='servicio_titulo' >Stucco applications</h3>
          <p className='servicio_texto' >Stucco applications are durable coatings for exterior walls, offering weather resistance and aesthetic appeal.</p>
        </div>

        <div className="servicio">
          <img src={Imagen_Metal} alt="Metal finishes" className='servicio_imagen' />
          <h3 className='servicio_titulo'>Metal finishes</h3>
          <p className='servicio_texto' >Metal finishes are protective and decorative coatings applied to metal surfaces, enhancing durability and appearance.</p>
        </div>

        <div className="servicio">
          <img src={Imagen_Estructura_Metalica} alt="Metal structures" className='servicio_imagen' />
          <h3 className='servicio_titulo'>Metal structures</h3>
          <p className='servicio_texto' >Treatments and coatings to improve the aesthetics and durability of the metal.</p>
        </div>

        <div className="servicio">
          <img src={Imagen_Acabados_metalicas} alt="Metal finishes" className='servicio_imagen' />
          <h3 className='servicio_titulo'>Metal finishes</h3>
          <p className='servicio_texto' >Treatments and coatings to improve the aesthetics and durability of the metal.</p>
        </div>

        <div className="servicio">
          <img src={Imagen_Remodelaciones} alt="Renovations" className='servicio_imagen' />
          <h3 className='servicio_titulo'>Renovations</h3>
          <p className='servicio_texto'>We transform and renew your home with personalized solutions, improving functionality and aesthetics.</p>
        </div>

        <div className="servicio">
          <img src={Imagen_Reestructuracion} alt="Restructuring of spaces" className='servicio_imagen' />
          <h3 className='servicio_titulo'>Restructuring of spaces</h3>
          <p className='servicio_texto'>Optimize and renew your spaces with our remodeling and quality finishing services.</p>
        </div>

        <div className="servicio">
          <img src={Imagen_Albañileria} alt="General masonry" className='servicio_imagen' />
          <h3 className='servicio_titulo'>General masonry</h3>
          <p className='servicio_texto' >We offer general masonry, carrying out construction and remodeling work with quality and precision.</p>
        </div>

        <div className="servicio">
          <img src={Imagen_Mantenimiento} alt="General maintenance" className='servicio_imagen' />
          <h3 className='servicio_titulo'>General maintenance</h3>
          <p className='servicio_texto'>We offer general maintenance to keep your spaces in optimal condition.</p>
        </div>
   </div>
   <br /><br />
    </div>
  )
}

export default Servicios;
