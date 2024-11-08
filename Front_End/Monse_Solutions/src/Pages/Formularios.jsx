import React from 'react'
import AdminNavBar from '../Components/Admin_Components/AdminNavBar'
import AdminFichaServicios from '../Components/Admin_Components/AdminFichaServicios'
import AdminProforma from '../Components/Admin_Components/AdminProforma'


function Formularios() {
  return (
    <div>
      <AdminNavBar />
     <AdminFichaServicios />
     <AdminProforma />
    </div>
  )
}

export default Formularios