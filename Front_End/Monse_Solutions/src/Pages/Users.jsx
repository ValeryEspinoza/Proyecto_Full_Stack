import React from 'react'
import SideBar from '../Components/Admin_Components/SideBar'
import UsersTable from '../Components/Admin_Components/UsersAdmiData'
import '../Styles/Pages_Styles/Users.css'


function Users() {
  return (
    <div className='contenedoresPaginas'>
      <SideBar />
      <UsersTable />
    </div>
  )
}

export default Users
