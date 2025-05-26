export interface Chat {
  id: string;
  name: string;
  preview: string;
  timestamp: Date;
  unread?: number;
  avatar?: string;
  avatarColor?: string;
  label?: string;
  labelColor?: string;
  number?: string;
  numberSuffix?: string;
  attachmentType?: 'voice' | 'file' | 'sent';
  participants?: number;
  messages?: Message[];
}

export interface Message {
  id: string;
  side: 'inbound' | 'outbound';
  sender: string;
  text: string;
  time: Date;
  status?: 'sent' | 'delivered' | 'read';
}