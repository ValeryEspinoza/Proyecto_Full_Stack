import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPaypal, FaCreditCard, FaRegMoneyBillAlt } from 'react-icons/fa';
import PaypalForm from './PaypalForm';  // Importamos el componente PaypalForm
import CardPaymentForms from './CardPaymentForms';      // Asegúrate de tener este componente CardForm
import '../../Styles/Components_Styles/Admin_C_Styles/Carrito.css';
import Navbar from "../General_Components/NavBar"
import Footer from "../General_Components/Footer"
import Toastify from 'toastify-js';


function Carrito() {
    const [productos, setProductos] = useState([]);
    const [metodoPago, setMetodoPago] = useState('');
    const [activeProduct, setActiveProduct] = useState(null);
    const [archivoCargado, setArchivoCargado] = useState(null);

    // Hace el llamado de los productos del localStorage
    useEffect(() => {
        const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const parsedCarrito = storedCarrito.map(producto => ({
            ...producto,
            price: Number(producto.price), //Se asegura de que los valores de precio sean numeros 
        }));
        setProductos(parsedCarrito);
    }, []);

    // Calcula el total a cobrar
    const calcularTotal = () => {
        return productos.reduce((total, producto) => total + producto.price, 0).toFixed(2);
    };

    // Elimina product
const eliminarProducto = (id) => {;
    const newProductos = productos.filter(producto => producto.id !== id); // Filter out the product
    setProductos(newProductos); // Update the state
    localStorage.setItem('carrito', JSON.stringify(newProductos)); // Update localStorage
    toast.success('Producto eliminado con éxito', { position: "top-right" });
  };

  //Almacena el archivo cargado en Transferencia Cargada
const handleFileChange = (e) => {
  if (e.target.files.length > 0) {
    const archivo = e.target.files[0];
    setArchivoCargado(e.target.files[0].name);
    Toastify({
      text: `Se subio el archivo ${archivo.name}`,
      duration: 3000,
      gravity: "top",
      position: "center",
      close: true,
      className: "toastsuccess",
  }).showToast();

} else{
  Toastify({
    text: "Archivo sin cargar",
    duration: 3000,
    gravity: "top",
    position: "center",
    close: true,
    className: "toast-error",
}).showToast();
  setArchivoCargado(null);
}
};
  {/* Validación del pago al presionar el boton*/}
  const handlePaymentSubmit = (e) => {
    {/* Se encarga de prevenir que se recargue la pagina del formulario */}
    e.preventDefault(); 

    {/* Elimina los elementos de localStorage con tal de limpiar el carrito */}
    localStorage.removeItem('carrito')
    localStorage.removeItem('carritoId')

    setProductos([]);


    {/* Alarte de realizado */}
    Toastify({
      text: `Pago de $${montoTotal} procesado con éxito. Tarjeta: ${cardNumber}`,
      duration: 3500,
      gravity: 'top',
      position: 'center',
      className: 'toastsuccess',
      }).showToast();
  };



    return (
      <div>
        <Navbar className='carrito-navbar'/>
        <div className="carrito-container">
          
            <h1 className="carrito-title">Tu Carrito de Compras</h1>

            {/* Lisat y mapeo de los productos */}
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

            {/* Monto total a cobrar*/}
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

          {/* Inputs para depositar el comprobante de la transferencia*/}
          {/* Label se encarga de crear el input y darle el texto que se mostrara dependiendo del estado */}
          <label htmlFor="file-inputs"
          className={`file-label ${archivoCargado ? 'file-loaded':''}`}>
            {archivoCargado ? `Archivo cargado: ${archivoCargado}` : 'Subir comprobante'}
          </label>

          {/* Es el encargado de brindar el espacio para subir el comprobante */}
          <input type="file" id='file-inputs' placeholder='Archivos' className='file-input' onChange={handleFileChange}/>
          <button
            onClick={handlePaymentSubmit}
            className="btn-enviar"
            disabled={!archivoCargado} // Desactiva el boton si no hay un archivo
            >
                Enviar comprobante
            </button>
          
          <br />
        </div>
        </div>
      )};

        <ToastContainer />
        </div>
        <Footer className='carrito-footer'/>
        </div>
    );
};
export default Carrito;