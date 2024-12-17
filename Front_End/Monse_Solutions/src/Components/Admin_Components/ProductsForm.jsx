import React, { useState, useEffect } from 'react';
import '../../Styles/Components_Styles/Admin_C_Styles/ProductsForm.css';
import Amazon from '../../Services/Post/Amazon';
import postData from '../../Services/Post/PostData';
import GetData from '../../Services/Get/GetData';

const ConvertirNombreImagen = (nombreArchivo) => {
  const generarCadenaAleatoria = (longitudMinima = 20) => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const longitud = Math.floor(Math.random() * (30 - longitudMinima + 1)) + longitudMinima;
    return Array.from({ length: longitud }, () =>
      caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    ).join('');
  };

  const extension = nombreArchivo.trim().split('.').pop();
  const nombreAleatorio = generarCadenaAleatoria(20);
  return `${nombreAleatorio}.${extension}`;
};

function ProductsForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    sub_categories_product: "",
    imagen_url: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subcategories, setCategory_services] = useState([]); 

  // Obtener subcategorías desde el backend
  useEffect(() => {
    
    const obtenerCategory_services = async () => {
      const response = await GetData('category_services')
      console.log(response);
      setCategory_services(response)
      
    };
    obtenerSubcaterias()
 
  }, []);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value, files } = e.target;
  

    if (files && files[0]) {
      setImageFile(files[0]); // Guardar archivo para subir
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }

    // Limpiar el error si el usuario empieza a corregir
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    } else if (formData.name.trim().length < 10) {
      newErrors.name = "El nombre debe tener al menos 10 caracteres.";
    }

    if (!formData.description.trim()) newErrors.description = "La descripción es obligatoria.";
    if (!formData.price || formData.price <= 0) newErrors.price = "El precio debe ser mayor a 0.";
    if (!formData.sub_categories_product.trim())
      newErrors.sub_categories_product = "La subcategoría es obligatoria.";
    if (!imageFile) newErrors.imagen_url = "Debe seleccionar una imagen.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.error("Formulario inválido.");
      return;
    }

    setIsUploading(true);

    try {
      // Subir imagen a Amazon S3
      const nuevoNombre = ConvertirNombreImagen(imageFile.name);
      const nuevoArchivo = new File([imageFile], nuevoNombre, { type: imageFile.type });
      const imagenUrl = await Amazon(nuevoArchivo);

      // Enviar formulario con la URL de la imagen
      const formDataConImagen = { ...formData, imagen_url: imagenUrl };
      await postData('products', formDataConImagen);
      onSuccess("¡Producto enviado exitosamente!"); // Llamamos a la función onSuccess para enviar el mensaje
      console.log("Formulario enviado:", formDataConImagen);

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="product-form-container">
      <h2 className="product-form-title">Formulario de Producto</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="product-form-group">
          <label htmlFor="name" className="product-form-label">Nombre del Producto:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="product-form-input"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="product-form-group">
          <label htmlFor="description" className="product-form-label">Descripción:</label>
          <textarea
            id="description"
            name="description"
            className="product-form-textarea"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />
          {errors.description && <p className="error-message">{errors.description}</p>}
        </div>

        <div className="product-form-group">
          <label htmlFor="price" className="product-form-label">Precio:</label>
          <input
            type="number"
            id="price"
            name="price"
            className="product-form-input"
            value={formData.price}
            onChange={handleChange}
          />
          {errors.price && <p className="error-message">{errors.price}</p>}
        </div>

        <div className="product-form-group">
          <label htmlFor="sub_categories_product" className="product-form-label">Subcategoría:</label>
          <select
            id="sub_categories_product"
            name="sub_categories_product"
            className="product-form-input"
            value={formData.sub_categories_product}
            onChange={handleChange}
          >
            <option value="">Selecciona una subcategoría</option>
            {subcategories.map((subcategory) => (
              <option value={subcategory.sub_category_product_id} key={subcategory.sub_category_product_id} >
                {subcategory.name}
              </option>
            ))}
          </select>
          {errors.sub_categories_product && <p className="error-message">{errors.sub_categories_product}</p>}
        </div>

        <div className="product-form-group">
          <label htmlFor="imagen_url" className="product-form-label">Imagen del Producto:</label>
          <input
            type="file"
            id="imagen_url"

            name="imagen_url"
            accept="image/*"
            className="product-form-input"
            onChange={handleChange}
          />
          {errors.imagen_url && <p className="error-message">{errors.imagen_url}</p>}
        </div>

        {isUploading && <p>Subiendo imagen...</p>}

        <button
          type="submit"
          className="product-form-button"
          disabled={isUploading || isSubmitted}
        >
          {isUploading ? "Subiendo..." : isSubmitted ? "Enviado" : "Enviar"}
        </button>
      </form>
    </div>
  );
}

export default ProductsForm;
