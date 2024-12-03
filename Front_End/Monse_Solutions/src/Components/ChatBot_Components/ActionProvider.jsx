class ActionProvider {
    constructor(createChatbotMessage, setStateFunc) {
        this.createChatbotMessage = createChatbotMessage;
        this.setState = setStateFunc;
    }

    handlePreguntaServicios = () => {
        const message = this.createChatbotMessage(
            "Ofrecemos remodelaciones, acabados y transformaciones de espacios residenciales y comerciales."
        );
        this.updateChatbotState(message);
    };

    handlePreguntaCotizacion = () => {
        const message = this.createChatbotMessage(
            "Puedes solicitar una cotización personalizada en nuestra página de contacto."
        );
        this.updateChatbotState(message);
    };

    handlePreguntaCobertura = () => {
        const message = this.createChatbotMessage(
            "Prestamos servicios en las principales ciudades del país."
        );
        this.updateChatbotState(message);
    };

    updateChatbotState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };

    // Método para mostrar las preguntas predefinidas
    handleMostrarPreguntas = () => {
        const message = this.createChatbotMessage(
            "¿Qué te gustaría saber?",
            {
                widget: "preguntasPredefinidas"
            }
        );
        this.updateChatbotState(message);
    };
}

export default ActionProvider;
  
  