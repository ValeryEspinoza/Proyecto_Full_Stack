import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import '../../Styles/Components_Styles/Contact_C_Styles/ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //Validar campos manualmente
    //Crear un objeto FormData a partir del formulario referenciado
    const formData = new FormData(form.current);
    //Se convierte el objeto FormData en un array de pares [clave, valor] usando Array.from()
    //Luego, se utiliza el método .filter() para quedarse solo con los campos vacíos
    const emptyFields = Array.from(formData.entries()).filter(
      ([_, value]) => value.trim() === '' //Campo vacío si su valor es una cadena vacía.
    );

    if (emptyFields.length > 0) {
      Toastify({
        text: 'Please complete all fields before submitting',
        duration: 4000,
        gravity: 'top',
        position: 'center',
        close: true,
        className: 'toast-error',
      }).showToast();
      return;
    }

    // Enviar email si todos los campos están completos
    emailjs
      .sendForm('service_trv0z7d', 'template_nkt3529', form.current, {
        publicKey: 'P4FTsAHRIqbk8Gpc8',
      })
      .then(
        () => {
          Toastify({
            text: 'Email sent successfully!',
            duration: 3000,
            gravity: 'top',
            position: 'center',
            className: 'toastsuccess',
          }).showToast();
          form.current.reset(); //Limpia el formulario
        },
        (error) => {
          Toastify({
            text: 'Verify that all data is correct!',
            duration: 4000,
            gravity: 'top',
            position: 'center',
            close: true,
            className: 'toast-error',
          }).showToast();
        }
      );
  };

  return (
    <div className="SeccionContactUs">
      <form className="columnasFormContact" ref={form} onSubmit={sendEmail}>
        <div className="contenedorFormEstiloUno">
          <label className="estiloLabelForm">Full Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className="contenedorFormEstiloUno">
          <label className="estiloLabelForm">Phone Number</label>
          <input type="text" name="user_phone" />
        </div>
        <div className="contenedorFormEstiloUno">
          <label className="estiloLabelForm">Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className="contenedorFormEstiloDos">
          <textarea placeholder="Message" name="message" />
        </div>
        <div>
          <input className="btnSendForm" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
