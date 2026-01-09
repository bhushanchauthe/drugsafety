import React, { useMemo, useState } from 'react';
import { MEDDRA_DATA } from '../constants';
import { TreeFilter } from '../types';

interface TreePanelProps {
  onSelect: (filter: TreeFilter) => void;
}

// Internal component for rendering a tree node row
const TreeNodeRow: React.FC<{
  label: string;
  level: number; // 0=SOC, 1=HLGT, 2=HLT, 3=PT, 4=LLT
  isExpanded: boolean;
  isSelected: boolean;
  hasChildren: boolean;
  onToggle: (e: React.MouseEvent) => void;
  onClick: () => void;
}> = ({ label, level, isExpanded, isSelected, hasChildren, onToggle, onClick }) => {
  return (
    <div 
      className={`flex items-center cursor-pointer py-0.5 pr-2 text-xs whitespace-nowrap ${isSelected ? 'bg-[#cce8ff] border border-[#99bce8]' : 'hover:bg-blue-50 border border-transparent'}`}
      style={{ paddingLeft: `${level * 16 + 4}px` }}
      onClick={onClick}
    >
      <span 
        onClick={onToggle}
        className={`w-4 h-4 flex items-center justify-center mr-1 text-gray-500 font-bold hover:text-blue-600 ${!hasChildren ? 'invisible' : ''}`}
      >
        {isExpanded ? '[-]' : '[+]'}
      </span>
      <span 
        className={`truncate ${level === 0 ? 'font-bold text-[#004b87]' : 'text-gray-800'}`} 
        title={label}
      >
        {label}
      </span>
    </div>
  );
};

const TreePanel: React.FC<TreePanelProps> = ({ onSelect }) => {
  // Store expanded node IDs. ID format: "LEVEL:Path"
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    const next = new Set(expanded);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpanded(next);
  };

  const handleSelect = (id: string, level: TreeFilter['level'], value: string) => {
    setSelectedId(id);
    onSelect({ level, value });
  };

  // --- Level 1: SOCs ---
  const socs = useMemo(() => Array.from(new Set(MEDDRA_DATA.map(d => d.soc))).sort(), []);

  const renderLLTs = (soc: string, hlgt: string, hlt: string, pt: string) => {
    // Filter matching entries for LLT
    const llts = MEDDRA_DATA
      .filter(d => d.soc === soc && d.hlgt === hlgt && d.hlt === hlt && d.pt === pt)
      .map(d => ({ name: d.llt, code: d.llt_code }))
      .sort((a, b) => a.name.localeCompare(b.name));

    return llts.map(llt => {
      // Create a unique ID for the LLT node based on the path
      const id = `LLT:${soc}|${hlgt}|${hlt}|${pt}|${llt.name}`;
      return (
        <TreeNodeRow
          key={id}
          label={llt.name}
          level={4}
          isExpanded={false}
          isSelected={selectedId === id}
          hasChildren={false} // LLT is the leaf
          onToggle={(e) => e.stopPropagation()}
          onClick={() => handleSelect(id, 'LLT', llt.name)}
        />
      );
    });
  };

  const renderPTs = (soc: string, hlgt: string, hlt: string) => {
    const pts = Array.from(new Set(MEDDRA_DATA
      .filter(d => d.soc === soc && d.hlgt === hlgt && d.hlt === hlt)
      .map(d => d.pt))).sort();
    
    return pts.map(pt => {
      const id = `PT:${soc}|${hlgt}|${hlt}|${pt}`;
      const isExpanded = expanded.has(id);
      return (
        <div key={id}>
          <TreeNodeRow
            key={id}
            label={pt}
            level={3}
            isExpanded={isExpanded}
            isSelected={selectedId === id}
            hasChildren={true} // PT can now be expanded to show LLTs
            onToggle={(e) => { e.stopPropagation(); toggle(id); }}
            onClick={() => handleSelect(id, 'PT', pt)}
          />
          {isExpanded && renderLLTs(soc, hlgt, hlt, pt)}
        </div>
      );
    });
  };

  const renderHLTs = (soc: string, hlgt: string) => {
    const hlts = Array.from(new Set(MEDDRA_DATA
      .filter(d => d.soc === soc && d.hlgt === hlgt)
      .map(d => d.hlt))).sort();

    return hlts.map(hlt => {
      const id = `HLT:${soc}|${hlgt}|${hlt}`;
      const isExpanded = expanded.has(id);
      return (
        <div key={id}>
          <TreeNodeRow
            label={hlt}
            level={2}
            isExpanded={isExpanded}
            isSelected={selectedId === id}
            hasChildren={true}
            onToggle={(e) => { e.stopPropagation(); toggle(id); }}
            onClick={() => handleSelect(id, 'HLT', hlt)}
          />
          {isExpanded && renderPTs(soc, hlgt, hlt)}
        </div>
      );
    });
  };

  const renderHLGTs = (soc: string) => {
    const hlgts = Array.from(new Set(MEDDRA_DATA
      .filter(d => d.soc === soc)
      .map(d => d.hlgt))).sort();

    return hlgts.map(hlgt => {
      const id = `HLGT:${soc}|${hlgt}`;
      const isExpanded = expanded.has(id);
      return (
        <div key={id}>
          <TreeNodeRow
            label={hlgt}
            level={1}
            isExpanded={isExpanded}
            isSelected={selectedId === id}
            hasChildren={true}
            onToggle={(e) => { e.stopPropagation(); toggle(id); }}
            onClick={() => handleSelect(id, 'HLGT', hlgt)}
          />
          {isExpanded && renderHLTs(soc, hlgt)}
        </div>
      );
    });
  };

  return (
    <div className="h-full flex flex-col bg-white border-r border-[#99bce8] w-80 min-w-[250px] shrink-0">
      <div className="argus-panel-header px-2 py-1 text-xs flex justify-between items-center">
        <span>MedDRA Hierarchy</span>
        <button 
          onClick={() => { setExpanded(new Set()); setSelectedId(null); onSelect({ level: 'SOC', value: '' }); }} // Reset
          className="text-[10px] text-blue-600 hover:underline"
        >
          Reset
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-1 bg-white">
        {socs.map(soc => {
          const id = `SOC:${soc}`;
          const isExpanded = expanded.has(id);
          return (
            <div key={id} className="mb-0.5">
              <TreeNodeRow
                label={soc}
                level={0}
                isExpanded={isExpanded}
                isSelected={selectedId === id}
                hasChildren={true}
                onToggle={(e) => { e.stopPropagation(); toggle(id); }}
                onClick={() => handleSelect(id, 'SOC', soc)}
              />
              {isExpanded && renderHLGTs(soc)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TreePanel;