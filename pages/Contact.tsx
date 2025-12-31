import React, { useState, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Contact: React.FC = () => {
  const contactConfig = useProducts().contactConfig;
  const addInquiry = useProducts().addInquiry;
  const t = useProducts().t;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showAgreeError, setShowAgreeError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const { id, value, type } = target;
    const checked = (target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert(t.lang === 'KO' ? '모든 항목을 입력해주세요.' : 'Please fill in all fields.');
      return;
    }
    if (!formData.agree) {
      setShowAgreeError(true);
      return;
    }

    addInquiry({
      name: formData.name,
      email: formData.email,
      message: formData.message
    });

    setShowSuccessPopup(true);
    setFormData({ name: '', email: '', message: '', agree: false });
  };

  useEffect(() => {
    if (showSuccessPopup) {
      const timer = setTimeout(() => setShowSuccessPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup]);

  useEffect(() => {
    if (showAgreeError) {
      const timer = setTimeout(() => setShowAgreeError(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showAgreeError]);

  return (
    <div className="w-full bg-background-light min-h-screen relative">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${contactConfig.heroImageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <ScrollAnimationWrapper 
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4" 
          animation="fade-in-up"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tight break-keep">
            {t.nav.contact}
          </h1>
          <p className="text-lg md:text-3xl text-white/90 max-w-5xl leading-relaxed break-keep">
            {contactConfig.pageSubtitle}
          </p>
        </ScrollAnimationWrapper>
      </section>

      {/* Agreement Warning Popup */}
      {showAgreeError && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-navy/20 backdrop-blur-sm" onClick={() => setShowAgreeError(false)}></div>
          <div className="relative bg-white rounded-[32px] p-8 shadow-2xl flex flex-col items-center gap-6 max-w-sm w-full text-center border border-red-50 animate-fade-in-up">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-5xl">priority_high</span>
            </div>
            <div>
              <h3 className="text-xl font-black text-navy mb-2">
                {t.lang === 'KO' ? '동의 확인 필요' : 'Agreement Required'}
              </h3>
              <p className="text-slate-500 leading-relaxed break-keep">
                {t.lang === 'KO' 
                  ? '개인정보 수집 및 이용에 동의를 체크해주세요.' 
                  : 'Please check the agreement to the collection and use of personal information.'}
              </p>
            </div>
            <button 
              onClick={() => setShowAgreeError(false)}
              className="w-full py-4 bg-navy text-white font-bold rounded-2xl hover:bg-slate-800 transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm"></div>
          <div className="relative bg-white rounded-[32px] p-10 shadow-2xl flex flex-col items-center gap-6 max-w-sm w-full text-center border border-slate-100">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-5xl">check_circle</span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-navy mb-2">{t.contact.successTitle}</h3>
              <p className="text-slate-500 leading-relaxed break-keep whitespace-pre-line">
                {t.contact.successDesc}
              </p>
            </div>
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="w-full py-4 bg-navy text-white font-bold rounded-2xl hover:bg-slate-800 transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4 break-keep">{contactConfig.pageTitle}</h2>
              <p className="text-slate-500 text-lg">{contactConfig.pageSubtitle}</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">TEL</p>
                  <p className="text-navy/70 font-medium">1588-1234</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">EMAIL</p>
                  <p className="text-navy/70 font-medium">info@incarebio.co.kr</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50">
              <h2 className="text-2xl font-black mb-10 text-navy">{contactConfig.formTitle}</h2>
              <form className="flex flex-col gap-8">
                <div className="space-y-2">
                  <label className="text-lg font-bold text-navy px-1">{t.contact.name}</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-5 focus:outline-none focus:bg-white transition-all text-navy text-lg" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-lg font-bold text-navy px-1">{t.contact.email}</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-5 focus:outline-none focus:bg-white transition-all text-navy text-lg" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-lg font-bold text-navy px-1">{t.contact.message}</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-5 focus:outline-none focus:bg-white transition-all text-navy text-lg resize-none"
                  ></textarea>
                </div>
                <div className="flex items-center gap-3 bg-slate-50/50 p-4 rounded-2xl group cursor-pointer" onClick={() => setFormData(p => ({ ...p, agree: !p.agree }))}>
                  <input type="checkbox" id="agree" checked={formData.agree} readOnly className="w-5 h-5 accent-primary cursor-pointer" />
                  <label htmlFor="agree" className="text-sm text-slate-600 cursor-pointer select-none">{t.contact.agree}</label>
                </div>
                <button type="button" onClick={handleSubmit} className="w-full bg-primary text-white font-black py-5 rounded-2xl hover:brightness-110 transition-all shadow-lg text-lg">
                  {t.contact.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;