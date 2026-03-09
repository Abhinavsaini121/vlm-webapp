import React, { useState, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import UploadSelection from './UploadSelection';
import CameraScreen from './CameraScreen'; // <-- NAYA COMPONENT
import VideoDetailsForm from './VideoDetailsForm';
import VideoReview from './VideoReview';

const VideoUploadManager = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [step, setStep] = useState(1); // 1: Select, 2: Camera, 3: Details, 4: Review
  const [videoType, setVideoType] = useState(null); 
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoDetails, setVideoDetails] = useState({ title: '', description: '', visibility: 'public' });

  // STEP 1 -> STEP 2 (Opens Camera)
  const handleOptionClick = (type) => {
    setVideoType(type);
    setStep(2); 
  };

  // Triggers native file picker from Camera Screen
  const openGallery = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  // Handles File selected from Gallery
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setStep(3); // Go directly to Details Form
    }
    e.target.value = null; 
  };

  // Handles Video Recorded directly from our CameraScreen
  const handleRecordedVideo = (file) => {
    setSelectedFile(file);
    setStep(3); // Go to Details Form
  };

  const handleBack = () => {
    if (step === 4) setStep(3);
    else if (step === 3) {
      setSelectedFile(null);
      setStep(2); // Go back to camera
    } 
    else if (step === 2) setStep(1); // Go back to selection
    else navigate(-1);
  };

  const handlePublish = () => {
    console.log("Publishing:", selectedFile?.name, videoDetails);
    navigate('/teacher-dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans transition-colors duration-300">
      
      {/* Hidden File Input for Gallery Selection */}
      <input type="file" accept="video/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

      {/* Hide Header on Camera Screen for full immersion */}
      {step !== 2 && (
        <header className="p-4 bg-gray-50/90 dark:bg-[#0b0f1a]/90 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200 dark:border-white/10 flex items-center gap-4 transition-colors">
          <button onClick={handleBack} className="p-2.5 bg-white dark:bg-[#1a2233] rounded-2xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 shadow-sm hover:scale-105 transition-all">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
            {step === 1 ? 'Upload Content' : step === 3 ? 'Video Details' : 'Review & Publish'}
          </h1>
        </header>
      )}

      <div className={step === 2 ? "" : "p-6 pb-32"}>
        <AnimatePresence mode="wait">
          {step === 1 && <UploadSelection key="step1" onSelect={handleOptionClick} />}
          
          {/* NAYA CAMERA STEP */}
          {step === 2 && (
            <CameraScreen 
              key="step2" 
              videoType={videoType} 
              onClose={handleBack}
              onOpenGallery={openGallery} 
              onRecordComplete={handleRecordedVideo}
            />
          )}

          {step === 3 && selectedFile && (
            <VideoDetailsForm 
              key="step3" 
              file={selectedFile} 
              videoType={videoType} 
              onNext={(details) => {
                setVideoDetails(details);
                setStep(4); 
              }} 
            />
          )}
          
          {step === 4 && selectedFile && (  
            <VideoReview 
              key="step4" 
              file={selectedFile} 
              videoType={videoType}
              onPublish={handlePublish} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VideoUploadManager;