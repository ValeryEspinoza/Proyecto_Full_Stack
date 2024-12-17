import React, { useEffect, useState } from 'react';
import OpenGet from '../../Services/Get/OpenGet';
import ReviewsCard from '../Home_Components/ReviewsCard'; // Importa el componente ReviewCard
import { toast } from 'react-toastify';
import '../../Styles/Components_Styles/Home_C_Styles/ReviewsStyles/ReviewsCard.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // Cargar reviews existentes
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await OpenGet('reviews');
        setReviews(response);
        toast.success("Reviews cargadas correctamente.");
      } catch (error) {
        console.error("Error al obtener los reviews:", error);
        toast.error("Error al cargar las reviews.");
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="reviews-section">
    <h2 className="reviews-title">What our clients say!</h2><br />
    <div className="reviews-grid">
      {reviews.length === 0 ? (
        <p>No hay reviews disponibles.</p>
      ) : (
        reviews.map((review) => (
          <ReviewsCard
            key={review.id} //Asegúrate de que cada review tenga un id único.
            review={review.review}
            date={review.date}
            rating={review.rating}
            client={review.client}
          />
        ))
      )}
    </div>
  </div>
);}

export default Reviews;
