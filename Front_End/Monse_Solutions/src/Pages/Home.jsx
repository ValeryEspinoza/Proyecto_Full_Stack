import React from 'react'
import NavBar from '../Components/General_Components/NavBar'
import Footer from '../Components/General_Components/Footer'
import HomeFichaInformativa from '../Components/Home_Components/HomeFichaInformativa'
import HomeServicesRamdom from '../Components/Home_Components/HomeServicesRamdom'
import ControlledCarousel from '../Components/Home_Components/CarrucelIntroduccion'

function Home() {
  return (
   <> 
      <NavBar />
      <ControlledCarousel />
       <HomeFichaInformativa />
        <HomeServicesRamdom />
      <Footer />
   </>
  )
}

export default Home