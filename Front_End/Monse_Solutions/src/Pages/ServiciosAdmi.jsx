import React from 'react'

import SideBar from '../Components/Admin_Components/SideBar'
import ServicesTable from '../Components/Admin_Components/ServiceAdmiData'
import '../Styles/Pages_Styles/ServiciosAdmi.css'


function ServiciosAdmi() {
  return (
    <div className='contenedoresPaginas'>
      <SideBar />
      <div>
          <ServicesTable />
      </div>
    
    </div>
  )
}

export default ServiciosAdmi