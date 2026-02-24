import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { 
  ChevronLeft, 
  Type, 
  Calendar, 
  Clock, 
  Hourglass, 
  Image as ImageIcon, 
  Upload,
  X,
  Loader2
} from 'lucide-react';

const ScheduleForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    topic: '',
    date: '',
    time: '',
    duration: '60',
    thumbnail: null
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // ---------- IMAGE ----------
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, thumbnail: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  // ---------- CREATE CLASS ----------
  const handleCreate = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // dummy route after create
      navigate("/schedule-success");

    }, 3000);
  };

  return (
    // Changed: Background to Deep Slate
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans pb-32 transition-colors duration-300">

      {/* --- HEADER --- */}
      {/* Changed: BG to Deep Slate/90, Border to white/5 */}
      <header className="sticky top-0 z-20 bg-gray-50/90 dark:bg-[#0b0f1a]/90 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-200 dark:border-white/5">
        <div className="flex items-center gap-4">

          {/* BACK BUTTON WORKING */}
          <button 
            onClick={() => navigate(-1)}
            // Changed: BG to Navy, Border to white/10
            className="p-2 bg-white dark:bg-[#1a2233] rounded-full text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10"
          >
            <ChevronLeft size={20} />
          </button>

          <h1 className="text-lg font-bold">Schedule Class</h1>
        </div>

        <button 
          onClick={()=>{
            setFormData({ topic:'', date:'', time:'', duration:'60', thumbnail:null })
            setPreview(null)
          }}
          // Changed: Text to Blue/Cyan
          className="text-[#2F80FF] dark:text-[#56CCF2] font-bold text-sm px-2"
        >
          Reset
        </button>
      </header>

      <div className="p-6 space-y-8">

        {/* --- TOPIC INPUT --- */}
        <div className="space-y-2">
          {/* Changed: Icon color to Blue */}
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
            <Type size={14} className="text-[#2F80FF]" /> Class Topic
          </label>
          <input 
            type="text" 
            placeholder="e.g. Introduction to Quantum Physics"
            // Changed: BG to Navy, Border to white/10, Ring to Blue
            className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#2F80FF]/50 transition-all placeholder:text-gray-500"
            onChange={(e) => setFormData({...formData, topic: e.target.value})}
          />
        </div>

        {/* --- DATE & TIME ROW --- */}
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="date" 
            // Changed: BG to Navy, Border to white/10
            className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-sm appearance-none"
          />
          <input 
            type="time" 
            // Changed: BG to Navy, Border to white/10
            className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-sm"
          />
        </div>

        {/* --- DURATION --- */}
        <div className="flex gap-2">
          {['30','45','60','90'].map(mins=>(
            <button
              key={mins}
              onClick={()=>setFormData({...formData,duration:mins})}
              // Changed: Selected State to Blue Theme, Unselected to Navy
              className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all border ${
                formData.duration===mins
                ? 'bg-[#2F80FF] border-blue-500 text-white shadow-lg shadow-blue-900/30'
                : 'bg-white dark:bg-[#1a2233] border-gray-200 dark:border-white/10 text-gray-500'
              }`}
            >
              {mins}m
            </button>
          ))}
        </div>

        {/* --- THUMBNAIL --- */}
        {!preview ? (
          // Changed: BG to Navy, Border to white/10, Hover to Blue
          <label className="flex flex-col items-center justify-center w-full h-40 bg-white dark:bg-[#1a2233] border-2 border-dashed border-gray-200 dark:border-white/10 rounded-3xl cursor-pointer hover:border-[#2F80FF]/50 transition-all group">
            <Upload size={24} className="text-gray-400 group-hover:text-[#2F80FF]" />
            <input type="file" className="hidden" onChange={handleImageChange} />
          </label>
        ) : (
          <div className="relative w-full h-40 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10">
            <img src={preview} className="w-full h-full object-cover"/>
            <button 
              onClick={()=>setPreview(null)}
              className="absolute top-2 right-2 p-1.5 bg-black/60 rounded-full text-white"
            >
              <X size={16}/>
            </button>
          </div>
        )}
      </div>

      {/* --- BUTTON --- */}
      {/* Changed: Gradient from Deep Slate */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-50 dark:from-[#0b0f1a] via-transparent">
        
        <button
          onClick={handleCreate}
          disabled={loading}
          // Changed: BG to Blue, Shadow to Blue
          className="w-full bg-[#2F80FF] text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-blue-900/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin"/>
              Creating Class...
            </>
          ) : "Create & Broadcast"}
        </button>

        <p className="text-center text-[10px] text-gray-500 mt-3 font-medium uppercase tracking-widest">
          Students will be notified instantly
        </p>
      </div>
    </div>
  );
};

export default ScheduleForm;