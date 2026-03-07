import React from 'react';
import { FileText, Upload, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../components/Bottombar/ProgressBar';
import loginMobileBg from "../../assets/loginmobilebg.png";
import loginBg from "../../assets/loginbg.png";

const UploadDocs = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen text-white font-sans flex items-center justify-center p-0 md:p-6 relative overflow-hidden bg-[#090C15] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${window.innerWidth >= 768 ? loginBg : loginMobileBg})`
      }}
    >
      {/* Main Container - Adjusted to hug content exactly like a mobile view */}
      <div className="w-full max-w-[420px] bg-[#0B101A] flex flex-col pt-10 pb-8 px-6 relative z-10 animate-in fade-in slide-in-from-right-8 duration-500">

        {/* Progress Bar Component */}
        <ProgressBar currentStep={2} />

        {/* Header Section */}
        <div className="mt-6 mb-8">
          <h1 className="text-[26px] font-bold tracking-tight text-white mb-2">Expert Verification</h1>
          <p className="text-[#8B95A5] text-[14px] leading-relaxed pr-4">
            Upload your credentials to start your teaching journey.
          </p>
        </div>

        {/* Upload Cards List */}
        <div className="space-y-4 mb-8">

          {/* Card 1: Completed State */}
          <div className="bg-[#1C2331] border-[1.5px] border-[#34D399]/40 rounded-[28px] p-4 flex items-center justify-between cursor-pointer hover:bg-[#222A3A] transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-[#122A21] p-3.5 rounded-[18px]">
                <FileText size={20} className="text-[#34D399]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-[15px] mb-0.5">Highest Educational Degree</h3>
                <p className="text-[#6B7280] text-[12px] font-medium">PDF or Image (Max 5MB)</p>
              </div>
            </div>
            <div className="pr-2">
              <CheckCircle size={22} className="text-[#34D399]" />
            </div>
          </div>

          {/* Card 2: Pending State */}
          <div className="bg-[#1C2331] rounded-[28px] p-4 flex items-center justify-between cursor-pointer hover:bg-[#222A3A] transition-colors border border-transparent">
            <div className="flex items-center gap-4">
              <div className="bg-[#262E3E] p-3.5 rounded-[18px]">
                <FileText size={20} className="text-[#8B95A5]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-[15px] mb-0.5">Identity Proof (Aadhar/PAN)</h3>
                <p className="text-[#6B7280] text-[12px] font-medium">Front & Back Required</p>
              </div>
            </div>
            <div className="pr-2">
              <Upload size={20} className="text-[#3B82F6]" />
            </div>
          </div>

          {/* Card 3: Pending State */}
          <div className="bg-[#1C2331] rounded-[28px] p-4 flex items-center justify-between cursor-pointer hover:bg-[#222A3A] transition-colors border border-transparent">
            <div className="flex items-center gap-4">
              <div className="bg-[#262E3E] p-3.5 rounded-[18px]">
                <FileText size={20} className="text-[#8B95A5]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-[15px] mb-0.5">Experience Certificate / CV</h3>
                <p className="text-[#6B7280] text-[12px] font-medium">Optional but recommended</p>
              </div>
            </div>
            <div className="pr-2">
              <Upload size={20} className="text-[#3B82F6]" />
            </div>
          </div>

        </div>

        {/* Security Info Box */}
        <div className="bg-[#0D2114] border border-[#173A22] rounded-[24px] p-4 flex items-start gap-3 mb-8">
          <ShieldCheck size={22} className="text-[#34D399] shrink-0 mt-0.5" />
          <p className="text-[#34D399] text-[13px] leading-snug font-medium pr-2">
            Your documents are encrypted and only visible to the verification board.
          </p>
        </div>

        {/* Next Button with Gradient */}
        <button
          onClick={() => navigate('/interview')}
          className="w-full bg-gradient-to-r from-[#3B82F6] to-[#46B5FF] hover:opacity-90 text-white py-4 rounded-full text-[14px] font-bold shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 tracking-wider uppercase"
        >
          NEXT: SCHEDULE INTERVIEW
          <ArrowRight size={18} className="text-white" />
        </button>

      </div>
    </div>
  );
};

export default UploadDocs;