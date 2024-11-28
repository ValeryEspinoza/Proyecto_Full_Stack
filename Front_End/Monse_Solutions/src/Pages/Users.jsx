import React from 'react'
import SideBar from '../Components/Admin_Components/SideBar'
import UsersForms from '../Components/Admin_Components/UsersForms'
import '../Styles/Pages_Styles/Users.css'


function Users() {
  return (
    <div className='contenedoresPaginas'>
      <SideBar />
      <UsersForms />
    </div>
  )
}

export default Users
