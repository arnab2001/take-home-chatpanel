'use client';

import { useEffect, useRef, useState } from 'react';
import MessageBubble from '@/components/conversation/MessageBubble';
import DateDivider from '@/components/conversation/DateDivider';
import ScrollToBottom from '@/components/conversation/ScrollToBottom';
import { Message } from '@/lib/types';
import { groupMessagesByDate } from '@/lib/utils';

interface MessageBodyProps {
  messages: Message[];
}

export default function MessageBody({ messages }: MessageBodyProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  // Scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Track scroll position to show or hide scroll button
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isScrolledUp = scrollHeight - scrollTop - clientHeight > 100;
      setShowScrollButton(isScrolledUp);
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const groupedMessages = groupMessagesByDate(messages);
  
  const bgPattern = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e5e7eb' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`;

  return (
    <div 
      ref={containerRef}
      className="flex-1 overflow-y-auto p-6 space-y-4 relative"
      style={{ backgroundImage: bgPattern, backgroundRepeat: 'repeat' }}
    >
      {Object.entries(groupedMessages).map(([date, messagesForDate]) => (
        <div key={date} className="space-y-4">
          <DateDivider date={date} />
          
          {messagesForDate.map((message) => (
            <MessageBubble
              key={message.id}
              side={message.side}
              sender={message.sender}
              text={message.text}
              time={message.time}
              status={message.status}
            />
          ))}
        </div>
      ))}
      
      <div ref={messagesEndRef} />
      
      {showScrollButton && (
        <ScrollToBottom onClick={scrollToBottom} />
      )}
    </div>
  );
}