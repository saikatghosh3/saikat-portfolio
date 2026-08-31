import { useState, useCallback, useRef, useEffect } from 'react';
import {
  chatCategories,
  FALLBACK_RESPONSES,
  GREETINGS,
  TYPING_DELAY,
  type ChatIntent,
} from './chatData';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isMarkdown?: boolean;
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function getRandomDelay(): number {
  return (
    Math.floor(Math.random() * (TYPING_DELAY.max - TYPING_DELAY.min + 1)) +
    TYPING_DELAY.min
  );
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[?!.,;:'"()]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[?!.,;:'"()]/g, '')
    .trim();
}

/**
 * Score every intent against the user input and return the best match.
 * This makes matching much more powerful than simple first-match
 * because it handles trailing/filler words like "tell me about his",
 * verb forms (skill vs skills), and prioritizes the most relevant intent.
 */
function matchIntent(userInput: string): { response: string; followUp?: string[] } | null {
  const normalized = normalize(userInput);
  const inputTokens = tokenize(userInput);
  const inputTokenSet = new Set(inputTokens);

  let bestIntent: ChatIntent | null = null;
  let bestScore = 0;

  for (const category of chatCategories) {
    for (const intent of category.intents) {
      for (const pattern of intent.patterns) {
        const patternNorm = normalize(pattern);
        const patternTokens = tokenize(pattern);
        let score = 0;

        // Exact full-phrase match (highest priority)
        if (normalized === patternNorm) {
          score = 100;
        }
        // Input contains the pattern as a substring
        // (also matches "skill" found inside "skills")
        else if (patternNorm.length > 2 && normalized.includes(patternNorm)) {
          score = 60;
        }

        // Multi-word patterns: count how many words show up
        if (patternTokens.length > 1) {
          const matchedTokens = patternTokens.filter((t) => inputTokenSet.has(t)).length;
          score = Math.max(
            score,
            (matchedTokens / patternTokens.length) * 50 + matchedTokens * 5,
          );
        }
        // Single-word pattern found as a token
        else {
          if (inputTokenSet.has(patternNorm)) {
            score = Math.max(score, 35);
          }
          // Handle plural/singular variants via prefix match
          else if (patternNorm.length > 3 && inputTokens.some((t) => t.startsWith(patternNorm) || patternNorm.startsWith(t))) {
            score = Math.max(score, 25);
          }
        }

        // Keep the best overall
        if (score > bestScore) {
          bestScore = score;
          bestIntent = intent;
        }
      }
    }
  }

  if (bestIntent && bestScore >= 25) {
    return { response: bestIntent.response, followUp: bestIntent.followUp };
  }

  return null;
}

export function useChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const addBotMessage = useCallback((text: string) => {
    const botMsg: Message = {
      id: generateId(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      isMarkdown: true,
    };
    setMessages((prev) => [...prev, botMsg]);
  }, []);

  const sendGreeting = useCallback(() => {
    if (messages.length === 0) {
      addBotMessage(pickRandom(GREETINGS));
    }
  }, [messages.length, addBotMessage]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      const userMsg: Message = {
        id: generateId(),
        text: text.trim(),
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      const delay = getRandomDelay();

      setTimeout(() => {
        const result = matchIntent(text);

        if (result) {
          addBotMessage(result.response);
        } else {
          addBotMessage(pickRandom(FALLBACK_RESPONSES));
        }

        setIsTyping(false);
      }, delay);
    },
    [addBotMessage],
  );

  const clearChat = useCallback(() => {
    setMessages([]);
    setIsTyping(false);
    setTimeout(() => {
      addBotMessage(pickRandom(GREETINGS));
    }, 300);
  }, [addBotMessage]);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => {
      if (!prev) {
        setTimeout(sendGreeting, 100);
      }
      return !prev;
    });
  }, [sendGreeting]);

  return {
    messages,
    isTyping,
    isOpen,
    messagesEndRef,
    sendMessage,
    clearChat,
    toggleChat,
  };
}
