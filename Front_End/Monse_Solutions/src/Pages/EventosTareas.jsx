import React from 'react'
import SideBar from '../Components/Admin_Components/SideBar'
import '../Styles/Pages_Styles/EventosTareas.css'
import { Link } from 'react-router-dom' 
 



function EventosTareas() {
  return (

    
    <div className='contenedoresPaginas'>
      <SideBar />
      <div>
      <Link className="linkForm" to="/Tasks"><button>Tasks Form</button></Link>
      

      
      </div>

    </div>
  )
}

export default EventosTareas
