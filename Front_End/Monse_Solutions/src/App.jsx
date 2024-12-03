import React from "react";
import Routing from "./Routes/Routing";
import ChatBot from "../src/Components/ChatBot_Components/ChatBot"; // Importar el componente del chatbot

function App() {
  return (
    <div>
      {/* Renderizar las rutas */}
      <Routing />

      {/* Chatbot */}
      <ChatBot />
    </div>
  );
}

export default App;
