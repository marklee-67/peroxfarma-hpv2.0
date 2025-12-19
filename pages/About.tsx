
import React from 'react';
import { useProducts } from '../context/ProductContext';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const About: React.FC = () => {
  const { aboutConfig, t } = useProducts();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // 배경색 매핑: 1. 고객중심(#81D3EB), 2. 과학기반(#B0DFDB), 3. 지속가능성(#BBB8DC)
  const visionBgColors = [
    'bg-[#81D3EB]', // 고객 중심
    'bg-[#B0DFDB]', // 과학 기반
    'bg-[#BBB8DC]'  // 지속 가능성
  ];

  return (
    <div className="w-full bg-background-light">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${aboutConfig.mainImageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <ScrollAnimationWrapper 
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4" 
          animation="fade-in-up"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tight">
            {t.nav.about}
          </h1>
          <p className="text-lg md:text-3xl text-white/90 max-w-5xl whitespace-pre-line leading-relaxed">
            {aboutConfig.introText}
          </p>
        </ScrollAnimationWrapper>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-12 gap-4 md:gap-8 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {Object.entries(t.about.tabs).map(([id, label]) => (
            <button 
              key={id}
              onClick={() => scrollToSection(id)}
              className="px-2 py-4 text-sm font-bold text-slate-400 hover:text-primary whitespace-nowrap transition-colors focus:outline-none flex-shrink-0"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Vision Cards with Requested Colors */}
        <section id="vision" className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-black mb-8 md:mb-12 text-navy text-center">{t.about.visionTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.visionCards.map((item, idx) => (
              <ScrollAnimationWrapper 
                key={idx} 
                animation="fade-in-up" 
                delay={idx * 0.1}
                className={`${visionBgColors[idx]} p-10 md:p-12 rounded-[40px] shadow-xl shadow-black/5 flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group`}
              >
                <div className="w-20 h-20 rounded-3xl bg-white/40 backdrop-blur-md flex items-center justify-center text-navy shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-5xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 text-navy">{item.title}</h3>
                  <p className="text-navy/70 leading-relaxed break-keep font-medium text-lg">
                    {item.desc}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </section>

        {/* History Timeline */}
        <section id="history" className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-black mb-10 text-navy">{t.about.historyTitle}</h2>
          <div className="relative pl-4 border-l-4 border-primary/20 space-y-16">
            {t.about.historyData.map((yearData, idx) => (
              <div key={idx} className="relative pl-10">
                <div className="absolute -left-[14px] top-1.5 h-6 w-6 rounded-full bg-primary border-4 border-white shadow-md"></div>
                <h3 className="text-3xl font-black text-primary mb-6">{yearData.year}</h3>
                <ul className="space-y-4">
                  {yearData.events.map((event, eIdx) => (
                    <li key={eIdx} className="text-lg text-slate-600 font-medium break-keep flex gap-2">
                      <span className="text-primary font-black">•</span>
                      <span>
                        <strong className="font-black text-navy mr-2">{event.split(':')[0]}</strong>
                        {event.split(':')[1]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Organization Chart */}
        <section id="organization" className="py-16">
          <h2 className="text-2xl md:text-3xl font-black mb-12 md:mb-16 text-navy text-center">{t.about.orgTitle}</h2>
          <div className="flex flex-col items-center">
            <div className="bg-navy p-1 rounded-3xl shadow-2xl mb-12 relative w-full max-w-[280px] transform hover:scale-105 transition-transform">
              <div className="bg-white rounded-[22px] px-8 py-6 text-center">
                <p className="font-black text-navy text-2xl mb-1">CEO</p>
                <p className="text-sm font-bold text-primary-deep uppercase tracking-widest">{t.about.orgRoles.ceo}</p>
              </div>
              <div className="absolute top-full left-1/2 w-1 h-12 bg-navy/10 -translate-x-1/2"></div>
            </div>

            <div className="relative w-full max-w-5xl">
              {/* Connector line for desktop */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-navy/10 hidden md:block rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pt-0 md:pt-12">
                 {[
                   { name: t.about.orgRoles.rd, sub: 'R&D', color: 'bg-[#81D3EB]' },
                   { name: t.about.orgRoles.marketing, sub: 'Marketing', color: 'bg-[#B0DFDB]' },
                   { name: t.about.orgRoles.ops, sub: 'Operations', color: 'bg-[#BBB8DC]' }
                 ].map((dept, idx) => (
                   <div key={idx} className="relative flex flex-col items-center">
                     <div className="absolute -top-12 left-1/2 w-1 h-12 bg-navy/10 -translate-x-1/2 md:block hidden"></div>
                     <div className={`${dept.color} rounded-[32px] p-0.5 w-full shadow-lg transform hover:-translate-y-1 transition-all duration-300`}>
                       <div className="bg-white rounded-[30px] p-8 text-center h-full">
                         <p className="font-black text-navy text-xl mb-2">{dept.name}</p>
                         <p className="text-xs font-black text-navy/40 uppercase tracking-[0.2em]">{dept.sub}</p>
                       </div>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
