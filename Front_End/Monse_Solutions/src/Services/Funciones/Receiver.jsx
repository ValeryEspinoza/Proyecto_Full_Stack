// Receiver.js
import React, { useContext } from 'react';
import { MessageContext } from './MessageContext';

const Receiver = () => {
  const { message } = useContext(MessageContext);

  return (
    <div>
      <h3>Mensaje recibido: {message}</h3>
    </div>
  );
};

export default Receiver;