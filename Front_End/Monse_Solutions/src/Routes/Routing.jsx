import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import { useState } from 'react'

import NotAuthorized from '../Pages/NotAuthorized'

//Importes de Páginas
import Register from '../Pages/Register'
import RegisterCliente from '../Pages/RegisterCliente'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import AboutUs from '../Pages/AboutUs'
import Formularios from '../Pages/Formularios'
import ServiciosAdmi from '../Pages/ServiciosAdmi'
import Servicios from '../Pages/Servicios'
import DashBoard from '../Pages/DashBoard'
import Tasks from '../Pages/Tasks'
import Events from '../Pages/Events'
import Calendar from '../Pages/Calendar'
import Products from '../Pages/Products'
import Users from '../Pages/Users'
import Settings from '../Pages/Settings'
import Documentation from '../Pages/Documentation'
import EventosTareas from '../Pages/EventosTareas'
import VirtualStore from '../Pages/VirtualStore'
import ProfileClient from '../Pages/ProfileClient'


import ScrollToTop from '../Components/ScrollToTop_Components/ScrollToTop';
//Imports Blog y articulos
import Blog from '../Pages/Blog'
import Article10Tips from '../Pages/Articulos_pages/Article10Tips'
import ArticleGarden from '../Pages/Articulos_pages/ArticleGarden'
import ArticleColor from '../Pages/Articulos_pages/ArticleColor'
import ArticlePreventive from '../Pages/Articulos_pages/ArticlePreventive'
import ArticleCloset from '../Pages/Articulos_pages/ArticleCloset'

import ServicesTable from '../Components/Admin_Components/ServiceAdmiData'


//Importe de componentes
import ServicesData from '../Components/Admin_Components/ServicesData'
import ProductsTable from '../Components/Admin_Components/ProductsAdminData'
import UsersTable from '../Components/Admin_Components/UsersAdmiData'
import TasksAdminData from '../Components/Admin_Components/TasksAdminData'
import EventsAdminData from '../Components/Admin_Components/EventsAdmiData'
import PaypalForm from '../Components/Admin_Components/PaypalForm'
import Carrito from '../Components/Admin_Components/Carrito'


function Routing() {
  const [admin]= useState(1);

  const [cliente]= useState(3);


  return (
<Router>
    <ScrollToTop />
    <Routes>

    <Route path='/Tasks'  element={<ProtectedRoute requiredRole={admin}><Tasks /></ProtectedRoute>} />
      <Route path="/Events"  element={<ProtectedRoute requiredRole={admin}>< Events /></ProtectedRoute>} />
      <Route path="/Calendar"  element={<ProtectedRoute requiredRole={admin}>< Calendar /></ProtectedRoute>} />
      <Route path="/Products"  element={<ProtectedRoute requiredRole={admin}>< Products /></ProtectedRoute>} />
      <Route path="/Users"  element={<ProtectedRoute requiredRole={admin}>< Users /></ProtectedRoute>} />
      <Route path="/Settings"  element={<ProtectedRoute requiredRole={admin}>< Settings /></ProtectedRoute>} />
      <Route path="/ServiciosAdmi" element={<ProtectedRoute requiredRole={admin}>< ServiciosAdmi /></ProtectedRoute>} />
      <Route path="/Dashboard" element={<ProtectedRoute requiredRole={admin} ><DashBoard /></ProtectedRoute>} />
      <Route path="/Register" element={<ProtectedRoute requiredRole={admin} ><Register /></ProtectedRoute>} />
      <Route path="/Documentation" element={<ProtectedRoute requiredRole={admin} ><Documentation /></ProtectedRoute>} />
      <Route path="/EventosTareas" element={<ProtectedRoute requiredRole={admin} ><EventosTareas /></ProtectedRoute>} />
      <Route path="/ServicesData" element={<ProtectedRoute requiredRole={admin} ><ServicesData /></ProtectedRoute>} />
      <Route path="/Formularios" element={<Formularios />} />
      <Route path='/Tasks' element={<ProtectedRoute requiredRole={admin} ><ServicesData /></ProtectedRoute>} />
      <Route path="/Events" element={<ProtectedRoute requiredRole={admin} ><ServicesData /></ProtectedRoute>} />
      <Route path="/ProfileClient" element={<ProtectedRoute requiredRole={cliente} ><ProfileClient /></ProtectedRoute>} />

      <Route path="/ServicesTable" element={<ProtectedRoute requiredRole={admin} ><ServicesTable /></ProtectedRoute>} />
      <Route path="/ProductsTable" element={<ProtectedRoute requiredRole={admin} ><ProductsTable /></ProtectedRoute>} />
      <Route path="/UsersTable" element={<ProtectedRoute requiredRole={admin} ><UsersTable /></ProtectedRoute>} />
      <Route path="/TasksAdminData" element={<ProtectedRoute requiredRole={admin} ><TasksAdminData /></ProtectedRoute>} />
      <Route path="/EventsAdminData" element={<ProtectedRoute requiredRole={admin} ><EventsAdminData /></ProtectedRoute>} /> 
      <Route path='/NotAuthorized'element={<NotAuthorized />} />


      <Route path="/Register" element={<Register />} />
      <Route path="/RegisterCliente" element={<RegisterCliente />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Servicios" element={<Servicios />} />
      <Route path="/About" element={<AboutUs />} />

      <Route path="/Store" element={<VirtualStore />} />
      
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Article10Tips" element={<Article10Tips />} />
      <Route path="/ArticleGarden" element={<ArticleGarden />} />
      <Route path="/ArticlePreventive" element={<ArticlePreventive />} />
      <Route path="/ArticleColor" element={<ArticleColor />} />

      <Route path="/PaypalForm" element={<PaypalForm />} />
      <Route path='/Carrito' element={<Carrito />} />
      <Route path="/ArticleCloset" element={<ArticleCloset />}/>

    </Routes>
   </Router>

  )
}

export default Routing


