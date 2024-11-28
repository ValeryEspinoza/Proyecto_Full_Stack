import React from 'react'
import DashBoardTable from '../Components/Admin_Components/DashBoardTable'
import SideBar from '../Components/Admin_Components/SideBar'
import '../Styles/Pages_Styles/DashBoardPage.css'

function DashBoard() {


  return (
    <div className='contenedoresPaginas'>
      <SideBar />
      <DashBoardTable />
    </div>
  )
}

export default DashBoard
