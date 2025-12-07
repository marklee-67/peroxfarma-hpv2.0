import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] bg-primary/95 text-white overflow-hidden">
        {/* Background elements for depth */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl"></div>
        </div>

        <div className="mx-auto flex h-full max-w-[1200px] flex-col items-center justify-center gap-8 px-4 text-center relative z-10">
          <ScrollAnimationWrapper animation="fade-in-up">
            <h1 className="text-7xl font-black leading-tight tracking-tight md:text-8xl">
              과학으로 설계하는<br />당신만의 건강 솔루션
            </h1>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fade-in-up" delay={0.2}>
            <h2 className="text-3xl font-medium text-white/90 md:text-4xl leading-relaxed max-w-5xl mx-auto">
              전문가 상담으로 맞춤 솔루션을 받아보세요.<br/>
              과학적 분석을 통해 가장 적합한 제품만을 추천합니다.
            </h2>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="flex flex-wrap justify-center gap-6" animation="fade-in-up" delay={0.4}>
            <Link to="/contact" className="flex h-16 min-w-[180px] items-center justify-center rounded-lg bg-secondary px-8 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary/90">
              상담 예약
            </Link>
            <Link to="/products" className="flex h-16 min-w-[180px] items-center justify-center rounded-lg bg-white px-8 text-xl font-bold text-primary shadow-lg transition-transform hover:scale-105 hover:bg-gray-50">
              서비스 시작하기
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 bg-background-light">
        <div className="mx-auto max-w-[1200px] px-4">
          <ScrollAnimationWrapper className="text-center mb-16" animation="fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl mb-4">
              최고의 경험을 위한 특별한 서비스
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Peroxfarma는 고객님의 건강을 최우선으로 생각하며, 과학적 분석을 통해 가장 적합한 제품만을 추천합니다.
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'chat', title: '전문가 상담', desc: '영양 전문가와의 1:1 상담을 통해 당신의 건강 상태를 정밀하게 분석합니다.' },
              { icon: 'inventory_2', title: '다양한 제품', desc: '엄선된 원료로 만든 다양한 건강기능식품 라인업을 갖추고 있습니다.' },
              { icon: 'local_shipping', title: '편리한 배송', desc: '원하는 날짜에 맞춰 정기적으로, 편리하게 집 앞까지 배송해드립니다.' }
            ].map((feature, idx) => (
              <ScrollAnimationWrapper 
                key={idx} 
                className="flex flex-col items-center gap-4 rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                animation="fade-in-up"
                delay={idx * 0.15}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
                  <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-4">
          <ScrollAnimationWrapper className="text-center mb-20" animation="fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              체계적인 맞춤 상담 프로세스
            </h2>
          </ScrollAnimationWrapper>

          <div className="relative">
             {/* Line for desktop */}
            <div className="absolute top-6 left-0 hidden w-full h-0.5 bg-gray-100 md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {[
                { step: 1, icon: 'edit_note', title: '상담 신청', desc: '온라인으로 간편하게 신청' },
                { step: 2, icon: 'biotech', title: '전문가 분석', desc: '건강 데이터 기반 정밀 분석' },
                { step: 3, icon: 'recommend', title: '맞춤 제품 추천', desc: '개인에게 꼭 맞는 제품 제안' },
                { step: 4, icon: 'package_2', title: '배송 시작', desc: '정기적으로 편리하게 수령' }
              ].map((item, idx) => (
                <ScrollAnimationWrapper 
                  key={idx} 
                  className="flex flex-col items-center text-center gap-4 relative bg-white md:bg-transparent"
                  animation="fade-in-left"
                  delay={idx * 0.2}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-white text-lg font-bold text-primary z-10 shadow-sm">
                    {item.step}
                  </div>
                  <span className="material-symbols-outlined text-5xl text-primary/80 my-2 transition-transform hover:scale-110 duration-300">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="w-full py-24 bg-background-light">
        <div className="mx-auto max-w-[1200px] px-4">
          <ScrollAnimationWrapper className="flex flex-col items-center gap-12 rounded-2xl bg-primary/5 p-12 text-center" animation="zoom-in">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl mb-4">
                믿을 수 있는 원료와 품질
              </h2>
              <p className="text-text-secondary text-lg">
                Peroxfarma는 엄격한 기준을 통과한 원료만을 사용하며, 공신력 있는 기관의 인증을 통해 품질을 보증합니다.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
               {[
                 { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGb1u7NFWZKUA-_bC9eWCrV_0zNIOPo-AHsDmut_ouG1Cod1pEVCVWm2LjbGNTFBu6ur4TgQGCY8rDoSskXnA8R35jcpBmOyyN-5B1sMpKJbp2yZWejwqULvJYru5DyodKcl6u8dG-R-x7HDjXrC9xiPqSz0A8FQ_Xithtw0Xy504hkn_yHI751PV38MHk0f-7QSi5gq6TZwzUCEXkymvccBI3utsSeRpZEDgKFGEjdhDeelEc4OcI-qYiZ2xZdx2Ntz_882vRKzM", label: "엄선된 원산지" },
                 { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuABupbZq3ycOREbJUC30pUzM740NVe4Std73qhkdHZIMRk88NuqSn0ZR8p9a_-VfVvUicdmUduegKtoVsyfpe_OucJAQ_EuAw5TwiPuzpg3lGnbuI96PqIhpYkxAkthX7w5c0zvaeeHC8lOeqDeKLrEDWLZdQ0gZw6ccm2M_lFTB61k4XprPYoGYVLY0BSEpqgfkzxoxTLgkmCdFoqpSA6VGZrPSlUi8iJr6aaeMkHNYKZB7OYL5536OKksVDlnlmBzJKR7-AwDK1s", label: "HACCP 인증" },
                 { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtHUKQGvHoNp-dseWe6PkJwfslKHg55CnQVoTG8ZTZGnimyzXjXmA63GaRLUPtJH2dDZ5OL9Pevc5qs_vK4q0gw38EpCvTM1PmO9cLLrnoimSgnkt_xqMBIHpYa2Gl7wJFXcfNQiSQHpwHHv03VHHdG03F3kI6eif-Wmr-R8fX9WQY17ELrr6bpwP1zLSTFIq7v096FK8_qy6no7TOng0CkHb0uoTNUWu4h-f_0OYDARG6WNkE6NfuX4IDbaTD98h70AxnqyOdui0", label: "GMP 인증" },
                 { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT6JcP32b3FmgXhhjQQow5n9qzGJH7Fj6cmXAmMGA8Vifz5YfDpSb5rUDbB8ulSRrpD-Xsmsrbv9FkZZF0I2uEWmxFLSxIs6KYd7ljzaU_KG2rQkBP4G0u7LJ-xux5n_gYvgmgyjE89zTW2WKoc8S-alRZ1es23GBqkwd51rLzQ2le7dsufpF6u0xw00pJc7V-n44jdyfbqomqosY7s_Smanz754ILDL2FLlkCOrHhpo0a7n1LYcW2DtJ87E7nVPjz226YqKBxiSg", label: "식약처 인증" }
               ].map((cert, idx) => (
                 <ScrollAnimationWrapper 
                   key={idx} 
                   className="flex flex-col items-center gap-3"
                   animation="fade-in-up"
                   delay={idx * 0.15 + 0.3}
                 >
                   <img src={cert.src} alt={cert.label} className="h-20 w-20 rounded-full bg-white object-contain p-2 shadow-sm hover:shadow-md transition-shadow" />
                   <span className="text-sm font-semibold text-text-primary">{cert.label}</span>
                 </ScrollAnimationWrapper>
               ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Home;