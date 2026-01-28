import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 js-reveal">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
              About Me
            </div>
            {/* <h2 className="font-display text-5xl font-extrabold mb-8 leading-tight text-slate-900">
              디자인을 이해하는
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
                퍼블리싱 · 프론트엔드
              </span>
            </h2> */}

            <div className="space-y-6 text-slate-600 leading-relaxed text-lg mb-12">
              <p className="relative pl-6 border-l-4 border-accent/20">
                UI/UX 디자인, 웹 퍼블리싱, 프론트엔드 개발 전반에 걸친 실무
                경험을 바탕으로{" "}
                <strong className="text-slate-900">
                  사용자 중심의 화면 설계
                </strong>
                와 안정적인 프론트엔드 구현을 함께 고민합니다.
              </p>
              <p>
                공공·대기업 내부, 외부 시스템 등 규모 있는 프로젝트를 다수
                수행하며 디자인 의도를 정확히 이해하고, 퍼블리싱과 React
                기반 화면 구현까지 일관되게 연결해 왔습니다.
                기획–디자인–개발 사이의 간극을 줄이는 협업 효율에 강점이
                있습니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[160px] p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-tighter">
                  Experience
                </p>
                <h4 className="text-4xl font-black text-accent">16+</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Years of Practice
                </p>
              </div>
              <div className="flex-1 min-w-[160px] p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-tighter">
                  Core Client
                </p>
                <h4 className="text-2xl font-bold text-slate-800 leading-none py-2">
                  공공 · 대기업
                </h4>
                <p className="text-xs text-slate-400">Enterprise Systems</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-[2.5rem] blur-2xl" />
            <div className="relative bg-white/80 backdrop-blur-xl p-10 rounded-[2rem] shadow-2xl border border-white">
              <h3 className="font-display text-2xl font-bold mb-10 flex items-center text-slate-900">
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mr-4 shadow-lg shadow-accent/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                Core Philosophy
              </h3>

              <ul className="space-y-8">
                <li className="group">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-lg mb-1">
                        실무 중심의 구현
                      </h5>
                      <p className="text-slate-600 leading-snug">
                        빠른 요구사항 변화 속에서도 구조를 무너뜨리지 않는
                        화면 구현을 지향합니다.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-lg mb-1">
                        확장성과 재사용성
                      </h5>
                      <p className="text-slate-600 leading-snug">
                        공통 컴포넌트와 일관된 퍼블리싱 구조로 유지보수
                        비용을 줄입니다.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-lg mb-1">
                        사용자 중심 UI/UX
                      </h5>
                      <p className="text-slate-600 leading-snug">
                        접근성, 가독성, 사용 흐름을 고려한 화면을 기본
                        원칙으로 삼습니다.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
