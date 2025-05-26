import { FiRefreshCw, FiHelpCircle, FiSearch, FiStar } from 'react-icons/fi';
import { WiStars } from "react-icons/wi";
import IconButton from '@/components/ui/IconButton';
import Pill from '@/components/ui/Pill';
import { Chat } from '@/lib/types';

interface ConvHeaderProps {
  chat: Chat;
}

export default function ConvHeader({ chat }: ConvHeaderProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="h-12 bg-white z-10 border-b border-gray-200 flex items-center justify-between px-4">
      {/* Left side - Chat info */}
      <div className="flex items-center">
        <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center text-sm font-semibold text-green-800 mr-3">
          {chat.avatar || getInitials(chat.name)}
        </div>
        <div>
          <h2 className="text-sm font-medium">{chat.name}</h2>
          <p className="text-xs text-gray-500">
            {chat.participants ? 
              `${chat.participants} participants` : 
              'Last seen today at 12:45 PM'}
          </p>
        </div>
      </div>
      
      {/* Right side - Actions */}
      <div className="flex items-center gap-2">

        {/* Avatar stack */}
        <div className="flex -space-x-2 ml-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
            >
              {String.fromCharCode(64 + i)}
            </div>
          ))}
          <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
            +2
          </div>
        </div>
        
        <IconButton icon={<WiStars size={30} />} label="Star" />
        <IconButton icon={<FiSearch size={18} />} label="Search" />
      
      </div>
    </header>
  );
}