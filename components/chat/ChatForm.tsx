"use client"

import { useState } from "react";

const ChatForm = () => {
  const [message, setMessage] = useState('');

  return (
    <form className="flex items-center">
      <textarea 
      className="textarea textarea-sm bg-base-300 w-11/12" 
      placeholder="Send a Message.."
      value={message}
      onChange={e=> setMessage(e.currentTarget.value)}
      >

      </textarea>
    <button type="submit" className="btn h-full btn-success w-1/12 ml-4">Send</button>

    </form>
  )
}

export default ChatForm;