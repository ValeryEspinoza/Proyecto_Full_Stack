import React from "react";
import Routing from "./Routes/Routing";
import ChatBot from "../src/Components/ChatBot_Components/ChatBot"; // Importar el componente del chatbot
import { MessageProvider } from "./Services/Funciones/MessageContext"; // Importar el proveedor correcto
import Sender from "./Services/Funciones/Sender";
import Receiver from "./Services/Funciones/Receiver";

function App() {
  return (
    <div>
      {/* Renderizar las rutas */}
      <Routing />
      
      {/* Chatbot */}
      <ChatBot />

      {/* Proveedor de mensaje para Sender y Receiver */}
      <MessageProvider>
        <Sender />
        <Receiver />
      </MessageProvider>
    </div>
  );
}

export default App;
