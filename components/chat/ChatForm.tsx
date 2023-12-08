"use client"

import { ChatRequestOptions } from "ai";

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputVal: string;
  isLoading: boolean;
}
const ChatForm = ({handleSubmit, handleInputChange, inputVal, isLoading}: Props) => {

  return (
    <form onSubmit={handleSubmit} className="flex justify-between m-auto">
      <input
      required
      disabled={isLoading}
      className="input input-bordered bg-zinc-900 w-full focus-within:bg-zinc-950" 
      name="messageTextArea"
      placeholder="Send a Message.."
      value={inputVal}
      onChange={handleInputChange}
      >

      </input>
      <button disabled={isLoading} type="submit" className="btn btn-success ml-4 md:px-12">Send</button>


    </form>
  )
}

export default ChatForm;