import React from 'react'
import '../../Styles/Components_Styles/Admin_C_Styles/SideBar.css'
import 'font-awesome/css/font-awesome.min.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useContext, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoutIcon from "../../Img/Components_Img/icon_logout.png"; 



function SideBar() {
const {logout} = useContext(AuthContext);
const [nombre, SetNombre]= useState("")
const [apellido, SetApellido]= useState("")


useEffect(() => {
  // Recuperamos el objeto almacenado en localStorage
  const storedUser = localStorage.getItem('userData');

  if (storedUser) {
    // Convertimos la cadena JSON de vuelta a un objeto
    const userObj = JSON.parse(storedUser);
    console.log(userObj); // { name: 'John Doe', email: 'john.doe@example.com', role: 'admin' }

    // Asignamos los valores a los estados
    SetNombre(userObj.name);  // Asegúrate de que el nombre de la propiedad sea correcto
    SetApellido(userObj.last_Name); // Asegúrate de que el nombre de la propiedad sea correcto
  } else {
    console.log('No se encontraron datos de usuario en localStorage');
  }
}, []); // Dependencia vacía, se ejecuta solo al montar el componente

  const salir = async () => {
    
    const response = await logout();

    if (response) {
      toast.success("Cerrando Sesion...");
          
    }else{
      toast.error("Error al cerrar sesión");
    }
  };
    return (
      <div>
        <body className="bodySideBar">
          <div className="area"></div>
  
          <nav className={`main-menu`}>
            <ul className="listContentElementsSide">
              
              <li className="PerfilUser">
                <Link className="linkSideBar" to="/Settings">
                  <img
                    src="https://picsum.photos/36"
                    alt="Valery Espinoza"
                    className="nav-img"
                  />
                  <span className="nav-text">{nombre+ " "+apellido}</span>
                </Link>
              </li>
              <li className="elementLiTE">
                <Link to="/DashBoard">
                  <i className="fa fa-home fa-2x"></i>
                  <span className="nav-text">Página Principal</span>
                </Link>
              </li>
              <li className="elementLiTE">
                <Link to="/Calendar">
                  <i className="fa fa-calendar fa-2x"></i>
                  <span className="nav-text">Calendar</span>
                </Link>
              </li>
              <li className="elementLiTE">
                <Link to="/ServiciosAdmi">
                  <i className="fa fa-archive fa-2x"></i>
                  <span className="nav-text">Servicios</span>
                </Link>
              </li>
              <li className="elementLiTE">
                <Link to="/Products">
                  <i className="fa fa-cube fa-2x"></i>
                  <span className="nav-text">Products</span>
                </Link>
              </li>
              <li className="elementLiTE">
                <Link to="/Users">
                  <i className="fa fa-users fa-2x"></i>
                  <span className="nav-text">Users</span>
                </Link>
              </li>
              <li className="event-task-item">
                <Link to="/EventosTareas">
                  <i className="fa fa-list"></i>
                  <span className="nav-text">Events and Tasks</span>
                </Link>
              </li>

              <li className="elementLiTE">
                <Link to="/Documentation">
                  <i className="fa fa-book fa-2x"></i>
                  <span className="nav-text">Documentation</span>
                </Link>
              </li>
            </ul>
            
            <button 
            className="btnLogOut" 
            onClick={salir} 
            style={{ all: 'unset' }} // Quita estilos predeterminados
          >
            <img 
              src={logoutIcon} 
              alt="Log Out" 
              className="logoutIcon"
            />
          </button>

          </nav>
        </body>
      </div>

  )
}

export default SideBar
