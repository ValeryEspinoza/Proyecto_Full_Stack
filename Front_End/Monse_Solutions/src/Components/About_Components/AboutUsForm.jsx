import React from 'react'
import "../../Styles/Components_Styles/AboutUs_C_Styles/AboutUsForm.css"
import { Link } from 'react-router-dom';
import mision from '../../Img/Components_Img/about_mision.png'
import vision from '../../Img/Components_Img/about_vision.png'


function AboutUsForm() {
  return (
    <div className="about-us-container">

    <div className='divTitleAbout'>
    <h1 className="about-title">About us</h1>
    </div><br />

    <section className="intro-section">
        <p className='parrafoAbout'>
        Monse Solutions is a company specialized in finishes and renovations, 
        dedicated to transforming spaces and enhancing the functionality and aesthetics 
        of homes and offices. In a competitive market, Monse Solutions stands out for its 
        commitment to quality, innovation, and customer service. With a team of experienced 
        professionals, the company offers personalized solutions that adapt to the needs and 
        preferences of each client, using high-end materials and modern techniques. 
        Its comprehensive approach to renovation projects ensures that every detail is attended 
        to, from the initial design to the final execution, making each project a unique and 
        satisfying experience.
        </p><br /><br />
        <Link to="/Contact">
        <button className="contactUs">Contact us</button>
        </Link>
      </section><br /><br />

<div className="sectionMV">
    <div className="contentM">
        <img className='imgMV' src={mision} alt="mision"/>
        <div className="text-block">
            <h2 className='titleMV'>Our mision</h2>
            <p className='textMision'>To transform our clients' spaces into functional 
                and aesthetically pleasing 
                environments by providing personalized service that blends innovation, 
                high-quality materials, and a dedicated team of professionals. 
                At Monse Solutions, we are committed to managing every detail from 
                concept to completion</p>
        </div>
    </div>
</div> <br />

<div className="sectionMV">
    <div className="contentV reverse">
        <div className="text-block">
            <h2 className='titleMV'>Our vision</h2>
            <p className='textVision'>To be the leading company in the finishes and remodeling 
                sector, recognized for transforming spaces with excellence, creativity, 
                and a client-centered approach, setting new standards of quality and 
                sustainability in project design and execution.</p>
        </div>
        <img className='imgMV' src={vision} alt="mision"/>
    </div>
</div><br /><br />

<div className="divTextoFinal">
    <p className="textoFinal">
    We are committed to listening to your ideas, understanding your desires, 
    and turning them into reality, ensuring a result that is not only aesthetic but 
    also functional and durable.
    </p>
</div>


</div>
  )
}

export default AboutUsForm