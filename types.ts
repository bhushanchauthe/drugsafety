export interface MedDRAEntry {
  llt: string;
  llt_code: string;
  pt: string;
  pt_code: string;
  hlt: string;
  hlgt: string;
  soc: string;
}

export interface SearchFilters {
  searchLLT: boolean;
  searchPT: boolean;
}

export interface TreeFilter {
  level: 'SOC' | 'HLGT' | 'HLT' | 'PT' | 'LLT';
  value: string;
}