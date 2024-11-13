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
                  <Link to="/Contact"><p className='itemLinkNav'>Contact</p></Link>
                  <Link to="/Servicios"><p className='itemLinkNav'>Services</p></Link>
                  <Link to="/About"><p className='itemLinkNav'>About</p></Link>
                  <Link to="/"><p className='itemLinkNav'>Home</p></Link>
                  <Link to="/Register"><p className='itemLinkNav'><button className="nav-btn">Register</button></p></Link>
                  <Link to="/Login"><p className='itemLinkNav'><button className="nav-btn">Login</button></p></Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
















