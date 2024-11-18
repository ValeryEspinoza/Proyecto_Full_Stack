import React, { useState, useEffect } from 'react';
import "../../Styles/Components_Styles/Register_Styles/RegisterCliente.css";
import SendUser from '../../Services/Post/PostUser';
import GetUser from '../../Services/Get/GetUsers';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import iconRegister from "../../Img/Components_Img/icon_register.png";

function RegisterClienteForm() {
  // Hooks
  const [cedula, setCedula] = useState(""); 
  const [FullName, SetFullName] = useState(""); 
  const [EmailUser, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Password2, SetPassword2] = useState("");
  const [Access, SetAccess] = useState("");

  //Función para manejar el cambio en el input de la cédula
  const handleCedulaChange = async (e) => {
        const cedulaInput = e.target.value;
        setCedula(cedulaInput);
      
        // Si la cédula tiene una longitud válida, hacemos la llamada a la API
        if (cedulaInput.length >= 9) {

          try {
            //Realiza la llamada a la API de Hacienda
            const response = await fetch(`https://api.hacienda.go.cr/fe/ae?identificacion=${cedulaInput}`);
      
            //Revisamos si la respuesta fue exitosa (status 200)
            if (!response.ok) {
              throw new Error('Error en la respuesta de la API');
            }
      
            const data = await response.json();
            console.log("Respuesta completa de la API:", data);
      
            // Verificamos la respuesta completa en la consola
            console.log("Respuesta de la API:", data);
      
            //Verificamos si el campo 'nombre' existe en la respuesta
            if (data.nombre) {
              const fullName = data.nombre; // Si el nombre está disponible
              SetFullName(fullName);
              console.log("Nombre completo actualizado:", fullName);
            } else {
              //Si no se encuentra un nombre, mostrar un mensaje de error
              Swal.fire({
                title: "Cédula no encontrada",
                text: "No se encontró un usuario con esa cédula.",
                icon: "error",
              });
            }
            
          } catch (error) {
            // En caso de error, mostramos un mensaje con la razón del error
            console.error("Error al obtener los datos del usuario:", error);
            Swal.fire({
              title: "Error de conexión",
              text: `Hubo un problema al intentar obtener los datos: ${error.message}`,
              icon: "error",
            });
          }
        }
      };
      
      
  //Funciones para manejar los cambios en los demás campos de entrada
  function GetEmail(input) {
    SetEmail(input.target.value);
  }

  function GetPassword(input) {
    SetPassword(input.target.value);
  }

  function GetPassword2(input) {
    SetPassword2(input.target.value);
  }

  function GetAccessValue(input) {
    SetAccess(input.target.value);
  }

  // Función para agregar un nuevo usuario
  async function Add() {
    const Users = await GetUser();

    if (
      !Users.find(({ Email }) => Email === EmailUser) &&
      FullName !== "" &&
      EmailUser !== "" &&
      Password !== "" &&
      Password2 !== "" &&
      Access !== "" &&
      Password === Password2
    ) {
      SendUser(FullName, EmailUser, Password, Access);

      Swal.fire({
        title: "Registro Exitoso!",
        text: "Se ha registrado el usuario con éxito",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Registro Fallido",
        text: "Verifica lo siguiente: 1) Todos los espacios estén debidamente llenos. 2) Las contraseñas coincidan. 3) Correo electrónico debe ser válido",
        icon: "error",
      });
    }
  }

  return (
    <div className='bodyRegister'>
      <div className="divTitleRegister">
        <div className="title-content">
          <h1 className="register">Register</h1>
          <img src={iconRegister} alt="Register Icon" className="iconRegister" />
        </div>
      </div>
      <div className="register-container">
        <div className="divInputRegister">
          <input
            className='input-register'
            placeholder='Cédula'
            value={cedula}
            onChange={handleCedulaChange} 
          />
        </div>

        <div className="divInputRegister">
        <input
        className='input-register disabled-input'
        value={FullName}
        onChange={() => {}}
        placeholder='Full Name'
        readOnly //Hacerlo solo de lectura
        />

        </div>


        <div className="divInputRegister">
          <input
            className='input-register'
            value={EmailUser}
            onChange={GetEmail}
            placeholder='Email'
          />
        </div>

        <div className="divInputRegister">
          <input
            className='input-register'
            value={Password}
            onChange={GetPassword}
            placeholder='Password'
            type="password"
          />
        </div>

        <div className="divInputRegister">
          <input
            className='input-register'
            value={Password2}
            onChange={GetPassword2}
            placeholder='Enter your password again'
            type="password"
          />
        </div>

        <select className="select-language">
          <option value="" disabled selected>Choose a language</option>
          <option>Español</option>
          <option>English</option>
          <option>Français</option>
        </select>

        <br /><br />
        <button onClick={Add} className="btn-Register">Register</button><br />
        <Link className='irALogin' to="/Login">Ir a Login</Link>
      </div>
    </div>
  );
}

export default RegisterClienteForm;

