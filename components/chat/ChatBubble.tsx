type Props = {
  role: "function" | "system" | "user" | "assistant";
  content: string;
  sql?: string;
}
const ChatBubble = ({content, role, sql}: Props) => {
  const isAi = role === "system" || role === "assistant";


  const startBubble = 
  <div className="chat chat-start">
    <div className="chat-bubble chat-bubble-primary md:text-lg md:max-w-1/2 text-primary-content">
    {content}
    {sql && 
      <div className="mt-4">
        <div>SQL</div>
        <div className="font-bold">{sql}</div>
      </div>
    }
    </div>
  </div>

  const endBubble = 
  <div className="chat chat-end">
    <div className="chat-bubble chat-bubble-info md:text-lg md:max-w-1/2">{content}</div>
  </div>

  const bubble = isAi ? startBubble : endBubble;


  return bubble;
}

export default ChatBubble;