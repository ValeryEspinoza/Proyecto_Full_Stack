import React from 'react'
import "../../Styles/Components_Styles/Login_Styles/LoginForm.css"
import { useState } from 'react'
import GetUser from '../../Services/Get/GetUsers'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

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
    
    if ((Users.find(({Email}) => Email === EmailUser)) && (Users.find(({Password}) => Password === PassUser)) ) {
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
    <div className="login-container">
    <h1 className="login-title">Bienvenido a Login</h1>

    <input 
        className="input-field" 
        value={EmailUser} 
        onChange={GetEmail} 
        type="text" 
        placeholder="Correo electrónico" 
    />
    <input 
        className="input-field" 
        value={PassUser} 
        onChange={GetPass} 
        type="password" 
        placeholder="Contraseña" 
    />

    <button onClick={Login} className="btn-login">Log In</button>
    
    <Link className='irAHome' to="/Home"><p>Ir a Home</p></Link>
    <h2 className="alert-message">{MensajeAlerta}</h2>
</div>
</div>
  )
}

export default LoginForm


