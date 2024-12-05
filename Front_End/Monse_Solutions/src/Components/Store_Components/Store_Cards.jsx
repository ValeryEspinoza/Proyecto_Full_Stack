import React, { useEffect, useState } from 'react'
import '../../Styles/Components_Styles/VirtualStore_Styles/VirtualStoreCards.css'
import Imagen_Carrito from '../../Img/Components_Img/carrito_verde.png'

function Store() {
//Hooks
const [storeData, setStoreData] = useState([]);
const [storeProducts, setStoreProducts] = useState([]);


useEffect (() => {
  async function getStoreProducts() {
    const products = await fetch('api/products/')

    setStoreProducts(products)
  };
    getStoreProducts();
}, []);


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
          <input className="search_input" type="text" name="" placeholder="Search here..."/>
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
    {productos.length > 0 ? (
      productos.map((producto, index) => (
        <div key={index} className="card" style={{ width: '18rem' }}>

          {producto.formProduct && (<img src={producto.formProduct.imageUrl} className="card-img-top" alt="imagen de producto"/>)}
          
          <div className="card-body">

            { editable==producto.id ? <input type="text" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del producto"/>:<h5 className="card-title">{producto.formProduct.name}</h5>}

            { editable==producto.id ? <input type="text" onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción del producto"/> : <p className="card-text"> {producto.formProduct.description}</p>}
          
          </div>

          <ul className="list-group list-group-flush">

          { editable==producto.id ? <input type="text" onChange={(e) => setCategoria(e.target.value)} placeholder="Categoria" /> : <li className="list-group-item">{producto.formProduct.category}</li>}
          
          { editable==producto.id ? <input type="number" onChange={(e) => setPrecio(e.target.value)} placeholder="Precio del producto" /> : <li className="list-group-item">Precio: ${producto.formProduct.price}</li>}

          { editable==producto.id ? <input type="text" onChange={(e) => setCantidad(e.target.value)} placeholder="Cantidad"/> : <li className="list-group-item">Cantidad: {producto.formProduct.Quantity}</li>}
          
          </ul>
          <div className="card-body">
            {editable==producto.id ? <button className="card-link" onClick={()=>GuardarCambio(producto.id)}>Guardar</button>:<button className="card-link" onClick={()=>Editar(producto.id, producto.formProduct.name, producto.formProduct.price, producto.formProduct.Quantity, producto.formProduct.category, producto.formProduct.description, producto.formProduct.imageUrl)}>Editar</button>}
            {editable==producto.id ? <button className="card-link" onClick={() => setEditable(0)}>Cancelar</button> : <button className="card-link" onClick={() => Eliminar(producto.id)}>Borrar</button>}
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
