import React from 'react'
import NavBar from '../Components/General_Components/NavBar'
import StoreNavbar from '../Components/Store_Components/StoreNavbar'
import Footer from '../Components/General_Components/Footer'
import Store from '../Components/Store_Components/Store_Cards'

function VirtualStore() {
  return (
    <div>
      <StoreNavbar/>
      <Store/>
      <Footer/>
    </div>
  )
}

export default VirtualStore
