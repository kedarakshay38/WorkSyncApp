import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatWindow({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    //flex-1 Take equal available space inside a flex container
    <div className="flex-1 overflow-y-auto p-4 bg-white rounded-lg">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
}
export default ChatWindow;
