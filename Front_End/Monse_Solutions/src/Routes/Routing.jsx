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
<<<<<<< HEAD
=======
import DashBoard from '../Pages/DashBoard'
import Tasks from '../Pages/Tasks'
import Events from '../Pages/Events'
import Calendar from '../Pages/Calendar'
import Products from '../Pages/Products'
import Users from '../Pages/Users'
import ScrollToTop from '../Components/ScrollToTop_Components/ScrollToTop';
import Settings from '../Pages/Settings'
import Documentation from '../Pages/Documentation'
import EventosTareas from '../Pages/EventosTareas'
import Article10Tips from '../Pages/Articulos_pages/Article10Tips'
import ArticleGarden from '../Pages/Articulos_pages/ArticleGarden'
>>>>>>> a8cfae2bf322726e7de68ed97d84914233847910


function Routing() {
  return (
    <Router>
    <ScrollToTop />
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
      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path='/Tasks' element={<Tasks />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Calendar" element={<Calendar />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Documentation" element={<Documentation />} />
      <Route path="/EventosTareas" element={<EventosTareas />} />



      <Route path="/Blog" element={<Blog />} />



    </Routes>
   </Router>
  )
}

export default Routing