import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-navy flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-secondary/10 blur-[100px] rounded-full"></div>
        </div>

        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <ScrollAnimationWrapper animation="fade-in-up">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="text-xs font-bold text-white tracking-widest uppercase">Premium Health Care Service</span>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-in-up" delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                  데이터 기반의<br/>
                  <span className="text-primary">과학적인</span><br/>
                  건강 솔루션
                </h1>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-in-up" delay={0.2}>
                <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                  전문가의 정밀 분석을 통한 개인 맞춤형 영양 관리. 당신의 신체적 특성과 라이프스타일에 딱 맞는 최적의 건강 로드맵을 설계해 드립니다.
                </p>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper className="flex flex-wrap gap-4" animation="fade-in-up" delay={0.3}>
                <Link to="/products" className="h-14 px-10 flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-primary/20">
                  시작하기
                </Link>
                <Link to="/contact" className="h-14 px-10 flex items-center justify-center rounded-full border-2 border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-all">
                  상담 신청
                </Link>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-in-up" delay={0.4} className="flex items-center gap-8 mt-4">
                <div>
                  <p className="text-2xl font-black text-white">98%</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Customer Satisfaction</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <p className="text-2xl font-black text-white">12,000+</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Active Members</p>
                </div>
              </ScrollAnimationWrapper>
            </div>

            <ScrollAnimationWrapper animation="zoom-in" delay={0.2} className="relative">
              <div className="relative aspect-square w-full max-w-[600px] mx-auto">
                {/* Floating Cards */}
                <div className="absolute top-10 -left-6 z-30 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <span className="material-symbols-outlined text-3xl">verified_user</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold">건강 지수</p>
                      <p className="text-xl font-black text-navy">Optimal</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 -right-6 z-30 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl">analytics</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold">AI 분석 리포트</p>
                      <p className="text-xl font-black text-navy">완료</p>
                    </div>
                  </div>
                </div>

                {/* Main Hero Image with Blob Mask */}
                <div className="w-full h-full overflow-hidden image-mask-blob border-[12px] border-white/5 shadow-2xl relative z-20">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-217358c7e618?q=80&w=2070&auto=format&fit=crop" 
                    alt="Scientific Health" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-[1400px] px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollAnimationWrapper animation="fade-in-up">
              <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Core Services</h4>
              <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight">
                개인 맞춤형 정밀 헬스케어의 기준
              </h2>
            </ScrollAnimationWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'biotech', title: 'DNA 분석 기술', desc: '유전체 분석을 통해 타고난 신체적 특징과 잠재적 위험 요소를 파악합니다.' },
              { icon: 'clinical_notes', title: '라이프스타일 트래킹', desc: '식습관, 수면, 운동 데이터를 실시간으로 수집하여 일상의 밸런스를 찾습니다.' },
              { icon: 'medication_liquid', title: '맞춤형 영양 설계', desc: '분석된 데이터를 바탕으로 현재 내 몸에 가장 필요한 영양 성분만을 조합합니다.' }
            ].map((item, idx) => (
              <ScrollAnimationWrapper 
                key={idx} 
                animation="fade-in-up" 
                delay={idx * 0.1}
                className="group p-10 rounded-[40px] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all border border-transparent hover:border-primary/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8">{item.desc}</p>
                <Link to="/about" className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all">
                  상세보기 <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto max-w-[1400px] px-4">
          <ScrollAnimationWrapper animation="zoom-in">
            <div className="relative overflow-hidden rounded-[60px] bg-navy p-12 md:p-24 text-center">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                  더 건강한 미래를 위한<br/>현명한 투자
                </h2>
                <p className="text-xl text-slate-400 mb-12">
                  지금 바로 무료 AI 건강 진단을 받고 당신의 영양 상태를 확인해보세요.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/signup" className="h-16 px-12 flex items-center justify-center rounded-full bg-white text-navy font-black text-lg hover:bg-slate-100 transition-all">
                    회원가입 하기
                  </Link>
                  <Link to="/shop" className="h-16 px-12 flex items-center justify-center rounded-full bg-primary text-white font-black text-lg hover:brightness-110 transition-all">
                    스토어 둘러보기
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Home;