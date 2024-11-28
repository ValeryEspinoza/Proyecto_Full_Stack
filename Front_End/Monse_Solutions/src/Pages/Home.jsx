import React from 'react';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import NavBar from '../Components/General_Components/NavBar';
import Footer from '../Components/General_Components/Footer';
import HomeFichaInformativa from '../Components/Home_Components/HomeFichaInformativa';
import Home_Services from '../Components/Home_Components/Home_Services';
import ControlledCarousel from '../Components/Home_Components/CarrucelIntroduccion';
import Connect_with_us from '../Components/Home_Components/Connect_with_us';
import Reviews from '../Components/Home_Components/Reviews';
import '../../src/config/i18n'; // Importa el archivo de configuración de i18next

function Home() {
  const { t, i18n } = useTranslation();

 

  return (
    <>

      
      {/* Botones para cambiar el idioma */}


      <NavBar />
      <ControlledCarousel />
      <HomeFichaInformativa />
      <Connect_with_us />
      <Home_Services />
      <Reviews />
      <Footer />
    </>
  );
}

export default Home;
