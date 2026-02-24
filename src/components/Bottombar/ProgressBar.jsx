import React from 'react';
import { Check } from 'lucide-react';

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'SIGNUP' },
    { id: 2, label: 'DOCUMENTS' },
    { id: 3, label: 'INTERVIEW' },
  ];

  return (
    <div className="w-full flex items-center justify-between mb-10 px-4 relative z-10">
      {steps.map((step, index) => {
        // Break down the states for exact styling
        const isCompleted = currentStep > step.id;
        const isCurrent = currentStep === step.id;
        
        return (
          <React.Fragment key={step.id}>
            {/* Step Circle & Text */}
            <div className="flex flex-col items-center relative z-20">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${
                  isCompleted
                    ? 'bg-[#41ea7c] border-none' // Solid green for completed
                    : isCurrent
                    ? 'bg-[#0a0e14] border-[2px] border-[#41ea7c] text-white shadow-[0_0_20px_rgba(65,234,124,0.35)]' // Glowing green border for current
                    : 'bg-[#0a0e14] text-[#4B5563] border-[2px] border-[#1e2532]' // Dark styling for future steps
                }`}
              >
                {isCompleted ? (
                  // Custom icon recreation: Black circle outline with a check inside
                  <div className="w-[20px] h-[20px] rounded-full border-[2px] border-black flex items-center justify-center animate-in zoom-in duration-300">
                    <Check size={12} strokeWidth={4} className="text-black" />
                  </div>
                ) : (
                  <span className="font-bold text-sm">{step.id}</span>
                )}
              </div>
              
              <span 
                className={`absolute -bottom-7 text-[10px] font-black tracking-[0.15em] uppercase transition-colors duration-500 ${
                  isCompleted 
                    ? 'text-[#6B7280]' // Gray text for completed
                    : isCurrent 
                    ? 'text-[#41ea7c]' // Green text for current
                    : 'text-[#4B5563]' // Dark gray text for upcoming
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-[3px] bg-[#1e2532] mx-1 relative z-10 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#41ea7c] transition-all duration-700 ease-in-out rounded-full"
                  style={{ width: isCompleted ? '100%' : '0%' }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressBar;