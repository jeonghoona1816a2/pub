import React, { useState, useEffect, useCallback } from "react";

const portfolioImages = [
  {
    id: 1,
    category: "Web Publishing",
    title: "사법 시스템 UI 개선",
    desc: "기존의 복잡한 그리드를 시각적으로 정리한 퍼블리싱 작업입니다.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Design",
    title: "반응형 랜딩 페이지",
    desc: "모바일 우선주의를 적용하여 설계한 반응형 웹 디자인 작업물입니다.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Standardization",
    title: "접근성 최적화 프로젝트",
    desc: "모든 사용자가 평등하게 정보를 접할 수 있도록 표준을 준수했습니다.",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function PortfolioGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === portfolioImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Portfolio <span className="text-slate-400 font-light">Archive</span>
          </h2>
          <div className="flex gap-2">
            <button onClick={prevSlide} className="p-2 rounded-full border border-slate-200 hover:bg-slate-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full border border-slate-200 hover:bg-slate-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* 갤러리 슬라이더 */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {portfolioImages.map((work, idx) => (
              <div key={work.id} className="min-w-full px-1">
                {/* 핵심 수정 부분: 
                  - aspect-[16/9] md:aspect-[21/9]: 화면 비율 고정
                  - max-h-[500px]: PC에서 너무 커지는 것 방지 
                */}
                <div className={`
                  group relative w-full aspect-video md:aspect-[21/9] md:max-h-[450px] overflow-hidden rounded-xl transition-all duration-700
                  ${currentIndex === idx ? "opacity-100" : "opacity-10 scale-95 blur-[2px]"}
                `}>
                  
                  {/* 이미지: 부모 컨테이너를 꽉 채우되 비율에 맞춰 잘림(object-cover) */}
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* 마우스 오버시에만 나타나는 텍스트 (정중앙 배치) */}
                  <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 backdrop-blur-sm">
                    <p className="text-blue-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {work.category}
                    </p>
                    <h3 className="text-white text-xl md:text-3xl font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {work.title}
                    </h3>
                    <p className="text-slate-300 text-center max-w-lg text-xs md:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      {work.desc}
                    </p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 인디케이터 */}
        <div className="flex justify-center gap-2 mt-6">
          {portfolioImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-8 bg-slate-800' : 'w-2 bg-slate-200'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}