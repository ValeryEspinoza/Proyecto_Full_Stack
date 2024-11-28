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
            .email("Correo electrónico no válido"),
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

    const handleSubmit = (values, { resetForm, setErrors, setStatus }) => {
        // Verifica si hay errores de validación (esto lo maneja Formik y Yup)
        const errors = {};  // Esto ya no es necesario, lo maneja Formik
        const errorMessages = [];  // Aquí guardaremos todos los errores

        // Recolecta los errores de Formik
        Object.keys(values).forEach(field => {
            if (!values[field]) {
                errorMessages.push(`${field} es obligatorio`);  // Agrega un error si el campo está vacío
            }
        });

        // Si existen errores, muestra la alerta
        if (errorMessages.length > 0) {
            Swal.fire({
                title: "Error",
                text: errorMessages.join("\n"),  // Muestra todos los errores
                icon: "error",
            });
            return;
        }

        // Enviar correo si no hay errores
        emailjs.sendForm('service_9of4zxx', 'template_vw6uh2k', formRef.current, 'ymYtdvW4jhBm2ACDK')
            .then(
                () => {
                    Swal.fire({
                        title: "¡Solicitud enviada!",
                        text: "Revisaremos tu solicitud. No dudes en contactarnos si tienes alguna pregunta.",
                        icon: "success"
                    });
                    resetForm(); // Limpia el formulario
                },
                (error) => {
                    Swal.fire({
                        title: "¡Hubo un error!",
                        text: "Inténtalo de nuevo.",
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
                <Form ref={formRef} className="join-form">
                    <Field type="text" id="name" name="name" placeholder="Your name" className="inputFormTeam" />
                    <br />
                    <Field type="email" id="email" name="email" className="inputFormTeam" placeholder="Your email" />
                    <br />
                    <Field type="text" id="phone" name="phone" className="inputFormTeam" placeholder="Your phone" />
                    <br />
                    <Field as="textarea" id="message" name="message" className="textAreaForm" placeholder="Your message" />
                    <br />
                    <button className="btnJoinTeam" type="submit">Send</button>
                </Form>
            )}
        </Formik>
    );
}

export default FormContact;

