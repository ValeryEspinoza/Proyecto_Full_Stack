import { createChatBotMessage } from "react-chatbot-kit";
import PreguntasPredefinidas from "../ChatBot_Components/Questions";
import LogoEmpresa from '../../Img/Components_Img/logo_chatbot.png'

const config = {
    botName: "ChatBot",
    initialMessages: [
        createChatBotMessage("Hello, I'm Monse, your virtual assistant. How can I help you?", {
            widget: "preguntasPredefinidas",
        }),
    ],
    widgets: [
        {
            widgetName: "preguntasPredefinidas",
            widgetFunc: (props) => <PreguntasPredefinidas {...props} />,
        },
    ],
    customComponents: {
        // Componente vacío para eliminar el campo de entrada y el botón
        chatInput: () => null,
        sendButton: () => null,
        // Reemplaza el ícono de la burbuja por tu logo
        botAvatar: () => <img src={LogoEmpresa} alt="Logo de Empresa" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px"}} />,
        header: () => (
            <div className="react-chatbot-kit-chat-header">Monse Solutions' virtual assistant
            </div>
          ),
    
    },
};

export default config;

  