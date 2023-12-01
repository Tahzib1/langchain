type Props = {
  isStart: boolean;
  content: string;
}
const ChatBubble = ({isStart, content}: Props) => {
  const startBubble = 
  <div className="chat chat-start">
    <div className="chat-bubble chat-bubble-primary text-lg">{content}</div>
  </div>

  const endBubble = 
  <div className="chat chat-end">
    <div className="chat-bubble chat-bubble-info text-lg">{content}</div>
  </div>
  const bubble = isStart ? startBubble : endBubble;


  return bubble;
}

export default ChatBubble;