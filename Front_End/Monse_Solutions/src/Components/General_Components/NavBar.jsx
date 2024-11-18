import "../../Styles/Components_Styles/Genaral_C_Styles/NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo_Negro from '../../Img/Components_Img/Logo_Negrov.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      {[ 'lg' ].map((expand) => (
        <Navbar key={expand} expand={expand} className="Navbar">
          <Container fluid>
            <img
              src={Logo_Negro}
              alt="Logo"
              width="auto"
              height="80"
            />
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navbar-links">
<<<<<<< HEAD
                  <Link to="/Contact"><p className='itemLinkNav'>Contact</p></Link>
                  <Link to="/Servicios"><p className='itemLinkNav'>Services</p></Link>
                  <Link to="/About"><p className='itemLinkNav'>About</p></Link>
                  <Link to="/"><p className='itemLinkNav'>Home</p></Link>
                  <Link to="/RegisterCliente"><p className='itemLinkNav'><button className="nav-btn">Register</button></p></Link>
                  <Link to="/Login"><p className='itemLinkNav'><button className="nav-btn">Login</button></p></Link>
=======
                  <Link className='itemLinkNav' to="/Contact">Contact</Link>
                  <Link className='itemLinkNav' to="/Servicios">Services</Link>
                  <Link className='itemLinkNav' to="/About">About</Link>
                  <Link className='itemLinkNav' to="/">Home</Link>
                  <Link className='itemLinkNav' to="/Blog">Blog</Link>
                  <Link className='itemLinkNav' to="/RegisterCliente"><button className="nav-btn">Register</button></Link>
                  <Link className='itemLinkNav' to="/Login"><button className="nav-btn">Login</button></Link>
>>>>>>> d89479e1cec1975e7d86accbb623072d7f9e1666
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
















