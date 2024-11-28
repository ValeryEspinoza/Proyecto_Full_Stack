import React from 'react'

import SideBar from '../Components/Admin_Components/SideBar'
import ServicesForm from '../Components/Admin_Components/ServicesForm'
import '../Styles/Pages_Styles/ServiciosAdmi.css'


function ServiciosAdmi() {
  return (
    <div className='contenedoresPaginas'>
      <SideBar />
      <div>
          <ServicesForm />
      </div>
    
    </div>
  )
}

export default ServiciosAdmi