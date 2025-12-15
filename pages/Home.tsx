import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Home: React.FC = () => {
  return (
    <div className="w-full bg-background-light">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] bg-navy flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full">
            {/* Left Dark Side */}
            <div className="absolute left-0 top-0 bottom-0 w-full md:w-2/3 bg-navy z-0"></div>
            {/* Right Colored Side with Curve */}
            <div className="absolute top-0 right-0 w-full h-full md:w-[55%] bg-primary hero-curve z-10 hidden md:block transform translate-x-20"></div>
            
            {/* Decorative Patterns */}
            <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/5 rounded-full z-0 animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl z-0"></div>
        </div>

        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-20 h-full py-20 pt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
            
            {/* Left Content */}
            <div className="flex flex-col gap-6 md:gap-8 text-left">
              <ScrollAnimationWrapper animation="fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 w-fit backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="text-xs font-bold text-white tracking-wider uppercase">프리미엄 건강 관리 서비스</span>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-in-up" delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight break-keep">
                  데이터 기반의 <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-200">과학적인</span> <br/>
                  건강 솔루션
                </h1>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animation="fade-in-up" delay={0.2}>
                <p className="text-lg text-gray-400 max-w-xl leading-relaxed break-keep">
                  전문가의 정밀 분석을 통한 개인 맞춤형 영양 관리. 당신의 신체적 특성과 라이프스타일에 딱 맞는 최적의 건강 로드맵을 설계해 드립니다.
                </p>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper className="flex flex-col sm:flex-row gap-4 mt-4" animation="fade-in-up" delay={0.3}>
                <Link to="/products" className="h-14 px-8 flex items-center justify-center rounded-full bg-secondary text-white font-bold text-lg hover:bg-white hover:text-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  시작하기
                </Link>
                <Link to="/contact" className="h-14 px-8 flex items-center justify-center rounded-full border-2 border-white/20 text-white font-bold text-lg hover:bg-white hover:text-navy transition-all">
                  상담 신청
                </Link>
              </ScrollAnimationWrapper>
            </div>

            {/* Right Image */}
            <ScrollAnimationWrapper animation="zoom-in" delay={0.2} className="relative flex justify-center md:justify-end">
               <div className="relative w-full max-w-[500px] aspect-square">
                 {/* Decorative Circle */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                 
                 {/* Floating Info Cards */}
                 <div className="absolute top-10 -left-4 z-30 bg-white p-4 rounded-xl shadow-xl animate-float">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold">건강 점수</p>
                            <p className="text-lg font-black text-navy">98점</p>
                        </div>
                    </div>
                 </div>

                  <div className="absolute bottom-10 -right-4 z-30 bg-white p-4 rounded-xl shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                            <span className="material-symbols-outlined">favorite</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold">고객 만족도</p>
                            <p className="text-lg font-black text-navy">4.9/5</p>
                        </div>
                    </div>
                 </div>

                 {/* Main Image Masked */}
                 <div className="w-full h-full overflow-hidden image-mask-blob border-8 border-white/10 shadow-2xl relative z-20">
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
      <section className="relative w-full py-24 bg-white">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Text Content */}
                <div className="lg:sticky lg:top-24">
                     <ScrollAnimationWrapper animation="fade-in-up">
                        <h4 className="text-secondary font-bold uppercase tracking-widest mb-2">서비스 소개</h4>
                        <h2 className="text-4xl lg:text-5xl font-black text-navy mb-6 leading-tight break-keep">
                            내 몸에 딱 맞는 <br/> 최적의 건강 솔루션
                        </h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed break-keep">
                            첨단 바이오 기술과 영양 과학을 접목하여 당신에게 가장 효과적이고 안전한 건강 솔루션을 제안합니다.
                        </p>
                        
                        <ul className="space-y-4 mb-8">
                            {[
                                '개인 맞춤형 영양 분석',
                                '전문가 1:1 정밀 상담',
                                '검증된 프리미엄 원료 사용',
                                '정기적인 건강 모니터링'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">
                                        <span className="material-symbols-outlined text-sm">check</span>
                                    </span>
                                    <span className="font-bold text-navy">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-black hover:gap-4 transition-all">
                            더 알아보기 <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                     </ScrollAnimationWrapper>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { icon: 'biotech', title: 'DNA 유전자 분석', desc: '개인별 유전적 특성을 분석하여 맞춤형 케어를 제공합니다.' },
                        { icon: 'medication', title: '맞춤형 영양제', desc: '나에게 꼭 필요한 성분만을 배합하여 제조합니다.' },
                        { icon: 'monitor_heart', title: '건강 트래킹', desc: '실시간으로 건강 상태를 모니터링하고 피드백을 제공합니다.' },
                        { icon: 'support_agent', title: '전문가 케어', desc: '헬스케어 전문가가 상시 상담을 지원합니다.' }
                    ].map((service, idx) => (
                        <ScrollAnimationWrapper 
                            key={idx} 
                            animation="fade-in-up" 
                            delay={idx * 0.1} 
                            className={`bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 group ${idx % 2 === 1 ? 'md:translate-y-12' : ''}`}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm break-keep">{service.desc}</p>
                            <div className="mt-6 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </ScrollAnimationWrapper>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 translate-x-20"></div>
        
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <ScrollAnimationWrapper animation="fade-in-up">
                    <h4 className="text-primary font-bold uppercase tracking-widest mb-2">핵심 가치</h4>
                    <h2 className="text-4xl lg:text-5xl font-black text-navy">왜 IncareBio인가요?</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto break-keep">
                        단순히 영양제를 판매하는 것이 아닙니다. 우리는 당신의 건강한 삶을 지속하기 위한 통합 헬스케어 생태계를 제공합니다.
                    </p>
                </ScrollAnimationWrapper>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { 
                        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", 
                        title: "과학적 연구",
                        subtitle: "철저한 검증 기반"
                    },
                    { 
                        img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop", 
                        title: "최첨단 시설",
                        subtitle: "스마트 제조 시스템"
                    },
                    { 
                        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop", 
                        title: "전문가 팀",
                        subtitle: "전문적인 케어"
                    }
                ].map((item, idx) => (
                    <ScrollAnimationWrapper key={idx} animation="fade-in-up" delay={idx * 0.2}>
                        <div className="group relative overflow-hidden rounded-3xl h-[400px]">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent flex flex-col justify-end p-8">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="w-12 h-1 bg-secondary mb-4 rounded-full"></div>
                                    <p className="text-primary font-bold text-sm tracking-widest uppercase mb-1">{item.subtitle}</p>
                                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimationWrapper>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto max-w-[1000px] px-4 text-center relative z-10">
            <ScrollAnimationWrapper animation="zoom-in">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 break-keep">건강한 변화, 지금 시작하세요</h2>
                <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto break-keep">
                    이미 수많은 회원분들이 IncareBio와 함께 더 활기찬 내일을 맞이하고 있습니다. 당신에게 꼭 맞는 건강 솔루션을 찾아보세요.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" className="px-10 py-4 bg-white text-primary font-black rounded-full shadow-xl hover:bg-gray-100 transition-colors">
                        무료 상담 신청
                    </Link>
                    <Link to="/shop" className="px-10 py-4 bg-navy text-white font-black rounded-full shadow-xl hover:bg-navy/90 transition-colors">
                        스토어 구경하기
                    </Link>
                </div>
            </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Home;