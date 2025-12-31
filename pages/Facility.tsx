import React, { useState, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Facility: React.FC = () => {
  const { facilityConfig, t } = useProducts();
  const [showPopup, setShowPopup] = useState(false);

  // 요청된 색상 배열: 1. 안정성 보장(#FFCC4E), 2. 기술혁신(#D5E05B), 3. 최상급 원료(#81D3EB)
  const principleBgColors = [
    '#FFCC4E', // 좌측: 안정성 보장
    '#D5E05B', // 중간: 기술혁신
    '#81D3EB'  // 우측: 최상급 원료
  ];

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="w-full relative">
      {/* Preparation Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={() => setShowPopup(false)}></div>
          <div className="relative bg-white rounded-[32px] p-10 shadow-2xl flex flex-col items-center gap-6 max-w-sm w-full text-center border border-slate-100 animate-zoom-in">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-5xl">event_upcoming</span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-navy mb-2">{t.facility.preparingMsg}</h3>
              <p className="text-slate-500 leading-relaxed break-keep">
                {t.lang === 'KO' 
                  ? '더 나은 서비스를 위해 준비 중입니다.\n잠시만 기다려 주세요.' 
                  : 'We are preparing for a better service.\nPlease wait a moment.'}
              </p>
            </div>
            <button 
              onClick={() => setShowPopup(false)}
              className="w-full py-4 bg-navy text-white font-bold rounded-2xl hover:bg-slate-800 transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${facilityConfig.heroImageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <ScrollAnimationWrapper className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4" animation="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tight break-keep whitespace-pre-line">
            {facilityConfig.heroTitle}
          </h1>
          <p className="text-lg md:text-3xl text-white/90 max-w-5xl leading-relaxed break-keep">
            {facilityConfig.heroSubtitle}
          </p>
        </ScrollAnimationWrapper>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-20">
        {/* Principles Section with Requested Colors */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 md:mb-16 text-navy">{t.facility.principlesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {facilityConfig.principles.map((item, idx) => (
               <ScrollAnimationWrapper 
                 key={idx} 
                 animation="fade-in-up" 
                 delay={idx * 0.1}
                 className="p-10 md:p-12 rounded-[40px] text-center shadow-xl shadow-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group border border-transparent"
                 style={{ backgroundColor: principleBgColors[idx] }}
               >
                 <div className="w-20 h-20 bg-white/40 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8 text-navy shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                 </div>
                 <h3 className="text-2xl font-black mb-4 text-navy">{item.title}</h3>
                 <p className="text-navy/70 leading-relaxed break-keep font-medium text-lg">{item.desc}</p>
               </ScrollAnimationWrapper>
             ))}
          </div>
        </section>

        {/* Process Steps */}
        <section className="mb-16 md:mb-20 bg-slate-50/50 rounded-[60px] p-8 md:p-20 border border-slate-100">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-navy">{t.facility.processTitle}</h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto break-keep">{t.facility.processSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 relative">
            {/* Connection Line for Desktop */}
            <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 hidden md:block"></div>
            
            {t.facility.processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative z-10">
                 <div className="w-24 h-24 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center mb-6 shadow-xl shadow-primary/20 transform hover:scale-110 transition-transform">
                   <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                 </div>
                 <h4 className="font-black text-xl mb-3 text-navy">{step.title}</h4>
                 <p className="text-sm text-slate-500 font-medium leading-relaxed break-keep">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certification & Lab */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row bg-white rounded-[60px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
             <div className="flex-1 p-10 md:p-20 flex flex-col justify-center order-2 md:order-1">
               <h2 className="text-3xl md:text-5xl font-black mb-8 text-navy leading-tight">{facilityConfig.certificationTitle}</h2>
               <p className="text-slate-500 mb-12 text-lg md:text-xl leading-relaxed break-keep font-medium">
                 {facilityConfig.certificationDesc}
               </p>
               <div className="flex wrap gap-6 md:gap-10 justify-start items-center">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm_qazdl_9k2lK6bqJ3r7tQfoivPWI8825agkSc58PSC8kaVL9M77Rm5_4aO6bVGpBLnBKwd81u7Y_vO3SABYFMze7fGgVBq7HfzyVifV3dXSPJq8FpUt10QNPqbhtwrNln7BP55cuFTwOzfgobl55sxG91lbDuPJjX1yRl-5XTBdC0UOYWhH1dE8eWBonH6bb5QKSV069NARKdXTu4UO7tN2UMuFLJLLLLReJjVZnhO5IPy7ZDamRN5Aj6gFrc0bE44wEqsH8_Zw" alt="GMP" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all cursor-help" title="GMP" />
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm4wd4UwJtVIOcxXcP1FIu_pXkP8QCNOI7pNUqgaoYMZbE3BXbJH1A4SOLUIxckJ2VaKzHTLytbpHEduAv2XlUEbpeH2NkKxo54kJrEAVoa9L40kpT5z5R2Uvy2JFr52mxfwY3CfNTiFNZqv6F7PWjHxTANl6z88ssJjeSg-NMJmYSr4PA-FBCSZgLESAz7R3Kk5NHHIUILFLXvXxkRPQNSvvqoN4nR01ZuEOe9ca7yuuk9BtuBl8vxh5dLsopif2yVJLBDZJEhiE" alt="HACCP" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all cursor-help" title="HACCP" />
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLbMCmbcwjD1IYK8FSYAUr3ppT4XXq6lGCaZPxPOYq8Pr1xbPYrHywn14Lw2SxExclvYbSJa_VAEfqbELV5VZMzUIgfyKdCO1Y3NNahlXAHLfMF-MpzwFYAxf1_W40eeEXRk5O0fZkHTvAXNoV0a1AP1elgVnZN4NJIHOiDgavk3QoMGqttqCwjsqJcBB86w4SaHdfwB03blYR5k-mbDC6lYSpKEZBZWogOGX6q7FndBjhzzOk8OsVFvZWUYY1yYAwb9A67M5MRJc" alt="ISO" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all cursor-help" title="ISO 9001" />
               </div>
             </div>
             <div className="flex-1 min-h-[350px] md:min-h-[500px] order-1 md:order-2">
               <img src={facilityConfig.certificationImageUrl} alt="Facility" className="w-full h-full object-cover" />
             </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-primary/5 rounded-[60px] p-12 md:p-24 text-center border border-primary/10">
            <h3 className="text-3xl md:text-5xl font-black mb-6 text-navy">{t.facility.ctaTitle}</h3>
            <p className="text-slate-500 mb-12 text-lg md:text-2xl font-medium max-w-2xl mx-auto break-keep">{t.facility.ctaDesc}</p>
            <button 
              onClick={() => setShowPopup(true)}
              className="inline-flex h-20 px-16 items-center justify-center rounded-full bg-primary text-white font-black text-xl hover:brightness-110 shadow-2xl shadow-primary/30 transition-all transform hover:scale-105"
            >
              {t.facility.ctaBtn}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Facility;