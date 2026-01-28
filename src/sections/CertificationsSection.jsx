import React from "react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">
            Certifications & <span className="text-accent">License</span>
          </h2>
          <p className="text-slate-500">
            전문성 확보를 위한 기술 자격 및 직무 역량 인증 현황입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-xl text-accent mr-5 flex-shrink-0">
              <span className="text-xl font-bold">IT</span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-accent uppercase tracking-wider mb-1">
                2009. 06
              </div>
              <h4 className="font-bold text-slate-900 leading-tight">
                정보처리산업기사
              </h4>
              <p className="text-xs text-slate-400 mt-1">한국산업인력공단</p>
            </div>
          </div>

          <div className="flex items-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-xl text-slate-600 mr-5 flex-shrink-0">
              <span className="text-xl font-bold">W</span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                2007. 02
              </div>
              <h4 className="font-bold text-slate-900 leading-tight">
                워드프로세서 1급
              </h4>
              <p className="text-xs text-slate-400 mt-1">대한상공회의소</p>
            </div>
          </div>

          <div className="flex items-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-xl text-slate-600 mr-5 flex-shrink-0">
              <span className="text-xl">🚗</span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                2005. 07
              </div>
              <h4 className="font-bold text-slate-900 leading-tight">
                자동차운전면허
              </h4>
              <p className="text-xs text-slate-400 mt-1">서울지방경찰청장</p>
            </div>
          </div>

          <div className="flex items-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-xl text-slate-600 mr-5 flex-shrink-0">
              <span className="text-xl">⚙️</span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                2001. 07
              </div>
              <h4 className="font-bold text-slate-900 leading-tight">
                정보기기운용기능사
              </h4>
              <p className="text-xs text-slate-400 mt-1">한국산업인력공단</p>
            </div>
          </div>

          <div className="flex items-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-xl text-slate-600 mr-5 flex-shrink-0">
              <span className="text-xl font-bold">OA</span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                2001. 05
              </div>
              <h4 className="font-bold text-slate-900 leading-tight">
                컴퓨터활용능력 3급
              </h4>
              <p className="text-xs text-slate-400 mt-1">대한상공회의소</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
