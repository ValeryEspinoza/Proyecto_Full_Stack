import React from 'react'
import "../../Styles/Components_Styles/Register_Styles/RegisterForm.css"
import SendUser from '../../Services/Post/PostUser'
import GetUser from '../../Services/Get/GetUsers'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

import { useState } from 'react'

function RegisterForm() {
        /*Hooks*/
        const[Name, SetName]=useState("")
        const[LastName, SetLastName]=useState("")
        const[EmailUser, SetEmail]=useState("")
        const[Password, SetPassword]=useState("")
        const[Password2, SetPassword2]=useState("")
        const[Access, SetAccess]=useState("")

        //Obtener Valor Input
        function GetLastName(input) {
                SetLastName(input.target.value)
        }
        function GetName(input) {
                SetName(input.target.value)   
        }
        function GetEmail(input) {
                SetEmail(input.target.value)
        }
        function GetPassword(input) {
                SetPassword(input.target.value)
        }
        function GetPassword2(input) {
                SetPassword2(input.target.value)
        }
        function GetAccessValue(input) {
                SetAccess(input.target.value)
        }
    
     console.log(Name);
     

        //Boton Add
        async function Add() {
                const Users= await GetUser()
          
                
                console.log();
                

                if ( !(Users.find(({ Email }) => Email === EmailUser)) && !(Name === "" && LastName === "" && EmailUser === "" && Password ==="" && Password2 === "") && !(Access === "" || Access === "Access" ) && (Password === Password2) ) {
                     SendUser(LastName, Name, EmailUser, Password, Access)   
                    
                        Swal.fire({
                        title: "Registro Exitoso!",
                        text: "Se ha registrado el usuario con exito",
                        icon: "success"
                        });

                }else{
                          
                        Swal.fire({
                                title: "Registro Fallido",
                                text: " Verifica lo siguiente: 1) Todos los espacios esten debidamente llenos. 2)Contraseñas coincidan. 3) Correo electronico debe ser válido",
                                icon: "error"
                                });
                      
                        
                }
               
        }
        

  return (
        <div className='bodyRegister'>
                <div className="form-container">
        <h1 className="form-title">Registro</h1>
    
        <input value={LastName} onChange={GetLastName} placeholder='Last Name' type="text" />
        <input value={Name} onChange={GetName} placeholder='Name' type="text" />
        <input value={EmailUser} onChange={GetEmail} placeholder='Email' type="text" />
        <input value={Password} onChange={GetPassword} placeholder='Password' type="password" />
        <input value={Password2} onChange={GetPassword2} placeholder='Enter your Password again' type="password" />
    
        <select value={Access} onChange={GetAccessValue} className="select-access">
            <option value="">Access</option>
            <option value="Ad86fw">Administrador</option>
            <option value="Ck54pe">Colaborador</option>
        </select>
    
        <button onClick={Add} className="btn-add">Add</button>
        <Link className='irAHome' to="/Login"><p>Ir a Login</p></Link>
    </div>
    
        </div>
  )
}

export default RegisterForm