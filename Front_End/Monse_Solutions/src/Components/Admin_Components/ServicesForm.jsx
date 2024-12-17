import React, { useState, useEffect } from 'react';
import '../../Styles/Components_Styles/Admin_C_Styles/ServicesForm.css';
import Amazon from '../../Services/Post/Amazon';
import postData from '../../Services/Post/PostData';
import GetData from '../../Services/Get/GetData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConvertirNombreImagen = (nombreArchivo) => {
  const generarCadenaAleatoria = (longitudMinima = 20) => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const longitud = Math.floor(Math.random() * (30 - longitudMinima + 1)) + longitudMinima;
    return Array.from({ length: longitud }, () =>
      caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    ).join('');
  }
  const extension = nombreArchivo.trim().split('.').pop();
  const nombreAleatorio = generarCadenaAleatoria(20);
  return `${nombreAleatorio}.${extension}`;
};
function ServicesForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    service: "",
    description: "",
    category: "",
    imagen_url: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [Category_services, setCategory_services] = useState([]);
  // Obtener categorías desde el backend
  useEffect(() => {
    const obtenerCategory_services = async () => {
      const response = await GetData('category_services')
      console.log(response);
      setCategory_services(response)
    };
    obtenerCategory_services()
  }, []);
  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setImageFile(files[0]); // Guardar archivo para subir
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Limpiar errores al corregir
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  // Validar formulario
  const validateForm = () => {
    const newErrors = {};
    if (!formData.service.trim()) {
      newErrors.service = "El nombre del servicio es obligatorio.";
    } else if (formData.service.trim().length < 10) {
      newErrors.service = "El nombre debe tener al menos 10 caracteres.";
    }
    if (!formData.description.trim()) newErrors.description = "La descripción es obligatoria.";
    if (!formData.category) newErrors.category = "Debe seleccionar una categoría.";
    if (!imageFile) newErrors.imagen_url = "Debe seleccionar una imagen.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsUploading(true);
    try {
      // Subir imagen a Amazon S3
      const nuevoNombre = ConvertirNombreImagen(imageFile.name);
      const nuevoArchivo = new File([imageFile], nuevoNombre, { type: imageFile.type });
      const imagenUrl = await Amazon(nuevoArchivo);
      // Enviar formulario con la URL de la imagen
      const dataToSend = { ...formData, imagen_url: imagenUrl };
      await postData('services', dataToSend);
      onSuccess("¡Servicio enviado exitosamente!");
      setIsSubmitted(true);
      // Limpiar formulario
      setFormData({ service: "", description: "", category: "", imagen_url: "" });
      setImageFile(null);
      setErrors({});
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      toast.error("Error al enviar el servicio. Inténtelo de nuevo.");
    } finally {
      setIsUploading(false);
    }
  };
  return (
    <div className="service-form-container">
      <h2 className="service-form-title">Formulario de Servicio</h2>
      <form className="service-form" onSubmit={handleSubmit}>
        <div className="service-form-group">
          <label htmlFor="service" className="service-form-label">Nombre del Servicio:</label>
          <input
            type="text"
            id="service"
            name="service"
            className="service-form-input"
            value={formData.category_services}
            onChange={handleChange}
          />
          {errors.service && <p className="error-message">{errors.service}</p>}
        </div>
        <div className="service-form-group">
          <label htmlFor="description" className="service-form-label">Descripción:</label>
          <textarea
            id="description"
            name="description"
            className="service-form-textarea"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />
          {errors.description && <p className="error-message">{errors.description}</p>}
        </div>
        <div className="service-form-group">
          <label htmlFor="category" className="service-form-label">Categoría:</label>
          <select
            id="category"
            name="category"
            className="service-form-input"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Selecciona una categoría</option>
            {Category_services.map((Category_services) => (
              <option value={Category_services.category_services_id} key={Category_services.Category_services_id}  >
                {Category_services.name}
              </option>
            ))}
          </select>
          {errors.category_services && <p className="error-message">{errors.category_services}</p>}
        </div>
        <div className="service-form-group">
          <label htmlFor="imagen_url" className="service-form-label">Imagen del Servicio:</label>
          <input
            type="file"
            id="imagen_url"
            name="imagen_url"
            accept="image/*"
            className="service-form-input"
            onChange={handleChange}
          />
          {errors.imagen_url && <p className="error-message">{errors.imagen_url}</p>}
        </div>
        {isUploading && <p>Subiendo imagen...</p>}
        <button
          type="submit"
          className="service-form-button"
          disabled={isUploading || isSubmitted}
        >
          {isUploading ? "Subiendo..." : isSubmitted ? "Enviado" : "Enviar"}
        </button>
      </form>
    </div>
  );
}
export default ServicesForm;