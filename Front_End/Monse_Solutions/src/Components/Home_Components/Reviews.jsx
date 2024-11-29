import React from 'react';
import '../../Styles/Components_Styles/Home_C_Styles/Reviews.css';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../config/i18n'

// Puedes importar las imágenes o usar rutas relativas a la carpeta de imágenes
import Usuario1 from '../../Img/Components_Img/persona1.jpg';
import Usuario2 from '../../Img/Components_Img/persona2.jpeg';
import Usuario3 from '../../Img/Components_Img/persona3.jpeg';
import Usuario4 from '../../Img/Components_Img/persona4.webp';
import Usuario5 from '../../Img/Components_Img/persona5.jpeg';

const ReviewCard = ({ title, body, reviewer, date, rating, image }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };
  return (
    <div className="review-card">
      <div className="review-rating">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <h3 className="review-title">{title}</h3>
      <p className="review-body">{body}</p>
      <div className="review-footer">
        <img
          src={image} // Utiliza la imagen pasada como prop
          alt={reviewer}
          className="reviewer-image"
        />
        <div className="reviewer-info">
          <span className="reviewer-name">{reviewer}</span>
          <span className="review-date">{date}</span>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const sampleReviews = [
    {
      title: "Excellent work and attention to detail",
      body: "We hired this company to remodel our kitchen, and the result was amazing. The finishes are high quality, and the team was very professional throughout the process.",
      reviewer: 'Carlos Martinez',
      date: '2024-10-15',
      rating: 5,
      image: Usuario1, // Foto de Carlos
    },
    {
      title: 'Exceeded our expectations',
      body: 'They helped us renovate our living room, and we couldn’t be happier. The design and finishes were impeccable. Highly recommended.',
      reviewer: 'Ana Lopez',
      date: '2024-10-20',
      rating: 5,
      image: Usuario2, // Foto de Ana
    },
    {
      title: 'Quick and quality work',
      body: 'They remodeled our bathroom in a short time with amazing results. The attention to detail was excellent, and they ensured everything was perfect.',
      reviewer: 'Miguel Torres',
      date: '2024-11-05',
      rating: 4,
      image: Usuario3, // Foto de Miguel
    },
    {
      title: 'Great experience',
      body: 'The remodeling team did a phenomenal job on our office. They were very professional, and the finishes look beautiful. We would definitely hire them again.',
      reviewer: 'Laura Fernandez',
      date: '2024-11-08',
      rating: 5,
      image: Usuario4, // Foto de Laura
    },
    {
      title: 'Personalized attention and quality',
      body: 'What I loved most was the personalized attention and the quality of the finishes. They took into account every detail we asked for, and the result was perfect.',
      reviewer: 'Mercedes Ramirez',
      date: '2024-11-10',
      rating: 5,
      image: Usuario5, // Foto de Mercedes
    },
  ];

  return (
    <div className="reviews-container">
      <h2>Latest reviews</h2>
      <div className="reviews-grid">
        {sampleReviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div><br /><br /><br /><br />
    </div>
  );
};

export default Reviews;
