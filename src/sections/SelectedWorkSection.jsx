import React, { useState, useEffect, useCallback } from "react";
import img3M from "../images/package-3m.png";
import kio3Image from "../images/kiosk-ui-03.png";
import neckDesign from "../images/neck-device.png";
import penDesign from "../images/pen-design.png";
import rhinoModel from "../images/rhino-model.png";
import displayPop from "../images/display-pop.png";
import menuDesign from "../images/menu-design.png";
import courtWeb from "../images/court-web.png";
import courtWebAlt1 from "../images/court-web-1.png";
import courtWebAlt2 from "../images/court-web-2.png";
import passportDesign from "../images/passport-design.png";
import webDesign2 from "../images/web-design-2.png";
import webDesign3 from "../images/web-design-3.png";
import kioskUI from "../images/kiosk-ui.png";
import kioskUIAlt from "../images/kiosk-ui-2.png";
import pamphletDesign from "../images/pamphlet.png";
import popPamphlet from "../images/pop-leaflet.png";
import popPamphletAlt from "../images/pop-leaflet-2.png";
import packageDesign1 from "../images/package-design-1.png";
import packageDesign2 from "../images/package-design-2.png";
import craversBrand from "../images/cravers.png";

const portfolioImages = [
  {
    id: 1,
    category: "Package Design",
    title: "3M 브랜드 패키지 디자인",
    desc: "판매·납품에 적용된 패키지로, 브랜드 컬러와 정보 구조를 정리해 가독성을 높였습니다.",
    img: img3M,
    subCategory: "package",
  },
  {
    id: 2,
    category: "Kiosk UI",
    title: "키오스크 인터랙션 레이아웃",
    desc: "운영 키오스크에서 사용되는 흐름을 단순화해 터치 오류를 줄였습니다.",
    img: kio3Image,
    subCategory: "web",
  },
  {
    id: 3,
    category: "Product Visual",
    title: "Neck 디바이스 비주얼",
    desc: "제품 소개에 사용된 비주얼로 형태감을 명확히 보여줍니다.",
    img: neckDesign,
    subCategory: "시각디자인",
  },
  {
    id: 4,
    category: "Product Design",
    title: "펜 제품 디자인",
    desc: "제품 라인업에 적용된 외형 디자인으로 사용성과 그립감을 고려했습니다.",
    img: penDesign,
    subCategory: "시각디자인",
  },
  // {
  //   id: 5,
  //   category: "3D Modeling",
  //   title: "Rhino 3D 모델링",
  //   desc: "제작 협업에 사용된 3D 모델링으로 곡면과 디테일을 정리했습니다.",
  //   img: rhinoModel,
  //   subCategory: "시각디자인",
  // },
  {
    id: 6,
    category: "Print",
    title: "디스플레이 POP 디자인",
    desc: "매장 프로모션에 사용된 POP로 메시지 전달력을 높였습니다.",
    img: displayPop,
    subCategory: "시각디자인",
  },
  {
    id: 7,
    category: "Editorial",
    title: "매장 메뉴 보드 디자인",
    desc: "매장에 적용된 메뉴 보드로 정보 계층을 재구성했습니다.",
    img: menuDesign,
    subCategory: "시각디자인",
  },
  {
    id: 8,
    category: "Web UI",
    title: "법원 포털 UI 메인",
    desc: "포털 메인 화면으로 공공 서비스 특성을 반영했습니다.",
    img: courtWeb,
    subCategory: "web",
  },
  {
    id: 9,
    category: "Web UI",
    title: "법원 포털 UI 서브",
    desc: "포털 메인 페이지로 정보 밀도를 균형 있게 조정했습니다.",
    img: courtWebAlt1,
    subCategory: "web",
  },
  {
    id: 10,
    category: "Web UI",
    title: "법원 포털 UI 디테일",
    desc: "업무 흐름에 맞춘 폼과 테이블 레이아웃입니다.",
    img: courtWebAlt2,
    subCategory: "web",
  },
  {
    id: 11,
    category: "Identity",
    title: "여권 커버 디자인 개선",
    desc: "실사용을 고려해 보안성과 상징성을 정리한 디자인 작업입니다.",
    img: passportDesign,
    subCategory: "시각디자인",
  },
  {
    id: 12,
    category: "Web Design",
    title: "브랜드 웹 디자인 02",
    desc: "적용된 레이아웃으로 톤앤매너를 유지했습니다.",
    img: webDesign2,
    subCategory: "web",
  },
  {
    id: 13,
    category: "Web Design",
    title: "브랜드 웹 디자인 03",
    desc: "히어로 섹션을 중심으로 시선을 모았습니다.",
    img: webDesign3,
    subCategory: "web",
  },
  {
    id: 14,
    category: "Kiosk UI",
    title: "키오스크 주문 플로우",
    desc: "주문 동선에서 주요 기능을 상단에 배치해 선택 속도를 높였습니다.",
    img: kioskUI,
    subCategory: "web",
  },
  {
    id: 15,
    category: "Kiosk UI",
    title: "키오스크 주문 플로우 02",
    desc: "운영 반영 후 카테고리 구조를 단순화한 개선 버전입니다.",
    img: kioskUIAlt,
    subCategory: "web",
  },
  {
    id: 16,
    category: "Print",
    title: "브랜딩 팜플렛",
    desc: "3단 접지형 팜플렛으로 핵심 메시지를 요약했습니다.",
    img: pamphletDesign,
    subCategory: "시각디자인",
  },
  {
    id: 17,
    category: "Print",
    title: "프로모션 팝플렛",
    desc: "이벤트에 사용된 팝플렛으로 컬러 포인트를 강화했습니다.",
    img: popPamphlet,
    subCategory: "시각디자인",
  },
  {
    id: 18,
    category: "Print",
    title: "프로모션 팝플렛 02",
    desc: "운영 캠페인에 맞춰 메시지 우선순위를 정리한 버전입니다.",
    img: popPamphletAlt,
    subCategory: "시각디자인",
  },
  {
    id: 19,
    category: "Package Design",
    title: "패키지 디자인 01",
    desc: " 제품의 패키지로 특징을 직관적으로 전달합니다.",
    img: packageDesign1,
    subCategory: "package",
  },
  {
    id: 20,
    category: "Package Design",
    title: "패키지 디자인 02",
    desc: "정보 배치를 개선해 적용한 패키지 버전입니다.",
    img: packageDesign2,
    subCategory: "package",
  },
  {
    id: 21,
    category: "Branding",
    title: "Cravers 내부 교무 시스템",
    desc: "운영되는 교무 시스템으로, 담당자 업무 흐름에 맞춰 화면 구조를 정리했습니다.",
    img: craversBrand,
    subCategory: "시각디자인",
  },
];

