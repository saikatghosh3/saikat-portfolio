import { motion } from 'framer-motion';
import type { Message } from './useChatBot';
import { BOT_NAME } from './chatData';

interface ChatMessageProps {
  message: Message;
}

function parseMarkdown(text: string): string {
  return text
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="chatbot-strong">$1</strong>',
    )
    .replace(
      /`(.*?)`/g,
      '<code class="chatbot-code">$1</code>',
    )
    .replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="chatbot-link">$1</a>',
    )
    .replace(/\n/g, '<br />');
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.sender === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`flex items-start gap-2.5 px-4 mb-4 ${
        isBot ? '' : 'flex-row-reverse'
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-lg ${
          isBot
            ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/20'
            : 'bg-gradient-to-br from-slate-600 to-slate-700 shadow-black/30'
        }`}
      >
        <span className="text-[10px] font-bold text-white">
          {isBot ? 'SA' : 'YOU'}
        </span>
      </div>

      {/* Message Bubble */}
      <div className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} max-w-[82%]`}>
        {isBot && (
          <span className="text-[10px] text-indigo-400/80 font-medium ml-1 mb-1 tracking-wide uppercase">
            {BOT_NAME}
          </span>
        )}
        <div
          className={`rounded-2xl px-4 py-3 text-[13px] leading-relaxed shadow-lg ${
            isBot
              ? 'bg-white/[0.06] backdrop-blur-sm border border-white/10 text-gray-200 rounded-tl-md shadow-black/20'
              : 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-tr-md shadow-indigo-500/20'
          }`}
        >
          {isBot && message.isMarkdown ? (
            <div
              className="chatbot-markdown"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(message.text) }}
            />
          ) : (
            <span>{message.text}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
