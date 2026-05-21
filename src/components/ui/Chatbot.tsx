import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Welcome to Kistoper! 👋 I'm your export assistant. How can I help you today? I can provide info on our Handcrafted Lamps, Designer Footwear, or Export Services powered by Shivansh International.", sender: 'bot' }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Mock bot response using company profile info
    setTimeout(() => {
      let response = "I'm sorry, I don't have that information. Please contact Sushil Kumar Gaur at +91 9058439992 for direct inquiries.";
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('lamp') || lowerInput.includes('glass')) {
        response = "We specialize in Handcrafted Mosaic Glass Lamps, including table, hanging, and floor varieties. You can find them in our Shop!";
      } else if (lowerInput.includes('shoe') || lowerInput.includes('footwear')) {
        response = "Our Designer Footwear collection features premium articles crafted for export. Check out the Designer Shoes category in our Shop.";
      } else if (lowerInput.includes('service') || lowerInput.includes('clearance') || lowerInput.includes('iec')) {
        response = "We provide expert Custom Clearance, IEC/DGFT licensing, and Embassy Legalization services. Our head office is in Agra, India.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('email')) {
        response = "You can reach us at +91 9058439992 or email shivanshinternationalagra@gmail.com. We are located at 95- Surya Lok Colony, Mau Road, Agra.";
      }

      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        text: response, 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Shivansh Assistant</h3>
                  <p className="text-brand-200 text-xs">Expert Export Support</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-brand-100 text-brand-700' : 'bg-white border border-gray-200 text-brand-900'}`}>
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`px-4 py-2.5 rounded-2xl max-w-[75%] text-sm ${msg.sender === 'user' ? 'bg-brand-900 text-white rounded-tr-sm' : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm shadow-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about lamps, shoes, services..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 bg-brand-900 text-white rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-800 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
