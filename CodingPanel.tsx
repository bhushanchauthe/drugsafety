import React from 'react';
import { MedDRAEntry } from '../types';

interface CodingPanelProps {
  selected: MedDRAEntry | null;
}

const CodingPanel: React.FC<CodingPanelProps> = ({ selected }) => {
  const handleSelect = () => {
    if (selected) {
      alert(`Term Coded Successfully!\n\nLLT: ${selected.llt}\nPT: ${selected.pt}`);
    }
  };

  return (
    <div className="h-48 bg-[#f4f4f4] border-t border-[#99bce8] flex flex-col">
      <div className="argus-panel-header px-2 py-1 text-xs">
        Coding Selection Details
      </div>
      <div className="p-2 flex-1 grid grid-cols-2 gap-4 overflow-y-auto">
        {/* Left Side Inputs */}
        <div className="grid grid-cols-[80px_1fr] gap-2 items-center text-xs">
          <label className="text-right text-gray-700 font-semibold">Verbatim:</label>
          <input 
            type="text" 
            value={selected?.llt || ''} 
            readOnly 
            className="border border-[#99bce8] px-2 py-1 bg-white text-gray-600 focus:outline-none"
          />

          <label className="text-right text-gray-700 font-semibold">LLT:</label>
          <div className="flex gap-1">
            <input 
              type="text" 
              value={selected?.llt || ''} 
              readOnly 
              className="border border-[#99bce8] px-2 py-1 bg-[#eef6ff] flex-1 font-bold text-black focus:outline-none"
            />
            <input 
              type="text" 
              value={selected?.llt_code || ''} 
              readOnly 
              className="border border-[#99bce8] px-2 py-1 bg-[#eef6ff] w-20 text-center"
            />
          </div>

          <label className="text-right text-gray-700 font-semibold">PT:</label>
           <div className="flex gap-1">
            <input 
              type="text" 
              value={selected?.pt || ''} 
              readOnly 
              className="border border-[#99bce8] px-2 py-1 bg-[#f4f4f4] flex-1"
            />
             <input 
              type="text" 
              value={selected?.pt_code || ''} 
              readOnly 
              className="border border-[#99bce8] px-2 py-1 bg-[#f4f4f4] w-20 text-center"
            />
          </div>
        </div>

        {/* Right Side Inputs */}
        <div className="grid grid-cols-[80px_1fr] gap-2 items-center text-xs">
          <label className="text-right text-gray-700 font-semibold">HLT:</label>
          <input 
            type="text" 
            value={selected?.hlt || ''} 
            readOnly 
            className="border border-[#99bce8] px-2 py-1 bg-[#f4f4f4] w-full"
          />

          <label className="text-right text-gray-700 font-semibold">HLGT:</label>
          <input 
            type="text" 
            value={selected?.hlgt || ''} 
            readOnly 
            className="border border-[#99bce8] px-2 py-1 bg-[#f4f4f4] w-full"
          />

          <label className="text-right text-gray-700 font-semibold">SOC:</label>
          <input 
            type="text" 
            value={selected?.soc || ''} 
            readOnly 
            className="border border-[#99bce8] px-2 py-1 bg-[#f4f4f4] w-full"
          />
        </div>
      </div>
      
      {/* Footer Buttons */}
      <div className="px-2 py-2 flex justify-end gap-2 border-t border-gray-300 bg-gray-100">
        <button 
          disabled={!selected}
          onClick={handleSelect}
          className={`px-6 py-1 text-xs border rounded shadow-sm ${selected ? 'bg-[#004b87] text-white hover:bg-blue-800 border-[#003366]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Select & Close
        </button>
        <button className="px-6 py-1 text-xs bg-white text-black border border-gray-400 rounded shadow-sm hover:bg-gray-50">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CodingPanel;
