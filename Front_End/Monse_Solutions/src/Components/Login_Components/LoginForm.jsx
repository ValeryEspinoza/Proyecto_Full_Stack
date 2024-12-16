import React, { useState, useContext } from 'react';
import "../../Styles/Components_Styles/Login_Styles/LoginForm.css";
import { useNavigate } from 'react-router-dom';
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import postData from '../../Services/Post/PostData'; //Servicio POST para enviar credenciales
import AuthContext from '../../Context/AuthContext';
import '../../Styles/toastStyles.css'

function LoginForm() {
  const [PassUser, SetPassUser] = useState("");
  const [UserName, SetUserName] = useState("");
  const { login } = useContext(AuthContext); //Obtener la función login del contexto
  const navigate = useNavigate();

  // Obtener valores de input
  function GetEmail(input) {
    SetUserName(input.target.value);
  }

  function GetPass(input) {
    SetPassUser(input.target.value);
  }

  // Botón de login
  async function Login() {
    if (!UserName || !PassUser) {
      Toastify({
        text: 'Please complete all fields before submitting',
        duration: 3000,
        gravity: 'top',
        position: 'center',
        close: true,
        className: 'toast-error',
      }).showToast();
        }

    try {
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
          Toastify({
          text: `Successful Entry!`,
          duration: 3500,
          gravity: 'top',
          position: 'center',
          className: 'toastsuccess',
          }).showToast();
        // Redirigir a la página principal después de un breve retraso
        setTimeout(() => {
          navigate("/Dashboard");
        }, 1500);
      } else {
        Toastify({
          text: "Incorrect email or password",
          duration: 3000,
          gravity: "top",
          position: "center",
          close: true,
          className: "toast-error",
      }).showToast();
      }
    } catch (error) {
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