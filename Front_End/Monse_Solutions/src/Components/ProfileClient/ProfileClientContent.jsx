import React from 'react'
import '../../Styles/Components_Styles/ProfileClienteStyles/ProfileClientContent.css'

function ProfileClientContent() {
  return (
    <div className='divProfileClient'>
  {/* Introducción del formulario */}
    <h2 className='titleShedule'>Schedule your appointment<br />to visit your project</h2>
    <div className='textShedule'>
    <p>
    Welcome to the appointment scheduling system. Follow these steps to book your visit:
  </p>
  <ol>
    <li>
      Click on an available date in the calendar.
    </li>
    <li>
      Select the time that best fits your schedule from the list of available hours.
    </li>
    <li>
      Enter your contact information.
    </li>
    <li>
      Confirm your appointment. You will receive an email with the details of your scheduled visit.
    </li>
  </ol>
  <p>
    If you need assistance, feel free to contact us. Thank you for choosing our services!
  </p>
    </div>
    </div>

  )
}

export default ProfileClientContent