import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Trash2, Bot, Sparkles, MessageCircle } from 'lucide-react';
import { useChatBot } from './useChatBot';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';
import { BOT_NAME, BOT_TAGLINE } from './chatData';

export const ChatBot = () => {
  const { messages, isTyping, isOpen, messagesEndRef, sendMessage, clearChat, toggleChat } =
    useChatBot();

  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* ─── Floating Toggle Button ─── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            onClick={toggleChat}
            className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 group cursor-pointer"
            aria-label="Open chat assistant"
          >
            <span className="absolute inset-0 rounded-full bg-indigo-500/30 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-indigo-500/20 animate-pulse" />
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-fuchsia-600 flex items-center justify-center shadow-2xl shadow-indigo-500/40 group-hover:shadow-indigo-500/60 ring-2 ring-white/10 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── Chat Window ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-50 flex flex-col bg-slate-950 sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[600px] sm:max-h-[calc(100dvh-3rem)] sm:w-[400px] sm:rounded-3xl sm:border sm:border-white/10 sm:shadow-2xl sm:shadow-black/50 sm:overflow-hidden"
          >
            {/* ─── Header ─── */}
            <div className="relative flex items-center gap-3 px-4 py-4 overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute -bottom-14 -left-10 w-44 h-44 rounded-full bg-black/20 blur-2xl" />
              </div>

              <div className="relative flex items-center gap-3 flex-1 min-w-0">
                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-indigo-600" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[15px] font-bold text-white truncate">{BOT_NAME}</h3>
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  </div>
                  <p className="text-[11px] text-white/80 truncate">{BOT_TAGLINE}</p>
                </div>
              </div>

              <div className="relative flex items-center gap-1">
                <button
                  onClick={clearChat}
                  className="p-2 rounded-lg text-white/80 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                  title="Clear chat"
                >
                  <Trash2 className="w-[18px] h-[18px]" />
                </button>
                <button
                  onClick={toggleChat}
                  className="p-2 rounded-lg text-white/80 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                  title="Close chat"
                >
                  <X className="w-[18px] h-[18px]" />
                </button>
              </div>
            </div>

            {/* ─── Messages Area ─── */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent py-4 bg-gradient-to-b from-slate-950 to-slate-900/50">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}

              {isTyping && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </div>

            {/* ─── Input Area ─── */}
            <div className="border-t border-white/10 bg-slate-900/80 backdrop-blur-sm px-3 py-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Saikat..."
                  disabled={isTyping}
                  className="flex-1 min-w-0 bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-200 disabled:opacity-50"
                  style={{ WebkitAppearance: 'none' }}
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 text-white hover:from-indigo-600 hover:to-fuchsia-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 cursor-pointer shrink-0"
                >
                  <Send className="w-[18px] h-[18px]" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
