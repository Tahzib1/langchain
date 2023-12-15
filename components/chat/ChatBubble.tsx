import { Message } from "ai";

type Props = {
  role: "function" | "system" | "user" | "assistant";
  content: string;
  sql?: string;
  isFirstMessage?: boolean;
  handleSuggestedPromptsClick: (text: string) => void;
  isLoading: boolean;
}
const ChatBubble = ({content, role, sql, isFirstMessage, handleSuggestedPromptsClick, isLoading}: Props) => {
  const isAi = role === "system" || role === "assistant";

  const suggestedMessages = [
    'What tables are in the database?',
    'Can you list all the movies?',
    'Can you list all the actors?'
  ]
  const startBubble = 
  <div className="chat chat-start">
    <div className="chat-bubble chat-bubble-primary md:text-lg md:max-w-1/2 text-primary-content mb-4">
    {content}
    {sql && 
      <div className="mt-4">
        <div>Here is how i came up with this result:</div>
        <div className="font-bold">{sql}</div>
      </div>
    }
    {isFirstMessage && 
    <div className="grid grid-cols-2 gap-2 mt-4">
      <button className="btn btn-sm btn-outline text-secondary-content hover:bg-white" disabled={isLoading} onClick={() => handleSuggestedPromptsClick(suggestedMessages[0])} >{suggestedMessages[0]}</button>
      <button className="btn btn-sm btn-outline text-secondary-content hover:bg-white" disabled={isLoading} onClick={() => handleSuggestedPromptsClick(suggestedMessages[1])} >{suggestedMessages[1]}</button>
      <button className="btn btn-sm btn-outline text-secondary-content hover:bg-white" disabled={isLoading} onClick={() => handleSuggestedPromptsClick(suggestedMessages[2])} >{suggestedMessages[2]}</button>
    </div>
    }
    </div>
  </div>

  const endBubble = 
  <div className="chat chat-end">
    <div className="chat-bubble chat-bubble-info md:text-lg md:max-w-1/2 mb-4">{content}</div>
  </div>

  const bubble = isAi ? startBubble : endBubble;


  return bubble;
}

export default ChatBubble;