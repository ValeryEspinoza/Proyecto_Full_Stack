import React from 'react'
import SideBar from '../Components/Admin_Components/SideBar'
import '../Styles/Pages_Styles/Calendar.css'
import CalendarForm from '../Components/Admin_Components/CalendarForm'

function Calendar() {
  return (
    <div>
      <h1>Calendar</h1>
      <SideBar />
      <CalendarForm />
    </div>
  )
}

export default Calendar
