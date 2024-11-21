import React, { useState, useEffect } from 'react';
import "../../Styles/Components_Styles/Register_Styles/RegisterCliente.css";
import SendUser from '../../Services/Post/PostUser';
import GetUser from '../../Services/Get/GetUsers';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import iconRegister from "../../Img/Components_Img/icon_register.png";
import SendStaff from '../../Services/Post/PostStaff';




function RegisterClienteForm() {
  //Hooks
  const [cedula, setCedula] = useState(""); 
  const [FullName, SetFullName] = useState(""); 
  const [UserName, SetUserName] = useState(""); 
  const [EmailUser, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Password2, SetPassword2] = useState("");
  const [Role, SetRole] = useState("cliente");
  const [IsSuperUser, SetIsSuperUser] = useState(false);
  const [Active, SetActive] = useState(true)
  const [IsStaff, SetIsStaff] = useState(false)
  const [Names, SetNames]= useState("")
  const [LastNames, SetLastNames]= useState("")



  

  console.log("1---", cedula);
  console.log("2---", FullName)
  console.log("3---", UserName)
  console.log("4---", EmailUser)
  console.log("5---", Password)
  console.log("6---", Password2)
  console.log("7---", Role)
  console.log("8---", IsSuperUser)
  console.log("9---", Active)
  console.log("10---", IsStaff)
  




  const concatenarTextos = (valor1, valor2) => {
    // Usando template literal para concatenar las cadenas
    const resultado = `${valor1} ${valor2}`;  // Concatenación con template literal
    return resultado;
  };

  
  //Función para manejar el cambio en el input de la cédula
  const handleCedulaChange = async (e) => {
        const cedulaInput = e.target.value;
        setCedula(cedulaInput);
      
        //Si la cédula tiene una longitud válida, hacemos la llamada a la API
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
            //Si la respuesta es exitosa, obtenemos el nombre completo del usuario
            
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
            //En caso de error, mostramos un mensaje con la razón del error
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



  //Función para agregar un nuevo usuario
  async function Add() {

    const Users = await GetUser();
    console.log("Users----", Users);  
    //const user = Users.filter((user) => user.cedula === cedula);

    


    console.log("Nombres--:", Names);
    console.log("Segundo Nombre--:", LastNames);

    /*if (
      !Users.find(({ Email }) => Email === EmailUser) && !Users.find(({ username }) => username === UserName) &&
      FullName !== "" &&
      EmailUser !== "" &&
      UserName !== "" &&
      Password !== "" &&
      Password2 !== "" &&
      Access !== "" &&
      Password === Password2
    ){
      
      SendUser( id,
        Password,
        UserName,
        EmailUser,
        Names,
        LastNames,
        IsSuperUser,
        IsStaff,
        Active,
        Role);

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
    }*/
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

