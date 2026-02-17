import React, { useState, useRef, useEffect } from 'react';
import { 
  Heart, MessageCircle, Share2, 
  Music2, Search, ChevronLeft 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// --- IMPORT YOUR VIDEO HERE ---
import shortVideo from '../../../../assets/short.webm'; 

const videos = [
  {
    id: 1,
    url: shortVideo,
    username: "jenny_wilson",
    description: "Hi everyone, in this video I will sing a song 🎵 #music #love #beauty",
    song: "Favorite Girl by Justin Bieber",
    likes: "225.9K",
    comments: "24.8K",
    shares: "15.6K",
    isLiked: true
  },
  {
    id: 2,
    url: shortVideo,
    username: "nature_lover",
    description: "Spring vibes are here! 🌸 Can't wait for summer. #nature #vibes",
    song: "Spring Day - BTS",
    likes: "10K",
    comments: "500",
    shares: "200",
    isLiked: false
  },
  {
    id: 3,
    url: shortVideo,
    username: "fashion_diva",
    description: "Winter collection sneak peek ❄️ #fashion #style #winter",
    song: "Cold Heart - Dua Lipa",
    likes: "500K",
    comments: "12K",
    shares: "50K",
    isLiked: false
  }
];

// --- SINGLE VIDEO COMPONENT ---
const VideoItem = ({ data, isActive }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [liked, setLiked] = useState(data.isLiked);

  useEffect(() => {
    if (isActive) {
      videoRef.current.currentTime = 0; 
      videoRef.current.play().catch(error => console.log("Autoplay blocked:", error));
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="relative w-full h-full snap-start shrink-0 flex items-center justify-center bg-black">
      
      {/* 1. VIDEO PLAYER */}
      <video
        ref={videoRef}
        src={data.url}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        onClick={togglePlay}
      />

      {/* Play Icon Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20 z-10">
           <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
             <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
           </div>
        </div>
      )}

      {/* 2. GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 pointer-events-none"></div>

      {/* 3. RIGHT SIDEBAR */}
      <div className="absolute right-4 bottom-28 flex flex-col items-center gap-6 z-20">
        
        {/* Profile Pic */}
        <div className="relative mb-2">
          <div className="w-12 h-12 rounded-full border-2 border-white p-[1px]">
            <img 
              src={`https://ui-avatars.com/api/?name=${data.username}&background=random`} 
              alt="User" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs font-bold border border-white">
            +
          </div>
        </div>

        {/* Like */}
        <div className="flex flex-col items-center gap-1">
          <motion.button 
            whileTap={{ scale: 0.8 }}
            onClick={handleLike}
            className="p-2"
          >
            <Heart 
              size={32} 
              className={liked ? "fill-red-500 text-red-500" : "text-white"} 
              strokeWidth={1.5}
            />
          </motion.button>
          <span className="text-white text-xs font-semibold drop-shadow-md">{data.likes}</span>
        </div>

        {/* Comment */}
        <div className="flex flex-col items-center gap-1">
          <button className="p-2">
            <MessageCircle size={32} className="text-white" strokeWidth={1.5} />
          </button>
          <span className="text-white text-xs font-semibold drop-shadow-md">{data.comments}</span>
        </div>

        {/* Share */}
        <div className="flex flex-col items-center gap-1">
          <button className="p-2">
            <Share2 size={32} className="text-white" strokeWidth={1.5} />
          </button>
          <span className="text-white text-xs font-semibold drop-shadow-md">{data.shares}</span>
        </div>

        {/* Music Animation */}
        <div className="mt-4 relative">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 bg-gray-800 rounded-full border-[6px] border-gray-900 flex items-center justify-center overflow-hidden"
          >
             <img 
              src={`https://ui-avatars.com/api/?name=${data.username}&background=random`} 
              className="w-full h-full object-cover opacity-80" 
            />
          </motion.div>
          <div className="absolute -top-4 -right-2 text-gray-200">
             <Music2 size={12} />
          </div>
        </div>
      </div>

      {/* 4. BOTTOM INFO */}
      <div className="absolute left-4 bottom-20 right-20 z-20 text-white text-left">
        <h3 className="text-lg font-bold drop-shadow-md">@{data.username}</h3>
        <p className="text-sm mt-2 opacity-90 line-clamp-2 drop-shadow-md leading-relaxed">
          {data.description}
        </p>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
            <Music2 size={14} />
            <div className="w-32 overflow-hidden">
               <p className="text-xs whitespace-nowrap animate-marquee font-medium">
                 {data.song} • Original Audio
               </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const ShortsPage = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, clientHeight } = containerRef.current;
      const index = Math.round(scrollTop / clientHeight);
      setActiveIndex(index);
    }
  };

  return (
    // --- 1. OUTER CONTAINER FOR DESKTOP (The Grey Background) ---
    <div className="w-full h-screen bg-[#121212] flex items-center justify-center font-sans">
      
      {/* --- 2. PHONE FRAME (Responsive Wrapper) --- */}
      {/* Mobile: Full Width/Height | Desktop: Fixed Width/Height like a phone */}
      <div className="w-full h-full md:w-[400px] bg-black overflow-hidden relative shadow-2xl border-0 md:border-4 md:border-gray-800 ring-4 ring-black">

        
        {/* --- HEADER --- */}
        <header className="absolute top-0 left-0 right-0 z-30 pt-6 pb-4 px-4 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
          
          {/* BACK BUTTON (New Icon) */}
          <button 
            onClick={() => navigate(-1)} 
            className="text-white/90 hover:text-white p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all"
          >
            <ChevronLeft size={28} />
          </button>
          
          {/* Tabs */}
          <div className="flex gap-6 text-base font-bold absolute left-1/2 transform -translate-x-1/2">
            <span className="text-gray-400 opacity-80 cursor-pointer hover:text-white transition-colors">Following</span>
            <div className="relative">
              <span className="text-white cursor-pointer drop-shadow-lg">For You</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Search */}
          <button className="text-white/90 p-2">
              <Search size={28} />
          </button>
        </header>

        {/* --- SCROLL CONTAINER --- */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar rounded-none md:rounded-[1.8rem]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map((video, index) => (
            <VideoItem 
              key={video.id} 
              data={video} 
              isActive={activeIndex === index} 
            />
          ))}
        </div>

        {/* Optional: Add Floating Nav here inside the "Phone" frame if needed */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 w-full flex justify-center">
            <FloatingNav />
        </div> */}

        {/* Swipe Guide */}
        <AnimatePresence>
          {activeIndex === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center gap-2 opacity-50"
            >
              <div className="w-[1px] h-12 bg-white/50 animate-bounce"></div>
              <span className="text-white/50 text-xs uppercase tracking-widest font-bold">Swipe Up</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 5s linear infinite; }
      `}</style>
    </div>
  );
};

export default ShortsPage;