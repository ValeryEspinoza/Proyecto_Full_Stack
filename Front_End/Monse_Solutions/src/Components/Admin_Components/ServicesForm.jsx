import React, { useState } from 'react';
import '../../Styles/Components_Styles/Admin_C_Styles/ServicesForm.css';
import SendServices from '../../Services/Post/PostServices';

function ServicesForm() {
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [imagenUrl, setImagenUrl] = useState(null);  // Mantener el archivo
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({}); // Estado para errores

  

  const generarCadenaAleatoria = (longitudMinima = 20) => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const longitud = Math.floor(Math.random() * (30 - longitudMinima + 1)) + longitudMinima; // Entre 20 y 30 caracteres
    
    return Array.from({ length: longitud }, () => 
      caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    ).join('');
  };
  
  const convertirNombreImagen = (nombreArchivo) => {
    const extension = nombreArchivo.trim().split('.').pop(); // Obtener extensión
    const nombreAleatorio = generarCadenaAleatoria(20); // Generar nombre aleatorio
    return `${nombreAleatorio}.${extension}`; // Retornar el nuevo nombre
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const nuevoNombre = convertirNombreImagen(e.target.files[0].name);
      const nuevoArchivo = new File([e.target.files[0]], nuevoNombre, { type: e.target.files[0].type });
      setImagenUrl(nuevoArchivo); // Guardar el archivo modificado
    }
  };


// Función para validar los campos del formulario
const validate = () => {
  const newErrors = {};
  if (!service) newErrors.service = "El nombre del servicio es requerido.";
 if (service.length < 10) {
    newErrors.service = "El nombre del servicio debe tener al menos 10 caracteres.";
  }
  if (!description) newErrors.description = "La descripción es requerida.";
  if (!imagenUrl) newErrors.imagenUrl = "La URL de la imagen es requerida.";
  if (!category) newErrors.category = "La categoría es requerida.";
  return newErrors;
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Actualiza el estado con los errores
      return;
    }
    console.log("service", service);
    console.log("description", description);
    console.log("imagenUrl", imagenUrl);
    console.log("category", category);
      

    // Lógica para enviar los datos al backend
    try {
      const respuesta = await SendServices.SendServices(service, description, imagenUrl, category);
      console.log(respuesta);
      // Limpiar el formulario y errores si la respuesta es exitosa
      setService("");
      setDescription("");
      setImagenUrl("");
      setCategory("");
      setErrors({});
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
    
  };

  return (
    <div className="service-form-container">
      <h2 className="service-form-title">Formulario de Servicio</h2>
      <div className="service-form" onSubmit={handleSubmit}>
      <div className="service-form-group">
          <label htmlFor="service" className="service-form-label">Nombre del Servicio:</label>
          <input
            type="text"
            id="service"
            className="service-form-input"
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              setErrors((prev) => ({ ...prev, service: "" })); // Limpia el error al cambiar el input
            }} 
            required
          />
          {errors.service && <span className="error" style={{ color: 'red' }}>{errors.service}</span>}
        </div>

        <div className="service-form-group">
          <label htmlFor="description" className="service-form-label">Descripción:</label>
          <textarea
            id="description"
            className="service-form-textarea"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setErrors((prev) => ({ ...prev, description: "" })); // Limpia el error al cambiar el input
            }} 
            rows="4"
            required
          ></textarea>
          {errors.description && <span className="error" style={{ color: 'red' }}>{errors.description}</span>}
        </div>


        <div className="service-form-group">
          <label htmlFor="category" className="service-form-label">Categoría:</label>
          <select
            id="category"
            className="service-form-select"
            value={category}
            onChange={(e) => {
              setCategory(parseInt(e.target.value, 10));
              setErrors((prev) => ({ ...prev, category: "" })); // Limpia el error al cambiar el select
            }} 
            required
          >
            <option value="">Seleccione una categoría</option>
            <option value={1}>Categoría 1</option>
            <option value={2}>Categoría 2</option>
            <option value={3}>Categoría 3</option>
          </select> 
          {errors.category && <span className="error" style={{ color: 'red' }}>{errors.category}</span>}
        </div>

        <div className="service-form-group">
          <label htmlFor="imagen_url" className="service-form-label">Imagen (URL o archivo):</label>
          <input
            type="file"
            id="imagen_url"
            accept="image/*"
            className="service-form-input"
            onChange={handleFileChange} 
            required
          />
          {errors.imagenUrl && <span className="error" style={{ color: 'red' }}>{errors.imagenUrl}</span>}
        </div>

        <button onClick={handleSubmit} className="service-form-button">Enviar</button>
      </div>
    </div>
  );
}

export default ServicesForm;