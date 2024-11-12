import React from 'react'
import NavBar from '../Components/General_Components/NavBar'
import Footer from '../Components/General_Components/Footer'
import HomeFichaInformativa from '../Components/Home_Components/HomeFichaInformativa'
import Home_Services from '../Components/Home_Components/Home_Services'
import ControlledCarousel from '../Components/Home_Components/CarrucelIntroduccion'
import Connect_with_us from '../Components/Home_Components/Connect_with_us'

function Home() {
  return (
   <> 
      <NavBar />
      <ControlledCarousel />
      <HomeFichaInformativa />
      <Connect_with_us/>
      <Home_Services/>
      <Footer />
   </>
  )
}

export default Home