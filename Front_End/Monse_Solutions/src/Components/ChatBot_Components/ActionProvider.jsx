class ActionProvider {
    constructor(createChatbotMessage, setStateFunc) {
        this.createChatbotMessage = createChatbotMessage;
        this.setState = setStateFunc;
    }

    handlePreguntaServicios = () => {
        const message = this.createChatbotMessage(
            "R/1. We offer remodeling, finishing, and transformations of residential and commercial spaces."
        );
        this.updateChatbotState(message);
    };

    handlePreguntaCotizacion = () => {
        const message = this.createChatbotMessage(
            "R/2. You can request a personalized quote on our contact page."
        );
        this.updateChatbotState(message);
    };

    handlePreguntaCobertura = () => {
        const message = this.createChatbotMessage(
            "R/3. We provide our services throughout the Nosara area and its surroundings."
        );
        this.updateChatbotState(message);
    };

    handlePreguntaPagos = () => {
        const message = this.createChatbotMessage(
            "R/4. We have 3 payment methods: bank transfer, SINPE móvil, and PayPal. "
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
  
  