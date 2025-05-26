import { Chat, Message } from './types';

// Helper to create dates in the past
const daysAgo = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};

// Helper to create times today
const timeToday = (hours: number, minutes: number): Date => {
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
};

export const mockChats: Chat[] = [
  {
    id: 'chat1',
    name: 'Test El Centro',
    preview: 'Roshnag Airtel: The meeting is scheduled for tomorrow at 10 AM',
    timestamp: timeToday(11, 54),
    avatar: '👥',
    avatarColor: 'bg-blue-100 text-blue-800',
    participants: 8,
    messages: [
      {
        id: 'msg1',
        side: 'inbound',
        sender: 'Roshnag Airtel',
        text: 'The meeting is scheduled for tomorrow at 10 AM',
        time: timeToday(11, 51),
        status: 'read'
      },
      {
        id: 'msg2',
        side: 'outbound',
        sender: 'You',
        text: 'Perfect, I\'ll be there. Can you share the agenda?',
        time: timeToday(11, 52),
        status: 'read'
      },
      {
        id: 'msg3',
        side: 'inbound',
        sender: 'Roshnag Airtel',
        text: 'Sure, I\'ll send it in a few minutes',
        time: timeToday(11, 54),
        status: 'read'
      }
    ]
  },
  {
    id: 'chat2',
    name: 'Marketing Team',
    preview: 'Sarah: The new campaign design is ready for review',
    timestamp: timeToday(10, 30),
    label: 'Work',
    avatar: '🎯',
    avatarColor: 'bg-purple-100 text-purple-800',
    participants: 12,
    unread: 4,
    messages: [
      // existing messages
      {
        id: 'msg4',
        side: 'inbound',
        sender: 'Sarah',
        text: 'The new campaign design is ready for review',
        time: timeToday(10, 30),
        status: 'read',
      },
      {
        id: 'msg5',
        side: 'inbound',
        sender: 'Mike',
        text: 'Great! Can you share the link?',
        time: timeToday(10, 32),
        status: 'read',
      },
      {
        id: 'msg6',
        side: 'inbound',
        sender: 'Sarah',
        text: 'Here’s the link: design.campaign.com/review',
        time: timeToday(10, 33),
        status: 'read',
      },
      {
        id: 'msg7',
        side: 'outbound',
        sender: 'You',
        text: 'I’ll take a look and provide feedback by EOD',
        time: timeToday(10, 35),
        status: 'read',
      },
  
      // new messages
      {
        id: 'msg8',
        side: 'inbound',
        sender: 'Alex',
        text: 'Thanks! Also uploading the slide deck now…',
        time: timeToday(11, 15),
        status: 'delivered',
      },
      {
        id: 'msg9',
        side: 'inbound',
        sender: 'Alex',
        text: '',
        attachmentUrl: 'https://example.com/slides-deck.pdf',
        type: 'file',
        time: timeToday(11, 16),
        status: 'delivered',
      },
      {
        id: 'msg10',
        side: 'outbound',
        sender: 'You',
        text: 'Received the PDF, thanks!',
        time: timeToday(11, 18),
        status: 'read',
        replyTo: 'msg9',
      },
      {
        id: 'msg11',
        side: 'outbound',
        sender: 'You',
        text: '',
        attachmentUrl: 'https://picsum.photos/400/200',
        type: 'image',
        time: timeToday(11, 20),
        status: 'read',
      },
      {
        id: 'msg12',
        side: 'inbound',
        sender: 'Sarah',
        text: 'Nice screenshot! That definitely highlights our key point.',
        time: timeToday(11, 22),
        status: 'read',
        replyTo: 'msg11',
      },
  
      // messages from yesterday
      {
        id: 'msg13',
        side: 'inbound',
        sender: 'Mike',
        text: 'Don’t forget the client call at 2 PM today.',
        time: daysAgo(1),
        status: 'read',
      },
      {
        id: 'msg14',
        side: 'outbound',
        sender: 'You',
        text: 'On it! I’ll prepare the presentation slides before then.',
        time: daysAgo(1),
        status: 'read',
      },
  
      // a failed delivery example
      {
        id: 'msg15',
        side: 'outbound',
        sender: 'You',
        text: 'Quick question: are we using the new logo assets?',
        time: daysAgo(2),
        status: 'failed',
      },
      {
        id: 'msg16',
        side: 'inbound',
        sender: 'Sarah',
        text: 'Yes, we migrated to the updated logo pack yesterday.',
        time: daysAgo(2),
        status: 'read',
        replyTo: 'msg15',
      },
    ],
  },
  {
    id: 'chat3',
    name: 'Family Group',
    preview: 'Mom: Don\'t forget about Sunday dinner!',
    timestamp: daysAgo(1),
    label: 'Family',
    labelColor: 'bg-green-100 text-green-600',
    avatar: '👨‍👧‍👦',
    avatarColor: 'bg-green-100 text-green-800',
    messages: [
      {
        id: 'msg8',
        side: 'inbound',
        sender: 'Mom',
        text: 'Don\'t forget about Sunday dinner!',
        time: daysAgo(1),
        status: 'read'
      },
      {
        id: 'msg9',
        side: 'inbound',
        sender: 'Dad',
        text: 'I\'ll bring the wine 🍷',
        time: daysAgo(1),
        status: 'read'
      },
      {
        id: 'msg10',
        side: 'outbound',
        sender: 'You',
        text: 'I\'ll be there! What should I bring?',
        time: daysAgo(1),
        status: 'read'
      }
    ]
  },
  {
    id: 'chat4',
    name: 'Project Alpha',
    preview: 'Alex: The deployment was successful',
    timestamp: timeToday(9, 15),
    label: 'Project',
    labelColor: 'bg-orange-100 text-orange-600',
    avatar: '🚀',
    avatarColor: 'bg-orange-100 text-orange-800',
    participants: 5,
    attachmentType: 'file',
    messages: [
      {
        id: 'msg11',
        side: 'inbound',
        sender: 'Alex',
        text: 'The deployment was successful',
        time: timeToday(9, 15),
        status: 'read'
      },
      {
        id: 'msg12',
        side: 'inbound',
        sender: 'Alex',
        text: 'Here\'s the deployment report 📎',
        time: timeToday(9, 16),
        status: 'read'
      },
      {
        id: 'msg13',
        side: 'outbound',
        sender: 'You',
        text: 'Great work! Let\'s monitor the metrics',
        time: timeToday(9, 20),
        status: 'read'
      }
    ]
  },
  {
    id: 'chat5',
    name: 'Customer Support',
    preview: 'Support: Your ticket #1234 has been resolved',
    timestamp: timeToday(8, 45),
    label: 'Support',
    labelColor: 'bg-red-100 text-red-600',
    avatar: '🎧',
    avatarColor: 'bg-red-100 text-red-800',
    number: '+1 800-123-4567',
    numberSuffix: '2',
    messages: [
      {
        id: 'msg14',
        side: 'inbound',
        sender: 'Support',
        text: 'Your ticket #1234 has been resolved',
        time: timeToday(8, 45),
        status: 'read'
      },
      {
        id: 'msg15',
        side: 'outbound',
        sender: 'You',
        text: 'Thank you for your help!',
        time: timeToday(8, 46),
        status: 'read'
      },
      {
        id: 'msg16',
        side: 'inbound',
        sender: 'Support',
        text: 'You\'re welcome! Is there anything else we can help you with?',
        time: timeToday(8, 47),
        status: 'read'
      }
    ]
  },
  {
    id: 'chat6',
    name: 'Photo Share',
    preview: 'You shared a photo',
    timestamp: timeToday(15, 12),
    avatar: '🖼️',
    avatarColor: 'bg-yellow-100 text-yellow-800',
    participants: 2,
    unread: 2,
    messages: [
      {
        id: 'msg17',
        side: 'inbound',
        sender: 'Friend',
        text: '',
        attachmentUrl: 'https://picsum.photos/200/300',
        type: 'image',
        time: timeToday(15, 10),
        status: 'read',
      },
      {
        id: 'msg18',
        side: 'outbound',
        sender: 'You',
        text: 'Cool shot! 📸',
        time: timeToday(15, 12),
        status: 'delivered',
      },
    ],
  },
  {
    id: 'chat7',
    name: 'Video Clips',
    preview: 'You sent a video',
    timestamp: daysAgo(2),
    avatar: '🎬',
    avatarColor: 'bg-pink-100 text-pink-800',
    participants: 3,
    messages: [
      {
        id: 'msg19',
        side: 'outbound',
        sender: 'You',
        text: '',
        attachmentUrl: 'https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4',
        type: 'video',
        time: daysAgo(2),
        status: 'read',
      },
      {
        id: 'msg20',
        side: 'inbound',
        sender: 'Colleague',
        text: 'Looks great! 👍',
        time: daysAgo(2),
        status: 'read',
      },
    ],
  },

  // 8. File Transfer chat
  {
    id: 'chat8',
    name: 'File Transfer',
    preview: 'Project spec.pdf',
    timestamp: timeToday(8, 0),
    avatar: '📁',
    avatarColor: 'bg-gray-100 text-gray-800',
    participants: 4,
    messages: [
      {
        id: 'msg21',
        side: 'inbound',
        sender: 'Alice',
        text: '',
        attachmentUrl: 'https://example.com/spec.pdf',
        type: 'file',
        time: timeToday(7, 58),
        status: 'read',
      },
      {
        id: 'msg22',
        side: 'outbound',
        sender: 'You',
        text: 'Got it, thanks! I’ll review and get back by EOD.',
        time: timeToday(8, 0),
        status: 'read',
      },
    ],
  },

];

export const mockMessages: Message[] = [
  {
    id: 'msg1',
    side: 'inbound',
    sender: 'Roshnag Airtel',
    text: 'The meeting is scheduled for tomorrow at 10 AM',
    time: timeToday(11, 51),
    status: 'read'
  },
  {
    id: 'msg2',
    side: 'outbound',
    sender: 'You',
    text: 'Perfect, I\'ll be there. Can you share the agenda?',
    time: timeToday(11, 52),
    status: 'read'
  },
  {
    id: 'msg3',
    side: 'inbound',
    sender: 'Roshnag Airtel',
    text: 'Sure, I\'ll send it in a few minutes',
    time: timeToday(11, 54),
    status: 'read'
  }
];