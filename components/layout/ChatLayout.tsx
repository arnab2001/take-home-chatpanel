'use client';

import NavRail from '@/components/nav/NavRail';
import ChatListPane from '@/components/chatlist/ChatListPane';
import ConversationPane from '@/components/conversation/ConversationPane';
import { useState } from 'react';
import { mockChats } from '@/lib/mockData';

export default function ChatLayout() {
  const [activeChat, setActiveChat] = useState(mockChats[0]);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      
      <NavRail />
      <ChatListPane 
        chats={mockChats} 
        activeChat={activeChat} 
        onChatSelect={setActiveChat} 
      />
      <ConversationPane 
        chat={activeChat} 
      />
    </div>
  );
}