import React from 'react'
import "../../Styles/Components_Styles/Register_Styles/RegisterCliente.css"
import SendUser from '../../Services/Post/PostUser'
import GetUser from '../../Services/Get/GetUsers'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

import { useState } from 'react'

import iconRegister from "../../Img/Components_Img/icon_register.png"

function RegisterClienteForm() {
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
    <div class="divTitleRegister">
        <div class="title-content">
        <img src={iconRegister} alt="Register Icon" className="iconRegister"/>
            <h1 className="form-title">Register</h1>
        </div>
    </div>
        <div className="register-container">

        <div className="divInputRegister">
        <input className='input-register' value={Name} onChange={GetName} placeholder='Name' />    
        </div>

        <div className="divInputRegister">
        <input className='input-register' value={LastName} onChange={GetLastName} placeholder='Last Name'/>
        </div>

        <div className="divInputRegister">
        <input className='input-register' placeholder='Phone number'/>
        </div>

        <div className="divInputRegister">
        <input className='input-register' value={EmailUser} onChange={GetEmail} placeholder='Email'/>
        </div>

        <div className="divInputRegister">
        <input className='input-register' value={Password} onChange={GetPassword} placeholder='Password' type="password" />
        </div>

        <div className="divInputRegister">
        <input className='input-register' value={Password2} onChange={GetPassword2} placeholder='Enter your password again' type="password" />
        </div>

        <select className="select-language">
        <option value="" disabled selected>Choose a language</option>
            <option >Español</option>
            <option >English</option>
            <option >Français</option>
        </select>

 <br /><br />   
        <button onClick={Add} className="btn-Register">Register</button><br />
        <Link className='irALogin' to="/Login">Ir a Login</Link>
    </div>
    
        </div>
  )
}

export default RegisterClienteForm