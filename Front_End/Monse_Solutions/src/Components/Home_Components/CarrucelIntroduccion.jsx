import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LogoIMG from "../../Img/Components_Img/Logo.jpeg"
import Imagen from '../../Img/Components_Img/images.jpg'
import ImagenCarrucel from '../../Img/Components_Img/imagenIdea.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Styles/Components_Styles/Home_C_Styles/CarrucelIntroduccion.css"



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='contenedorCarrucel'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
          className="d-block w-100 carousel-image"
          src={ImagenCarrucel}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
           className="d-block w-100 carousel-image"
          src={Imagen}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
           className="d-block w-100 carousel-image"
          src={LogoIMG}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
export default ControlledCarousel;