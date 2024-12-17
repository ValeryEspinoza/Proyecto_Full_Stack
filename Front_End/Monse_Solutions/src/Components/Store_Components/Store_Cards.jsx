import React, { useEffect, useState } from 'react';
import '../../Styles/Components_Styles/VirtualStore_Styles/VirtualStoreCards.css';
import Imagen_Carrito from '../../Img/Components_Img/carrito_verde.png';
import GetData from '../../Services/Get/GetData';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import IconSearch from "../../Img/Components_Img/icon_buscar2.png";
import OpenGet from '../../Services/Get/OpenGet';

function Store() {
  // Hooks
  const [storeProducts, setStoreProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayModal, setDisplayModal] = useState (false);
  const [sortOrder,setSortOrder] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeButton, setActiveButton] = useState('new');

  const navigate = useNavigate();

  // Fetch products from the API
  useEffect(() => {
    async function getStoreProducts() {
      const products = await OpenGet('productsView');      
      setStoreProducts(products);
    }
    getStoreProducts();
  }, []);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);


  
  // Filtrar productos en base al input de busqueda
  const filteredProducts = storeProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  


  // Orden de los productos mediante los botones
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'asc') {
      console.log(sortOrder)
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      console.log(sortOrder)
      return b.price - a.price;
    } else if (sortOrder === 'new') {
      return b.id - a.id;
    }
    return 0; // No filtrar mediante el orden de los botones
  });

  const carritoVirtual = (activeProduct) => {

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const currentId = parseInt(localStorage.getItem('carritoId')) || 1;
    const itemCarrito = {
        id: currentId, 
        name: activeProduct.name,
        price: activeProduct.price,
        imagen_url: activeProduct.imagen_url,
    };
    carrito.push(itemCarrito);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('carritoId', currentId + 1);

    console.log("Added to cart:", itemCarrito);
    console.log("Updated cart:", carrito);
    toast.success('Producto añadido al carrito', { position: "top-right" });
};
const navegacion = () => {
  setTimeout(() => {
    navigate("/carrito")
  }, 1500 );

}


  return (
<div>
<div className='portadaTienda'>
        <h1 className='tienda-tittle'>Nuestra Tienda</h1>
        <div className='carritoCompras'>
        <img src={Imagen_Carrito} alt="IMG" className='carrito' onClick={navegacion}/>
        </div>
</div>

<div className="containerBuscadores" id='buscadores'>
<div id='searcherInput'>
    <div id='searchers'>
    <div>
      <div className="d-flex justify-content-center h-100">
      <div className="Tienda-search">
        <div className="searchTienda-container">
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="tienda-search-input"
          />
          <div className="searchTienda-icon-container">
          <img
            src={IconSearch}
            alt="Buscar"
            className="searchTienda-icon"
          />
         </div>
        </div>
      </div>
      </div>
    </div>
    </div>
</div>
<div id='botones'>
<button
  className={`btn-search ${activeButton === 'new' ? 'active' : ''}`}onClick={() => {setSortOrder('new'); setActiveButton('new');}}>
  New
</button>
<button
  className={`btn-search ${activeButton === 'asc' ? 'active' : ''}`}onClick={() => {setSortOrder('asc');setActiveButton('asc');}}>
  Price Ascending
</button>
<button
  className={`btn-search ${activeButton === 'desc' ? 'active' : ''}`}onClick={() => {setSortOrder('desc');setActiveButton('desc');}}>
    Price Descending
</button>
</div>
</div>
      
{/* Lista de Productos mapeados */}
<div id='mapeo'>
<div id='mapArticle'>
      <div className="product-grid">

        {sortedProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.imagen_url} alt={product.name} className="card-img-top" />
                <div className='card-body'>
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-text">{product.description}</p>               
                </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: ${product.price}</li>
            </ul>
        <div className='card-body'>
        <button onClick={() => setActiveProduct(product)}>Más Información</button>
        <button onClick={() => carritoVirtual(product)}>Añadir al Carrito</button>

{/* Funcionalidad del modal*/}
        {activeProduct && activeProduct.id === product.id && (
    <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{activeProduct.name}</h5>
                </div>
                <div className="modal-body">
                    <p>{activeProduct.description}</p>
                </div>
                <div className="modal-footer">
                    <button type="button"  onClick={() => setActiveProduct(null)}>Cerrar</button>
                    <button type="button" onClick={carritoVirtual}>Añadir al carrito</button>
                </div>
            </div>
        </div>
    </div>
)}
        </div>
        </div>
        ))}
      </div>
</div>
</div>

</div>
);
}

export default Store;
