"use client"

import { useChat } from 'ai/react';

import ChatForm from "./ChatForm";
import ChatBubble from "./ChatBubble";


const ChatWindow = () => {

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onResponse(response) {
      console.log(response);
      
    },
    onError: (e) => {
      console.error(e);
    }
  
  });

  return (
    <div className="h-full flex flex-col">
      <div className="bg-black h-[90%] p-4 overflow-y-auto">
          {messages.map(message => {
            return <ChatBubble key={message.id} content={message.content} role={message.role}/>
          })}
      </div>

      <div className="w-11/12 h-[10%] mx-auto mt-4">
        <ChatForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputVal={input} />
      </div>
    </div>
  )
}

export default ChatWindow;