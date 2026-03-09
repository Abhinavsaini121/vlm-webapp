import React, { useState } from 'react';
import { 
  FileText, 
  UploadCloud, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  ChevronLeft,
  FileBadge
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Replace with your actual paths
import loginMobileBg from "../../assets/loginmobilebg.png";

const UploadDocs = () => {
  const navigate = useNavigate();

  // State to hold uploaded files
  const [files, setFiles] = useState({
    degree: null,
    idProof: null,
    experience: null,
  });

  const [error, setError] = useState('');

  // Handle file selection
  const handleFileChange = (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      setFiles(prev => ({ ...prev, [docType]: file }));
      setError(''); // Clear error when user uploads something
    }
  };

  // Validation & Navigation
  const handleNext = () => {
    if (!files.degree || !files.idProof) {
      setError("Please upload all mandatory documents (Degree & ID Proof).");
      return;
    }
    
    // Proceed to next step
    console.log("Uploaded Files:", files);
    navigate('/interview'); // Replace with your next route
  };

  // Helper function to truncate long file names
  const truncateFileName = (name) => {
    if (name.length > 25) return name.substring(0, 22) + "...";
    return name;
  };

  return (
    <div className="min-h-screen h-screen w-full bg-[#090C15] text-white font-sans flex overflow-hidden">
      
      {/* --- LEFT SECTION (DESKTOP VISUALS) --- */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex w-[45%] relative flex-col justify-between p-12 bg-[#050810] border-r border-white/5 relative overflow-hidden"
      >
         {/* Abstract Glows */}
         <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-[#34D399]/10 blur-[120px] rounded-full pointer-events-none"></div>
         <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-[#3B82F6]/10 blur-[120px] rounded-full pointer-events-none"></div>

         {/* Branding */}
         <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#eef7ff] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="text-black font-black text-sm tracking-tight">VLM</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Academy</span>
            </div>
            
            <h1 className="text-5xl font-black leading-tight mb-4 tracking-tight">
               Verify Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] to-[#3B82F6]">Expertise.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
               Join our elite community of educators. We verify every profile to ensure world-class teaching standards.
            </p>
         </div>

         {/* Decorative Security Badge */}
         <div className="relative z-10 w-full flex-1 flex items-center justify-center">
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
               className="relative"
             >
                <div className="w-40 h-40 rounded-[2.5rem] bg-gradient-to-tr from-[#34D399] to-[#3B82F6] p-[2px] shadow-2xl shadow-emerald-500/20 rotate-12">
                   <div className="w-full h-full rounded-[2.3rem] bg-[#090C15] flex items-center justify-center">
                      <ShieldCheck size={72} className="text-[#34D399]" strokeWidth={1.5} />
                   </div>
                </div>
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-6 -left-12 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl -rotate-6"
                >
                   <FileBadge size={32} className="text-blue-400" />
                </motion.div>
             </motion.div>
         </div>
      </motion.div>

      {/* --- RIGHT SECTION (FORM) --- */}
      <div 
        className="w-full lg:w-[55%] h-full relative flex flex-col items-center p-0 overflow-y-auto overflow-x-hidden"
        style={{
            backgroundImage: window.innerWidth < 1024 ? `url(${loginMobileBg})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
      >
        {/* Full Screen Overlay for Mobile */}
        <div className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-0"></div>

        {/* Content Wrapper with added vertical margins (py-16) for breathing room */}
        <div className="w-full max-w-[480px] relative z-10 px-6 py-16 lg:py-20 flex flex-col justify-center min-h-screen lg:min-h-0 my-auto">
            
            {/* Nav & Header - INLINE TITLE */}
            <div className="mb-10">
                <div className="flex items-center gap-4 mb-3">
                    <button 
                      onClick={() => navigate(-1)}
                      className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors flex items-center justify-center group shrink-0"
                    >
                      <ChevronLeft size={22} className="text-gray-400 group-hover:text-white transition-colors" />
                    </button>
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      Expert Verification
                    </h1>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed sm:pl-[3.5rem]">
                  Please upload valid documents. Formats accepted: PDF, JPG, PNG (Max 5MB).
                </p>
            </div>

            {/* --- UPLOAD CARDS --- */}
            <div className="space-y-4 mb-8">
              
              <UploadCard 
                title="Highest Educational Degree"
                subtitle={files.degree ? truncateFileName(files.degree.name) : "Mandatory Document *"}
                file={files.degree}
                onChange={(e) => handleFileChange(e, 'degree')}
                id="upload-degree"
              />

              <UploadCard 
                title="Identity Proof (Aadhar/PAN)"
                subtitle={files.idProof ? truncateFileName(files.idProof.name) : "Front & Back Required *"}
                file={files.idProof}
                onChange={(e) => handleFileChange(e, 'idProof')}
                id="upload-id"
              />

              <UploadCard 
                title="Experience Certificate / CV"
                subtitle={files.experience ? truncateFileName(files.experience.name) : "Optional but recommended"}
                file={files.experience}
                onChange={(e) => handleFileChange(e, 'experience')}
                id="upload-exp"
              />

            </div>

            {/* Error Message */}
            <AnimatePresence>
                {error && (
                    <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-xs font-bold mb-6 text-center bg-red-500/10 py-3 px-4 rounded-xl border border-red-500/20"
                    >
                        * {error}
                    </motion.p>
                )}
            </AnimatePresence>

            {/* Security Info Box */}
            <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-[1.5rem] p-5 flex items-start gap-4 mb-8 shadow-inner backdrop-blur-md">
              <div className="p-2 bg-emerald-500/10 rounded-full shrink-0">
                 <ShieldCheck size={20} className="text-[#34D399]" />
              </div>
              <p className="text-[#34D399] text-xs leading-relaxed font-medium mt-0.5">
                Your privacy is our priority. All uploaded documents are strictly encrypted and used solely for verification purposes.
              </p>
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-[#3B82F6] to-[#46B5FF] hover:opacity-90 text-white py-4.5 rounded-[1.2rem] text-[14px] font-black shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2 tracking-widest uppercase border border-[#82baff]/50"
            >
              Complete Profile
              <ArrowRight size={18} className="text-white" />
            </motion.button>
            
        </div>
      </div>
    </div>
  );
};

// --- REUSABLE UPLOAD CARD COMPONENT ---
const UploadCard = ({ title, subtitle, file, onChange, id }) => {
  const isUploaded = !!file;

  return (
    <motion.label 
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      htmlFor={id} 
      className={`group relative block rounded-[1.5rem] p-5 flex items-center justify-between cursor-pointer transition-all duration-300 overflow-hidden ${
        isUploaded 
        ? 'bg-[#34D399]/10 border-[1.5px] border-[#34D399] shadow-[0_0_20px_rgba(52,211,153,0.15)]' 
        : 'bg-white/5 border border-dashed border-white/20 hover:border-[#3B82F6]/60 hover:bg-white/10'
      }`}
    >
      {/* Background glow on hover for empty state */}
      {!isUploaded && (
         <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/0 via-[#3B82F6]/5 to-[#3B82F6]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      )}

      <div className="flex items-center gap-4 relative z-10">
        <div className={`p-3.5 rounded-2xl transition-colors duration-300 ${isUploaded ? 'bg-[#34D399]/20 text-[#34D399]' : 'bg-gray-800 text-gray-400 group-hover:text-[#3B82F6] group-hover:bg-[#3B82F6]/20'}`}>
          <FileText size={22} />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className={`font-bold text-sm mb-1 transition-colors ${isUploaded ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
             {title}
          </h3>
          <p className={`text-xs font-medium transition-colors ${isUploaded ? "text-[#34D399]" : "text-gray-500"}`}>
            {subtitle}
          </p>
        </div>
      </div>
      
      <div className="relative z-10 pl-2 shrink-0">
        {isUploaded ? (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
             <CheckCircle2 size={24} className="text-[#34D399]" strokeWidth={2.5} />
          </motion.div>
        ) : (
          <UploadCloud size={22} className="text-gray-500 group-hover:text-[#3B82F6] transition-colors" />
        )}
      </div>

      {/* Hidden File Input */}
      <input 
        type="file" 
        id={id} 
        onChange={onChange} 
        className="hidden" 
        accept=".pdf,.png,.jpg,.jpeg" 
      />
    </motion.label>
  );
};

export default UploadDocs;