import React, { useEffect, useState } from 'react';
import { Home, Wallet, Star, User, Film, Swords, ArrowRightLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const FloatingNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userRole, setUserRole] = useState('Student');

  useEffect(() => {
    // 1. LocalStorage se role fetch karo jo Login page ne save kiya tha
    const role = localStorage.getItem('userRole');
    if (role) {
      setUserRole(role);
    }
  }, []);

  // 2. Roles ke hisab se Nav Items ki configuration
  const navConfigs = {
    Student: [
      { id: 'Home', label: 'Home', icon: Home, route: '/student-dashboard' },
      { id: 'Battle', label: 'LIVE BATTLE', icon: Swords, route: '/livebattle' },
      { id: 'Transaction', label: 'Transaction', icon: ArrowRightLeft, route: '/transactions' },
      { id: 'Shorts', label: 'Shorts', icon: Film, route: '/shorts' },
      { id: 'Profile', label: 'Profile', icon: User, route: '/StudentProfile' },
    ],
    Teacher: [
      { id: 'Home', label: 'Home', icon: Home, route: '/teacher-dashboard' },
      { id: 'Shorts', label: 'Shorts', icon: Film, route: '/shorts' },
      { id: 'Earnings', label: 'Earnings', icon: Wallet, route: '/earnings' },
      { id: 'Reviews', label: 'Reviews', icon: Star, route: '/reviews' },
      { id: 'Profile', label: 'Profile', icon: User, route: '/TeacherProfile' },
    ],
    // Agar Parent ho to fallback (optional)
    Parent: [
        { id: 'Home', label: 'Home', icon: Home, route: '/parent-dashboard' },
        { id: 'Profile', label: 'Profile', icon: User, route: '/profile' },
    ]
  };

  // 3. Current Role ke items select karo (Default 'Student' agar role na mile)
  const navItems = navConfigs[userRole] || navConfigs['Student'];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <nav className="bg-white/90 dark:bg-[#1a1a1c]/90 backdrop-blur-lg p-2 rounded-full shadow-2xl dark:shadow-black/50 border border-gray-200 dark:border-gray-800 flex items-center gap-1 sm:gap-2">
        
        {navItems.map((item) => {
          const isActive = location.pathname === item.route;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.route)}
              className="relative flex items-center px-4 py-3 cursor-pointer outline-none select-none"
            >
              {/* --- ACTIVE BACKGROUND ANIMATION --- */}
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