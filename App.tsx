import React, { useState, useEffect, useMemo } from 'react';
import ArgusHeader from './components/ArgusHeader';
import TreePanel from './components/TreePanel';
import ResultsTable from './components/ResultsTable';
import CodingPanel from './components/CodingPanel';
import { MEDDRA_DATA } from './constants';
import { MedDRAEntry, TreeFilter } from './types';
import { getGeminiSuggestion } from './services/geminiService';
import { Menu } from "lucide-react";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState<'LLT' | 'PT'>('LLT');
  const [selectedRow, setSelectedRow] = useState<MedDRAEntry | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Replaced simple SOC filter with generic TreeFilter
  const [activeTreeFilter, setActiveTreeFilter] = useState<TreeFilter | null>(null);
  
  // AI Assistant State
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  // Core Search Logic
  const filteredData = useMemo(() => {
    let data = MEDDRA_DATA;

    // 1. Filter by Tree Selection (SOC / HLGT / HLT / PT / LLT)
    if (activeTreeFilter && activeTreeFilter.value) {
      data = data.filter(item => {
        if (activeTreeFilter.level === 'SOC') return item.soc === activeTreeFilter.value;
        if (activeTreeFilter.level === 'HLGT') return item.hlgt === activeTreeFilter.value;
        if (activeTreeFilter.level === 'HLT') return item.hlt === activeTreeFilter.value;
        if (activeTreeFilter.level === 'PT') return item.pt === activeTreeFilter.value;
        if (activeTreeFilter.level === 'LLT') return item.llt === activeTreeFilter.value;
        return true;
      });
    }

    // 2. Filter by Search Term
    if (searchTerm.trim()) {
      const lowerTerm = searchTerm.toLowerCase();
      data = data.filter(item => {
        if (searchFilter === 'LLT') return item.llt.toLowerCase().includes(lowerTerm);
        return item.pt.toLowerCase().includes(lowerTerm);
      });
    }

    return data;
  }, [searchTerm, searchFilter, activeTreeFilter]);

  const handleSearch = () => {
    // When manually searching, we typically clear the tree filter to search the whole dictionary,
    // or we can search WITHIN the tree filter. Argus usually searches the whole dictionary.
    if (searchTerm) setActiveTreeFilter(null);
  };

  const handleAskAI = async () => {
    if (!aiInput.trim()) return;
    setAiLoading(true);
    const result = await getGeminiSuggestion(aiInput);
    setAiResponse(result);
    setAiLoading(false);
  };

  return (
    <div className="h-screen flex flex-col bg-[#f4f4f4] text-[#333] relative">
      <ArgusHeader />

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden absolute top-3 left-3 z-[60] p-2 bg-white rounded shadow text-[#004b87] border border-[#99bce8]"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Backdrop for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* LEFT PANEL: Tree - Wrapped for responsive sidebar */}
        <div
          className={`
            fixed inset-y-0 left-0 z-50 w-auto bg-white shadow-lg transform
            transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0 md:shadow-none md:z-auto
          `}
        >
          {/* Close button (mobile only) */}
          <button
            className="md:hidden absolute top-2 right-2 p-1 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 z-50 border border-slate-300 w-6 h-6 flex items-center justify-center font-bold text-xs"
            onClick={() => setSidebarOpen(false)}
          >
            ✖
          </button>

          <TreePanel onSelect={(filter) => {
            setActiveTreeFilter(filter);
            setSearchTerm(''); // Clear manual search when browsing tree
            setSidebarOpen(false); // Close sidebar on selection for mobile UX
          }} />
        </div>

        {/* RIGHT PANEL: Content */}
        <div className="flex-1 flex flex-col min-w-0">
          
          {/* SEARCH BAR AREA */}
          <div className="p-2 bg-[#e3efff] border-b border-[#99bce8] flex items-center gap-4 text-xs pl-14 md:pl-2">
            <div className="flex items-center gap-2">
              <label className="font-bold text-[#004b87]">Find:</label>
              <input 
                type="text" 
                className="border border-[#99bce8] px-2 py-1 w-32 md:w-64 focus:border-blue-500 outline-none bg-yellow-50"
                placeholder="Type term..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>

            <div className="hidden md:flex items-center gap-3 border-l border-blue-200 pl-3">
              <label className="flex items-center gap-1 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={searchFilter === 'LLT'} 
                  onChange={() => setSearchFilter('LLT')}
                /> Search LLT
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={searchFilter === 'PT'} 
                  onChange={() => setSearchFilter('PT')}
                /> Search PT
              </label>
            </div>

            <button 
              onClick={handleSearch}
              className="bg-[#004b87] text-white px-4 py-1 rounded-sm border border-[#003366] hover:bg-blue-700"
            >
              Search
            </button>
            
            {activeTreeFilter && !searchTerm && (
              <div className="hidden lg:flex ml-4 px-2 py-0.5 bg-yellow-100 border border-yellow-300 rounded text-[10px] text-yellow-800 items-center">
                 Browsing: {activeTreeFilter.level} - {activeTreeFilter.value}
              </div>
            )}

            <div className="flex-1 text-right">
              <button 
                onClick={() => setAiModalOpen(true)}
                className="bg-purple-600 text-white px-3 py-1 rounded-sm border border-purple-800 hover:bg-purple-700 flex items-center gap-1 ml-auto"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span className="hidden md:inline">AI Assistant</span>
                <span className="md:hidden">AI</span>
              </button>
            </div>
          </div>

          {/* TABLE AREA */}
          <ResultsTable 
            data={filteredData} 
            selectedRow={selectedRow}
            onRowClick={setSelectedRow}
          />

          {/* DETAILS AREA */}
          <CodingPanel selected={selectedRow} />

        </div>
      </div>

      {/* AI Modal */}
      {aiModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-[500px] border border-[#004b87] shadow-xl flex flex-col">
            <div className="argus-header h-8 flex items-center px-2 justify-between">
              <span className="text-white font-bold text-xs">VigiLearn AI Coding Assistant</span>
              <button onClick={() => setAiModalOpen(false)} className="text-white hover:text-red-200 font-bold">X</button>
            </div>
            <div className="p-4 bg-[#f4f4f4] text-xs">
              <p className="mb-2">Enter a complex verbatim or description (e.g., "Patient had sugar fall").</p>
              <div className="flex gap-2 mb-4">
                <input 
                  type="text" 
                  className="flex-1 border border-gray-400 p-2"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="Enter verbatim..."
                />
                <button 
                  onClick={handleAskAI}
                  disabled={aiLoading}
                  className="bg-[#004b87] text-white px-4 py-2 border border-[#003366]"
                >
                  {aiLoading ? '...' : 'Ask'}
                </button>
              </div>
              
              <div className="bg-white border border-gray-300 h-40 p-2 overflow-y-auto whitespace-pre-wrap">
                {aiResponse || <span className="text-gray-400">AI suggestion will appear here...</span>}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;