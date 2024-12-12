// LoginForm.js

import React, { useState, useContext } from 'react';
import "../../Styles/Components_Styles/Login_Styles/LoginForm.css";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
<<<<<<< HEAD
import postData from '../../Services/Post/PostData'; // Usar un servicio POST para enviar las credenciales al backend
import iconEmail from "../../Img/Components_Img/icon2_email.png";
import iconPassword from "../../Img/Components_Img/icon_password.png";
import {useAuth} from "../../Context/AuthContext";
=======
import postData from '../../Services/Post/PostData'; // Servicio POST para enviar credenciales
import AuthContext from '../../Context/AuthContext';
>>>>>>> a15c67dd53660787e81368dc5524c50d1e16f672

function LoginForm() {
  const [PassUser, SetPassUser] = useState("");
<<<<<<< HEAD
  const [EmailUser, SetEmailUser] = useState("");
  const [MensajeAlerta, SetMensajeAlerta] = useState("");
  const [Username, SetUsername] = useState("");
  

  const login = useAuth();
  // Obtener valor input
=======
  const [UserName, SetUserName] = useState("");
  const { login } = useContext(AuthContext); // Obtener la función login del contexto
  const navigate = useNavigate();

  // Obtener valores de input
>>>>>>> a15c67dd53660787e81368dc5524c50d1e16f672
  function GetEmail(input) {
    SetUserName(input.target.value);
  }

  function GetPass(input) {
    SetPassUser(input.target.value);
  }

<<<<<<< HEAD
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
=======
  // Botón de login
  async function Login() {
    if (!UserName || !PassUser) {
      Swal.fire({
        title: "Campos Vacíos",
        text: "Por favor ingrese su correo y contraseña",
        icon: "warning",
>>>>>>> a15c67dd53660787e81368dc5524c50d1e16f672
      });
      return;
    }
    try {
<<<<<<< HEAD
      // Llamada al servicio para obtener el token JWT de autenticación
      const data = { 
        username: Username,
        email: EmailUser, 
        password: PassUser 
      };
      const response = await postData('login', data); // Endpoint para obtener token (asumido como api/token/)
      console.log( response.access);
      
      if (response && response.access) {
        login(response.access);
=======
      // Llamada al servicio para obtener el token
      const data = { username: UserName, password: PassUser };
      const response = await postData('token', data); // Suponiendo que el endpoint para obtener el token es /api/token/
      console.log(response);

      if (response) {
        // Llamar la función login del contexto para almacenar el token
        const token = response.access;
        localStorage.setItem("token", token);
        login(token); // Guardamos el token en el contexto y localStorage

        // Guardar el token en el localStorage
        localStorage.setItem("token", response.access);
>>>>>>> a15c67dd53660787e81368dc5524c50d1e16f672

        Swal.fire({
          title: "Ingreso Exitoso!",
          text: "Bienvenido a Monse Solutions",
          icon: "success",
        });

        // Redirigir a la página principal después de un breve retraso
        setTimeout(() => {
          navigate("/Dashboard");
        }, 1500);
      } else {
        Swal.fire({
          title: "Ingreso Fallido",
          text: "Correo o contraseña incorrectos",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al intentar iniciar sesión",
        icon: "error",
      });
      console.error("Error de login:", error);
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
            <input
              className="input-field"
              value={UserName}
              onChange={GetEmail}
              placeholder="Email"
              name="email"
              id="email"
            />
          </div>

          <div className="input-container">
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
        </div>
      </div>
    </div>
  );
}

export default LoginForm;