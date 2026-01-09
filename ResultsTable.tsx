import React from 'react';
import { MedDRAEntry } from '../types';

interface ResultsTableProps {
  data: MedDRAEntry[];
  selectedRow: MedDRAEntry | null;
  onRowClick: (entry: MedDRAEntry) => void;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ data, selectedRow, onRowClick }) => {
  return (
    <div className="flex-1 flex flex-col bg-white border border-[#99bce8] m-1 overflow-hidden">
      <div className="overflow-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-[#e3efff] text-[#004b87] text-xs font-bold z-10">
            <tr>
              <th className="p-1 border border-[#99bce8] w-24">LLT Code</th>
              <th className="p-1 border border-[#99bce8]">LLT Name</th>
              <th className="p-1 border border-[#99bce8]">PT Name</th>
              <th className="p-1 border border-[#99bce8] w-48">SOC</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {data.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500 italic">
                  No terms found. Try a different search or use the AI Assistant.
                </td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr
                  key={`${row.llt_code}-${idx}`}
                  onClick={() => onRowClick(row)}
                  className={`cursor-pointer border-b border-gray-200 hover:bg-blue-50 ${
                    selectedRow?.llt_code === row.llt_code && selectedRow.llt === row.llt
                      ? 'bg-[#ffffcc] outline outline-1 outline-orange-300' // Argus yellow highlight style
                      : 'even:bg-[#f9f9f9]'
                  }`}
                >
                  <td className="p-1 border-r border-gray-200">{row.llt_code}</td>
                  <td className="p-1 border-r border-gray-200 font-medium">{row.llt}</td>
                  <td className="p-1 border-r border-gray-200">{row.pt}</td>
                  <td className="p-1 truncate max-w-xs">{row.soc}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="bg-[#f4f4f4] p-1 text-[10px] text-gray-500 border-t border-[#99bce8]">
        Records: {data.length}
      </div>
    </div>
  );
};

export default ResultsTable;
