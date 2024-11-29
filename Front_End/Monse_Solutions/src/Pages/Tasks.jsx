import React from 'react'
import SideBar from '../Components/Admin_Components/SideBar'
import TasksForms from '../Components/Admin_Components/TasksForms'


function Tasks() {
  return (
    <div className='contenedoresPaginas'>
      
        <SideBar />
        <div>
          <h1>Crear task</h1>
        <TasksForms />
        </div>

      
    </div>
  )
}

export default Tasks
