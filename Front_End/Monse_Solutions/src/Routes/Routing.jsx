import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
import ServicesTable from '../Components/Admin_Components/ServiceAdmiData'

import ArticlePreventive from '../Pages/Articulos_pages/ArticlePreventive'

//Importe de componentes
import ServicesData from '../Components/Admin_Components/ServicesData'
import ProductsTable from '../Components/Admin_Components/ProductsAdminData'
import UsersTable from '../Components/Admin_Components/UsersAdmiData'
import TasksAdminData from '../Components/Admin_Components/TasksAdminData'
import EventsAdminData from '../Components/Admin_Components/EventsAdmiData'

import AuthProvider from '../Context/AuthContext'
import ProtectedRoutes from './ProtectedRoutes'


function Routing() {
  return (
    <AuthProvider>
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
      <Route path="/Store" element={<VirtualStore />} />
      <Route path="/ServicesData" element={<ServicesData />} />

      <Route path="/Blog" element={<Blog />} />
      <Route path="/Article10Tips" element={<Article10Tips />} />
      <Route path="/ArticleGarden" element={<ArticleGarden />} />
      <Route path="/ArticlePreventive" element={<ArticlePreventive />} />
      <Route path="/ArticleColor" element={<ArticleColor />} />

      <Route path="/ServicesTable" element={<ServicesTable />} />
      <Route path="/ProductsTable" element={<ProductsTable />} />
      <Route path="/UsersTable" element={<UsersTable />} />
      <Route path="/TasksAdminData" element={<TasksAdminData />} />
      <Route path="/EventsAdminData" element={<EventsAdminData />} />

      <Route path="/ProfileClient" element={<ProfileClient />} />
      

      <Route
      path="/DashBoard"
      element={<ProtectedRoutes> <DashBoard/></ProtectedRoutes>}
      />  
  

    </Routes>
   </Router>
   </AuthProvider>
  );
};

export default Routing