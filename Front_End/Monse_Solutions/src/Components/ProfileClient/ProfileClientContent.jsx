import React from 'react'
import '../../Styles/Components_Styles/ProfileClienteStyles/ProfileClientContent.css'

function ProfileClientContent() {
  return (
    <div className='divProfileClient'>
  {/* Introducción del formulario */}
    <h2 className='titleShedule'>Schedule your appointment<br />to visit your project</h2>
    <div className='textShedule'>
    <p>
    Fill out the form to schedule an appointment with our manager, who will visit your 
    property to assess the work you need to have done. We look forward to helping 
    you with your project!
    </p>
    </div>
    </div>

  )
}

export default ProfileClientContent