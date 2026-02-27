import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Search, 
  Check, 
  Globe, 
  Languages, 
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AppLanguage = () => {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy Language Data
  const languages = [
    { code: 'en', name: 'English', native: 'English', flag: '🇺🇸', popular: true },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', popular: true },
    { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸', popular: false },
    { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷', popular: false },
    { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪', popular: false },
    { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵', popular: false },
    { code: 'ru', name: 'Russian', native: 'Русский', flag: '🇷🇺', popular: false },
    { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦', popular: false },
  ];

  // Filter Logic
  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    lang.native.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSave = () => {
    // Logic to save language preference would go here
    navigate(-1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 dark:bg-[#0f0f10] text-gray-900 dark:text-white font-sans pb-32 transition-colors duration-300"
    >
      
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-20 bg-white/80 dark:bg-[#0f0f10]/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-[#1a1a1c] rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <h1 className="text-xl font-black tracking-tight">App Language</h1>
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-purple-50 dark:bg-purple-900/20 rounded-full text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20 shadow-sm">
          <Globe size={20} />
        </div>
      </header>

      <div className="p-6 max-w-2xl mx-auto">
        
        {/* --- SEARCH BAR --- */}
        <div className="relative mb-8 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400 group-focus-within:text-purple-500 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search language..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-800 rounded-2xl py-4 pl-12 pr-4 text-sm font-semibold text-gray-900 dark:text-white placeholder:text-gray-400 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 dark:focus:ring-purple-500/10 transition-all shadow-sm"
          />
        </div>

        {/* --- LANGUAGE LIST --- */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang, index) => {
                const isSelected = selectedLang === lang.code;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    key={lang.code}
                    onClick={() => setSelectedLang(lang.code)}
                    className={`relative p-5 rounded-[20px] border-2 cursor-pointer flex items-center justify-between group transition-all duration-300 ${
                      isSelected 
                        ? "border-purple-600 dark:border-purple-500 bg-purple-50 dark:bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.15)]" 
                        : "border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a1a1c] hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-black/20"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl drop-shadow-md filter grayscale-[0.2] group-hover:grayscale-0 transition-all">{lang.flag}</span>
                      <div className="flex flex-col">
                        <span className={`text-sm font-black tracking-wide ${isSelected ? 'text-purple-700 dark:text-purple-300' : 'text-gray-900 dark:text-white'}`}>
                          {lang.name}
                        </span>
                        <span className={`text-xs font-medium ${isSelected ? 'text-purple-600/70 dark:text-purple-400/70' : 'text-gray-500 dark:text-gray-500'}`}>
                          {lang.native}
                        </span>
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    <div className="relative">
                      {isSelected ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-600/40"
                        >
                          <Check size={14} strokeWidth={3} />
                        </motion.div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-transparent group-hover:border-gray-400 transition-colors" />
                      )}
                    </div>

                    {/* Popular Tag (Optional) */}
                    {lang.popular && !isSelected && (
                      <div className="absolute top-0 right-0 -mt-2 -mr-2">
                         {/* Optional badge could go here if needed, keeping it clean for now */}
                      </div>
                    )}
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-10">
                <Languages size={48} className="mx-auto text-gray-300 dark:text-gray-700 mb-4" />
                <p className="text-gray-500 font-bold">No languages found.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* --- INFO BOX --- */}
        <div className="mt-8 p-5 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20 rounded-3xl flex gap-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-full h-fit text-blue-600 dark:text-blue-400">
             <Languages size={18} />
          </div>
          <div>
            <h4 className="text-xs font-black text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-1">Note</h4>
            <p className="text-[11px] leading-relaxed text-blue-900/70 dark:text-blue-200/50 font-medium">
              Changing the language will restart the application to apply the new settings across all screens.
            </p>
          </div>
        </div>

      </div>

      {/* --- FIXED SAVE BUTTON --- */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-50 dark:from-[#0f0f10] via-gray-50/90 dark:via-[#0f0f10]/90 to-transparent z-30">
        <div className="max-w-2xl mx-auto">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            className="w-full bg-gray-900 dark:bg-[#4ade80] text-white dark:text-black py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-gray-900/20 dark:shadow-[#4ade80]/20 flex items-center justify-center gap-2 transition-all"
          >
             <CheckCircle2 size={18} strokeWidth={2.5} /> Update Language
          </motion.button>
        </div>
      </div>

    </motion.div>
  );
};

export default AppLanguage;