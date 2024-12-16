import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPaypal, FaCreditCard, FaRegMoneyBillAlt } from 'react-icons/fa';
import PaypalForm from './PaypalForm';  // Importamos el componente PaypalForm
import CardPaymentForms from './CardPaymentForms';      // Asegúrate de tener este componente CardForm
import '../../Styles/Components_Styles/Admin_C_Styles/Carrito.css';
import Navbar from "../General_Components/NavBar"
import Footer from "../General_Components/Footer"


function Carrito() {
    const [productos, setProductos] = useState([]);
    const [metodoPago, setMetodoPago] = useState('');
    const [activeProduct, setActiveProduct] = useState(null);

    // Fetch products from localStorage
    useEffect(() => {
        const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const parsedCarrito = storedCarrito.map(producto => ({
            ...producto,
            price: Number(producto.price), // Ensure price is a number
        }));
        setProductos(parsedCarrito);
    }, []);

    // Calculate total
    const calcularTotal = () => {
        return productos.reduce((total, producto) => total + producto.price, 0).toFixed(2);
    };

    // Remove product
const eliminarProducto = (id) => {;
    const newProductos = productos.filter(producto => producto.id !== id); // Filter out the product
    setProductos(newProductos); // Update the state
    localStorage.setItem('carrito', JSON.stringify(newProductos)); // Update localStorage
    toast.success('Producto eliminado con éxito', { position: "top-right" });
};
;



    return (
      <div>
        <Navbar className='carrito-navbar'/>
        <div className="carrito-container">
          
            <h1 className="carrito-title">Tu Carrito de Compras</h1>

            {/* Product List */}
            <div className="productos-list">
                {productos.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    productos.map(producto => (
                        <div key={producto.id} className="producto-item">
                            <div className="product-columns">
                                <div>
                                    <img className="img-carrito" src={producto.imagen_url} alt={producto.name} />
                                </div>
                                <div className="producto-info">
                                    <h3>{producto.name}</h3>
                                    <p>Precio: ${producto.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <button className="eliminar-btn" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                        </div>
                    ))
                )}
            </div>

            {/* Cart Total */}
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
      <br />
      {metodoPago === 'PayPal' && (
        <PaypalForm montoTotal={calcularTotal()} />
      )}
      {metodoPago === 'Tarjeta' && (
        <CardPaymentForms montoTotal={calcularTotal()} />
      )}
      {metodoPago === 'Transferencia' && (
        <div className='transferencia-background'>
        <div className="transferencia-container">
          <h3 className='transferencia-title'>Datos para Transferencia Bancaria</h3>
          <p>Banco: <strong className='transferencia-strong'>Bac Credomatic</strong></p>
          <p>Cuenta: <strong className='transferencia-strong'>123456789</strong></p>
          <p>CLABE: <strong className='transferencia-strong'>987654321</strong></p>
          <p>Referencias: <strong className='transferencia-strong'>Monse Solutions. S.A. de C.V.</strong></p>
          <p>Por favor, realiza la transferencia y envíanos el comprobante.</p>
          <input type="file" placeholder='Subir Comprobante' id='file-inputs'/>
          <br />
        </div>
        </div>
      )}

            <ToastContainer />
        </div>
        <Footer className='carrito-footer'/>
        </div>
    );
}

export default Carrito;