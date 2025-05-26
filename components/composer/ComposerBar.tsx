'use client';

import { useState, useRef, useEffect } from 'react';
import { FiSmile, FiPaperclip, FiClock, FiPlus, FiCode, FiSend } from 'react-icons/fi';
import Pill from '@/components/ui/Pill';

interface ComposerBarProps {
  onSendMessage: (text: string) => void;
}

export default function ComposerBar({ onSendMessage }: ComposerBarProps) {
  const [message, setMessage] = useState('');
  // const textareaRef = useRef<HTMLTextAreaElement>(null); // Not needed for input
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };


  return (
    <div className=" ">
      {/* Tabs */}
      <div className="h-11 flex items-center px-4 gap-2 border-b border-gray-200">
        <Pill color="gray" >WhatsApp</Pill>
        <Pill color="gray">Private Note</Pill>
      </div>
      
      {/* Message input and buttons */}
      <div className="bg-white border-b border-gray-200">
        <form 
          className="h-14 flex items-center px-4 gap-3 relative bg-white"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message..."
            className="flex-1 bg-white focus:outline-none placeholder-gray-400 text-sm py-4"
          />
          
          <button
            type="submit"
            className="absolute right-4 bottom-2 w-9 h-9 rounded-full bg-[#34B757] text-white grid place-content-center hover:bg-[#2da14c] transition-colors duration-150"
            aria-label="Send message"
          >
            <FiSend size={18} />
          </button>
        </form>

        <div className="h-11 flex items-center px-4 gap-3 bg-white">
          <button 
            type="button"
            className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Emoji"
          >
            <FiSmile size={20} />
          </button>
          
          <button 
            type="button"
            className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Attach file"
          >
            <FiPaperclip size={20} />
          </button>
          
          <button 
            type="button"
            className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Schedule"
          >
            <FiClock size={20} />
          </button>
          
          <button 
            type="button"
            className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Add more"
          >
            <FiPlus size={20} />
          </button>
          
          <button 
            type="button"
            className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Format code"
          >
            <FiCode size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}