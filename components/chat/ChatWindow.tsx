"use client"

import { useEffect, useState } from "react";
import ChatForm from "./ChatForm";
import ChatBubble from "./ChatBubble";

type Props = {

}

const ChatWindow = ({}: Props) => {

  const [messages, setMessages] = useState<Array<string>>(['Hello, how can I assist you?']);

  const handleUpdateMessages = (newMessage: string) => {
    setMessages([...messages, newMessage])
  } 

  useEffect(() => {
    console.log(messages);
  }, [messages])


  return (
    <div className="h-screen">
      <div className="bg-black h-3/4 p-4 overflow-y-auto">
          {messages.map((message, index) => {
            return <ChatBubble key={index} content={message} isStart/>
          })}
      </div>

      <div className="md:w-5/6 h-1/4 mx-auto mt-4 ">
        <ChatForm handleUpdateMessages={handleUpdateMessages} />
      </div>
    </div>
  )
}

export default ChatWindow;