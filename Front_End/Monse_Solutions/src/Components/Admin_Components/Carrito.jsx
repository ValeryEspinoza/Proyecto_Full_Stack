import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPaypal, FaCreditCard, FaRegMoneyBillAlt } from 'react-icons/fa';
import PaypalForm from './PaypalForm';  // Importamos el componente PaypalForm
import CardPaymentForms from './CardPaymentForms';      // Asegúrate de tener este componente CardForm
import '../../Styles/Components_Styles/Admin_C_Styles/Carrito.css';


function Carrito() {
  // Productos en el carrito
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Manguera de jardín', precio: 25.99, cantidad: 1 },
    { id: 2, nombre: 'Tijeras de podar', precio: 15.49, cantidad: 1 },
    { id: 3, nombre: 'Árboles frutales', precio: 30.00, cantidad: 1 }
  ]);

  // Calcular el total
  const calcularTotal = () => {
    // Calcula el total sin formatearlo como cadena
    const total = productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    
    // Aseguramos que el valor tenga dos decimales sin convertirlo a una cadena
    return Math.round(total * 100) / 100;
  };
  console.log(calcularTotal());
  
  // Eliminar producto
  const eliminarProducto = (id) => {
    setProductos(productos.filter(producto => producto.id !== id));
    toast.success('Producto eliminado con éxito', { position: "top-right" });
  };

  // Método de pago seleccionado
  const [metodoPago, setMetodoPago] = useState('');

  const handlePago = () => {
    if (metodoPago) {
      toast.success(`Pago realizado con éxito utilizando ${metodoPago}`, { position: "top-right" });
    } else {
      toast.error('Por favor, selecciona un método de pago', { position: "top-right" });
    }
  };

  return (
    <div className="carrito-container">
      <h1 className="carrito-title">Tu Carrito de Compras</h1>

      {/* Listado de productos */}
      <div className="productos-list">
        {productos.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          productos.map(producto => (
            <div key={producto.id} className="producto-item">
              
              <div className='product-columns'>
              <div><img className='img-carrito' src="https://picsum.photos/36" alt="" /></div>
              <div className="producto-info">
                <h3>{producto.nombre}</h3>
                <p>Precio: ${producto.precio.toFixed(2)}</p>
              </div>
              <p className='precio-producto'>Cantidad: {producto.cantidad}</p>
              </div>
              <button className="eliminar-btn" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            </div>
          ))
        )}
      </div>

      {/* Total del carrito */}
      {productos.length > 0 && (
        <div className="total-container">
          <h3>Total: ${calcularTotal()}</h3>
        </div>
      )}

      {/* Métodos de pago */}
      <div className="metodos-pago">
        <h3>Selecciona un método de pago</h3>
        <div className="pago-opciones">
          <div className={`pago-opcion ${metodoPago === 'PayPal' ? 'activo' : ''}`} onClick={() => setMetodoPago('PayPal')}>
            <FaPaypal size={40} />
            <p>PayPal</p>
          </div>
          <div className={`pago-opcion ${metodoPago === 'Tarjeta' ? 'activo' : ''}`} onClick={() => setMetodoPago('Tarjeta')}>
            <FaCreditCard size={40} />
            <p>Tarjeta de Crédito</p>
          </div>
          <div className={`pago-opcion ${metodoPago === 'Transferencia' ? 'activo' : ''}`} onClick={() => setMetodoPago('Transferencia')}>
            <FaRegMoneyBillAlt size={40} />
            <p>Transferencia Bancaria</p>
          </div>
        </div>
      </div>

      {/* Renderizar el componente según el método de pago seleccionado */}
      {metodoPago === 'PayPal' && (
        <PaypalForm montoTotal={calcularTotal()} />
      )}
      {metodoPago === 'Tarjeta' && (
        <CardPaymentForms montoTotal={calcularTotal()} />
      )}
      {metodoPago === 'Transferencia' && (
        <div className="transferencia-container">
          <h3>Datos para Transferencia Bancaria</h3>
          <p>Banco: Bac Credomatic</p>
          <p>Cuenta: 123456789</p>
          <p>CLABE: 987654321</p>
          <p>Referencias: <strong>Monse Solutions. S.A. de C.V.</strong></p>
          <p>Por favor, realiza la transferencia y envíanos el comprobante.</p>
          <input type="file" placeholder='Subir Comprobante'/>
        </div>
      )}

      {/* Notificaciones */}
      <ToastContainer />
    </div>
  );
}

export default Carrito;