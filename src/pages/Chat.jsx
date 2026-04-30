import { useState } from "react";
import ChatWindow from "../features/chat/ChatWindow";
import ChatInput from "../features/chat/ChatInput";
function Chat() {
  const [messages, setMessages] = useState([]);

  function handleSend(text) {
    const userMessage = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    //simulate bot replay with 1 sec
    setTimeout(() => {
      const botMsg = {
        id: Date.now()+1,
        text: "thanks for your message !this is a simulated reply.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  }

  return (
    <div className="flex flex-col h-[calc(100vh-150px)] p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Chat</h1>
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSend} />
    </div>
  );
}

export default Chat;
