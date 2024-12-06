import React from 'react'
import '../Styles/Pages_Styles/Settings.css'
import SideBar from '../Components/Admin_Components/SideBar'
import SettingsComponent from '../Components/Admin_Components/SettingsComponent'


function Settings() {
  return (
    <div className='contenedoresPaginas'>
        <SideBar />
        <div>
          <SettingsComponent />
        </div>
      
    </div>
  )
}

export default Settings
