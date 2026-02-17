import React from 'react';
import { Home, Wallet, Star, User, Film } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation add kiya
import { motion } from 'framer-motion';

const FloatingNav = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Current URL pata karne ke liye

  const navItems = [
    { id: 'Home', label: 'Home', icon: Home, route: '/teacher-dashboard' },
    { id: 'Shorts', label: 'Shorts', icon: Film, route: '/shorts' },
    { id: 'Earnings', label: 'Earnings', icon: Wallet, route: '/earnings' },
    { id: 'Reviews', label: 'Reviews', icon: Star, route: '/reviews' },
    { id: 'Profile', label: 'Profile', icon: User, route: '/profile' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <nav className="bg-white/90 dark:bg-[#1a1a1c]/90 backdrop-blur-lg p-2 rounded-full shadow-2xl dark:shadow-black/50 border border-gray-200 dark:border-gray-800 flex items-center gap-1 sm:gap-2">
        
        {navItems.map((item) => {
          // Check karo agar current URL item ke route se match karta hai
          const isActive = location.pathname === item.route;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.route)}
              className="relative flex items-center px-4 py-3 cursor-pointer outline-none select-none"
            >
              {/* --- ACTIVE BACKGROUND ANIMATION (The "One Click" Magic) --- */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[#E5DFF7] dark:bg-purple-600/20 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* --- ICON --- */}
              <span className={`relative z-10 transition-colors duration-200 ${
                isActive ? 'text-[#5B37B7] dark:text-purple-400' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
              }`}>
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </span>

              {/* --- TEXT LABEL ANIMATION --- */}
              <div className="relative z-10 overflow-hidden flex">
                {isActive && (
                  <motion.span
                    initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                    animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                    exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-bold text-sm whitespace-nowrap text-[#5B37B7] dark:text-purple-300"
                  >
                    {item.label}
                  </motion.span>
                )}
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default FloatingNav;