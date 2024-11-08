import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LogoIMG from "../../Img/Components_Img/Logo.jpeg"
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
          src={LogoIMG}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
           className="d-block w-100 carousel-image"
          src={LogoIMG}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
           className="d-block w-100 carousel-image"
          src={LogoIMG}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;