import "../../Styles/Components_Styles/Genaral_C_Styles/NavBar.css"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo_Negro from '../../Img/Components_Img/Logo_blanco.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../config/i18n'

export default function NavBar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="Navbar">
          <Container fluid className="top-navbar">
            <div className="logo-section">
              <img
                src={Logo_Negro}
                alt="Logo"
                width="auto"
                height="80"
              />
            </div>
            <div className="buttons-section">
              <Link className="itemLinkNav" to="/RegisterCliente">
                <button className="nav-btnRegister"> {t('Boton_Register')}</button>
              </Link>
              <Link className="itemLinkNav" to="/Login">
                <button className="nav-btnLogin">{t('Boton_Login')}</button>
              </Link>
              <button  className="nav-btnEnglish" onClick={() => changeLanguage('en')}></button>
              <button  className="nav-btnEspañol" onClick={() => changeLanguage('es')}></button>
            </div>
          </Container>
          <Container fluid className="bottom-navbar">
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
                  <Link className="itemLinkNav" to="/">{t('Home')}</Link>
                  <Link className="itemLinkNav" to="/Servicios">{t('Services')}</Link>
                  <Link className="itemLinkNav" to="/About">{t('About us')} </Link>
                  <Link className="itemLinkNav" to="/Contact"> {t('Contact')}</Link>
                  <Link className="itemLinkNav" to="/Store">{t('Store')}</Link>
                  <Link className="itemLinkNav" to="/Blog">{t('Blog')}</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
















