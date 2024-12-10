import React, { useState, useEffect } from 'react';
import '../../Styles/Components_Styles/Home_C_Styles/ReviewsStyles/ReviewsForm.css';
import GetData from "../../Services/Get/GetData";
import PostData from "../../Services/Post/PostData";
import { toast } from 'react-toastify';

const ReviewForm = () => {

  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    review: '',
    date: new Date().toISOString().split('T')[0],
    rating: 5,
    client: 1, // Default client to 1
  });
  const [errors, setErrors] = useState({});

  // Cargar reviews existentes
useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await GetData('reviews');
        setReviews(response);
        toast.success("Reviews cargadas correctamente.");
      } catch (error) {
        console.error("Error al obtener los reviews:", error);
        toast.error("Error al cargar las reviews.");
      }
    };
    fetchReviews();
  }, []);
   

  

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Limpiar errores
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: '',
    }));
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};
    if (!formData.review.trim()) newErrors.review = "La reseña no puede estar vacía.";
    if (formData.rating < 1 || formData.rating > 5)
      newErrors.rating = "La calificación debe estar entre 1 y 5.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Validar antes de enviar
  
    try {
      if (formData) {
        console.log("Datos enviados:", formData); // Imprime los datos enviados
        const response = await PostData('reviews', formData);
        console.log(response);
        
        toast.success("Review enviada correctamente.");
  
        // Enviar la reseña al componente principal
        onReviewAdded(response); // Llama a la función pasada desde Reviews
      } else {
        toast.error("Review No ha sido enviado correctamente.");
      }
    } catch (error) {
      console.error("Error al enviar la review:", error);
      toast.error("Error al enviar la review. Revisa los datos enviados.");
    }
  };
  

  
  return (
    <div>
      <div className="color-bannerReview">
        <p>Your feedback means a lot to us.<br />
          We'd love to hear about your experience.<br />
          Leave a review and help us improve!</p>
      </div>
      <br /><br />
      <form className='formReview' onSubmit={handleSubmit}>
        <div>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="Write your review here"
            className='textareaReview'
          />
          {errors.review && <p className="error-message">{errors.review}</p>}
        </div>

        <div>
          <label>Rating</label>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${formData.rating >= star ? 'filled' : ''}`}
                onClick={() => setFormData({ ...formData, rating: star })}
              >
                ★
              </span>
            ))}
          </div>
          {errors.rating && <p className="error-message">{errors.rating}</p>}
        </div>

        <button className='btnReview' type="submit">Send review</button>
      </form>
    </div>
  );
};

export default ReviewForm;



