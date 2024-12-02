import React from 'react'
import EventsForm from '../Components/Admin_Components/EventsForm'
import SideBar from '../Components/Admin_Components/SideBar'

function Events() {
  return (
    <div className='contenedorPaginas'>
    <SideBar />

    <div>  
      
      <h1>Crear Evento</h1>
        <EventsForm />
      </div>


    </div>
  )
}

export default Events
