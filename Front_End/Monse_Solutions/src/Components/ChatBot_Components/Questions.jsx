import React from "react";

const PreguntasPredefinidas = (props) => {
    const preguntas = [
        { text: "1. What services do you offer?", handler: props.actionProvider.handlePreguntaServicios },
        { text: "2. How can I request a quote?", handler: props.actionProvider.handlePreguntaCotizacion },
        { text: "3. Where do you provide services?", handler: props.actionProvider.handlePreguntaCobertura },
        { text: "4. What are the payment methods?", handler: props.actionProvider.handlePreguntaPagos },
    ];

    return (
        <div>
            {preguntas.map((pregunta, index) => (
                <button key={index} onClick={pregunta.handler}>
                    {pregunta.text}
                </button>
            ))}
        </div>
    );
};

export default PreguntasPredefinidas;