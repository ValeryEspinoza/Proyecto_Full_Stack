import React from 'react'
import AdminNavBar from '../Components/Admin_Components/AdminNavBar'
import AdminFichaServicios from '../Components/Admin_Components/AdminFichaServicios'
import AdminProforma from '../Components/Admin_Components/AdminProforma'
import SideBar from '../Components/Admin_Components/SideBar'
import TasksForms from '../Components/Admin_Components/TasksForms'
import EventsForm from '../Components/Admin_Components/EventsForm'


function Formularios() {
  return (
    <div className='contenedoresPaginas'>
      <SideBar />
      <EventsForm />
     <AdminProforma />
    </div>
  )
}

export default Formularios