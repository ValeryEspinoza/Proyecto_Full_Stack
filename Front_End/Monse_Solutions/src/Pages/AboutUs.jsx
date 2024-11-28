import React from 'react'
import NavBar from '../Components/General_Components/NavBar'
import Footer from '../Components/General_Components/Footer'
import AboutUsForm from '../Components/About_Components/AboutUsForm'
import JoinOurTeam from '../Components/About_Components/JoinOurTeam'


function AboutUs() {
  return (
    <div>
      <NavBar />
      <AboutUsForm />
      <JoinOurTeam />
      <Footer />
    </div>
  )
}

export default AboutUs