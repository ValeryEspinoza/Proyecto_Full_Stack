import React from "react";
import Routing from "./Routes/Routing"; // Rutas de la aplicación
import ChatBot from "../src/Components/ChatBot_Components/ChatBot"; // Componente del chatbot
import { AuthProvider } from "./Context/AuthContext"; // Contexto de autenticación

function App() {
  // Función para verificar si la página actual es el Dashboard
  const isDashboard = window.location.pathname.toLowerCase() === "/dashboard";

  return (
    <AuthProvider > {/* Envuelve toda la aplicación en AuthProvider */}
      <div>
        {/* Renderizar las rutas */}
        <Routing />

        {/* Renderizar el ChatBot solo si no es la página del Dashboard */}
        {!isDashboard && <ChatBot />}
      </div>
      </ AuthProvider >

  );
}

export default App;


