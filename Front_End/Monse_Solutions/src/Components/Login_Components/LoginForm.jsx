import React, { useState } from 'react';
import "../../Styles/Components_Styles/Login_Styles/LoginForm.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import postData from '../../Services/Post/PostData'; // Usar un servicio POST para enviar las credenciales al backend
import iconEmail from "../../Img/Components_Img/icon2_email.png";
import iconPassword from "../../Img/Components_Img/icon_password.png";

function LoginForm() {
  // Hooks
  const [PassUser, SetPassUser] = useState("");
  const [EmailUser, SetEmailUser] = useState("");
  const [MensajeAlerta, SetMensajeAlerta] = useState("");
  const [Username, SetUsername] = useState("");
  
  // Obtener valor input
  function GetEmail(input) {
    SetEmailUser(input.target.value);
  }

  function GetPass(input) {
    SetPassUser(input.target.value);
  }

  function GetUsername(input){
    SetUsername(input.target.value)
  }

  const navigate = useNavigate();

  // Botón Login
  async function Login() {
    if (!Username || !EmailUser || !PassUser) {
      Swal.fire({
        title: "Campos Vacíos",
        text: "Por favor ingrese su usuario, correo y contraseña",
        icon: "warning"
      });
      return;
    }
    try {
      // Llamada al servicio para obtener el token JWT de autenticación
      const data = { 
        username: Username,
        email: EmailUser, 
        password: PassUser 
      };
      const response = await postData('login', data); // Endpoint para obtener token (asumido como api/token/)
      console.log( response.access);
      
      if (response && response.access) {
        // Almacenar el token en el localStorage
        localStorage.setItem("Autenticado", "true");
        localStorage.setItem("token", response.access); // Guardamos el token para futuras peticiones

        Swal.fire({
          title: "Ingreso Exitoso!",
          text: "Bienvenido a Monse Solutions",
          icon: "success"
        });

        // Redirigir a la página principal
        setTimeout(() => {
          navigate("/Formularios");
        }, 1500);
      } else {
        Swal.fire({
          title: "Ingreso Fallido",
          text: "Correo o contraseña incorrectos",
          icon: "error"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al intentar iniciar sesión",
        icon: "error"
      });
      console.error("Error de login: ", error);
    }
  }

  return (
    <div className="bodyLogin">
      <div className="login-wrapper">
        <div className="divTitleLogin">
          <h1 className="login-title">Access your account <br />at Monse Solutions</h1>
        </div>

        <div className="login-container">

          <div className="input-container">
            <img src={iconEmail} alt="Email Icon" className="input-icon" />
            <input 
              className="input-field" 
              value={Username} 
              onChange={GetUsername} 
              placeholder="Username" 
              name="user" 
              id="user"
            />
          </div>
          <div className="input-container">
            <img src={iconEmail} alt="Email Icon" className="input-icon" />
            <input 
              className="input-field" 
              value={EmailUser} 
              onChange={GetEmail} 
              placeholder="Email" 
              name="email" 
              id="email"
            />
          </div>

          <div className="input-container">
            <img src={iconPassword} alt="Password Icon" className="input-icon" />
            <input 
              className="input-field" 
              value={PassUser} 
              onChange={GetPass} 
              type="password" 
              placeholder="Password" 
              name="password" 
              id="password"
            />
          </div>

          <button onClick={Login} className="btn-login">Log In</button>

          <Link className='goToHome' to="/">
            <p>Go to Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;