import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function FormContact() {
    const formRef = useRef(); // Crea una referencia al formulario

    // Esquema de validación con Yup
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, "El nombre debe tener al menos 2 caracteres")
            .max(50, "El nombre no debe exceder los 50 caracteres")
            .required("El nombre es obligatorio"),
        email: Yup.string()
            .email("Correo electrónico no válido")
            .required("El correo electrónico es obligatorio"),
        phone: Yup.string()
            .matches(/^[0-9]{8}$/, "El número debe tener 8 dígitos")
            .required("El teléfono es obligatorio"),
        message: Yup.string()
            .min(10, "El mensaje debe tener al menos 10 caracteres")
            .required("El mensaje es obligatorio"),
    });

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };

    const handleSubmit = (values, { resetForm }) => {
        emailjs.sendForm('service_9of4zxx', 'template_vw6uh2k', formRef.current, 'ymYtdvW4jhBm2ACDK')
            .then(
                () => {
                    Swal.fire({
                        title: "Request sent!",
                        text: "We will review your request. Feel free to contact us with any questions",
                        icon: "success"
                    });
                    resetForm(); //Limpia el formulario
                },
                (error) => {
                    Swal.fire({
                        title: "There was an error!",
                        text: "Try again",
                        icon: "error"
                    });
                    console.error(error);
                }
            );
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form ref={formRef} className="join-form"> {/* Asocia el ref aquí */}
                    <Field type="text" id="name" name="name" placeholder="Your name" className="inputFormTeam" />
                    <ErrorMessage name="name" component="div" className="error" style={{ color: "red" }} />
                    <br />
                    <Field type="email" id="email" name="email" className="inputFormTeam" placeholder="Your email" />
                    <ErrorMessage name="email" component="div" className="error" />
                    <br />
                    <Field type="text" id="phone" name="phone" className="inputFormTeam" placeholder="Your phone" />
                    <ErrorMessage name="phone" component="div" className="error" />
                    <br />
                    <Field as="textarea" id="message" name="message" className="textAreaForm" placeholder="Your message" />
                    <ErrorMessage name="message" component="div" className="error" />
                    <br />
                    <button className="btnJoinTeam" type="submit">Send</button>
                </Form>
            )}
        </Formik>
    );
}

export default FormContact;
