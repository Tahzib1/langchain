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
    <form onSubmit={handleSubmit} className="flex justify-between m-auto">
      <input 
      className="input input-bordered bg-base-200 w-full" 
      name="messageTextArea"
      placeholder="Send a Message.."
      value={message}
      onChange={e=> setMessage(e.currentTarget.value)}
      >

      </input>
      <button type="submit" className="btn btn-success ml-4 md:px-12">Send</button>


    </form>
  )
}

export default ChatForm;