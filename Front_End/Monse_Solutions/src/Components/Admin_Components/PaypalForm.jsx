import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { jsPDF } from "jspdf";
import '../../Styles/Components_Styles/Admin_C_Styles/PaypalForm.css';  // Importamos el archivo de estilos

function PaypalForm({ montoTotal }) {
  const [loading, setLoading] = useState(false);

  // Función para generar la factura PDF
  const generateInvoice = (transactionId, amount) => {
    const doc = new jsPDF();
    doc.text('Factura de Compra', 20, 20);
    doc.text(`ID de Transacción: ${transactionId}`, 20, 40);
    doc.text(`Monto Total: $${amount}`, 20, 60);
    doc.text('Gracias por tu compra!', 20, 80);
    doc.save('factura.pdf');
  };

  // Manejo de pagos exitosos
  const handleApprove = (data, actions) => {
    actions.order.capture().then((details) => {
      toast.success('¡Pago exitoso!', { position: "top-right" });
      generateInvoice(details.id, details.purchase_units[0].amount.value);

      //hacer navigate y limpiar carrito
    }).catch((error) => {
      toast.error('Hubo un error al capturar el pago.', { position: "top-right" });
      console.error('Error al capturar el pago:', error);
    });
  };

  // Manejo de pagos cancelados
  const handleCancel = () => {
    toast.error('Pago cancelado. Intenta nuevamente.', { position: "top-right" });
  };

  // Manejo de errores en el pago
  const handleError = (err) => {
    toast.error('Hubo un error al procesar el pago.', { position: "top-right" });
    console.error('Error de PayPal:', err);
  };

  return (
    <div className="paypal-form-container">
      <h1 className="paypal-heading">Pago con PayPal</h1>

      {/* PayPal script provider para cargar el SDK */}
      <PayPalScriptProvider options={{ "client-id": "AZY3IzialsvBVXIGLFcevw6pJ7IlH-hQIa_U5mMz5CDd5JNK1sHXNQUAnmqVmIeaAiBFlpDxkaKzwok1", "components": "buttons", "currency": "USD" }}>
        <div className="payment-section">
          <h2>Realiza tu compra</h2>
          <p>Pago seguro con PayPal</p>

          {/* Componente de botones de PayPal */}
          <PayPalButtons 
            style={{ layout: 'vertical', shape: 'rect' }}
            createOrder={(data, actions) => {
              const monto = parseFloat(montoTotal).toFixed(2); // Asegúrate de que el monto tenga 2 decimales y sea un string

              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency_code: 'USD',  // Asegúrate de que la moneda esté correcta
                    value: monto           // El monto total debe ser un string con 2 decimales
                  }
                }]
              });
            }}
            onApprove={handleApprove}
            onCancel={handleCancel}
            onError={handleError}
          />
        </div>
      </PayPalScriptProvider>

      {/* Contenedor para las notificaciones */}
      <ToastContainer />
    </div>
  );
}

export default PaypalForm;