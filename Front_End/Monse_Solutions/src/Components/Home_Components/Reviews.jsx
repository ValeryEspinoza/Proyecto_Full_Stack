
/*import React, { useState, useEffect } from 'react';
import ReviewsForm from '../ProfileClient/ReviewsForm';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const clientId = 1; //Este valor podría venir de algún estado o contexto, dependiendo de cómo gestiones a los usuarios.

  const handleReviewAdded = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };


  return (
    <div>
      <h2>Reviews</h2>
      <ReviewsForm onReviewAdded={handleReviewAdded} clientId={clientId} />
      <div>
        {reviews.map((review) => (
          <ReviewsCard
            key={review.review_id}
            review={review.review}
            date={review.date}
            rating={review.rating}
            client={review.client}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
*/

