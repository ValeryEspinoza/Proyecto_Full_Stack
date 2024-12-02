import React from 'react';

const ReviewCard = ({ review, date, rating, client }) => {
  return (
    <div className="review-card">
      <div className="review-rating">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <p className="review-body">{review}</p>
      <div className="review-footer">
        <span className="review-date">{date}</span>
        <span className="review-client">Cliente ID: {client}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
