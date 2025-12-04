
import React from 'react';
import { useProducts } from '../context/ProductContext';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const About: React.FC = () => {
  const { aboutConfig } = useProducts();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Header height + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full bg-background-light">
      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${aboutConfig.mainImageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <ScrollAnimationWrapper className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tight">
            회사소개
          </h1>
          <p className="text-3xl text-white/90 max-w-5xl whitespace-pre-line leading-relaxed">
            {aboutConfig.introText}
          </p>
        </ScrollAnimationWrapper>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-16 gap-8 overflow-x-auto">
          <button 
            onClick={() => scrollToSection('vision')}
            className="px-4 py-4 text-sm font-bold text-text-secondary hover:text-primary whitespace-nowrap transition-colors focus:outline-none"
          >
            비전/미션
          </button>
          <button 
            onClick={() => scrollToSection('history')}
            className="px-4 py-4 text-sm font-bold text-text-secondary hover:text-primary whitespace-nowrap transition-colors focus:outline-none"
          >
            연혁
          </button>
          <button 
            onClick={() => scrollToSection('organization')}
            className="px-4 py-4 text-sm font-bold text-text-secondary hover:text-primary whitespace-nowrap transition-colors focus:outline-none"
          >
            조직도
          </button>
        </div>

        {/* Vision Cards */}
        <section id="vision" className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-text-primary">우리의 비전과 미션</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'group', title: '고객 중심', desc: '개인의 건강 데이터를 기반으로 가장 효과적인 솔루션을 제공합니다.' },
              { icon: 'science', title: '과학 기반', desc: '최신 연구와 기술을 바탕으로 신뢰할 수 있는 제품을 만듭니다.' },
              { icon: 'spa', title: '지속 가능성', desc: '건강한 삶과 환경의 조화를 추구하며 사회적 책임을 다합니다.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-4">
                <span className="material-symbols-outlined text-4xl text-primary">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History Timeline */}
        <section id="history" className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-text-primary">걸어온 길</h2>
          <div className="relative pl-4 border-l-2 border-gray-200 space-y-12">
            {[
              { year: '2023', events: ['11월: 개인 맞춤형 구독 서비스 공식 런칭', '07월: 시리즈 A 투자 유치 (100억 원)', '02월: 자체 R&D 연구소 설립'] },
              { year: '2022', events: ['09월: 베타 서비스 오픈 및 사용자 1만 명 돌파', '03월: 시드 투자 유치'] },
              { year: '2021', events: ['05월: NutriPersonal (Ferox Pharma Korea) 법인 설립'] }
            ].map((yearData, idx) => (
              <div key={idx} className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
                <h3 className="text-xl font-bold text-primary mb-4">{yearData.year}</h3>
                <ul className="space-y-3">
                  {yearData.events.map((event, eIdx) => (
                    <li key={eIdx} className="text-sm text-text-secondary">
                      <strong className="font-semibold text-text-primary mr-2">{event.split(':')[0]}:</strong>
                      {event.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Organization Chart */}
        <section id="organization">
          <h2 className="text-2xl font-bold mb-10 text-text-primary">조직 구성</h2>
          <div className="flex flex-col items-center">
            {/* CEO */}
            <div className="bg-primary/10 px-8 py-4 rounded-lg border border-primary/20 text-center mb-8 relative">
              <p className="font-bold text-primary text-lg">CEO</p>
              <p className="text-sm text-text-secondary">최고경영자</p>
              <div className="absolute top-full left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
            </div>

            {/* Departments */}
            <div className="relative w-full max-w-3xl">
              <div className="absolute top-0 left-1/6 right-1/6 h-px bg-gray-300 w-full"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                 {[
                   { name: '연구개발', sub: 'R&D' },
                   { name: '마케팅', sub: 'Marketing' },
                   { name: '운영', sub: 'Operations' }
                 ].map((dept, idx) => (
                   <div key={idx} className="relative flex flex-col items-center">
                     <div className="absolute -top-8 left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2 md:block hidden"></div>
                     <div className="bg-white border border-gray-200 rounded-lg p-6 w-full text-center shadow-sm">
                       <p className="font-bold text-text-primary">{dept.name}</p>
                       <p className="text-sm text-text-secondary mt-1">{dept.sub}</p>
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
