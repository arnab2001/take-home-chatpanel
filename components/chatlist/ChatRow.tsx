import { FiMic, FiPaperclip, FiCheck } from 'react-icons/fi';
import { Chat } from '@/lib/types';
import { formatChatTime } from '@/lib/utils';

interface ChatRowProps {
  chat: Chat;
  isActive: boolean;
  onClick: () => void;
}

export default function ChatRow({ chat, isActive, onClick }: ChatRowProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
  
  const getAttachmentIcon = (type?: string) => {
    if (!type) return null;
    
    switch (type) {
      case 'voice':
        return <FiMic size={14} className="text-gray-500" />;
      case 'file':
        return <FiPaperclip size={14} className="text-gray-500" />;
      case 'sent':
        return (
          <div className="flex">
            <FiCheck size={14} className="text-gray-500" />
            <FiCheck size={14} className="text-gray-500 -ml-1" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`h-20 grid grid-cols-[48px_1fr_auto] gap-3 px-4 py-2 cursor-pointer transition-colors duration-150 ${
        isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      {/* Avatar */}
      <div 
        className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold ${
          chat.avatarColor || 'bg-green-100 text-green-800'
        }`}
      >
        {chat.avatar || getInitials(chat.name)}
      </div>
      
      {/* Chat info */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center">
          <span className="text-sm font-medium truncate">{chat.name}</span>
          {chat.label && (
            <span className={`ml-2 text-xs px-1.5 py-0.5 rounded ${
              chat.labelColor || 'bg-gray-100 text-gray-600'
            }`}>
              {chat.label}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500 truncate">{chat.preview}</p>
        {chat.number && (
          <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
            {chat.number}
            {chat.numberSuffix && <span>+{chat.numberSuffix}</span>}
          </p>
        )}
      </div>
      
      {/* Right column */}
      <div className="flex flex-col items-end justify-between py-1">
        <span className="text-xs text-gray-500">{formatChatTime(chat.timestamp)}</span>
        <div className="flex items-center">
          {chat.unread ? (
            <span className="bg-green-500 text-white text-xs h-5 min-w-5 px-1.5 rounded-full flex items-center justify-center">
              {chat.unread}
            </span>
          ) : (
            getAttachmentIcon(chat.attachmentType)
          )}
        </div>
      </div>
    </div>
  );
}