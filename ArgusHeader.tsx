import React from 'react';

const ArgusHeader: React.FC = () => {
  return (
    <div className="w-full h-12 flex items-center px-4 justify-between argus-header text-white shadow-md z-50">
      <div className="flex items-center gap-3">
        {/* Placeholder for an Oracle/Argus-style icon */}
        <div className="w-6 h-6 bg-white/20 rounded-sm border border-white/40 flex items-center justify-center font-serif font-bold text-sm">
          V
        </div>
        <h1 className="font-semibold text-lg tracking-wide">
          VigiLearn MedDRA Browser <span className="text-blue-200 text-xs font-normal ml-2">(Training Env: India)</span>
        </h1>
      </div>
      <div className="text-xs text-blue-100 flex gap-4">
        <span>User: STUDENT_01</span>
        <span>Role: CODER</span>
        <span>Dict: MedDRA 27.0</span>
      </div>
    </div>
  );
};

export default ArgusHeader;
