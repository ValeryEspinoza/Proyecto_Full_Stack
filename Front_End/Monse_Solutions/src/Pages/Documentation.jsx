import React from 'react'
import SideBar from '../Components/Admin_Components/SideBar'
import DocumetationForm from '../Components/Admin_Components/DocumetationForm'
import '../Styles/Pages_Styles/Documentation.css'


function Documentation() {
  return (
    <div className='contenedoresPaginas'>
        <SideBar />
        <div>
        <DocumetationForm />
        </div>
      
       
    </div>

  )
}

export default Documentation