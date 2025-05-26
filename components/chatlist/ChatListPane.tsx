"use client";

import { useState } from "react";
import { FiSearch, FiChevronRight, FiRefreshCw, FiX } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";
import Pill from "@/components/ui/Pill";
import ChatRow from "@/components/chatlist/ChatRow";
import { Chat } from "@/lib/types";
import chatBg from "@/public/chat-bg.svg";

interface ChatListPaneProps {
  chats: Chat[];
  activeChat: Chat;
  onChatSelect: (chat: Chat) => void;
}

// New FilteredButton component
interface FilteredButtonProps {
  onClear: () => void;
}

function FilteredButton({ onClear }: FilteredButtonProps) {
  return (
    <button
      className="flex items-center bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200"
      onClick={onClear}
    >
      <BsFilter size={12} className="mr-1 text-green-600" />
      Filtered
      <FiX size={12} className="ml-1 text-green-600" />
    </button>
  );
}

export default function ChatListPane({
  chats,
  activeChat,
  onChatSelect,
}: ChatListPaneProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"chats" | "contacts">("chats");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [showFiltered, setShowFiltered] = useState(false);

  const filteredChats = searchQuery
    ? chats.filter(
        (chat) =>
          chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          chat.preview.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : chats;

  const clearSearch = () => {
    setSearchQuery("");
    setIsSearchExpanded(false);
  };

  const toggleFiltered = () => {
    setShowFiltered(!showFiltered);
  };

  const clearFiltered = () => {
    setShowFiltered(false);
  };

  return (
    <div className="w-[20%] h-full  bg-white flex flex-col overflow-hidden relative">
      {/* Toggle bar */}
      <div
        className={`absolute left-0 w-0.5 h-full bg-green-500 transition-transform duration-200 ${
          view === "contacts" ? "translate-y-[56px]" : ""
        }`}
      />

      {/* Header */}
      <div className="h-12 border-b border-gray-200 flex items-center px-4 gap-4"></div>

      {/* Search and Refresh Section */}
      <div className="px-4 py-1 border border-gray-200 border-r border-gray-200">
        <div className="flex items-center justify-between">
          {/* Left side buttons */}
          <div className="flex items-center justify-left gap-1">
            <button
              className="text-green-600 text-sm font-medium flex items-center  hover:bg-gray-50  py-1 rounded"
              onClick={toggleFiltered}
            >
              <BsFilter size={14} />
              <span>Custom filter</span>
            </button>

            <div className="text-yellow-800 border-gray-200 border rounded-sm px-2">
              <div className="flex items-center gap-2">
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Save
                </a>
              </div>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center">
            <div
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className="text-yellow-800 border-gray-200 border rounded-sm p-1 hover:bg-gray-50 flex items-center gap-2"
            >
              <FiSearch size={14} />
              <span className="text-xs font-medium">Refresh</span>
            </div>

            {searchQuery && <FilteredButton onClear={clearSearch} />}
          </div>
          {showFiltered && (
            <div className="flex items-center bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200">
              <BsFilter size={12} className="mr-1 text-green-600" />
              Filtered
              <button
                onClick={clearFiltered}
                className="ml-1 text-green-600 hover:text-green-700"
              >
                <FiX size={12} />
              </button>
            </div>
          )}
        </div>

        {/* Search Input (shown when expanded) */}
        {isSearchExpanded && (
          <div className="mt-2 relative">
            <FiSearch
              className="absolute left-3 top-2.5 text-gray-400"
              size={15}
            />
            <input
              type="text"
              placeholder="Search"
              className="h-8 w-full rounded-md border border-gray-300 pl-9 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FiX size={16} />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto border-r border-gray-200">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className={`relative ${
              activeChat.id === chat.id
                ? "bg-[#F2F7F2] border-l-2 border-green-500"
                : ""
            }`}
          >
            <ChatRow
              chat={chat}
              isActive={activeChat.id === chat.id}
              onClick={() => onChatSelect(chat)}
            />
            <FiChevronRight
              size={12}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
