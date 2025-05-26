import { ReactNode } from 'react';

interface IconButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export default function IconButton({ icon, label, onClick }: IconButtonProps) {
  return (
    <button
      className="w-9 h-9 rounded-md flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors"
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      {icon}
    </button>
  );
}