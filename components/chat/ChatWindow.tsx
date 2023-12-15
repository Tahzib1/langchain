"use client"

import { useChat } from 'ai/react';

import ChatForm from "./ChatForm";
import ChatBubble from "./ChatBubble";


const ChatWindow = () => {

  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    initialMessages: [{id: '0', role: 'assistant', content: '{ "result": "Hi, I am an AI Assistant Trained to answer questions about a SQL database. How can I help?", "sql": ""}'}],
    onResponse(response) {
      console.log(response);  
    },
    onError: (e) => {
      console.error(e);
    }
  
  });

  const handleSuggestedPromptsClick = (text: string) => {
    append({content: text, role: 'user', id: '' + messages.length + 1});
  }

  return (
    <div className="h-full flex flex-col bg-zinc-800">
      <div className="bg-black h-[90%] p-4 overflow-y-auto">
          {messages.map((message, index) => {
            const isAi = message.role === "system" || message.role === "assistant";
            const jsonData = isAi && JSON.parse(message.content);

            return <ChatBubble 
              key={message.id} 
              content={jsonData.result || message.content} 
              sql={jsonData.sql || ''} role={message.role} 
              isFirstMessage={index === 0} 
              handleSuggestedPromptsClick={handleSuggestedPromptsClick}
              isLoading={isLoading}
            />
          })}
      </div>

      <div className="w-11/12 h-[10%] mx-auto mt-4">
        <ChatForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputVal={input} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default ChatWindow;