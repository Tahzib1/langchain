"use client"

import { useState } from "react";

type Props = {
  handleUpdateMessages: (newMessage: string) => void;
}
const ChatForm = ({handleUpdateMessages}: Props) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdateMessages(message);
    setMessage('');
  }
  
  return (
    <form onSubmit={handleSubmit} className="md:flex items-center m-auto mx-4">
      <textarea 
      className="textarea textarea-sm bg-base-300 w-full md:w-11/12" 
      name="messageTextArea"
      placeholder="Send a Message.."
      value={message}
      onChange={e=> setMessage(e.currentTarget.value)}
      >

      </textarea>
      <button type="submit" className="btn h-full btn-success md:w-1/12 md:ml-4 float-right">Send</button>


    </form>
  )
}

export default ChatForm;