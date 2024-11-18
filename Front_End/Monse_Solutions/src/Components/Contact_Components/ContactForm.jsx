import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import "../../Styles/Components_Styles/Contact_C_Styles/ContactForm.css"

 const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_trv0z7d', 'template_nkt3529', form.current, {
        publicKey: 'P4FTsAHRIqbk8Gpc8',
      })
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Email sent",
            timer: 1500
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Verify that all data is correct!",
          });
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
export default ContactForm