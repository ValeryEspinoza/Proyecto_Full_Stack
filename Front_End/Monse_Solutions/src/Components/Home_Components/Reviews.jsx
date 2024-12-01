import React, { useState, useEffect } from 'react';
import ReviewsForm from '../ProfileClient/ReviewsForm';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const clientId = 1; //Este valor podría venir de algún estado o contexto, dependiendo de cómo gestiones a los usuarios.

  useEffect(() => {
    fetch('http://192.168.1.87:8000/api/reviews/')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error:', error));
  }, []);

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


