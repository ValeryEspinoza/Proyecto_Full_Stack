import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LogoIMG from "../../Img/Components_Img/Logo.jpeg"
import Video1 from '../../Img/Components_Img/Video1.mp4';  // Ejemplo de video importado
import Video2 from '../../Img/Components_Img/Video2.mp4';  // Otro ejemplo de video
import Video3 from '../../Img/Components_Img/video3.mp4'
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
          <video
            className="d-block w-100 carousel-video"
            src={Video1} // Referencia al primer video
            alt="First video slide"
            width="auto"
            height="500"
            controls
            loop
            muted
          />
        </Carousel.Item>
        <Carousel.Item>
          <video
            className="d-block w-100 carousel-video"
            src={Video2} // Referencia al segundo video
            width="auto"
            height="500"
            alt="Second video slide"
            controls
            loop
            muted
          />
        </Carousel.Item>
        <Carousel.Item>
        <video
            className="d-block w-100 carousel-video"
            src={Video3} 
            width="auto"
            height="500"
            alt="Second video slide"
            controls
            loop
            muted
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