const STORAGE_KEY = "selected-work-items-v1";
const ADMIN_PASSWORD =
  import.meta.env.VITE_SELECTED_WORK_ADMIN_PASSWORD || "1234";

const loadStoredItems = () => {
  if (typeof window === "undefined") return portfolioImages;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return portfolioImages;
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || parsed.length === 0) return portfolioImages;
    return parsed;
  } catch (error) {
    return portfolioImages;
  }
};

export default function PortfolioGallery() {
  const [items, setItems] = useState(() => loadStoredItems());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isPaused = isManuallyPaused || isHovering;
  const [adminStep, setAdminStep] = useState(null);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadCategory, setUploadCategory] = useState("");
  const [uploadSubCategory, setUploadSubCategory] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadError, setUploadError] = useState("");

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (items.length === 0) return 0;
      return prev === items.length - 1 ? 0 : prev + 1;
    });
  }, [items.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (items.length === 0) return 0;
      return prev === 0 ? items.length - 1 : prev - 1;
    });
  };

  const togglePause = () => {
    setIsManuallyPaused((prev) => !prev);
  };

  useEffect(() => {
    let interval;
    if (!isPaused && items.length > 1) {
      interval = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(interval);
  }, [nextSlide, isPaused, items.length]);

  useEffect(() => {
    if (currentIndex >= items.length && items.length > 0) {
      setCurrentIndex(0);
    }
  }, [currentIndex, items.length]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      // ignore storage errors (private mode, quota)
    }
  }, [items]);

  const openAdmin = () => {
    setPasswordInput("");
    setPasswordError("");
    setUploadError("");
    setAdminStep("password");
  };

  const closeAdmin = () => {
    setAdminStep(null);
    setPasswordInput("");
    setPasswordError("");
    setUploadError("");
    setUploadTitle("");
    setUploadCategory("");
    setUploadSubCategory("");
    setUploadFile(null);
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setPasswordError("");
      setAdminStep("panel");
    } else {
      setPasswordError("비밀번호가 일치하지 않습니다.");
    }
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    if (!uploadFile) {
      setUploadError("이미지 파일을 선택하세요.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = typeof reader.result === "string" ? reader.result : "";
      if (!imageUrl) {
        setUploadError("이미지 처리에 실패했습니다.");
        return;
      }
      const newItem = {
        id: Date.now(),
        category: uploadCategory || "New Work",
        title: uploadTitle || "Untitled",
        desc: "",
        img: imageUrl,
        subCategory: uploadSubCategory || "",
      };
      setItems((prev) => [...prev, newItem]);
      setUploadTitle("");
      setUploadCategory("");
      setUploadSubCategory("");
      setUploadFile(null);
      setUploadError("");
    };
    reader.onerror = () => setUploadError("이미지 처리에 실패했습니다.");
    reader.readAsDataURL(uploadFile);
  };

  const moveItem = (index, direction) => {
    setItems((prev) => {
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= prev.length) return prev;
      const nextItems = [...prev];
      const temp = nextItems[index];
      nextItems[index] = nextItems[targetIndex];
      nextItems[targetIndex] = temp;
      return nextItems;
    });
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Portfolio <span className="text-slate-400 font-light">Archive</span>
          </h2>
          <div className="flex gap-2">
            <button
              onClick={openAdmin}
              className="px-3 py-2 rounded-full border border-slate-200 text-xs font-semibold tracking-wide uppercase hover:bg-slate-50"
            >
              Manage
            </button>
            <button
              onClick={togglePause}
              className="px-3 py-2 rounded-full border border-slate-200 text-xs font-semibold tracking-wide uppercase hover:bg-slate-50"
              aria-pressed={isManuallyPaused}
              aria-label={isManuallyPaused ? "Resume autoplay" : "Pause autoplay"}
              title={isManuallyPaused ? "Resume autoplay" : "Pause autoplay"}
            >
              {isManuallyPaused ? "Play" : "Pause"}
            </button>
            <button onClick={prevSlide} className="p-2 rounded-full border border-slate-200 hover:bg-slate-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full border border-slate-200 hover:bg-slate-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((work, idx) => (
              <div key={work.id} className="min-w-full px-1">
                <div
                  className={`
                  group relative w-full aspect-video md:aspect-[21/9] md:max-h-[450px] overflow-hidden rounded-xl bg-slate-100 transition-all duration-700 flex items-center justify-center p-5
                  ${currentIndex === idx ? "opacity-100" : "opacity-10 scale-100 blur-[2px]"}
                `}
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <img
                      src={work.img}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover blur-2xl scale-110 opacity-40"
                    />
                    <div className="absolute inset-0 bg-slate-900/10" />
                  </div>
                  <img
                    src={work.img}
                    alt={work.title}
                    className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-1000 group-hover:scale-100"
                  />

                  <div className="absolute inset-0 z-20 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 backdrop-blur-sm">
                    <p className="text-blue-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {work.category}
                    </p>
                    <h3 className="text-white text-xl md:text-3xl font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {work.title}
                    </h3>
                    {/* <p className="text-slate-300 text-center max-w-lg text-xs md:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      {work.desc}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                currentIndex === i ? "w-8 bg-slate-800" : "w-2 bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>

      {adminStep && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl border border-slate-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Selected Work Manager
                </p>
                <h3 className="text-lg font-bold text-slate-900">
                  {adminStep === "password" ? "비밀번호 확인" : "이미지 업로드 & 순서 관리"}
                </h3>
              </div>
              <button
                onClick={closeAdmin}
                className="text-slate-400 hover:text-slate-700"
                aria-label="Close admin panel"
              >
                ✕
              </button>
            </div>

            {adminStep === "password" && (
              <form onSubmit={handlePasswordSubmit} className="px-6 py-8 space-y-4">
                <p className="text-sm text-slate-500">
                  관리 화면에 접근하려면 비밀번호를 입력하세요.
                </p>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(event) => setPasswordInput(event.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="비밀번호"
                />
                {passwordError && (
                  <p className="text-sm text-red-500">{passwordError}</p>
                )}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={closeAdmin}
                    className="px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold"
                  >
                    확인
                  </button>
                </div>
              </form>
            )}

            {adminStep === "panel" && (
              <div className="px-6 py-6 space-y-6">
                <form onSubmit={handleAddItem} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        이미지 업로드
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => setUploadFile(event.target.files?.[0] || null)}
                        className="w-full text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        타이틀
                      </label>
                      <input
                        type="text"
                        value={uploadTitle}
                        onChange={(event) => setUploadTitle(event.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="예: New Branding"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        카테고리
                      </label>
                      <input
                        type="text"
                        value={uploadCategory}
                        onChange={(event) => setUploadCategory(event.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="예: Branding"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        서브 카테고리
                      </label>
                      <input
                        type="text"
                        value={uploadSubCategory}
                        onChange={(event) => setUploadSubCategory(event.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="선택"
                      />
                    </div>
                  </div>
                  {uploadError && (
                    <p className="text-sm text-red-500">{uploadError}</p>
                  )}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold"
                    >
                      업로드 추가
                    </button>
                  </div>
                </form>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">오더 순서</h4>
                    <span className="text-xs text-slate-400">
                      위/아래 버튼으로 순서를 변경하세요.
                    </span>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto border border-slate-100 rounded-xl">
                    {items.map((item, index) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 last:border-b-0"
                      >
                        <span className="text-xs font-semibold text-slate-400 w-6">
                          {index + 1}
                        </span>
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-14 h-10 object-cover rounded-md border border-slate-200"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-900 truncate">
                            {item.title || "Untitled"}
                          </p>
                          <p className="text-xs text-slate-400 truncate">
                            {item.category}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => moveItem(index, -1)}
                            disabled={index === 0}
                            className="px-2 py-1 rounded-md border border-slate-200 text-xs disabled:opacity-40"
                          >
                            위
                          </button>
                          <button
                            type="button"
                            onClick={() => moveItem(index, 1)}
                            disabled={index === items.length - 1}
                            className="px-2 py-1 rounded-md border border-slate-200 text-xs disabled:opacity-40"
                          >
                            아래
                          </button>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="px-2 py-1 rounded-md border border-red-200 text-xs text-red-500 hover:bg-red-50"
                          >
                            삭제
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closeAdmin}
                    className="px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold"
                  >
                    닫기
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
