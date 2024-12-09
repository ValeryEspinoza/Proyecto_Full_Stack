import React, { createContext, useState, useContext } from 'react';

// Crear el contexto para el mensaje
const MessageProviderContext = createContext();

// Proveedor de mensaje (envolverá a los componentes que necesitan acceder al mensaje)
export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(""); // Mensaje a compartir entre componentes

  // Función para establecer el mensaje
  const setSuccessMessage = (msg) => {
    setMessage(msg);
  };

  // Función para borrar el mensaje
  const clearMessage = () => {
    setMessage("");
  };

  return (
    <MessageProviderContext.Provider value={{ message, setSuccessMessage, clearMessage }}>
      {children}
    </MessageProviderContext.Provider>
  );
};

// Hook para acceder al mensaje desde cualquier componente
export const useMessageProvider= () => {
  return useContext(MessageProviderContext);
};
