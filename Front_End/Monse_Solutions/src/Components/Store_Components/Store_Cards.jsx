import React, { useEffect, useState } from 'react';
import '../../Styles/Components_Styles/VirtualStore_Styles/VirtualStoreCards.css';
import Imagen_Carrito from '../../Img/Components_Img/carrito_verde.png';
import GetData from '../../Services/Get/GetData';
import { Link } from 'react-router-dom';

function Store() {
  // Hooks
  const [storeProducts, setStoreProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayModal, setDisplayModal] = useState (false);

  // Fetch products from the API
  useEffect(() => {
    async function getStoreProducts() {
      const products = await GetData('products');
      setStoreProducts(products);
    }
    getStoreProducts();
  }, []);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const showModal = () => setDisplayModal(true);
  const hideModal = () => setDisplayModal(false);

  // Filter products based on searchTerm
  const filteredProducts = storeProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
<div>
<div className='portadaTienda'>
        <h1 className='tienda-tittle'>Nuestra Tienda</h1>
        <div className='carritoCompras'>
        <img src={Imagen_Carrito} alt="IMG" className='carrito'/>
        </div>
</div>

<div id='buscadores'>
<div id='searcherInput'>
    <div id='searchers'>
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="search">
          <input
          className="search_input"
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={handleSearchChange}/>
          <a href="#" className="search_icon"><i className="fa fa-search"></i></a>
        </div>
      </div>
    </div>
    </div>
</div>
<div id='botones'>
<button className='btn-search'>
    New
</button>
<button className='btn-search'>
    Price Ascending
</button>
<button className='btn-search'>
    Price Descending
</button>
</div>
</div>
      
{/* Lista de Productos mapeados */}
<div id='mapeo'>
<div id='mapArticle'>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imagen_url} alt={product.name} className="card-img-top" />
                <div className='card-body'>
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-text">{product.description}</p>               
                </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: ${product.price}</li>
            </ul>
        <div className='card-body'>
        <button onClick={showModal}>Más Información</button>
            {displayModal && (
                <div className="modal" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{product.name}</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                            </div>
                            <div className="modal-body">
                                <p>{product.description}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={hideModal}>Cerrar</button>
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
