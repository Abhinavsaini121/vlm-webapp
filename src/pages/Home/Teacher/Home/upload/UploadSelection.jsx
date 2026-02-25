import React from 'react';
import { Smartphone, MonitorPlay } from 'lucide-react';
import { motion } from 'framer-motion';

const UploadSelection = ({ onSelect }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6 pt-10"
    >
      <div className="text-center space-y-2 mb-10">
        <h2 className="text-2xl font-black text-gray-900 dark:text-white">What would you like to create?</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Select a format to open your device files</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* OPTION 1: SHORT VIDEO */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('short')}
          className="bg-white dark:bg-[#1a2233] border-2 border-transparent hover:border-[#2F80FF] p-6 rounded-[2rem] shadow-sm flex flex-col items-center text-center gap-4 transition-all group cursor-pointer"
        >
          <div className="w-20 h-20 bg-gradient-to-tr from-[#2F80FF] to-[#56CCF2] rounded-3xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            <Smartphone size={36} strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-lg font-black text-gray-900 dark:text-white">Upload Short</h3>
            <p className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-widest">Vertical • Max 60s</p>
          </div>
        </motion.button>

        {/* OPTION 2: LONG VIDEO */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('long')}
          className="bg-white dark:bg-[#1a2233] border-2 border-transparent hover:border-purple-500 p-6 rounded-[2rem] shadow-sm flex flex-col items-center text-center gap-4 transition-all group cursor-pointer"
        >
          <div className="w-20 h-20 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
            <MonitorPlay size={36} strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-lg font-black text-gray-900 dark:text-white">Long Video</h3>
            <p className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-widest">Horizontal • Detailed</p>
          </div>
        </motion.button>

      </div>
    </motion.div>
  );
};

export default UploadSelection;