import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../Styles/Components_Styles/Contact_C_Styles/ContactUs.css"

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_trv0z7d', 'template_nkt3529', form.current, {
        publicKey: 'P4FTsAHRIqbk8Gpc8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='SeccionContactUs'>
    <form className='columnasFormContact' ref={form} onSubmit={sendEmail}>
        <div className='contenedorFormEstiloUno'>
            <label className='estiloLabelForm'>Full Name</label>
            <input type="text" name="user_name" required />
        </div>
        <div className='contenedorFormEstiloUno'>
            <label className='estiloLabelForm'>Phone Number</label>
            <input type="text" name="user_phone" required />
        </div>
        <div className='contenedorFormEstiloUno'>
            <label className='estiloLabelForm'>Email</label>
            <input type="email" name="user_email" required />
        </div>
        <div className='contenedorFormEstiloDos'>
            <textarea placeholder='Message' name="message" required />
        </div>
        <div>
            <input className='btnSendForm' type="submit" value="Send" />
        </div>
    </form>
</div>
  );
};