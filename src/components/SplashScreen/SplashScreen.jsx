import React from "react";

const SplashScreen = () => {
  return (
    <div className="h-screen w-full bg-[#0f0f10] flex flex-col items-center justify-center relative overflow-hidden">

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full"></div>

      {/* Logo with Entrance Animation */}
      <div className="relative z-10 flex flex-col items-center animate-logo-entry">
        <img
          src="/vlm-logo.svg"
          alt="VLM Academy"
          className="w-44 h-auto drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]"
        />
      </div>

      {/* Bottom Loader */}
      <div className="absolute bottom-24 flex flex-col items-center gap-4">
        <div className="w-7 h-7 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>

        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] animate-pulse">
          Initializing Academy
        </p>
      </div>

      {/* Branding Version */}
      <div className="absolute bottom-8 text-[8px] font-bold text-gray-600 uppercase tracking-widest">
        VLM Tech Ecosystem • v2.4.0
      </div>

      {/* Animation Style */}
      <style>
        {`
          @keyframes logo-entry {
            0% {
              opacity: 0;
              transform: scale(0.8);
              filter: blur(5px);
            }
            100% {
              opacity: 1;
              transform: scale(1);
              filter: blur(0px);
            }
          }

          .animate-logo-entry {
            animation: logo-entry 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

    </div>
  );
};

export default SplashScreen;
