import React from 'react'
import '../../Styles/Components_Styles/Admin_C_Styles/SideBar.css'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function SideBar() {

  
    return (
      <div>
        <body className="bodySideBar">
          <div className="area"></div>
  

  
          <nav className={`main-menu`}>
            <ul className="listContentElementsSide">
              <li className="PerfilUser">
                <Link className="linkSideBar" to="/DashBoard">
                  <img
                    src="https://picsum.photos/36"
                    alt="Valery Espinoza"
                    className="nav-img"
                  />
                  <span className="nav-text">Valery Espinoza</span>
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
                <Link to="ServiciosAdmi">
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
                <Link to="/Settings">
                  <i className="fa fa-cogs fa-2x"></i>
                  <span className="nav-text">Tools & Resources</span>
                </Link>
              </li>
              <li className="elementLiTE">
                <Link to="/Documentation">
                  <i className="fa fa-book fa-2x"></i>
                  <span className="nav-text">Documentation</span>
                </Link>
              </li>
            </ul>
  
            <ul className="logout">
              <li className="logoutLi">
                <Link to="/">
                  <i className="fa fa-power-off fa-2x"></i>
                  <span className="nav-text">Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </body>
      </div>

  )
}

export default SideBar
