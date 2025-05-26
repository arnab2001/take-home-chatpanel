import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, isToday, isYesterday, isThisYear } from 'date-fns';
import { Message } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatChatTime(date: Date): string {
  if (isToday(date)) {
    return format(date, 'HH:mm');
  } else if (isYesterday(date)) {
    return 'Yesterday';
  } else if (isThisYear(date)) {
    return format(date, 'dd-MMM');
  } else {
    return format(date, 'dd-MM-yyyy');
  }
}

export function formatMessageTime(date: Date): string {
  return format(date, 'HH:mm');
}

export function groupMessagesByDate(messages: Message[]): Record<string, Message[]> {
  return messages.reduce((groups, message) => {
    const date = message.time;
    let dateKey: string;
    
    if (isToday(date)) {
      dateKey = 'Today';
    } else if (isYesterday(date)) {
      dateKey = 'Yesterday';
    } else {
      dateKey = format(date, 'dd-MM-yyyy');
    }
    
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    
    groups[dateKey].push(message);
    return groups;
  }, {} as Record<string, Message[]>);
}