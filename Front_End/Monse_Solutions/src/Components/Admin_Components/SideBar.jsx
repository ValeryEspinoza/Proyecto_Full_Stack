import React from 'react'
import '../../Styles/Components_Styles/Admin_C_Styles/SideBar.css'
import 'font-awesome/css/font-awesome.min.css';

function SideBar() {
  return (
    <div>
        <h1>Side Bar</h1>
      <body><div class="area"></div><nav class="main-menu">
            <ul>




                <li>
                    <a href="https://jbfarrow.com">
                        
                       <img src="https://picsum.photos/36" alt="Valery Espinoza" class="nav-img" />
                        <span class="nav-text">Valery Espinoza</span>
                    </a>
                </li>
                <li>
                    <a href="https://jbfarrow.com">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                           Página Principal
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
    <a href="#">
        <i class="fa fa-calendar fa-2x"></i>
        <span class="nav-text">Calendar</span>
    </a>
</li>

<li class="has-subnav">
    <a href="#">
    <i class="fa fa-archive fa-2x"></i>

        <span class="nav-text">Servicios</span>
    </a>
</li>

<li class="has-subnav">
    <a href="#">
        <i class="fa fa-cube fa-2x"></i>
        <span class="nav-text">Products</span>
    </a>
</li>
<li>
    <a href="#">
        <i class="fa fa-users fa-2x"></i>
        <span class="nav-text">Users</span>
    </a>
</li>
<li>
    <a href="#">
        <i class="fa fa-cogs fa-2x"></i> 
        <span class="nav-text">Tools & Resources</span>
    </a>
</li>
<li>
    <a href="#">
        <i class="fa fa-headset fa-2x"></i>
        <span class="nav-text">Soporte</span>
    </a>
</li>
<li>
    <a href="#">
        <i class="fa fa-book fa-2x"></i>
        <span class="nav-text">Documentation</span>
    </a>
</li>
                </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
  </body>
    </div>
  )
}

export default SideBar
