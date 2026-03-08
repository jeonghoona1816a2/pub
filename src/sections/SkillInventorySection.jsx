import React, { useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  DateFilterModule,
  ModuleRegistry,
  NumberFilterModule,
  TextFilterModule,
} from "ag-grid-community";

// ag-Grid 필수 스타일
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
]);

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
];

export default function SkillInventorySection() {
  const [rowData, setRowData] = useState(fallbackRows);
  const [skillStatus, setSkillStatus] = useState({ loading: true, error: "" });

  const columnDefs = useMemo(() => [
    {
      headerName: "Skill Name",
      field: "name",
      flex: 1.5,
      cellRenderer: (p) => (
        <div className="flex items-center h-full px-2">
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
          <span className="text-[10px] px-2.5 py-1 rounded border border-slate-200 bg-slate-50 text-slate-500 font-bold uppercase tracking-tight">
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
        <div className="flex items-center h-full font-mono text-xs text-slate-400 italic">
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

  const gridStyle = useMemo(() => ({
    height: 350, // 세로 스크롤을 위한 고정 높이
    width: "100%",
    margin: "20px",
    "--ag-header-background-color": "#f8fafc",
    "--ag-header-foreground-color": "#64748b",
    "--ag-header-height": "64px", // 헤더 높이 확장
    "--ag-row-height": "72px",    // 행 높이를 대폭 늘려 간격 확보
    "--ag-font-size": "15px",     // 가독성 좋은 폰트 크기
    "--ag-grid-size": "12px",     // 내부 기본 간격 확대
    "--ag-border-color": "#f1f5f9",
    "--ag-row-hover-color": "#f8fafc",
    "--ag-header-column-separator-display": "none",
    "--ag-font-family": "'Pretendard', 'Inter', system-ui, sans-serif",
  }), []);

  const gridOptions = useMemo(() => ({
    theme: "legacy",
  }), []);


  // useEffect(() => {
  //   let ignore = false;
  //   const controller = new AbortController();
  //   const loadSkills = async () => {
  //     setSkillStatus({ loading: true, error: ""});
  //     try{
  //       const response = await fetch(API_URL,)
  //     catch(error){}

  //   };
  // }, [])

/**
 * ES6에서 도입된 제너레이터 generator는 코드 블록의 실행을 일시 중지했다가 필요한 시점에서 재개할 수 있는 특수한 함수이다.
 * 제너레이터와 일반 함수의 차이는 다음과 같다.
 * 1.제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다.
 * 일반 함수를 호출하면 제어권이 함수에게 넘어가고 함수 코드를 일괄 싫행한다. 즉 함수 호출자는 함수를 호출한 이후 함수 실행을 제어할 수 없다.
 * 제너레이터 함수는 함수 실행을 함수 호출자아 제어 할 수 잇다. 다시말해 함수 호출자가 함수 실행을 일시중지 시키너가 재개시킬 수 있따.
 * 이는 함수의 제어권을 함 수가 덕점하는 것 아니라 훔수 호출자에게 양도 할수 잇뜬ㄴ 것이다.
 * 
 * 2.제너레이터 함수는 함수 호출자와 함수의 상태를 주고받을 수 있다.
 * 일반 함수를 호출하면 매개변수를 통해 함수 외부에서 값을 주입받고 함수 코드를 일괄 실행하여 결과값을 함수 외부로 반환한다. 즉 
 */

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const loadSkills = async () => {
      setSkillStatus({ loading: true, error: "" });
      try {
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (!ignore) {
          setRowData(data);
          setSkillStatus({ loading: false, error: "" });
        }
      } catch (error) {
        if (!ignore) {
          setRowData(fallbackRows);
          setSkillStatus({ loading: false, error: "서버 연결에 실패하여 샘플 데이터를 표시합니다." });
        }
      }
    };
    loadSkills();
    return () => { ignore = true; controller.abort(); };
  }, []);

  return (
    <section id="skill-inventory" className="py-24 bg-[#fcfcfd]">
      <div className="max-w-6xl mx-auto px-6">

        {/* 헤더 섹션 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Live Database</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Skill <span className="text-indigo-600">Inventory</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-md">
              보유한 기술 스택과 숙련도를 실시간으로 확인하세요. 내부 스크롤을 통해 전체 목록을 조회할 수 있습니다.
            </p>
          </div>

          <div className="flex items-center space-x-4 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
            <div className="px-5 py-2 text-center border-r border-slate-100">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Total Skills</p>
              <p className="text-2xl font-black text-slate-800">{rowData.length}</p>
            </div>
            <div className="px-5 py-2 text-center">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Main Stack</p>
              <p className="text-2xl font-black text-indigo-600 italic">Frontend</p>
            </div>
          </div>
        </div>

        {/* 그리드 컨테이너 */}
        <div className="bg-white  border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="ag-theme-quartz" style={gridStyle}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              gridOptions={gridOptions}
              defaultColDef={defaultColDef}
              animateRows={true}
              suppressCellFocus={true}
            />
          </div>
        </div>

        {/* 하단 범례 및 상태 메시지 */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 px-2">
          <p className="text-xs text-slate-400 font-medium italic">
            {skillStatus.error || "* 컬럼 헤더를 클릭하여 정렬 및 필터링을 수행할 수 있습니다."}
          </p>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="text-[11px] font-bold text-slate-600 uppercase">Advanced</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] font-bold text-slate-600 uppercase">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
