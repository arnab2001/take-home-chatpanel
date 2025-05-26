import { FiChevronDown } from 'react-icons/fi';

interface ScrollToBottomProps {
  onClick: () => void;
}

export default function ScrollToBottom({ onClick }: ScrollToBottomProps) {
  return (
    <button
      className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-[#34B757] text-white grid place-content-center shadow-md hover:bg-[#2da14c] transition-colors duration-150"
      onClick={onClick}
      aria-label="Scroll to bottom"
    >
      <FiChevronDown size={20} />
    </button>
  );
}