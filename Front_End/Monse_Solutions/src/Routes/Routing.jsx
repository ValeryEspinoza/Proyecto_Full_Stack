import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from '../Pages/Register'
import RegisterCliente from '../Pages/RegisterCliente'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import AboutUs from '../Pages/AboutUs'
import Formularios from '../Pages/Formularios'
import ServiciosAdmi from '../Pages/ServiciosAdmi'
import Servicios from '../Pages/Servicios'
import Blog from '../Pages/Blog'

function Routing() {
  return (
    <Router>
    <Routes>
      
      <Route path="/Register" element={<Register />} />
      <Route path="/RegisterCliente" element={<RegisterCliente />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Servicios" element={<Servicios />} />
      <Route path="/About" element={<AboutUs />} />
      <Route path="/Formularios" element={<Formularios />} />
      <Route path="/ServiciosAdmi" element={<ServiciosAdmi />} />
      <Route path="/Blog" element={<Blog />} />

       

    </Routes>
   </Router>
  )
}

export default Routing