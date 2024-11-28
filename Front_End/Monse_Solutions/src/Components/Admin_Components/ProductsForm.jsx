import React from 'react'
import { useState } from 'react';
import '../../Styles/Components_Styles/Admin_C_Styles/ProductsForm.css'

function ProductsForm() {
  const [formData, setFormData] = useState({
    name_product: "",
    description: "",
    price: "",
    creation_date: "",
    sub_categories_product_id: "",
    imagen_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí puedes agregar la lógica para enviar los datos al backend.
  };

  return (
<div className="product-form-container">
      <h2 className="product-form-title">Formulario de Producto</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="product-form-group">
          <label htmlFor="name_product" className="product-form-label">
            Nombre del Producto:
          </label>
          <input
            type="text"
            id="name_product"
            name="name_product"
            className="product-form-input"
            value={formData.name_product}
            onChange={handleChange}
            required
          />
        </div>

        <div className="product-form-group">
          <label htmlFor="description" className="product-form-label">
            Descripción:
          </label>
          <textarea
            id="description"
            name="description"
            className="product-form-textarea"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="product-form-group">
          <label htmlFor="price" className="product-form-label">
            Precio:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="product-form-input"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="product-form-group">
          <label htmlFor="creation_date" className="product-form-label">
            Fecha de Creación:
          </label>
          <input
            type="text"
            id="creation_date"
            name="creation_date"
            className="product-form-input"
            value={new Date().toLocaleString()} // Genera la fecha y hora actual
            readOnly // Campo de solo lectura
          />
        </div>
        
        <div className="product-form-group">
          <label htmlFor="sub_categories_product_id" className="product-form-label">
            Subcategoría:
          </label>
          <select
            id="sub_categories_product_id"
            name="sub_categories_product_id"
            className="product-form-select"
            value={formData.sub_categories_product_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una subcategoría</option>
            <option value="1">Subcategoría 1</option>
            <option value="2">Subcategoría 2</option>
            <option value="3">Subcategoría 3</option>
          </select>
        </div>

        <div className="product-form-group">
          <label htmlFor="imagen_url" className="product-form-label">
            URL de la Imagen:
          </label>
          <input
            type="File"
            id="imagen_url"
            name="imagen_url"
            className="product-form-input"
            value={formData.imagen_url}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="product-form-button">
          Enviar
        </button>
      </form>
    </div>
  );
  
}

export default ProductsForm
