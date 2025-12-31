
import React from 'react';
import { useProducts } from '../context/ProductContext';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Terms: React.FC = () => {
  const { termsContent, t } = useProducts();

  return (
    <div className="w-full bg-slate-50 py-32 min-h-screen">
      <div className="mx-auto max-w-[900px] px-6">
        <ScrollAnimationWrapper animation="fade-in-up">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-navy mb-4">{t.footer.terms}</h1>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-in-up" delay={0.2}>
          <div className="bg-white p-10 md:p-16 rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50">
            <div className="prose prose-slate max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-slate-600 text-base md:text-lg leading-relaxed tracking-tight">
                {termsContent}
              </pre>
            </div>
            
            <div className="mt-16 pt-10 border-t border-slate-50 flex justify-center">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-primary font-black hover:text-primary-deep transition-colors"
              >
                <span className="material-symbols-outlined">arrow_upward</span>
                맨 위로 이동
              </button>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Terms;
