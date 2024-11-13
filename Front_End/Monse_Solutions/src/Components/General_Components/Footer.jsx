import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Components_Styles/Genaral_C_Styles/Footer.css'
import { BsInstagram,  BsFacebook, BsTiktok } from 'react-icons/bs';

function Footer() {
    return (
      
        <footer className="Footer_Style"><br />
            <div className="container">
                <div className="row">
                    {/* Sección de íconos */}
                    <div className="col-md-2 mb-4">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark"><BsInstagram size={24} /></a></li>
                            <li><a href="#" className="text-dark"><BsTiktok size={24} /></a></li>
                            <li><a href="#" className="text-dark"><BsFacebook size={24} /></a></li>
                        </ul>
                    </div>
                    {/* Sección de Use cases */}
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-bold">Use cases</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark text-decoration-none">UI design</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">UX design</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Wireframing</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Diagramming</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Brainstorming</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Online whiteboard</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Team collaboration</a></li>
                        </ul>
                    </div>
                    {/* Sección de Explore */}
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-bold">Explore</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark text-decoration-none">Design</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Prototyping</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Development features</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Design systems</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Collaboration features</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Design process</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">FigJam</a></li>
                        </ul>
                    </div>
                    {/* Sección de Resources */}
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-bold">Resources</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark text-decoration-none">Blog</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Best practices</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Colors</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Color wheel</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Support</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Developers</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Resource library</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;