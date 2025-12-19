import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Facility: React.FC = () => {
  const { facilityConfig, t } = useProducts();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${facilityConfig.heroImageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <ScrollAnimationWrapper className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tight break-keep whitespace-pre-line">
            {facilityConfig.heroTitle}
          </h1>
          <p className="text-lg md:text-3xl text-white/90 max-w-5xl leading-relaxed break-keep">
            {facilityConfig.heroSubtitle}
          </p>
        </ScrollAnimationWrapper>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-20">
        {/* Principles */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-navy">{t.facility.principlesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {facilityConfig.principles.map((item, idx) => (
               <div key={idx} className="bg-white border border-gray-100 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
                 <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                 </div>
                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                 <p className="text-slate-500 break-keep">{item.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Process Steps */}
        <section className="mb-16 md:mb-20 bg-gray-50 rounded-2xl p-6 md:p-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-navy">{t.facility.processTitle}</h2>
            <p className="text-slate-500">{t.facility.processSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {t.facility.processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                 <div className="w-16 h-16 rounded-full border-2 border-primary bg-white text-primary flex items-center justify-center mb-4">
                   <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                 </div>
                 <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                 <p className="text-xs text-slate-500 break-keep">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certification & Lab */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="flex-1 p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
               <h2 className="text-2xl md:text-3xl font-bold mb-6 text-navy">{facilityConfig.certificationTitle}</h2>
               <p className="text-slate-500 mb-8 leading-relaxed break-keep">
                 {facilityConfig.certificationDesc}
               </p>
               <div className="flex gap-4 md:gap-6 justify-start">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm_qazdl_9k2lK6bqJ3r7tQfoivPWI8825agkSc58PSC8kaVL9M77Rm5_4aO6bVGpBLnBKwd81u7Y_vO3SABYFMze7fGgVBq7HfzyVifV3dXSPJq8FpUt10QNPqbhtwrNln7BP55cuFTwOzfgobl55sxG91lbDuPJjX1yRl-5XTBdC0UOYWhH1dE8eWBonH6bb5QKSV069NARKdXTu4UO7tN2UMuFLJLLLLReJjVZnhO5IPy7ZDamRN5Aj6gFrc0bE44wEqsH8_Zw" alt="GMP" className="h-12 md:h-16 object-contain" />
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm4wd4UwJtVIOcxXcP1FIu_pXkP8QCNOI7pNUqgaoYMZbE3BXbJH1A4SOLUIxckJ2VaKzHTLytbpHEduAv2XlUEbpeH2NkKxo54kJrEAVoa9L40kpT5z5R2Uvy2JFr52mxfwY3CfNTiFNZqv6F7PWjHxTANl6z88ssJjeSg-NMJmYSr4PA-FBCSZgLESAz7R3Kk5NHHIUILFLXvXxkRPQNSvvqoN4nR01ZuEOe9ca7yuuk9BtuBl8vxh5dLsopif2yVJLBDZJEhiE" alt="HACCP" className="h-12 md:h-16 object-contain" />
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLbMCmbcwjD1IYK8FSYAUr3ppT4XXq6lGCaZPxPOYq8Pr1xbPYrHywn14Lw2SxExclvYbSJa_VAEfqbELV5VZMzUIgfyKdCO1Y3NNahlXAHLfMF-MpzwFYAxf1_W40eeEXRk5O0fZkHTvAXNoV0a1AP1elgVnZN4NJIHOiDgavk3QoMGqttqCwjsqJcBB86w4SaHdfwB03blYR5k-mbDC6lYSpKEZBZWogOGX6q7FndBjhzzOk8OsVFvZWUYY1yYAwb9A67M5MRJc" alt="ISO" className="h-12 md:h-16 object-contain" />
               </div>
             </div>
             <div className="flex-1 min-h-[250px] md:min-h-[300px] order-1 md:order-2">
               <img src={facilityConfig.certificationImageUrl} alt="Facility" className="w-full h-full object-cover" />
             </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-navy">{t.facility.ctaTitle}</h3>
            <p className="text-slate-500 mb-8 text-sm md:text-base">{t.facility.ctaDesc}</p>
            <Link to="/products" className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors w-full sm:w-auto">
              {t.facility.ctaBtn}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Facility;