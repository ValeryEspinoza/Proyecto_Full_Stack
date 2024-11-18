import React from 'react';
import ContactForm from '../../Components/Contact_Components/ContactForm'; // Si es una exportación por defecto

import "../../Styles/Components_Styles/Contact_C_Styles/ContactPage.css"; // Importa los estilos

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h1>Get in Touch with Us!</h1>
        <p>
          We'd love to hear from you! Whether you have questions, need a quote, or want to discuss your project ideas, feel free to reach out through any of the following channels.
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Here's how you can reach us:</h3>
          <p><strong>Phone:</strong> 123 456-7890</p>
          <p><strong>Email:</strong> info@monsesolutions.com</p>
          <p><strong>Website:</strong> www.monsesolutions.com</p>
          <p><strong>Address:</strong> 123 Main St, City, State, ZIP Code</p>

        <div className="contact-map">
        <h3>Visit Us at Our Location!</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25909.994931056906!2d-85.6749919072774!3d9.977324235117372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e5390861f64b9%3A0xfdc77634e4481c5f!2sProvincia%20de%20Guanacaste%2C%20Nosara!5e1!3m2!1ses-419!2scr!4v1731602115981!5m2!1ses-419!2scr"
         width="400" 
         height="300">
        </iframe>
      </div>
        </div>
    
        <br />
        <div className="contact-form-container">
           <p>
              If you prefer, you can reach out using our easy-to-fill <strong>contact form</strong>. Just provide your details and message, and our team will get back to you as soon as possible.
             </p>
             <ContactForm />

         </div>

        </div>
      </div>
  );
};

export default ContactPage;