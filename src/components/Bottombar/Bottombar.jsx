import React, { useEffect, useState } from 'react';
import { 
  Home, Star, User, Film, Swords, 
  ArrowRightLeft, Plus, Zap, MonitorPlay, Radio 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userRole, setUserRole] = useState('Student');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Fetch role from LocalStorage
    const role = localStorage.getItem('userRole');
    if (role) {
      setUserRole(role);
    }
    // FOR TESTING: Force teacher mode to see the new UI
    // setUserRole('Teacher'); 
  }, []);

  const handleAction = (route) => {
    setIsMenuOpen(false);
    navigate(route);
  };

  // --- NAVIGATION CONFIGURATIONS ---
  const navConfigs = {
    Student: [
      { id: 'Home', icon: Home, route: '/student-dashboard' },
      { id: 'Battle', icon: Swords, route: '/livebattle' },
      { id: 'Transaction', icon: ArrowRightLeft, route: '/transactions' },
      { id: 'Shorts', icon: Film, route: '/shorts' },
      { id: 'Profile', icon: User, route: '/StudentProfile' },
    ],
    Teacher: [
      { id: 'Home', icon: Home, route: '/teacher-dashboard' },
      { id: 'Shorts', icon: Film, route: '/shorts' },
      { id: 'Create', icon: Plus, isAction: true }, // The unique + button
      { id: 'Reviews', icon: Star, route: '/reviews' },
      { id: 'Profile', icon: User, route: '/TeacherProfile' },
    ]
  };

  const navItems = navConfigs[userRole] || navConfigs['Student'];
  const isTeacher = userRole === 'Teacher';

  // Split items for the Teacher's split-dock layout
  const leftItems = isTeacher ? navItems.slice(0, 2) : [];
  const rightItems = isTeacher ? navItems.slice(3, 5) : [];

  // --- SEMI-CIRCLE ANIMATION OPTIONS ---
  // Calculates coordinates for the semi-circle layout
  const createOptions = [
    { id: 'short', label: 'Create Short', icon: Zap, x: -65, y: -60 },    // Top-Left
    { id: 'long', label: 'Long Video', icon: MonitorPlay, x: 0, y: -85 }, // Top-Center
    { id: 'live', label: 'Go Live', icon: Radio, x: 65, y: -60 },         // Top-Right
  ];

  return (
    <>
      {/* --- BACKDROP OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/10 dark:bg-[#0f0f12] backdrop-blur-sm z-40 transition-colors duration-300"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 w-full max-w-sm left-1/2 transform -translate-x-1/2 z-50 px-4">
        
        {/* ========================================= */}
        {/* TEACHER LAYOUT: CURVED SCOOP & PLUS ICON    */}
        {/* ========================================= */}
        {isTeacher ? (
          <div className="relative w-full h-[70px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-between z-50">
            
            {/* --- Left Side of Dock --- */}
            <div className="flex-1 bg-white dark:bg-[#252528] rounded-l-[2rem] h-full flex items-center justify-evenly transition-colors duration-300">
              {leftItems.map((item) => (
                <NavItem key={item.id} item={item} location={location} navigate={navigate} />
              ))}
            </div>
            
            {/* --- Center Cutout (SVG Scoop) --- */}
            <div className="w-[80px] h-full relative -mx-[1px] text-white dark:text-[#252528] transition-colors duration-300">
              <svg viewBox="0 0 100 70" className="w-full h-full text-current" preserveAspectRatio="none">
                <path d="M0 0 C 15 0 20 40 50 40 C 80 40 85 0 100 0 L 100 70 L 0 70 Z" fill="currentColor" />
              </svg>
            </div>

            {/* --- Right Side of Dock --- */}
            <div className="flex-1 bg-white dark:bg-[#252528] rounded-r-[2rem] h-full flex items-center justify-evenly transition-colors duration-300">
              {rightItems.map((item) => (
                <NavItem key={item.id} item={item} location={location} navigate={navigate} />
              ))}
            </div>

            {/* --- FLOATING PLUS BUTTON --- */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-24px] flex flex-col items-center justify-center">
              
              {/* Semi-Circle Pop-out Items */}
              <AnimatePresence>
                {isMenuOpen && createOptions.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                    animate={{ opacity: 1, scale: 1, x: option.x, y: option.y }}
                    exit={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.05 }}
                    onClick={() => handleAction(`/${option.id}`)}
                    className="absolute z-[-1] flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 bg-white dark:bg-[#333336] rounded-full flex items-center justify-center shadow-lg shadow-black/20 text-[#7C3AED] dark:text-[#a78bfa] group-hover:scale-110 transition-transform">
                      <option.icon size={22} strokeWidth={2.5} />
                    </div>
                    <span className="absolute -bottom-6 w-max text-[10px] font-black tracking-widest uppercase text-white drop-shadow-md">
                      {option.label}
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>

              {/* Main Action Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                animate={{ rotate: isMenuOpen ? 135 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(124,58,237,0.4)] transition-all z-10 ${
                  isMenuOpen 
                    ? 'bg-red-500 shadow-red-500/40 text-white' 
                    : 'bg-[#7C3AED] hover:bg-[#6d28d9] text-white'
                }`}
              >
                <Plus size={32} strokeWidth={2.5} />
              </motion.button>
            </div>
          </div>
        ) : (
          
          /* ========================================= */
          /* STUDENT LAYOUT: STANDARD FLAT DOCK        */
          /* ========================================= */
          <div className="w-full h-[70px] bg-white dark:bg-[#252528] rounded-[2rem] drop-shadow-2xl flex items-center justify-evenly px-4 transition-colors duration-300 relative z-50">
             {navItems.map((item) => (
                <NavItem key={item.id} item={item} location={location} navigate={navigate} />
             ))}
          </div>
        )}

      </div>
    </>
  );
};

const NavItem = ({ item, location, navigate }) => {
  const isActive = location.pathname === item.route;
  const Icon = item.icon;

  return (
    <button
      onClick={() => navigate(item.route)}
      className="relative p-3 rounded-full flex items-center justify-center transition-all group"
    >
      <Icon 
        size={22} 
        strokeWidth={isActive ? 2.5 : 2} 
        className={`transition-colors duration-300 ${
          isActive 
            ? 'text-[#7C3AED] dark:text-[#a78bfa]' 
            : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300'
        }`} 
      />
      {isActive && (
        <motion.div 
          layoutId="nav-indicator"
          className="absolute -bottom-2 w-1 h-1 bg-[#7C3AED] dark:bg-[#a78bfa] rounded-full"
        />
      )}
    </button>
  );
};

export default FloatingNav;