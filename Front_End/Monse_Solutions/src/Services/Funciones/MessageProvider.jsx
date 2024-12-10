// Services/Funciones/MessageProvider.js
import React, { createContext, useState, useContext } from 'react';

// Crea el contexto
const MessageContext = createContext();

// Proveedor del contexto
export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState('');

  const setSuccessMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <MessageContext.Provider value={{ message, setSuccessMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

// Custom hook para acceder al contexto
export const useMessageProvider = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessageProvider must be used within a MessageProvider');
  }
  return context;
};