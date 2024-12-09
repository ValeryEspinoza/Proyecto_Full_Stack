import React from 'react'
import SideBar from '../Components/Admin_Components/SideBar'
import '../Styles/Pages_Styles/EventosTareas.css'
import { Link } from 'react-router-dom' 
import TabSwitcher from '../Components/Admin_Components/TabSwitcher'
 



function EventosTareas() {
  return (

    
    <div className='contenedoresPaginas'>
      <SideBar />
      <div>
      <TabSwitcher />
      </div>

    </div>
  )
}

export default EventosTareas
