import React, { useRef, useState, useEffect } from 'react';
import { X, Image as ImageIcon, Video, RefreshCcw, Square } from 'lucide-react';
import { motion } from 'framer-motion';

const CameraScreen = ({ videoType, onClose, onOpenGallery, onRecordComplete }) => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [facingMode, setFacingMode] = useState('environment'); // 'user' (front) or 'environment' (back)
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Timer interval reference
  const timerRef = useRef(null);

  // Start Camera Stream
  const startCamera = async () => {
    try {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode }, 
        audio: true 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access denied or not available.", err);
      alert("Camera access is required to record video.");
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      // Cleanup camera on unmount
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
      clearInterval(timerRef.current);
    };
  }, [facingMode]);

  // Handle Recording
  const startRecording = () => {
    setRecordedChunks([]);
    setTimeElapsed(0);
    const stream = videoRef.current.srcObject;
    
    // Check supported mime types
    const options = { mimeType: 'video/webm' };
    try {
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          setRecordedChunks((prev) => [...prev, e.data]);
        }
      };

      mediaRecorder.onstop = () => {
        clearInterval(timerRef.current);
      };

      mediaRecorder.start();
      setIsRecording(true);
      
      // Start Timer
      timerRef.current = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);

    } catch (e) {
      console.error("MediaRecorder error:", e);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  // When chunks are ready, create a File object and pass it to the main wrapper
  useEffect(() => {
    if (!isRecording && recordedChunks.length > 0) {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      // Create a native File object mimicking a real upload
      const file = new File([blob], `recorded_${new Date().getTime()}.webm`, { type: 'video/webm' });
      onRecordComplete(file);
    }
  }, [recordedChunks, isRecording]);

  // Format Timer (MM:SS)
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const toggleCamera = () => {
    setFacingMode(prev => prev === 'environment' ? 'user' : 'environment');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }} 
      className="fixed inset-0 bg-black z-50 flex flex-col"
    >
      
      {/* Top Header Controls */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-gradient-to-b from-black/60 to-transparent">
        <button onClick={onClose} className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-90 transition-transform">
          <X size={20} />
        </button>
        
        {isRecording && (
          <div className="bg-red-500/20 px-4 py-1.5 rounded-full border border-red-500/50 flex items-center gap-2 backdrop-blur-md">
             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
             <span className="text-white text-xs font-bold tracking-widest">{formatTime(timeElapsed)}</span>
          </div>
        )}

        <button onClick={toggleCamera} className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-90 transition-transform">
          <RefreshCcw size={20} />
        </button>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative bg-black overflow-hidden flex items-center justify-center">
         {/* Instruction Overlay for Long Video */}
         {videoType === 'long' && (
           <div className="absolute top-24 bg-black/50 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 z-10">
              Please rotate your phone horizontally
           </div>
         )}
         <video 
           ref={videoRef} 
           autoPlay 
           playsInline 
           muted 
           className={`w-full h-full ${videoType === 'short' ? 'object-cover' : 'object-contain'}`} 
         />
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-evenly pb-6 px-8">
        
        {/* Gallery Button */}
        <button 
          onClick={onOpenGallery} 
          disabled={isRecording}
          className="flex flex-col items-center gap-2 group disabled:opacity-50"
        >
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white group-active:scale-95 transition-all">
             <ImageIcon size={24} />
          </div>
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">Gallery</span>
        </button>

        {/* Record Button */}
        <div className="flex flex-col items-center justify-center">
          <button 
            onClick={isRecording ? stopRecording : startRecording}
            className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all ${
              isRecording ? 'border-red-500' : 'border-white'
            }`}
          >
             <div className={`transition-all duration-300 ${
               isRecording ? 'w-8 h-8 bg-red-500 rounded-lg' : 'w-16 h-16 bg-red-500 rounded-full'
             }`}></div>
          </button>
        </div>

        {/* Filter/Effect dummy button (Optional UI balance) */}
        <div className="flex flex-col items-center gap-2 opacity-50">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white">
             <Video size={24} />
          </div>
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">Effects</span>
        </div>

      </div>
    </motion.div>
  );
};

export default CameraScreen;