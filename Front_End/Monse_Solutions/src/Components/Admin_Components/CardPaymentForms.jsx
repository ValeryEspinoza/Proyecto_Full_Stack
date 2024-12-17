import React, { useState } from 'react';
import '../../Styles/Components_Styles/Admin_C_Styles/CardPaymentForms.css'; // Asegúrate de tener el archivo CSS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CardPaymentForms({ montoTotal }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => setCardNumber(e.target.value);
  const handleExpiryDateChange = (e) => setExpiryDate(e.target.value);
  const handleCvvChange = (e) => setCvv(e.target.value);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Simulando el procesamiento del pago (aquí podrías integrar una API real de pagos)
    
    toast.success(`Pago de $${montoTotal} procesado con éxito. Tarjeta: ${cardNumber}`);
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h2>Formulario de Pago</h2>
          <p>Total a pagar: <strong className='payment-amount'>${montoTotal}</strong></p>
      </div>
      <form onSubmit={handlePaymentSubmit} className="payment-form">
        <div className='div-payment-form'>
        <label htmlFor="cardNumber">Número de tarjeta:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          placeholder="Ingresa tu número de tarjeta"
          required
        />

        <label htmlFor="expiryDate">Fecha de expiración:</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          placeholder="MM/AA"
          required
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={cvv}
          onChange={handleCvvChange}
          placeholder="CVV"
          required
        />
        </div>
        <button type="submit" className="payment-button">
          Procesar Pago
        </button>
      </form>
    </div>
  );
}

export default CardPaymentForms;