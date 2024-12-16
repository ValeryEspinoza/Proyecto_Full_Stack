import React, { useState, useContext } from 'react';
import "../../Styles/Components_Styles/Login_Styles/LoginForm.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import postData from '../../Services/Post/PostData';
import "react-toastify/dist/ReactToastify.css";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import '../../Styles/toastStyles.css'

function LoginForm() {
  const [PassUser, SetPassUser] = useState("");
  const [UserName, SetUserName] = useState("");
  const navigate = useNavigate();
  const { login} = useContext(AuthContext);
  function GetEmail(input) {
    SetUserName(input.target.value);
  }
  function GetPass(input) {
    SetPassUser(input.target.value);
  }
  // Botón de login
  async function Ingresar() {
    if (!UserName || !PassUser) {
      Toastify({
        text: 'Please complete all fields before submitting',
        duration: 3000,
        gravity: 'top',
        position: 'center',
        close: true,
        className: 'toast-error',
      }).showToast();
      return;
    }
    try {
      const credentials = { username: UserName, password: PassUser };
      // Llamar a login desde el contexto
      const response = await login(credentials);
      const data = response.data
      const grupo = data.groups
      if (response.success) {
            if (grupo[0]==1) {
              Toastify({
                text: `Successful Entry! Welcome to Dashboard`,
                duration: 3500,
                gravity: 'top',
                position: 'center',
                className: 'toastsuccess',
                }).showToast();
              setTimeout(() => {
                navigate("/Dashboard");
              }, 1500);
            }else{
              Toastify({
                text: `Successful Entry! Welcome to Profile Cliente`,
                duration: 3500,
                gravity: 'top',
                position: 'center',
                className: 'toastsuccess',
                }).showToast();
              setTimeout(() => {
                navigate("/ProfileClient");
              }, 1500);
            }
      } else {
        toast.error(response.message || 'Login error');
      }
    } catch (error) {
      Toastify({
        text: "An error occurred while trying to login",
        duration: 3000,
        gravity: "top",
        position: "center",
        close: true,
        className: "toast-error",
    }).showToast();
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
              placeholder="UserName"
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
          <button onClick={Ingresar} className="btn-login">Log In</button>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;