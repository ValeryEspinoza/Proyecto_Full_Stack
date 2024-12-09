import React, { useEffect, useState } from 'react'
import '../../Styles/Components_Styles/VirtualStore_Styles/VirtualStoreCards.css'
import Imagen_Carrito from '../../Img/Components_Img/carrito_verde.png'
import postData from '../../Services/Post/PostData';
import GetData from '../../Services/Get/GetData';
import {Link } from 'react-router-dom'; 

function Store() {
//Hooks
const [storeData, setStoreData] = useState([]);
const [storeProducts, setStoreProducts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [displayModal, setDisplayModal] = useState(false)

//Modales
const showModal = () => setDisplayModal(true);
const hideModal = () => setDisplayModal(false);

const handleSearchChange = (e) => setSearchTerm(e.target.value);

useEffect(() => {
async function getStoreProducts() {
    const storeProducts = await GetData('api/products/')

    
    setStoreProducts(storeProducts)
  };
getStoreProducts();
},[]);

const filteredProducts = storeProducts.filter(product => 
  product.name.toLowerCase().includes(searchTerm.toLowerCase()));


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

<div id='mapeo'>
<div id="mapArticle">
  <div className="product-grid">
    {filteredProducts.length > 0 ? (
      storeProducts.map((index) => (
        <div key={index} className="card" style={{ width: '18rem' }}>

          {(<img src={storeProducts.image_url} className="card-img-top" alt="imagen de producto"/>)}
          
          <div className="card-body">

           <h5 className="card-title">{storeProducts.name}</h5>

           <p className="card-text"> {storeProducts.description}</p>
          
          </div>

          <ul className="list-group list-group-flush">

          <li className="list-group-item">{storeProducts.category}</li>
          
          <li className="list-group-item">Precio: ${storeProducts.price}</li>
          </ul>
          <div className="card-body">
            <button onClick={showModal}>Más Información</button>
            {displayModal && (
              <div className="modal" tabindex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{storeProducts.name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>{storeProducts.description}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={hideModal}>Close</button>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      ))
    ) : (
      <p>No hay producto(s)/servicio(s) disponibles.</p>
    )}
  </div>
</div>
</div>
</div>

  )
}

export default Store
