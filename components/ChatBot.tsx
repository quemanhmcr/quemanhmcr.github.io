import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2, Bot, Trash2, RefreshCw } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { MY_PROFILE } from '../constants';

interface ChatBotProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

// Helper component for Typewriter effect with simple Markdown support (Bold)
const TypewriterText = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText('');
    
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        currentIndex++;
        setDisplayedText(text.slice(0, currentIndex));
      } else {
        clearInterval(intervalId);
        if (onComplete) onComplete();
      }
    }, 10); // Speed of typing

    return () => clearInterval(intervalId);
  }, [text]);

  // Simple parser for **bold**
  const parseMarkdown = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-blue-300 font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return <span className="whitespace-pre-wrap">{parseMarkdown(displayedText)}</span>;
};

// Helper to render static text with markdown
const FormattedText = ({ text }: { text: string }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <span className="whitespace-pre-wrap">
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index} className="text-blue-300 font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </span>
  );
};

export const ChatBot: React.FC<ChatBotProps> = ({ isOpen, setIsOpen }) => {
  const initialMessage: ChatMessage = {
    role: 'model',
    text: `Chào bạn! Tôi là trợ lý ảo của ${MY_PROFILE.name}. Bạn muốn tìm hiểu thêm thông tin gì về kinh nghiệm hay các dự án nghiên cứu của tôi?`,
    timestamp: new Date()
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [isTyping, setIsTyping] = useState(false); // Track if typewriter is active
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowBubble(false);
    }
  }, [messages, isOpen, isTyping]); // Scroll when typing updates size

  // Hide bubble after 10 seconds automatically if not clicked
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for API (exclude error messages)
      const history = messages
        .filter(m => !m.isError)
        .slice(-10)
        .map(m => ({ role: m.role, text: m.text }));
      
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(true); // Start typewriter effect
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Xin lỗi, kết nối tín hiệu bị gián đoạn. Vui lòng thử lại.", timestamp: new Date(), isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    if (window.confirm("Reset communication channel?")) {
      setMessages([initialMessage]);
      setIsTyping(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Trigger Button (Only visible when closed) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
          
          {/* Suggestion Bubble */}
          {showBubble && (
            <div className="hidden md:flex bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm animate-bounce shadow-lg items-center gap-2">
              <Sparkles size={14} className="text-yellow-400" />
              <span>Hỏi tôi về kinh nghiệm RAG nhé!</span>
            </div>
          )}

          <button
            onClick={() => setIsOpen(true)}
            className="relative p-4 bg-black/80 backdrop-blur-xl text-white rounded-full border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-110 transition-all duration-300 group"
          >
            <Bot size={28} className="group-hover:text-blue-400 transition-colors" />
            <span className="absolute inset-0 rounded-full border border-blue-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
            {/* Online Status Indicator */}
            <span className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full border border-black"></span>
          </button>
        </div>
      )}

      {/* Main Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] flex flex-col bg-[#0a0a10]/95 backdrop-blur-xl rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden border border-blue-500/20 transition-all duration-500 animate-in slide-in-from-bottom-10 fade-in">
          
          {/* Header */}
          <div className="p-4 border-b border-blue-500/10 flex justify-between items-center bg-gradient-to-r from-blue-900/20 to-transparent">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-full relative overflow-hidden group">
                <Bot className="text-blue-400 relative z-10" size={20} />
                <div className="absolute inset-0 bg-blue-400/20 blur-md animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-white text-sm tracking-wide">VIRTUAL ASSISTANT</h3>
                <p className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  ONLINE
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={handleClearChat}
                title="Reset Chat"
                className="p-2 text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-full transition-all"
              >
                <Trash2 size={16} />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-blue-900/50 scrollbar-track-transparent">
            {messages.map((msg, idx) => {
              const isLast = idx === messages.length - 1;
              // Only use typewriter for the LAST message, and only if it's from the model and we are in "typing" state
              // Or if it's the initial message upon reset
              const useTypewriter = isLast && msg.role === 'model' && isTyping;

              return (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex flex-col max-w-[85%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    
                    {/* Role Label */}
                    <span className="text-[10px] text-gray-500 mb-1 font-mono uppercase flex items-center gap-2">
                      {msg.role === 'user' ? (
                        <>YOU</>
                      ) : (
                        <>ASSISTANT</>
                      )}
                    </span>

                    <div
                      className={`p-3 rounded-xl text-sm leading-relaxed backdrop-blur-sm border shadow-sm whitespace-pre-wrap ${
                        msg.role === 'user'
                          ? 'bg-blue-600/20 border-blue-500/30 text-blue-50 rounded-tr-sm'
                          : 'bg-white/5 border-white/10 text-gray-200 rounded-tl-sm'
                      }`}
                    >
                      {useTypewriter ? (
                        <TypewriterText text={msg.text} onComplete={() => setIsTyping(false)} />
                      ) : (
                        <FormattedText text={msg.text} />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Thinking Indicator */}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in slide-in-from-left-2 duration-300">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl rounded-tl-sm flex items-center gap-3">
                  <Loader2 size={16} className="animate-spin text-blue-400" />
                  <span className="text-xs font-mono text-blue-300 animate-pulse">THINKING...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-blue-500/10 bg-black/40">
            <div className="relative flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading || isTyping}
                placeholder={isTyping ? "Assistant is typing..." : "Type your message..."}
                className="flex-1 bg-blue-900/10 border border-blue-500/20 rounded-lg px-4 py-3 text-sm text-white placeholder-blue-200/30 focus:outline-none focus:border-blue-500/50 focus:bg-blue-900/20 transition-all font-mono disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim() || isTyping}
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};