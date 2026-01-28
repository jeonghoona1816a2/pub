import React from "react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 js-reveal">
          <div>
            <h2 className="font-display text-4xl font-bold mb-4 text-slate-900">
              경력 <span className="text-accent">프로젝트</span>
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              UI/UX 설계, 퍼블리싱, 프론트엔드 개발 중심의 주요 수행 이력.
            </p>
          </div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Projects
          </div>
        </div>

        <div className="space-y-10">
          {/* Experience items */}
          <article className="relative rounded-[2rem] border border-accent/20 bg-white p-8 md:p-10 shadow-xl shadow-accent/5 transition-all hover:-translate-y-1 js-reveal">
            <div className="absolute top-8 right-8 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
              </span>
              <span className="text-xs font-bold text-accent tracking-tighter">
                WORKING
              </span>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div>
                  <span className="text-sm font-bold text-slate-400 block mb-1">
                    Creverse (LGCNS)
                  </span>
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                    교무 관리 시스템
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-accent/5 rounded-lg text-xs font-bold text-accent">
                      React
                    </span>
                    <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                      UI/UX Design
                    </span>
                    <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                      Publishing
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-slate-400 text-sm font-medium">
                    2025.10 — 현재
                  </div>
                  <div className="text-slate-600 font-bold">
                    UI/UX · 웹 퍼블리싱 · 프론트엔드(React)
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-12 pt-8 lg:pt-0">
                <ul className="grid gap-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>
                      내부 직원용 업무·할 일(Task) 관리 시스템 UI/UX 설계 및
                      퍼블리싱
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>
                      카테고리·업무 리스트·TreeView·캘린더 등 핵심 업무 UI
                      구현
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>
                      Figma 기반 디자인 시안을 퍼블리싱 관점에서 구조화하여
                      React 컴포넌트로 구현
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>
                      공통 컴포넌트 구조 정비로 재사용성 및 유지보수성 향상
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>
                      베트남 개발팀과 협업하여 퍼블리싱 가이드 및 화면 기준
                      정립
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>
                      Phase 2 디자인 반영 및 UI 일관성 개선 작업 수행
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-100 bg-white/70 backdrop-blur-sm p-8 md:p-10 transition-all hover:bg-white hover:shadow-lg js-reveal">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div>
                  <span className="text-sm font-bold text-slate-400 block mb-1">
                    SK hynix
                  </span>
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                    NetZero ESG 내부시스템
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                      React
                    </span>
                    <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                      UI/UX
                    </span>
                    <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                      GIT
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-slate-400 text-sm font-medium">
                    2025.06 — 2025.09 (4개월)
                  </div>
                  <div className="text-slate-600 font-bold">
                    UI/UX · 웹 퍼블리싱 · 프론트엔드(React)
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-12 pt-8 lg:pt-0">
                <ul className="grid gap-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      React 기반 공통 UI 컴포넌트 개발 및 퍼블리싱 수행
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      사내 제공 라이브러리(signlw) 활용하여 컴포넌트
                      표준화·재사용성 강화
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      프로젝트 기간 내 신속한 의사결정과 Fast 퍼블리싱 지원
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      시각적 요소(일러스트·비주얼 디자인) 직접 제작
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>Chart와 Grid를 활용한 데이터 시각화 모듈 구현</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-100 bg-white/70 backdrop-blur-sm p-8 md:p-10 transition-all hover:bg-white hover:shadow-lg js-reveal">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <span className="text-sm font-bold text-slate-400 block mb-1">
                  Supreme Court of Korea(LGCNS)
                </span>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight leading-tight">
                  대법원 차세대 전자소송포털 <br />외 11개 시스템
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                    웹스퀘어
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                    +하이브리드앱
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                    Accessibility
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                    Cross-browsing
                  </span>
                </div>
                <div className="mt-6">
                  <div className="text-slate-400 text-sm font-medium">
                    2022.02 — 2025.05 (3년 4개월)
                  </div>
                  <div className="text-slate-600 font-bold">
                    UI/UX 프리랜서
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-12 pt-8 lg:pt-0">
                <ul className="grid gap-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      8개 웹사이트(PC) 및 3개 모바일 서비스 UI/UX 디자인 및
                      퍼블리싱 총괄
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      재사용성을 고려한 공통 UI 컴포넌트 설계 및 퍼블리싱
                      가이드 제공
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      K-WAC 충족, W3C 표준 및 ARIA 적용으로 웹 접근성 준수
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      데이터 바인딩 테이블 구현 및 JS 기반 메뉴 자동화
                      스크립트 작성
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article className="rounded-[2rem] border border-slate-100 bg-white/70 backdrop-blur-sm p-8 md:p-10 transition-all hover:bg-white hover:shadow-lg js-reveal">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <span className="text-sm font-bold text-slate-400 block mb-1">
                  SK hynix
                </span>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                  통합보안 포털
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                    Security Portal
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                    Responsive
                  </span>
                </div>
                <div className="mt-6">
                  <div className="text-slate-400 text-sm font-medium">
                    2021.08 — 2021.11 (4개월)
                  </div>
                  <div className="text-slate-600 font-bold">
                    UI/UX 프리랜서
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-12 pt-8 lg:pt-0">
                <ul className="grid gap-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      내부 파일 승인 업무 포털의 UI/UX 디자인 및 퍼블리싱
                      담당
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>다양한 디바이스 환경 대응 반응형 웹 설계</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      UI/UX 최적화를 위한 스타일 가이드 및 시스템 구축
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>개발팀과 협업하여 유지보수 효율성 제고</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-100 bg-white/70 backdrop-blur-sm p-8 md:p-10 transition-all hover:bg-white hover:shadow-lg js-reveal">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <span className="text-sm font-bold text-slate-400 block mb-1">
                  JNJ (R&D 사업부)
                </span>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                  E-Commerce &amp; Admin
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                    React
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                    Frontend Dev
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                    Branding
                  </span>
                </div>
                <div className="mt-6">
                  <div className="text-slate-400 text-sm font-medium">
                    2018.01 — 2021.08 (3년 8개월)
                  </div>
                  <div className="text-slate-600 font-bold leading-tight text-sm">
                    웹 디자이너/퍼블리셔/프론트엔드 개발
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-12 pt-8 lg:pt-0">
                <ul className="grid gap-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      React 기반 UI/UX 설계, JS 기반 데이터 바인딩 및 API
                      연동 실시간 데이터 처리
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      상품·주문 관리자 페이지 개발로 운영 효율성 증대
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      반응형 웹 구현, 웹 접근성 준수 및 성능 최적화 유지보수
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      원단·패키지 디자인 및 디지털 마케팅 콘텐츠 제작
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-100 bg-white/70 backdrop-blur-sm p-8 md:p-10 transition-all hover:bg-white hover:shadow-lg js-reveal">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <span className="text-sm font-bold text-slate-400 block mb-1">
                  Freedy (디자인사업부)
                </span>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                  Multidisciplinary Design
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                    Hybrid App
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                    Kiosk UI
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                    Package Design
                  </span>
                </div>
                <div className="mt-6">
                  <div className="text-slate-400 text-sm font-medium">
                    2013.01 — 2021.07 (8년 7개월)
                  </div>
                  <div className="text-slate-600 font-bold">
                    멀티디스플리너리 디자이너
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-12 pt-8 lg:pt-0">
                <ul className="grid gap-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      하이브리드 앱 및 키오스크 UI 개발 (Android Studio
                      활용)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      3M, Shimano 등 주요 클라이언트 협업 패키지 및 마케팅
                      콘텐츠 디자인
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>
                      기업·쇼핑몰·호텔 등 다양한 업종의 웹 UI/UX 디자인 및
                      퍼블리싱
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-100 bg-white/50 p-8 md:p-10 js-reveal">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <h3 className="text-2xl font-bold text-slate-400 tracking-tight">
                  초기 경력
                </h3>
                <div className="mt-4 text-slate-400 text-sm font-medium">
                  2003.05 — 2011.06
                </div>
              </div>
              <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-12 pt-8 lg:pt-0">
                <ul className="grid gap-4 text-slate-500 text-sm">
                  <li className="flex flex-col gap-1">
                    <span className="font-bold text-slate-700">
                      야구파크 (2010.07 ~ 2011.06)
                    </span>
                    <span>
                      홈페이지 제작·운영, UI/UX 개선 및 마케팅 기획
                    </span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-bold text-slate-700">
                      패션수다 (2003.05 ~ 2004.04)
                    </span>
                    <span>웹마스터, 홈페이지 제작</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-24 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl js-reveal">
          <h3 className="font-display text-3xl font-bold mb-12 text-center">
            Core Competencies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              [
                "UI/UX",
                "반응형 설계, 컴포넌트 시스템, 웹 접근성 준수",
                "#3B82F6",
              ],
              ["Dev & Pub", "React, JavaScript(ES6+)TS, SCSS, jQuery", "#60a5fa"],
              [
                "Design",
                "Figma, Adobe XD, Photoshop, Rhino, Illustration",
                "#a855f7",
              ],
              [
                "Versatile",
                "하이브리드 앱, 키오스크, 브랜딩, 패키지",
                "#f97316",
              ],
            ].map(([title, desc, color]) => (
              <div
                key={title}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${color}33`, color }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 21l-1 1h8l-1-1-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-xl mb-3">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
