import { createChatBotMessage } from "react-chatbot-kit";
import PreguntasPredefinidas from "../ChatBot_Components/Questions";

const config = {
    botName: "ChatBot",
    initialMessages: [createChatBotMessage("¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?", {
        widget: "preguntasPredefinidas"
    })],
    widgets: [
        {
            widgetName: "preguntasPredefinidas",
            widgetFunc: (props) => <PreguntasPredefinidas {...props} />,
        },
    ],
};

export default config;
  
  