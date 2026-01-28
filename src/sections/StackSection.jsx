import React from "react";

export default function StackSection() {
  return (
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
            ["⚛️", "React", "Framework"],
            ["🧊", "WebSquare", "Framework"],
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
              <h4 className="font-bold text-sm text-primary mb-1">{title}</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase">
                {subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
