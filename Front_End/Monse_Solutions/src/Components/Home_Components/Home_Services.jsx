import React from 'react'
import '../../Styles/Components_Styles/Home_C_Styles/Home_Services.css'
import Imagen_Servicio_Madera from '../../Img/Components_Img/ImagenMadera.jpeg'
import Imagen_Servicio_Pintura from '../../Img/Components_Img/servPintura.png'
import Imagen_Servicio_Jardin from '../../Img/Components_Img/servJardin.png'
function Home_Services() {
  return (
    <div>
            <div className="services-container">
      <h2 className='Titulo_Sevices' > Some of our services</h2>
      <br />

      
      <div className="services_grid">
        <div className="services_card">
    
          <img
              src={Imagen_Servicio_Madera}
              alt="IMG"
             className='services_image'
            /> 
            
          <h3 className='Nombre_Services'><br />Wood Details</h3>
          <p>
We offer remodeling and wood finishes, creating unique spaces with custom floors, coverings and furniture, always with quality and precision.</p>
        </div>
        
        <div className="services_card">
        <img
              src={Imagen_Servicio_Pintura}
              alt="IMG"
             className='services_image'
            /> 
          <h3 className='Nombre_Services' ><br /> Decorative Painting</h3>
          <p className='Descripcion_Services'>We specialize in Decorative Painting, enhancing spaces with unique finishes and artistic effects tailored to your style.</p>
        </div>
        
        <div className="services_card">
        <img
              src={Imagen_Servicio_Jardin}
              alt="IMG"
             className='services_image'
            /> 
          <h3 className='Nombre_Services' ><br />Exterior Design and Landscaping</h3>
          <p className= "Descripcion_Services" >We offer exterior design and landscaping services, transforming outdoor spaces with custom designs and landscaping.</p>
        </div>
      </div>
    </div>
    <br /><br />
    </div>
  )
}

export default Home_Services