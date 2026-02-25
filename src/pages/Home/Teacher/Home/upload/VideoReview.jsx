import React, { useState, useEffect } from 'react';
import { UploadCloud, Image as ImageIcon, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoReview = ({ file, videoType, onPublish }) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [thumbnailUploaded, setThumbnailUploaded] = useState(false);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  return (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, y: 20 }} className="space-y-6">
      
      {/* Dynamic Video Player Preview */}
      <div className="space-y-2 flex flex-col items-center">
        <div className="w-full flex justify-between items-end">
           <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] ml-2">Video Preview</label>
           <span className="text-[10px] font-black text-[#2F80FF] dark:text-[#56CCF2] uppercase tracking-[0.2em]">{videoType === 'short' ? 'Short (9:16)' : 'Long (16:9)'}</span>
        </div>
        
        {/* Aspect Ratio Logic applied here */}
        <div className={`bg-black rounded-3xl overflow-hidden shadow-lg relative flex items-center justify-center border border-gray-200 dark:border-white/10 w-full ${
          videoType === 'short' ? 'aspect-[9/16] max-w-[260px]' : 'aspect-video'
        }`}>
          {videoUrl ? (
            <video src={videoUrl} controls className="w-full h-full object-contain bg-black" />
          ) : (
            <PlayCircle size={48} className="text-gray-600" />
          )}
        </div>
      </div>

      {/* Thumbnail Options */}
      <div className="space-y-2">
        <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] ml-2">Thumbnail Settings</label>
        
        <div className="bg-white dark:bg-[#1a2233] p-4 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm space-y-4">
            
            {!thumbnailUploaded ? (
              <div className="flex items-center justify-between bg-blue-50 dark:bg-[#2F80FF]/10 p-4 rounded-2xl border border-blue-100 dark:border-[#2F80FF]/20">
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-[#2F80FF] dark:text-[#56CCF2]">Default Thumbnail</h4>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Auto-generated from video frame</p>
                </div>
                <div className="w-10 h-10 bg-[#2F80FF] rounded-full flex items-center justify-center text-white shadow-sm">
                  <PlayCircle size={20} />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-500/10 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-500/20">
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Custom Thumbnail Added</h4>
                  <p className="text-[10px] text-gray-500 mt-1">Ready to publish</p>
                </div>
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-sm">
                  <ImageIcon size={20} />
                </div>
              </div>
            )}

            <div className="relative">
               <input type="file" accept="image/*" className="hidden" id="thumb-upload" onChange={(e) => {
                 if(e.target.files[0]) setThumbnailUploaded(true);
               }}/>
               <label htmlFor="thumb-upload" className="w-full bg-gray-50 dark:bg-[#0b0f1a] border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#2F80FF] transition-all">
                  <div className="p-2 bg-white dark:bg-[#1a2233] rounded-full text-gray-400 shadow-sm border border-gray-100 dark:border-white/5">
                    <ImageIcon size={18} />
                  </div>
                  <p className="text-xs font-bold text-gray-600 dark:text-gray-400">{thumbnailUploaded ? 'Change Custom Thumbnail' : 'Upload Custom Thumbnail (Optional)'}</p>
               </label>
            </div>
        </div>
      </div>

      {/* Publish Button */}
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-50 via-gray-50 dark:from-[#0b0f1a] dark:via-[#0b0f1a] to-transparent z-30 pointer-events-none">
        <button onClick={onPublish} className="w-full pointer-events-auto bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-500/30 active:scale-95 transition-all flex items-center justify-center gap-2">
           <UploadCloud size={20} strokeWidth={2.5} /> Publish Video
        </button>
      </motion.div>

    </motion.div>
  );
};

export default VideoReview;