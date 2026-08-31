import { BOT_NAME } from './chatData';

export const TypingIndicator = () => {
  return (
    <div className="flex items-start gap-2.5 px-4">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
        <span className="text-[10px] font-bold text-white">SA</span>
      </div>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] text-indigo-400 font-medium">{BOT_NAME}</span>
        </div>
        <div className="flex gap-1.5 items-center h-5">
          <span
            className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
            style={{ animationDelay: '0ms' }}
          />
          <span
            className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
            style={{ animationDelay: '150ms' }}
          />
          <span
            className="w-2 h-2 rounded-full bg-pink-400 animate-bounce"
            style={{ animationDelay: '300ms' }}
          />
        </div>
      </div>
    </div>
  );
};
