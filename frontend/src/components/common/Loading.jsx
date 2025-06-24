export default function Loading() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

// src/components/common/ChatBot.jsx
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, fromUser: true }]);
    setInput("");
    // Simulación de respuesta del bot
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Respuesta del bot", fromUser: false }]);
    }, 500);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 h-96 flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-2 mb-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[75%] ${
              msg.fromUser ? "bg-blue-100 self-end" : "bg-gray-100 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
        />
        <Button onClick={sendMessage}>Enviar</Button>
      </div>
    </div>
  );
}