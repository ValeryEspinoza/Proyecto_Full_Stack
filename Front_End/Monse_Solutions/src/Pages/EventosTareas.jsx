import React from 'react'
import SideBar from '../Components/Admin_Components/SideBar'
import '../Styles/Pages_Styles/EventosTareas.css'
import EventsForm from '../Components/Admin_Components/EventsForm'
import  TasksForms from '../Components/Admin_Components/TasksForms'


function EventosTareas() {
  return (
    
    <div className='contenedoresPaginas'>
      <SideBar />
      <div>
        <h1>Eventos</h1>
        <EventsForm />
        <hr />
        <h1>Tareas</h1>
        <TasksForms />

      
      </div>
    </div>
  )
}

export default EventosTareas
