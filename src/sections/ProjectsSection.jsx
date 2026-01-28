import React from "react";

import projects from "./projectsData";

export default function ProjectsSection() {
  const featuredCards = projects.filter((project) => project.featured);

  return (
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {featuredCards.map((project) => {
            const card = project.featured;

            if (card.variant === "primary") {
              return (
                <div
                  key={project.id}
                  className={`${card.colSpan} ${card.className}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent z-10" />
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px]" />

                  <div className="relative p-6 md:p-10 z-20 w-full h-full flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.tags || []).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-accent/20 text-accent text-[10px] md:text-xs font-bold rounded-full backdrop-blur-md border border-accent/30 uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white font-display text-2xl md:text-3xl font-bold mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 max-w-2xl mb-6 text-sm md:text-base leading-relaxed">
                      {project.desc}{" "}
                      {card.extra && (
                        <span className="hidden sm:inline">{card.extra}</span>
                      )}
                    </p>
                    <a
                      href={card.linkHref}
                      className="inline-flex items-center text-accent font-bold group-hover:translate-x-2 transition-transform"
                    >
                      {card.linkText}
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
              );
            }

            if (card.variant === "info") {
              return (
                <div
                  key={project.id}
                  className={`${card.colSpan} ${card.className}`}
                >
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
                        d={card.iconPath}
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 mb-8 leading-relaxed text-sm md:text-base">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {card.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter border border-slate-200 px-2 py-0.5 rounded"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className={`${card.colSpan} ${card.className}`}
              >
                <div className="p-6 md:p-10 flex flex-col h-full">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 max-w-xl mb-8 text-base md:text-lg">
                    {project.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {card.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="p-4 rounded-xl bg-white/50 backdrop-blur border border-white"
                      >
                        <p className="text-[10px] font-bold text-accent uppercase mb-1">
                          {stat.label}
                        </p>
                        <p className="font-display font-bold text-sm">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={card.linkHref}
                    className="mt-auto inline-flex items-center text-primary font-bold hover:text-accent transition-colors"
                  >
                    {card.linkText}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
