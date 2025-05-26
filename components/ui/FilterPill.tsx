'use client';

import * as React from 'react';
import { MdFilterList, MdClose } from 'react-icons/md';
import { cn } from '@/lib/utils'; // Assuming you have a utility for merging class names

interface FilterPillProps {
  label?: string;
  onClose: () => void;
  className?: string;
}

const FilterPill: React.FC<FilterPillProps> = ({
  label = 'Filtered',
  onClose,
  className,
}) => {
  return (
    <button
      type="button" // Use button for accessibility
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200',
        className
      )}
      onClick={onClose}
      aria-label={`Clear ${label} filter`} // Add aria-label for accessibility
    >
      <MdFilterList size={16} className="text-green-600" /> {/* Filter icon */}
      <span className="text-xs font-medium text-green-600">{label}</span> {/* Label */}
      <MdClose size={12} className="text-green-600 hover:text-green-800 cursor-pointer" /> {/* Close icon */}
    </button>
  );
};

export { FilterPill }; 