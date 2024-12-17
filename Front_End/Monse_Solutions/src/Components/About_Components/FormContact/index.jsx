import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import "../../../Styles/Components_Styles/AboutUs_C_Styles/JoinOurTeam.css";

function FormContact() {
    const formRef = useRef(); //Crea una referencia al formulario

    // ESQUEMA DE VALIDACIÓN CON Yup
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
            .min(5, "El mensaje debe tener al menos 5 caracteres")
            .required("El mensaje es obligatorio"),
    });

    // VALORES INICIALES DEL FORMULARIO
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };

    // FUNCIÓN DE ENVÍO DEL FORMULARIO
    const handleSubmit = (values, { resetForm }) => {
        emailjs
            .sendForm(
                "service_9of4zxx",
                "template_vw6uh2k",
                formRef.current,
                "ymYtdvW4jhBm2ACDK"
            )
            .then(
                () => {
                    Toastify({
                        text: `Your request has been sent! Contact us if you have any questions`,
                        duration: 3000,
                        gravity: 'top',
                        position: 'center',
                        className: 'toastsuccess',
                    }).showToast();
                    resetForm(); // Limpia el formulario
                },
                (error) => {
                    Toastify({
                        text: "There was an error! Try again",
                        duration: 3000,
                        gravity: "top",
                        position: "center",
                        close: true,
                        className: "toast-error",
                    }).showToast();
                    console.error(error);
                }
            );
    };

    // RENDERIZACIÓN DEL FORMULARIO
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, validateForm, isValid, handleSubmit }) => (
                <Form
                    ref={formRef}
                    className="join-form"
                    onSubmit={(e) => {
                        e.preventDefault(); // Previene el envío inmediato
                        validateForm().then((formErrors) => {
                            if (Object.keys(formErrors).length > 0) {
                                // Mostrar Toastify si hay errores
                                Toastify({
                                    text: "Please complete all fields before submitting",
                                    duration: 2000,
                                    gravity: "top",
                                    position: "center",
                                    close: true,
                                    className: "toast-error",
                                }).showToast();
                            } else {
                                handleSubmit(e); // Enviar el formulario si no hay errores
                            }
                        });
                    }}
                >
                    {/* Campo Name */}
                    <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className={`inputFormTeam ${
                            errors.name && touched.name ? "error-input" : ""
                        }`}
                        title={errors.name && touched.name ? errors.name : ""}
                    />
                    <br />

                    {/* Campo Email */}
                    <Field
                        type="email"
                        id="email"
                        name="email"
                        className={`inputFormTeam ${
                            errors.email && touched.email ? "error-input" : ""
                        }`}
                        placeholder="Your email"
                        title={errors.email && touched.email ? errors.email : ""}
                    />
                    <br />

                    {/* Campo Phone */}
                    <Field
                        type="text"
                        id="phone"
                        name="phone"
                        className={`inputFormTeam ${
                            errors.phone && touched.phone ? "error-input" : ""
                        }`}
                        placeholder="Your phone"
                        title={errors.phone && touched.phone ? errors.phone : ""}
                    />
                    <br />

                    {/* Campo Message */}
                    <Field
                        as="textarea"
                        id="message"
                        name="message"
                        className={`inputFormTeam ${
                            errors.message && touched.message ? "error-input" : ""
                        }`}
                        placeholder="Your message"
                        title={errors.message && touched.message ? errors.message : ""}
                    />
                    <br />

                    {/* Botón de Envío */}
                    <button type="submit" className="submit-button">
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default FormContact;


