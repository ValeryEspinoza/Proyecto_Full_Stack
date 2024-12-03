import React, { useState, useRef, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import Config from "../ChatBot_Components/Config";
import MessageParser from "../ChatBot_Components/MessageParser";
import ActionProvider from "../ChatBot_Components/ActionProvider";

import "../../Styles/Components_Styles/ChatBot_Styles/ChatBot.css";

function ChatbotComponent() {
    const [showChatbot, setShowChatbot] = useState(false);
    const [messages, setMessages] = useState([]); //Estado para almacenar mensajes
    const chatbotContainerRef = useRef(null);

    useEffect(() => {
        if (chatbotContainerRef.current) {
            chatbotContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]); //Desplaza al recibir nuevos mensajes

    const handleNewMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return (
        <div>
            <button
                className="chatbot-toggle-button"
                onClick={() => setShowChatbot(true)}
            >
                Chat
            </button>

            {showChatbot && (
                <div className="chatbot-container" ref={chatbotContainerRef}>
                    <div className="chatbot-header">
                        <button className="close-button" onClick={() => setShowChatbot(false)}>
                            X
                        </button>
                    </div>
                    <Chatbot
                        config={Config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                        onNewMessage={handleNewMessage} // Llama a la función al recibir un nuevo mensaje
                    />
                </div>
            )}
        </div>
    );
}

export default ChatbotComponent;