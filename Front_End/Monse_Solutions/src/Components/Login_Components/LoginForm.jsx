import React from 'react'
import "../../Styles/Components_Styles/Login_Styles/LoginForm.css"
import { useState } from 'react'
import GetUser from '../../Services/Get/GetUsers'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import iconEmail from "../../Img/Components_Img/icon3_email.png"
import iconPassword from "../../Img/Components_Img/icon_password.png"


function LoginForm() {
  //Hooks
  const [PassUser, SetPassUser]= useState("")
  const [EmailUser, SetEmailUser]= useState("")
  const [MensajeAlerta, SetMensajeAlerta]=useState("")

  //Obtener valor input
  function GetEmail(input) {
    SetEmailUser(input.target.value)
  }
  function GetPass(input) {
    SetPassUser(input.target.value)
  }

  const navigate= useNavigate()

  //Boton Login
  async function Login() {
    const Users = await GetUser() 
    
    if ((Users.find(({email}) => email === EmailUser)) && (Users.find(({password}) => password === PassUser)) ) {
      localStorage.setItem("Autenticado", "true");
       
      Swal.fire({
        title: "Ingreso Exitoso!",
        text: "Se ha registrado el usuario con exito",
        icon: "success"
        });

      
      setTimeout(() => {
        navigate("/Formularios");
      }, 5000); 
      
    }else{
      
      Swal.fire({
        title: "Registro Exitoso!",
        text: "Contraseña o correo no son válidos",
        icon: "error"
        });
    }
  }

  return (
<div className="bodyLogin">
<div className='divTitleLogin'>
<h1 className="login-title">Access your account <br />at Monse Solutions</h1>
</div><br />

    <div className="login-container">
    <div className="input-container">
        <img src={iconEmail} alt="Email Icon" className="input-icon" />
        <input 
            className="input-field" 
            value={EmailUser} 
            onChange={GetEmail} 
            type="text" 
            placeholder="Email" 
        />
    </div>
<br />
    <div className="input-container">
        <img src={iconPassword} alt="Password Icon" className="input-icon" />
        <input 
            className="input-field" 
            value={PassUser} 
            onChange={GetPass} 
            type="password" 
            placeholder="Password" 
        />
    </div>
    <h2 className="alert-message">{MensajeAlerta}</h2>
</div>
<button onClick={Login} className="btn-login">Log In</button><br />
<Link className='goToHome' to="/Home"><p>Go to Home</p></Link>
</div>
  )
}

export default LoginForm


