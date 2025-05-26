"use client";

import { useState, useEffect } from "react";
import {
  FiRefreshCw,
  FiHelpCircle,
  FiStar,
  FiSearch,
  FiEdit2,
  FiList,
} from "react-icons/fi";
import IconButton from "@/components/ui/IconButton";
import { MdInstallDesktop } from "react-icons/md";
import { FaBellSlash } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { LuList } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import Pill from "@/components/ui/Pill";
import ConvHeader from "@/components/conversation/ConvHeader";
import MessageBody from "@/components/conversation/MessageBody";
import ComposerBar from "@/components/composer/ComposerBar";
import { Chat, Message } from "@/lib/types";
import chatBg from "@/public/test-bg.svg";

interface ConversationPaneProps {
  chat: Chat;
}

export default function ConversationPane({ chat }: ConversationPaneProps) {
  // Initialize messages state, sorting them by time
  const [messages, setMessages] = useState<Message[]>(
    chat.messages
      ? [...chat.messages].sort((a, b) => a.time.getTime() - b.time.getTime())
      : []
  );

  // Update messages and sort them when chat changes
  useEffect(() => {
    setMessages(
      chat.messages
        ? [...chat.messages].sort((a, b) => a.time.getTime() - b.time.getTime())
        : []
    );
  }, [chat]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      text,
      side: "outbound" as const,
      sender: "You",
      time: new Date(),
      status: "sent",
    };

    // Add the new message and re-sort
    setMessages((prevMessages) =>
      [...prevMessages, newMessage].sort(
        (a, b) => a.time.getTime() - b.time.getTime()
      )
    );
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-white">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url(${chatBg.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "320px 600px",
        }}
      />
      {/* Global Toolbar */}
      <div className="h-12 bg-white relative z-10 border-b border-gray-200 flex items-center justify-end gap-3 px-4">
        <div className="text-yellow-800 border-gray-200 border rounded-sm p-2">
          <div className="flex items-center gap-2">
            <FiRefreshCw size={14} />
            <span className="text-xs font-medium">Refresh</span>
          </div>
        </div>

        <div className="text-yellow-800 border-gray-200 border rounded-sm p-2">
          <div className="flex items-center gap-2">
            <FiHelpCircle size={14} />
            <span className="text-xs font-medium">Help</span>
          </div>
        </div>
        <div className="text-yellow-800 border-gray-200 border rounded-sm p-2 ">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />

            <span className="text-xs font-medium">5 / 6 phones</span>

            <MdKeyboardArrowDown size={14} />
          </div>
        </div>

        <div className="text-yellow-800 border-gray-200 border rounded-sm p-2">
          <div className="flex items-center gap-2">
            <MdInstallDesktop size={14} />
       
          </div>
        </div>

        <div className="text-yellow-800 border-gray-200 border rounded-sm p-2">
          <div className="flex items-center gap-2">
            <FaBellSlash size={14} />

          </div>
        </div>
        <div className="text-yellow-800 border-gray-200 border rounded-sm p-2">
          <div className="flex items-center gap-2">
            <BsStars size={14} color="gold" />
            <LuList size={14} />

          </div>
        </div>

        
      </div>

      <ConvHeader chat={chat} />
      <MessageBody messages={messages} />
      <ComposerBar onSendMessage={handleSendMessage} />

      {/* Side Toolbar */}
    </div>
  );
}
