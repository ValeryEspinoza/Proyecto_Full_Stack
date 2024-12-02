import React, { useState } from 'react';
import '../../Styles/Components_Styles/Home_C_Styles/ReviewsStyles/ReviewsForm.css'

const ReviewForm = ({ onReviewAdded, clientId }) => {
  const [formData, setFormData] = useState({
    review: '',
    rating: 5, // Valor por defecto
    date: new Date().toISOString().split('T')[0], // Fecha actual
    client: clientId, // El cliente se pasa desde el componente principal
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar la selección de la calificación en estrellas
  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating: rating,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://192.168.1.87:8000/api/reviews/', { // Ruta del endpoint en Django
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al crear la reseña');
        }
        return response.json();
      })
      .then((newReview) => {
        onReviewAdded(newReview); // Notifica al componente padre que hay un nuevo review
        setFormData({
          review: '',
          rating: 5,
          date: new Date().toISOString().split('T')[0],
          client: clientId,
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
    <div className="color-bannerReview">
     <p>Your feedback means a lot to us. <br /> 
      We'd love to hear about your experience. <br />
      Leave a review and help us improve!</p>
    </div><br /><br />
    <form className='formReview' onSubmit={handleSubmit}>
      <div>
        <textarea
          name="review"
          value={formData.review}
          onChange={handleChange}
          placeholder="Write your review here"
          className='textareaReview'
          required
        />
      </div>

      <div>
        <label>Rating</label>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${formData.rating >= star ? 'filled' : ''}`}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <button className='btnReview' type="submit">Send review</button>
    </form>
    </div>
  );
};

export default ReviewForm;

