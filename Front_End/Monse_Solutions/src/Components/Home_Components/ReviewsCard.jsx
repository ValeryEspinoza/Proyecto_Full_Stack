import React from 'react';
import '../../Styles/Components_Styles/Home_C_Styles/ReviewsStyles/ReviewsCard.css'

const ReviewCard = ({ review, date, rating, client }) => {
  // Formatear la fecha a un formato más legible
  const formattedDate = new Date(date).toLocaleDateString('es-ES'); // 'es-ES' para formato día/mes/año

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-rating">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
        <div className="reviewer-info">
          <p className="reviewer-name">{client}</p>
          <span className="review-date">{formattedDate}</span>
        </div>
      </div>
      <p className="review-body">{review}</p>
    </div>
  );
};

export default ReviewCard;

