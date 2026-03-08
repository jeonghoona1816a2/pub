import React, { useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule, ModuleRegistry } from "ag-grid-community";

// ag-Grid 필수 스타일
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const API_URL = import.meta.env.VITE_SKILL_INVENTORY_API_URL || "/api/skills";

const fallbackRows = [
  { id: 1, name: "React", category: "Frontend", level: "Advanced", years: 4, lastUsed: "2026-02" },
  { id: 2, name: "JavaScript", category: "Language", level: "Advanced", years: 8, lastUsed: "2026-02" },
  { id: 3, name: "TypeScript", category: "Language", level: "Intermediate", years: 2, lastUsed: "2026-02" },
  { id: 4, name: "HTML5", category: "Frontend", level: "Advanced", years: 9, lastUsed: "2026-02" },
  { id: 5, name: "CSS3", category: "Frontend", level: "Advanced", years: 9, lastUsed: "2026-02" },
  { id: 6, name: "SCSS", category: "Frontend", level: "Advanced", years: 6, lastUsed: "2026-02" },
  { id: 7, name: "WebSquare", category: "Frontend", level: "Advanced", years: 5, lastUsed: "2025-12" },
  { id: 8, name: "AG Grid", category: "Library", level: "Advanced", years: 3, lastUsed: "2026-01" },
  { id: 9, name: "FullCalendar", category: "Library", level: "Intermediate", years: 2, lastUsed: "2025-12" },
  { id: 10, name: "Figma", category: "Design", level: "Advanced", years: 5, lastUsed: "2026-02" },
  { id: 11, name: "Adobe Illustrator", category: "Design", level: "Advanced", years: 10, lastUsed: "2026-01" },
  { id: 12, name: "Adobe Photoshop", category: "Design", level: "Advanced", years: 10, lastUsed: "2026-01" },
  { id: 13, name: "Supabase", category: "Backend", level: "Beginner", years: 1, lastUsed: "2026-02" },
  { id: 14, name: "FastAPI", category: "Backend", level: "Beginner", years: 1, lastUsed: "2026-02" },
  { id: 15, name: "Git", category: "Tool", level: "Advanced", years: 6, lastUsed: "2026-02" },
  { id: 16, name: "Azure DevOps", category: "Tool", level: "Intermediate", years: 2, lastUsed: "2025-12" },
];

export default function SkillInventorySection() {
  const [rowData, setRowData] = useState(fallbackRows);
  const [status, setStatus] = useState({ loading: true, error: "" });

  const columnDefs = useMemo(() => [
    { 
      headerName: "Skill Name", 
      field: "name", 
      flex: 1.5,
      cellRenderer: (p) => (
        <div className="flex items-center h-full pl-2">
          <span className="font-bold text-slate-800">{p.value}</span>
        </div>
      )
    },
    { 
      headerName: "Category", 
      field: "category", 
      flex: 1,
      cellRenderer: (p) => (
        <div className="flex items-center h-full">
          <span className="text-[10px] px-2.5 py-1 rounded-md border border-slate-200 bg-slate-50 text-slate-500 font-bold uppercase tracking-tight">
            {p.value}
          </span>
        </div>
      )
    },
    { 
      headerName: "Level", 
      field: "level", 
      flex: 1,
      cellRenderer: (p) => {
        const styles = {
          Advanced: "bg-indigo-50 text-indigo-600 border-indigo-100",
          Intermediate: "bg-emerald-50 text-emerald-600 border-emerald-100",
          Beginner: "bg-amber-50 text-amber-600 border-amber-100",
        };
        const dotColors = {
          Advanced: "bg-indigo-500",
          Intermediate: "bg-emerald-500",
          Beginner: "bg-amber-500",
        };
        return (
          <div className="flex items-center h-full">
            <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold border ${styles[p.value] || 'bg-gray-50'}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${dotColors[p.value]} mr-2 animate-pulse`} />
              {p.value}
            </div>
          </div>
        );
      }
    },
    {
      headerName: "Experience",
      field: "years",
      width: 140,
      cellRenderer: (p) => (
        <div className="flex items-center h-full text-slate-600 font-medium">
          <span className="text-lg mr-1 font-semibold text-slate-900">{p.value}</span>
          <span className="text-[11px] text-slate-400">yrs</span>
        </div>
      )
    },
    { 
      headerName: "Last Used", 
      field: "lastUsed", 
      width: 130,
      cellRenderer: (p) => (
        <div className="flex items-center h-full font-mono text-xs text-slate-400">
          {p.value}
        </div>
      )
    },
  ], []);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    resizable: false,
  }), []);

  // 그리드 세부 스타일 및 간격 조정
  const gridStyle = useMemo(() => ({
    height: 450, // 전체 높이를 줄여서 세로 스크롤 유도
    width: "100%",
    "--ag-header-background-color": "#f8fafc",
    "--ag-header-foreground-color": "#64748b",
    "--ag-header-height": "60px", // 헤더 높이 확장
    "--ag-row-height": "70px",    // 행 높이를 대폭 늘려 간격 확보
    "--ag-font-size": "15px",    // 폰트 크기 살짝 키움
    "--ag-grid-size": "12px",    // 내부 패딩/간격 기준값 확장
    "--ag-border-color": "#f1f5f9",
    "--ag-row-hover-color": "#f8fafc",
    "--ag-header-column-separator-display": "none",
    "--ag-font-family": "'Pretendard', 'Inter', system-ui, sans-serif",
  }), []);

  useEffect(() => {
    let ignore = false;
    const loadSkills = async () => {
      setStatus({ loading: true, error: "" });
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (!ignore) {
          setRowData(data);
          setStatus({ loading: false, error: "" });
        }
      } catch (error) {
        if (!ignore) {
          setRowData(fallbackRows);
          setStatus({ loading: false, error: "연결 실패: 샘플 데이터를 표시합니다." });
        }
      }
    };
    loadSkills();
    return () => { ignore = true; };
  }, []);

  return (
    <section id="skill-inventory" className="py-20 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 상단 타이틀 & 통계 박스 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-[11px] font-bold uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Live Inventory</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Skill <span className="text-indigo-600">Inventory</span>
            </h2>
          </div>
          
          <div className="flex items-center space-x-3 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="px-5 py-2 text-center border-r border-slate-100">
              <p className="text-[10px] text-slate-400 uppercase font-bold">Total</p>
              <p className="text-xl font-black text-slate-800">{rowData.length}</p>
            </div>
            <div className="px-5 py-2 text-center">
              <p className="text-[10px] text-slate-400 uppercase font-bold">Main</p>
              <p className="text-xl font-black text-indigo-600">Frontend</p>
            </div>
          </div>
        </div>

        {/* 그리드 영역: 고정 높이와 스크롤 */}
        <div className="bg-white rounded-[24px] border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="ag-theme-quartz" style={gridStyle}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              animateRows={true}
              suppressCellFocus={true}
            />
          </div>
        </div>

        {/* 하단 범례 */}
        <div className="mt-6 flex items-center justify-end space-x-6 px-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span className="text-[11px] font-bold text-slate-500 uppercase">Advanced</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-[11px] font-bold text-slate-500 uppercase">Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  );
}