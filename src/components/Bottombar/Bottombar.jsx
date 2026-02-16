import React, { useState } from 'react';
import { Home, Wallet, Star, User, Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Route change karne ke liye hook

const FloatingNav = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const navigate = useNavigate(); // Navigation hook initialize kiya

  // Har item ke sath ek 'route' property add kar di hai
  const navItems = [
    { id: 'Home', label: 'Home', icon: Home, route: '/teacher-dashboard' },
    { id: 'Shorts', label: 'Shorts', icon: Film, route: '/shorts' },
    { id: 'Earnings', label: 'Earnings', icon: Wallet, route: '/earnings' },
    { id: 'Reviews', label: 'Reviews', icon: Star, route: '/reviews' },
    { id: 'Profile', label: 'Profile', icon: User, route: '/profile' },
  ];

  const handleNavigation = (id, route) => {
    setActiveTab(id);
    navigate(route); // Route change logic
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-[95%]">
      <nav className="bg-white dark:bg-[#1a1a1c] p-2 rounded-full shadow-2xl dark:shadow-purple-900/20 border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-1 sm:gap-2 transition-all duration-300">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id, item.route)}
              className={`
                relative flex items-center justify-center gap-2 px-3 sm:px-4 py-3 rounded-full 
                transition-all duration-500 ease-in-out cursor-pointer outline-none select-none
                ${isActive ? 'bg-[#E5DFF7] dark:bg-purple-600/20 pr-5 sm:pr-6' : 'bg-transparent hover:bg-gray-100 dark:hover:bg-white/5'}
              `}
            >
              <Icon 
                size={20} 
                className={`transition-colors duration-300 ${
                  isActive ? 'text-[#5B37B7] dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'
                }`} 
                strokeWidth={2.5}
              />

              {/* Animated Label */}
              <span 
                className={`
                  font-semibold text-sm whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out
                  ${isActive ? 'max-w-[100px] opacity-100 ml-1 text-[#5B37B7] dark:text-purple-300' : 'max-w-0 opacity-0'}
                `}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
      
    </div>
    
  );
};

export default FloatingNav;