'use client';

import { BiHomeAlt2, BiMessageRoundedDetail, BiGroup } from 'react-icons/bi';
import { BsGraphUp } from 'react-icons/bs';
import { RiListCheck2 } from 'react-icons/ri';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { FiSettings, FiPlus } from 'react-icons/fi';
import { useState } from 'react';

export default function NavRail() {
  const [activeItem, setActiveItem] = useState('chats');

  const topNavItems = [
    { id: 'home', icon: BiHomeAlt2, label: 'Home' },
    { id: 'chats', icon: BiMessageRoundedDetail, label: 'Chats' },
    { id: 'teams', icon: BiGroup, label: 'Teams' },
    { id: 'analytics', icon: BsGraphUp, label: 'Analytics' },
    { id: 'lists', icon: RiListCheck2, label: 'Lists' },
  ];

  const bottomNavItems = [
    { id: 'drafts', icon: HiOutlineDocumentDuplicate, label: 'Drafts' },
    { id: 'settings', icon: FiSettings, label: 'Settings' },
  ];

  return (
    <nav className="w-[60px] h-full bg-white border-r border-gray-200 flex flex-col py-4">
      <div className="w-9 h-9 bg-green-600 rounded-full text-white flex items-center justify-center text-lg font-bold mb-6 mx-auto">
        P
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        {/* Top group */}
        <div className="flex flex-col items-center gap-[18px]">
          {topNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                className={`w-full relative flex items-center justify-center h-10 transition-all duration-150 ${
                  isActive 
                    ? 'bg-[#E6F4EA] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-green-500' 
                    : 'text-gray-500 hover:bg-[#E6F4EA]'
                }`}
                onClick={() => setActiveItem(item.id)}
                aria-label={item.label}
                title={item.label}
              >
                <Icon size={22} className={isActive ? 'text-green-600' : ''} />
              </button>
            );
          })}
        </div>

        {/* Bottom group */}
        <div className="flex flex-col items-center gap-[18px] mb-4">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                className={`w-full relative flex items-center justify-center h-10 transition-all duration-150 ${
                  isActive 
                    ? 'bg-[#E6F4EA] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-green-500' 
                    : 'text-gray-500 hover:bg-[#E6F4EA]'
                }`}
                onClick={() => setActiveItem(item.id)}
                aria-label={item.label}
                title={item.label}
              >
                <Icon size={22} className={isActive ? 'text-green-600' : ''} />
              </button>
            );
          })}

          <button
            className="w-10 h-10 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors"
            aria-label="New Chat"
          >
            <FiPlus size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}