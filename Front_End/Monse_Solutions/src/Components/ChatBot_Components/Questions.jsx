import React from "react";

const PreguntasPredefinidas = (props) => {
    const preguntas = [
        { text: "¿Qué servicios ofrecen?", handler: props.actionProvider.handlePreguntaServicios },
        { text: "¿Cómo puedo solicitar una cotización?", handler: props.actionProvider.handlePreguntaCotizacion },
        { text: "¿Dónde prestan servicios?", handler: props.actionProvider.handlePreguntaCobertura },
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