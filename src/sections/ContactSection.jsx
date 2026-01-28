import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-[#0a0c10] text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[70%] h-auto"
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 250C150 250 250 100 400 100C550 100 650 300 800 300"
            stroke="url(#paint0_linear)"
            strokeWidth="1.5"
          />
          <path
            d="M0 280C150 280 250 130 400 130C550 130 650 330 800 330"
            stroke="url(#paint1_linear)"
            strokeWidth="1.5"
          />
          <path
            d="M0 310C150 310 250 160 400 160C550 160 650 360 800 360"
            stroke="url(#paint2_linear)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0"
              y1="100"
              x2="800"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="0.5" stopColor="white" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="0"
              y1="130"
              x2="800"
              y2="130"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="0.5" stopColor="white" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="0"
              y1="160"
              x2="800"
              y2="160"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="0.5" stopColor="white" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 js-reveal">
        <div className="max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
              PROJECT <br />
              <span className="text-accent">COLLABORATION</span>
            </h2>
            <div className="h-px w-24 bg-accent mb-8" />
            <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-light">
              공공·대기업 웹 시스템 중심의 <br />
              <span className="text-white">UI/UX 퍼블리싱 및 프론트엔드</span>{" "}
              업무를 수행합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-24">
            <div className="relative group">
              <span className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase block mb-4">
                Email Me
              </span>
              <a
                href="mailto:a1816a254@gmail.com"
                className="text-2xl md:text-3xl font-medium border-b border-white/10 pb-2 block group-hover:border-accent transition-colors duration-500"
              >
                a1816a254@gmail.com
              </a>
            </div>

            <div className="relative group">
              <span className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase block mb-4">
                Phone
              </span>
              <div className="text-2xl md:text-3xl font-medium border-b border-white/10 pb-2 block">
                010-2690-1816
              </div>
            </div>

            <div className="relative group md:col-span-2">
              <span className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase block mb-4">
                Location
              </span>
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 border-b border-white/10 pb-2">
                <span className="text-2xl md:text-3xl font-medium text-white">
                  경기도 여주시, 매룡동
                </span>
                <span className="text-slate-500 text-lg">(서울 거주 가능)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
