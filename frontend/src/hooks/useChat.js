import { useState } from 'react'

export function useChat() {
  const [messages, setMessages] = useState([])

  const sendMessage = (msg) => {
    setMessages(prev => [...prev, { text: msg, sender: 'user', date: new Date() }])
    // Simulación de respuesta automática
    setTimeout(() => {
      setMessages(prev => [...prev, { text: 'Respuesta automática', sender: 'bot', date: new Date() }])
    }, 500)
  }

  return { messages, sendMessage }
}