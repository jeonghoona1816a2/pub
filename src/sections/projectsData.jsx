const projects = [
  {
    id: "supreme-court",
    tag: "WEB SQUARE",
    tags: ["WEB SQUARE", "JavaScript", "접근성"],
    title: "대법원 차세대 전자소송 포털",
    desc:
      "공공 사법 서비스 전반을 아우르는 대규모 전자소송 시스템으로, 다수의 웹·모바일 서비스 화면 퍼블리싱과 UI 구조 개선을 수행했습니다.",
    stats: { scope: "PC 8 · Mobile 3", role: "UI/UX · Pub" },
    slider: true,
    featured: {
      variant: "primary",
      colSpan: "md:col-span-8",
      className:
        "group relative overflow-hidden rounded-3xl bg-primary min-h-[400px] md:h-auto",
      extra:
        "접근성 심사(K-WAH/WCAG) 전면 통과를 목표로 표준화된 마크업과 UI를 구축했습니다.",
      linkText: "Explore Project",
      linkHref: "#",
    },
  },
  {
    id: "accessibility",
    tag: "ACCESSIBILITY",
    title: "접근성 심사 대응 경험",
    desc:
      "K-WAH / WCAG 기준에 맞춰 시맨틱 구조, 키보드 접근, ARIA 적용을 수행했습니다.",
    stats: { scope: "All Pages", role: "Standardization" },
    slider: true,
    featured: {
      variant: "info",
      colSpan: "md:col-span-4",
      className:
        "group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500",
      iconPath:
        "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      badges: ["WCAG", "WAI-ARIA"],
    },
  },
  {
    id: "ui-structure",
    tag: "UI DESIGN",
    title: "UI 구조 설계 및 화면 표준화",
    desc:
      "복잡한 화면을 공통 구조로 재정리하고, 유지보수를 고려한 퍼블리싱 구조를 설계했습니다.",
    stats: { scope: "Design System", role: "Architecure" },
    slider: true,
    featured: {
      variant: "info",
      colSpan: "md:col-span-4",
      className:
        "group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500",
      iconPath:
        "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      badges: ["UI STRUCTURE", "PUBLISHING"],
    },
  },
  {
    id: "multi-system",
    title: "전자소송 포털 다수 시스템 구축 경험",
    desc:
      "여러 법원관련 시스템의 UI/UX 퍼블리싱을 수행하며, 일관된 화면 품질과 사용자 흐름을 유지했습니다.",
    featured: {
      variant: "wide",
      colSpan: "md:col-span-8",
      className:
        "group relative overflow-hidden rounded-3xl bg-accent/5 border border-accent/10",
      stats: [
        { label: "SCOPE:", value: "PC 8 · Mobile 3" },
        { label: "ROLE", value: "UI/UX · Pub · Frontend" },
        { label: "Stack", value: "WebSquare · JS · Git" },
      ],
      linkText: "View Technical Documentation",
      linkHref: "#",
    },
  },
];

export default projects;
