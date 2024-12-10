import React, { createContext, useState } from 'react';

// Crear el contexto
export const MessageContext = createContext();

// Crear el proveedor del contexto
export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <MessageContext.Provider value={{ message, updateMessage }}>
      {children}
    </MessageContext.Provider>
  );
};