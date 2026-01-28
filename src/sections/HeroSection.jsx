import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-10 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-accent" />
          <span className="text-accent text-xs font-bold uppercase tracking-wider">
            새로운 프로젝트 진행 가능
          </span>
        </div>

        <h1
          className="font-display text-[2.6rem] md:text-7xl font-black tracking-tighter leading-[1.05] mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-slate-900">디자인을 이해하는</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-500 to-indigo-600">
            퍼블리싱 · 프론트엔드
          </span>
        </h1>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href="#projects"
            className="px-12 py-5 bg-accent text-white rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-2xl shadow-accent/30 flex items-center group"
          >
            경력 요약 보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="px-12 py-5 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
          >
            협업 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
