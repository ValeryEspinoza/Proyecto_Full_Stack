import React from 'react'
import NavBar from '../Components/General_Components/NavBar'
import Footer from '../Components/General_Components/Footer'
import VirtualStore_Cards_Components from '../Components/VirtualStore_Components/VirtualStore_Cards_Components'

function VirtualStore() {
  return (
    <div>
      <NavBar/>
      <VirtualStore_Cards_Components/>
      <Footer/>
    </div>
  )
}

export default VirtualStore
