import { Link } from 'react-router-dom';
import "../../Styles/Components_Styles/Admin_C_Styles/AdminNavBar.css"

function AdminNavBar() {

    return (



      <div className='bodyNavBar'>
      <nav className="NavBarColumnas">
          <ul className="nav-links">
              <li><Link to="/Register">Registrar Usuarios</Link></li>
              <li><Link to="/Formularios">Formularios</Link></li>
              <li><Link to="/Servicios">Servicios</Link></li>
              <li><Link to="/">Cerrar Secion</Link></li>
          </ul>
      </nav>
  </div>
      
     
    );
  }

export default  AdminNavBar;