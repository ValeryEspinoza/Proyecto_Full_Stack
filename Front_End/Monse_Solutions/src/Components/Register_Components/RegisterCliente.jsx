import React, { useState, useEffect } from 'react';
import "../../Styles/Components_Styles/Register_Styles/RegisterCliente.css";
import GetUser from '../../Services/Get/GetUsers';
import GetClients from '../../Services/Get/GetClients';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import iconRegister from "../../Img/Components_Img/icon_register.png";
import SendClients from '../../Services/Post/PostClients';
import SendClientLanguage from '../../Services/Post/ClientsLanguage';
import SendUser from '../../Services/Post/PostUser';
import GetData from '../../Services/Get/GetData';
import PostData from '../../Services/Post/PostData';





function RegisterClienteForm() { 
  // Hooks
  const [cedula, setCedula] = useState(""); 
  const [FullName, SetFullName] = useState(""); 
  const [UserName, SetUserName] = useState(""); 
  const [EmailUser, SetEmail] = useState("");
  const [PhoneNumber, SetPhoneNumber] = useState("")
  const [Password, SetPassword] = useState("");
  const [Password2, SetPassword2] = useState("");
  const [Language, SetLanguage] = useState(1);
  const [Role, SetRole] = useState("cliente");
  const [IsSuperUser, SetIsSuperUser] = useState(false);
  const [Active, SetActive] = useState(true)
  const [IsStaff, SetIsStaff] = useState(false)
  const [Names, SetNames]= useState("")
  const [LastNames, SetLastNames]= useState("")






  const concatenarTextos = (valor1, valor2) => {
    // Usando template literal para concatenar las cadenas
    const resultado = `${valor1} ${valor2}`;  // Concatenación con template literal
    return resultado;
  };

  
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
            // Verificamos la respuesta completa en la consola
            console.log("Respuesta de la API Cedula:", data);
      
            //Verificamos si el campo 'nombre' existe en la respuesta
            if (data.nombre) {
              const fullName = data.nombre; // Si el nombre está disponible
              SetFullName(fullName);
              console.log("Nombre completo actualizado:", fullName);

        // Separar el nombre completo en partes
        const partes = fullName.trim().split(' ');

                  // Asignar las partes del nombre y apellidos
                  let primerNombre = partes[0];
                  let segundoNombre = '';
                  let primerApellido = '';
                  let segundoApellido = '';

                  // Si hay más de un nombre
                  if (partes.length > 1) {
                    segundoNombre = partes[1];  // Segundo nombre si existe
                  }

                  // El último apellido es siempre el último valor
                  if (partes.length > 2) {
                    primerApellido = partes[partes.length - 2];  // El penúltimo es el primer apellido
                    segundoApellido = partes[partes.length - 1]; // El último es el segundo apellido
                  }

                  // Concatenar valores
                  let Names = concatenarTextos(primerNombre, segundoNombre)
                  let LastsNames= concatenarTextos(primerApellido, segundoApellido)
                  // Actualizar el estado de las variables
                  SetNames(Names);
                  SetLastNames(LastsNames);

                console.log("Nombre completo actualizado:", Names, LastsNames);


               
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
  function GetUserName(input) {
    SetUserName(input.target.value);
  }
  function GetPassword(input) {
    SetPassword(input.target.value);
  }

  function GetPassword2(input) {
    SetPassword2(input.target.value);
  }

  function GetLanguage(input) {
    SetLanguage(input.target.value);
  }

  function GetPhoneNumber(input) {
    SetPhoneNumber(input.target.value);
  }

  /*useEffect(() => {
    async function fetchUserData() {
        const userData = await GetUser();
        console.log('User Data:', userData);
    }

    fetchUserData();
}, []);*/

  // Función para agregar un nuevo usuario
  async function Add() {
    
    const Users = await GetData('api/register');


  
    //Buscar el ultimo usuario agregado y sumarle 1 para obtener el id del nuevo usuario
    const lastUserId = Users[Users.length - 1].id;
    const newUserId = lastUserId + 1;

    //Conocer el id del ultimo registro y sumarle 1 para generar el id del nuevo usuario
    const Clients = await GetData('api/clients/');
    console.log("Clients", Clients);
    const lastClientId = Clients[Clients.length - 1].client_id;
    const NewClientID = lastClientId + 1;

    if (
      !Users.find(({ email }) => email === EmailUser) && !Users.find(({ username }) => username === UserName) &&
      FullName !== "" &&
      EmailUser !== "" &&
      UserName !== "" &&
      Password !== "" &&
      Password2 !== "" &&
      Password === Password2
    ){
      
      console.log(
        "Datos del usuario:",
        "Nombres:" +Names,
        "Apellidos:" +LastNames,
        "Correo:" +EmailUser,
        "Usuario:" +UserName,
        "Contraseña"+ Password,
        "Phone:" + PhoneNumber,
        "Userid:"+ newUserId,
        "Clientid:"+ NewClientID,
        "Language:" + Language,
        "Role:"+ Role,
        "SuperUser:" + IsSuperUser,
        "Active:" + Active,
        "Staff:" + IsStaff
        , cedula

      );
      console.log(cedula);
      console.log(Language);
      console.log(NewClientID)
      
//Convertir a un objeto y pasarlo a PostData('api/register')

const postUser = { 
        Password: Password,
        UserName: UserName,
        EmailUser: EmailUser,
        Names: Names,
        LastNames: LastNames,
        IsSuperUser: IsSuperUser,
        IsStaff: IsStaff,
        Active: Active,
        Role:Role
      };

const postUsers = () => {
  PostData('api/register/', postUser)
}

        /*SendClients(
          cedula,
          Names,
          LastNames,
          EmailUser,
          PhoneNumber,
          newUserId);

        SendClientLanguage(Language, NewClientID)*/

      Swal.fire({
        title: "Registro Exitoso!",
        text: "Se ha registrado el usuario con éxito",
        icon: "success",
      });
    }else{
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
            value={UserName}
            onChange={GetUserName}
            placeholder='UserName'
          />
        </div>

        <div className="divInputRegister">
          <input
            className='input-register'
            value={PhoneNumber}
            onChange={GetPhoneNumber}
            placeholder='Phone Number'
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

        <select 
         className="select-language"
         value={Language}
         onChange={GetLanguage}
         
         >
          <option value={0} disabled selected>Choose a language</option>
          <option value={1}>English</option>
          <option value={2}>Español</option>
          <option value={3}>Français</option>
        </select>

        <br /><br />
        <button onClick={Add} className="btn-Register">Register</button><br />
        <Link className='irALogin' to="/Login">Ir a Login</Link>
      </div>
    </div>
  );
}

export default RegisterClienteForm;
