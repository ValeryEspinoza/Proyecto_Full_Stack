import React from "react";
import Routing from "./Routes/Routing"; // Rutas de la aplicación
import ChatBot from "../src/Components/ChatBot_Components/ChatBot"; // Componente del chatbot
import { AuthProvider } from "./Context/AuthProvider"; // Importar el AuthProvider

function App() {
  return (
    <AuthProvider> {/* Envuelve toda la aplicación en AuthProvider */}
      <div>
        {/* Renderizar las rutas */}
        <Routing />

        {/* Chatbot */}
        <ChatBot />
      </div>
    </AuthProvider>
  );
}

export default App;
