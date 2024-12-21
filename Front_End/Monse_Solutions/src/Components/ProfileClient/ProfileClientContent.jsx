import React from 'react'
import '../../Styles/Components_Styles/ProfileClienteStyles/ProfileClientContent.css'
import "toastify-js/src/toastify.css";
import { useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useContext, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoutIcon2 from "../../Img/Components_Img/icon_logout2.png"; 

function ProfileClientContent() {
const {logout} = useContext(AuthContext);

    const salir = async () => {

      const response = await logout();
      console.log(response);
      
      if (response) {
        toast.success("Cerrando Sesion...");
            
      }else{
        toast.error("Error al cerrar sesión");
      }

    };
    
  return (
    <div className='divProfileClient'>
      <div className='divBtnLogOutClient'>
     <button 
      className="btnLogOutClient" 
      onClick={salir} 
  
    >
      <img 
        src={logoutIcon2} 
        alt="Log Out" 
        className="logoutIconClient"
      />
    </button>
    </div>
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