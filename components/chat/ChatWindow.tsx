"use client"

import { useChat } from 'ai/react';

import ChatForm from "./ChatForm";
import ChatBubble from "./ChatBubble";


const ChatWindow = () => {

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages: [{id: '0', role: 'assistant', content: '{ "result": "Hi, how can i help you?", "sql": ""}'}],
    onResponse(response) {
      console.log(response);
      
    },
    onError: (e) => {
      console.error(e);
    }
  
  });

  return (
    <div className="h-full flex flex-col bg-zinc-800">
      <div className="bg-black h-[90%] p-4 overflow-y-auto">
          {messages.map(message => {
            const isAi = message.role === "system" || message.role === "assistant";
            const jsonData = isAi && JSON.parse(message.content);
            return <ChatBubble key={message.id} content={jsonData.result || message.content} sql={jsonData.sql || ''} role={message.role}/>
          })}
      </div>

      <div className="w-11/12 h-[10%] mx-auto mt-4">
        <ChatForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputVal={input} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default ChatWindow;