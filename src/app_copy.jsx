import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    };
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observedElements = [];
    document.querySelectorAll(".js-reveal").forEach((element) => {
      element.style.opacity = "0";
      observer.observe(element);
      observedElements.push(element);
    });

    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const handleToggleMobile = () => {
      if (!mobileMenu) return;
      mobileMenu.classList.toggle("hidden");
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenuButton?.setAttribute("aria-expanded", String(isOpen));
    };
    const handleCloseMobile = () => {
      if (!mobileMenu) return;
      mobileMenu.classList.add("hidden");
      mobileMenuButton?.setAttribute("aria-expanded", "false");
    };

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", handleToggleMobile);
      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", handleCloseMobile);
      });
    }

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll),
      );
      observer.disconnect();
      observedElements.forEach((element) => (element.style.opacity = ""));
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.removeEventListener("click", handleToggleMobile);
        mobileMenu.querySelectorAll("a").forEach((link) => {
          link.removeEventListener("click", handleCloseMobile);
        });
      }
    };
  }, []);

  return (
    <div className="bg-surface text-primary font-body antialiased">
      <nav className="fixed top-0 w-full z-50 nav-blur border-b border-slate-200/50 relative">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="font-display text-2xl font-bold tracking-tight text-primary"
          >
            JeongHoon<span className="text-accent">Jeon</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#stack"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all"
            >
              Get in Touch
            </a>
          </div>

          <button
            id="mobile-menu-button"
            className="md:hidden p-2 text-primary"
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label="Open menu"
            type="button"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu"
          className="md:hidden hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur border-b border-slate-200/60"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            <a
              href="#about"
              className="text-sm font-semibold text-slate-700 hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-semibold text-slate-700 hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#stack"
              className="text-sm font-semibold text-slate-700 hover:text-accent transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#experience"
              className="text-sm font-semibold text-slate-700 hover:text-accent transition-colors"
            >
              experience
            </a>
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
      <main>
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
              className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-12 animate-fade-in-up"
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

        <section
          id="about"
          className="relative py-32 bg-slate-50 overflow-hidden"
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-6 js-reveal">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
                  About Me
                </div>
                <h2 className="font-display text-5xl font-extrabold mb-8 leading-tight text-slate-900">
                  디자인을 이해하는
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
                    퍼블리싱 · 프론트엔드
                  </span>
                </h2>

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
        <section id="projects" className="py-12 bg-surface">
          <div className="max-w-7xl mx-auto px-6 js-reveal">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
              Featured Projects
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="font-display text-4xl font-bold mb-4">
                  대표 <span className="text-accent">프로젝트</span>
                </h2>
                <p className="text-slate-500 max-w-xl">
                  프론트엔드 개발과 웹 퍼블리싱을 중심으로 공공·대기업 환경에서
                  수행한 주요 프로젝트 사례입니다
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="p-3 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="p-3 rounded-full border border-slate-200 bg-white shadow-md hover:bg-slate-50 transition-all text-accent"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-primary min-h-[400px] md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent z-10" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="relative p-6 md:p-10 z-20 w-full h-full flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-accent/20 text-accent text-[10px] md:text-xs font-bold rounded-full backdrop-blur-md border border-accent/30 uppercase tracking-widest">
                      WEB SQUARE
                    </span>
                    <span className="px-3 py-1 bg-accent/20 text-accent text-[10px] md:text-xs font-bold rounded-full backdrop-blur-md border border-accent/30 uppercase tracking-widest">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-accent/20 text-accent text-[10px] md:text-xs font-bold rounded-full backdrop-blur-md border border-accent/30 uppercase tracking-widest">
                      접근성
                    </span>
                  </div>
                  <h3 className="text-white font-display text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    대법원 차세대 전자소송 포털
                  </h3>
                  <p className="text-slate-300 max-w-2xl mb-6 text-sm md:text-base leading-relaxed">
                    공공 사법 서비스 전반을 아우르는 대규모 전자소송 시스템으로,
                    다수의 웹·모바일 서비스 화면 퍼블리싱과 UI 구조 개선을
                    수행했습니다.{" "}
                    <span className="hidden sm:inline">
                      접근성 심사(K-WAH/WCAG) 전면 통과를 목표로 표준화된
                      마크업과 UI를 구축했습니다.
                    </span>
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-accent font-bold group-hover:translate-x-2 transition-transform"
                  >
                    Explore Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">
                  접근성 심사 대응 경험
                </h3>
                <p className="text-slate-500 mb-8 leading-relaxed text-sm md:text-base">
                  K-WAH / WCAG 기준에 맞춰 시맨틱 구조, 키보드 접근, ARIA 적용을
                  수행했습니다.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter border border-slate-200 px-2 py-0.5 rounded">
                    WCAG
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter border border-slate-200 px-2 py-0.5 rounded">
                    WAI-ARIA
                  </span>
                </div>
              </div>

              <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 leading-tight">
                  UI 구조 설계 및 화면 표준화
                </h3>
                <p className="text-slate-500 mb-8 leading-relaxed text-sm md:text-base">
                  복잡한 화면을 공통 구조로 재정리하고, 유지보수를 고려한
                  퍼블리싱 구조를 설계했습니다.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter border border-slate-200 px-2 py-0.5 rounded">
                    UI STRUCTURE
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter border border-slate-200 px-2 py-0.5 rounded">
                    PUBLISHING
                  </span>
                </div>
              </div>

              <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-accent/5 border border-accent/10">
                <div className="p-6 md:p-10 flex flex-col h-full">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    전자소송 포털 다수 시스템 구축 경험
                  </h3>
                  <p className="text-slate-600 max-w-xl mb-8 text-base md:text-lg">
                    여러 전자소송 관련 시스템의 UI/UX 퍼블리싱을 수행하며,
                    일관된 화면 품질과 사용자 흐름을 유지했습니다.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-white/50 backdrop-blur border border-white">
                      <p className="text-[10px] font-bold text-accent uppercase mb-1">
                        SCOPE:
                      </p>
                      <p className="font-display font-bold text-sm">
                        PC 8 · Mobile 3
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/50 backdrop-blur border border-white">
                      <p className="text-[10px] font-bold text-accent uppercase mb-1">
                        ROLE
                      </p>
                      <p className="font-display font-bold text-sm">
                        UI/UX · Pub · Frontend
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/50 backdrop-blur border border-white">
                      <p className="text-[10px] font-bold text-accent uppercase mb-1">
                        Stack
                      </p>
                      <p className="font-display font-bold text-sm">
                        WebSquare · JS · Git
                      </p>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="mt-auto inline-flex items-center text-primary font-bold hover:text-accent transition-colors"
                  >
                    View Technical Documentation
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section id="stack" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 js-reveal">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-4">
                Modern Tooling &<span className="text-accent">Workflow</span>
              </h2>
              <p className="text-slate-500">
                UI/UX 설계부터 퍼블리싱, 프론트엔드 구현까지 실무 중심의 도구와
                워크플로우로 프로젝트를 완성합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                ["⚡", "JavaScript/TS", "Primary Language"],
                ["⚛️", "React", "Frontend"],
                ["🔀", "Git", "Version Control"],
                ["🎨", "SCSS / SASS", "Styling"],
                ["🖥️", "HTML5", "Markup"],
                ["🧶", "jQuery", "UI Scripting"],
                ["🖌️", "Figma", "Design Tool"],
                ["🖼️", "Adobe XD", "Design Tool"],
                ["💡", "Illustrator", "Vector"],
                ["🐳", "Photoshop", "Image"],
                ["Rh", "Rhino", "3D"],
                ["🦀", "Keyshot", "Rendering"],
                ["🚀", "DevOps", "Terraform"],
                ["♿", "Accessibility", "접근성"],
              ].map(([icon, title, subtitle]) => (
                <div
                  key={title}
                  className="group p-6 rounded-2xl bg-surface border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all text-center"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <h4 className="font-bold text-sm text-primary mb-1">
                    {title}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 js-reveal">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
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
              <article className="relative rounded-[2rem] border border-accent/20 bg-white p-8 md:p-10 shadow-xl shadow-accent/5 transition-all hover:-translate-y-1">
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

              <article className="rounded-[2rem] border border-slate-100 bg-white/70 backdrop-blur-sm p-8 md:p-10 transition-all hover:bg-white hover:shadow-lg">
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
                        <span>
                          Chart와 Grid를 활용한 데이터 시각화 모듈 구현
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              <article className="rounded-[2rem] border border-slate-100 bg-white/70 backdrop-blur-sm p-8 md:p-10 transition-all hover:bg-white hover:shadow-lg">
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
              <article className="rounded-[2rem] border border-slate-100 bg-white/70 backdrop-blur-sm p-8 md:p-10 transition-all hover:bg-white hover:shadow-lg">
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

              <article className="rounded-[2rem] border border-slate-100 bg-white/70 backdrop-blur-sm p-8 md:p-10 transition-all hover:bg-white hover:shadow-lg">
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

              <article className="rounded-[2rem] border border-slate-100 bg-white/70 backdrop-blur-sm p-8 md:p-10 transition-all hover:bg-white hover:shadow-lg">
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

              <article className="rounded-[2rem] border border-slate-100 bg-white/50 p-8 md:p-10">
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

            <div className="mt-24 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl">
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
                  ["Dev & Pub", "React, JS(ES6+), SCSS, jQuery", "#60a5fa"],
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
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" class="py-24 bg-slate-50">
          <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
              <h2 class="font-display text-4xl font-bold mb-4">
                Certifications & <span class="text-accent">License</span>
              </h2>
              <p class="text-slate-500">
                전문성 확보를 위한 기술 자격 및 직무 역량 인증 현황입니다.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="flex items-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-all">
                <div class="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-xl text-accent mr-5 flex-shrink-0">
                  <span class="text-xl font-bold">IT</span>
                </div>
                <div>
                  <div class="text-[11px] font-bold text-accent uppercase tracking-wider mb-1">
                    2009. 06
                  </div>
                  <h4 class="font-bold text-slate-900 leading-tight">
                    정보처리산업기사
                  </h4>
                  <p class="text-xs text-slate-400 mt-1">한국산업인력공단</p>
                </div>
              </div>

              <div class="flex items-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-all">
                <div class="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-xl text-slate-600 mr-5 flex-shrink-0">
                  <span class="text-xl font-bold">W</span>
                </div>
                <div>
                  <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    2007. 02
                  </div>
                  <h4 class="font-bold text-slate-900 leading-tight">
                    워드프로세서 1급
                  </h4>
                  <p class="text-xs text-slate-400 mt-1">대한상공회의소</p>
                </div>
              </div>

              <div class="flex items-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-all">
                <div class="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-xl text-slate-600 mr-5 flex-shrink-0">
                  <span class="text-xl">🚗</span>
                </div>
                <div>
                  <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    2005. 07
                  </div>
                  <h4 class="font-bold text-slate-900 leading-tight">
                    자동차운전면허
                  </h4>
                  <p class="text-xs text-slate-400 mt-1">서울지방경찰청장</p>
                </div>
              </div>

              <div class="flex items-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-all">
                <div class="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-xl text-slate-600 mr-5 flex-shrink-0">
                  <span class="text-xl">⚙️</span>
                </div>
                <div>
                  <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    2001. 07
                  </div>
                  <h4 class="font-bold text-slate-900 leading-tight">
                    정보기기운용기능사
                  </h4>
                  <p class="text-xs text-slate-400 mt-1">한국산업인력공단</p>
                </div>
              </div>

              <div class="flex items-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-all">
                <div class="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-xl text-slate-600 mr-5 flex-shrink-0">
                  <span class="text-xl font-bold">OA</span>
                </div>
                <div>
                  <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    2001. 05
                  </div>
                  <h4 class="font-bold text-slate-900 leading-tight">
                    컴퓨터활용능력 3급
                  </h4>
                  <p class="text-xs text-slate-400 mt-1">대한상공회의소</p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <span className="text-white">
                    UI/UX 퍼블리싱 및 프론트엔드
                  </span>{" "}
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
                    <span className="text-slate-500 text-lg">
                      (서울 거주 가능)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
