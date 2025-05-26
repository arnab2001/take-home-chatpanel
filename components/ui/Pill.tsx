import { ReactNode } from 'react';

interface PillProps {
  children: ReactNode;
  color?: 'green' | 'gray' | 'blue' | 'yellow' | 'red';
}

export default function Pill({ children, color = 'green' }: PillProps) {
  const colorStyles = {
    green: 'bg-green-100 text-green-600',
    gray: 'bg-gray-100 text-gray-600',
    blue: 'bg-blue-100 text-blue-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    red: 'bg-red-100 text-red-600',
  };
  
  return (
    <div className={`text-xs px-2 py-0.5 rounded-full ${colorStyles[color]} inline-flex items-center`}>
      {children}
    </div>
  );
}