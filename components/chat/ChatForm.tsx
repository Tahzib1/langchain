"use client"

import { ChatRequestOptions } from "ai";

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputVal: string;
}
const ChatForm = ({handleSubmit, handleInputChange, inputVal}: Props) => {

  return (
    <form onSubmit={handleSubmit} className="flex justify-between m-auto">
      <input 
      className="input input-bordered bg-base-200 w-full" 
      name="messageTextArea"
      placeholder="Send a Message.."
      value={inputVal}
      onChange={handleInputChange}
      >

      </input>
      <button type="submit" className="btn btn-success ml-4 md:px-12">Send</button>


    </form>
  )
}

export default ChatForm;