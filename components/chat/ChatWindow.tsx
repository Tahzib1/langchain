import ChatForm from "./ChatForm";

type Props = {
  children?: React.ReactNode | Array<React.ReactNode>
}

const ChatWindow = ({children}: Props) => {
  return (
    <div className="h-3/4">
    <div className="bg-black h-full p-4 overflow-y-auto">
          {children}
    </div>

    <div className="w-5/6 mx-auto mt-4 ">
      <ChatForm />
    </div>
    </div>
  )
}

export default ChatWindow;