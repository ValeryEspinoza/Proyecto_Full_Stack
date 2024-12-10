// Sender.js
import React, { useContext } from 'react';
import { MessageContext } from './MessageContext';

const Sender = () => {
  const { updateMessage } = useContext(MessageContext);

  const handleClick = () => {
    updateMessage("Este es el nuevo mensaje desde Sender!");
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar mensaje</button>
    </div>
  );
};

export default Sender;