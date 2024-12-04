class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse = (message) => {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("servicios")) {
        this.actionProvider.handleServicios();
      }
  
      if (lowerCaseMessage.includes("cotización")) {
        this.actionProvider.handleCotizacion();
      }
  
      if (lowerCaseMessage.includes("cobertura")) {
        this.actionProvider.handleCobertura();
      }

      if (lowerCaseMessage.includes("pagos")) {
        this.actionProvider.handlePreguntaPagos();
      }
    };
  }
  
  export default MessageParser;
  