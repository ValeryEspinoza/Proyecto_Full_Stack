import React from 'react'
import NavBar from '../Components/General_Components/NavBar'
import Footer from '../Components/General_Components/Footer'
import Store from '../Components/Store_Components/Store_Cards'

function VirtualStore() {
  return (
    <div>
      <NavBar/>
      <Store/>
      <Footer/>
    </div>
  )
}

export default VirtualStore
