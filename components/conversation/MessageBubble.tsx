import { FiCheck } from 'react-icons/fi';
import { formatMessageTime } from '@/lib/utils';

interface MessageBubbleProps {
  side: 'inbound' | 'outbound';
  sender: string;
  text: string;
  time: Date;
  status?: 'sent' | 'delivered' | 'read' | 'failed';
}

export default function MessageBubble({ side, sender, text, time, status }: MessageBubbleProps) {
  const formattedTime = formatMessageTime(time);
  
  const getStatusIcon = () => {
    if (!status || side === 'inbound') return null;
    
    switch (status) {
      case 'sent':
        return (
          <FiCheck 
            size={14} 
            className="text-gray-500 absolute bottom-2 right-2" 
          />
        );
      case 'delivered':
        return (
          <div className="absolute bottom-2 right-2 flex">
            <FiCheck size={14} className="text-gray-500" />
            <FiCheck size={14} className="text-gray-500 -ml-1" />
          </div>
        );
      case 'read':
        return (
          <div className="absolute bottom-2 right-2 flex">
            <FiCheck size={14} className="text-blue-500" />
            <FiCheck size={14} className="text-blue-500 -ml-1" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex ${side === 'outbound' ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`
          max-w-xs p-3 rounded-lg text-sm shadow-sm relative
          ${side === 'inbound' 
            ? 'bg-white text-gray-900 ml-0 rounded-bl-[2px]' 
            : 'bg-[#E1FEC3] text-gray-900 mr-0 rounded-br-[2px] ml-auto pr-10'
          }
        `}
      >
        {side === 'inbound' && sender && (
          <div className="text-xs font-medium text-green-600 mb-1">{sender}</div>
        )}
        <p className="mb-4">{text}</p>
        <div className="text-[10px] text-gray-500 absolute bottom-1 left-3">
          {formattedTime}
        </div>
        {getStatusIcon()}
      </div>
    </div>
  );
}