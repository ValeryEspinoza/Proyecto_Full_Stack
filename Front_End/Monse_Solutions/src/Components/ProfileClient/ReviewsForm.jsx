import React, { useState, useEffect } from 'react';
import '../../Styles/Components_Styles/Home_C_Styles/ReviewsStyles/ReviewsForm.css';
import GetData from "../../Services/Get/GetData";
import PostData from "../../Services/Post/PostData";
import { toast } from 'react-toastify';
import '../../Styles/toastStyles.css'

const ReviewForm = () => {

  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    review: '',
    date: new Date().toISOString().split('T')[0],
    rating: 5,
    client: 1, // Default client to 1
  });
  const [errors, setErrors] = useState({});

  //Cargar reviews existentes
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
   

  

  //Manejar cambios en los campos del formulario
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

  //Validar formulario
  const validateForm = () => {
    const newErrors = {};
    if (!formData.review.trim()) newErrors.review = "The review cannot be empty";
    if (formData.rating < 1 || formData.rating > 5)
      newErrors.rating = "You must provide a rating";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  //Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; //Validar antes de enviar
  
    try {
      if (formData) {
        console.log("Datos enviados:", formData); //Imprime los datos enviados
        const response = await PostData('reviews', formData);
        console.log(response);
        
        Toastify({
          text: `Review sent successfully`,
          duration: 3500,
          gravity: 'top',
          position: 'center',
          className: 'toastsuccess',
        }).showToast();
  
        //Enviar la reseña al componente principal
        onReviewAdded(response); //Llama a la función pasada desde Reviews
      } else {
          Toastify({
            text: `Review has not been sent successfully`,
            duration: 3500,
            gravity: 'top',
            position: 'center',
            className: 'custom-toastCalendario',
            backgroundColor: 'red',
          }).showToast();
      }
    } catch (error) {
      console.error("Error al enviar la review:", error);
      Toastify({
        text: `Error sending the review. Please check the submitted data`,
        duration: 3500,
        gravity: 'top',
        position: 'center',
        className: 'custom-toastCalendario',
        backgroundColor: 'red',
      }).showToast();
    }
  };
  

  
  return (
    <div>
      <div className="color-bannerReview">
        <p>
          Your feedback means a lot to us.<br />
          We'd love to hear about your experience.<br />
          Leave a review and help us improve!
        </p>
      </div><br />
  <div className="review-form-container">
      <form className="formReview" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="review" className="form-label">Your Review</label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="Write your review here"
            className="textareaReview"
          />
          {errors.review && <p className="error-message">{errors.review}</p>}
        </div>
  
        <div className="form-group">
          <label className="form-label">Rating</label>
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
  
        <button className="btnReview" type="submit">Send review</button>
      </form>
      </div>
    </div>
  );
  
};

export default ReviewForm;



