import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Facility: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGQKj5M3L-nPCNn_GKUV7yxZi9LjxuGkt-UZCWvyZQmDEsStLTTe2XQIksVsLdqAxVDNz5huWRKVjKS4x0E-SX6JOycGzlBQhK1rNKeCjEUsw1kdbvWZnprQVq3Nl9coS_-9ti6Ms-F_9136F4_d_t_RzmsJvcvoJhgISKnhoW3MmqKVcJaT71UST1tHrw_3KJ74KDd0qs-TFuzRxOWH3iuCwpjAEKMfpzKP89TUd2un-gEf624Z6oX4l7MFPUWH-vJJkVRo8aiI0')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <ScrollAnimationWrapper className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 tracking-tight break-keep">
            최첨단 제조시설에서 탄생하는<br/>당신만의 영양제
          </h1>
          <p className="text-lg md:text-3xl text-white/90 max-w-5xl leading-relaxed break-keep">엄격한 공정과 품질 관리 시스템으로 최고의 제품을 만듭니다.</p>
        </ScrollAnimationWrapper>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-20">
        {/* Principles */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-text-primary">신뢰할 수 있는 생산 원칙</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { icon: 'precision_manufacturing', title: '최첨단 자동화 설비', desc: '최신 기술이 적용된 자동화 라인에서 정밀하게 생산됩니다.' },
               { icon: 'verified', title: '엄격한 품질 검사', desc: '원료부터 완제품까지 모든 단계에서 철저한 검사를 거칩니다.' },
               { icon: 'science', title: '전문 연구진의 개발', desc: '건강기능식품 전문가들이 안전하고 효과적인 제품을 연구합니다.' }
             ].map((item, idx) => (
               <div key={idx} className="bg-white border border-gray-100 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
                 <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                 </div>
                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                 <p className="text-text-secondary break-keep">{item.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Process Steps */}
        <section className="mb-16 md:mb-20 bg-gray-50 rounded-2xl p-6 md:p-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">제조 공정</h2>
            <p className="text-text-secondary">원료 선정부터 완제품 출하까지, 체계적인 시스템으로 관리됩니다.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: 'eco', title: '1. 원료 선정', desc: '엄선된 공급처의 고품질 원료 사용' },
              { icon: 'blender', title: '2. 정밀 배합', desc: '최적의 효과를 위한 과학적 배합' },
              { icon: 'conveyor_belt', title: '3. 생산', desc: '위생적인 자동화 설비 생산' },
              { icon: 'policy', title: '4. 품질 검사', desc: '각 단계마다 다중 품질 검사' },
              { icon: 'inventory_2', title: '5. 포장', desc: '꼼꼼하고 안전한 포장 및 출하' }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                 <div className="w-16 h-16 rounded-full border-2 border-primary bg-white text-primary flex items-center justify-center mb-4">
                   <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                 </div>
                 <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                 <p className="text-xs text-text-secondary break-keep">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certification & Lab */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="flex-1 p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
               <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">품질 및 안전 인증</h2>
               <p className="text-text-secondary mb-8 leading-relaxed break-keep">
                 Peroxfarma Korea는 국제 표준 규격을 준수하는 시설에서 제품을 생산합니다. 
                 고객이 안심하고 섭취할 수 있도록 국내외 공신력 있는 기관의 인증을 획득했습니다.
               </p>
               <div className="flex gap-4 md:gap-6 justify-start">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm_qazdl_9k2lK6bqJ3r7tQfoivPWI8825agkSc58PSC8kaVL9M77Rm5_4aO6bVGpBLnBKwd81u7Y_vO3SABYFMze7fGgVBq7HfzyVifV3dXSPJq8FpUt10QNPqbhtwrNln7BP55cuFTwOzfgobl55sxG91lbDuPJjX1yRl-5XTBdC0UOYWhH1dE8eWBonH6bb5QKSV069NARKdXTu4UO7tN2UMuFLJLLLLReJjVZnhO5IPy7ZDamRN5Aj6gFrc0bE44wEqsH8_Zw" alt="GMP" className="h-12 md:h-16 object-contain" />
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm4wd4UwJtVIOcxXcP1FIu_pXkP8QCNOI7pNUqgaoYMZbE3BXbJH1A4SOLUIxckJ2VaKzHTLytbpHEduAv2XlUEbpeH2NkKxo54kJrEAVoa9L40kpT5z5R2Uvy2JFr52mxfwY3CfNTiFNZqv6F7PWjHxTANl6z88ssJjeSg-NMJmYSr4PA-FBCSZgLESAz7R3Kk5NHHIUILFLXvXxkRPQNSvvqoN4nR01ZuEOe9ca7yuuk9BtuBl8vxh5dLsopif2yVJLBDZJEhiE" alt="HACCP" className="h-12 md:h-16 object-contain" />
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLbMCmbcwjD1IYK8FSYAUr3ppT4XXq6lGCaZPxPOYq8Pr1xbPYrHywn14Lw2SxExclvYbSJa_VAEfqbELV5VZMzUIgfyKdCO1Y3NNahlXAHLfMF-MpzwFYAxf1_W40eeEXRk5O0fZkHTvAXNoV0a1AP1elgVnZN4NJIHOiDgavk3QoMGqttqCwjsqJcBB86w4SaHdfwB03blYR5k-mbDC6lYSpKEZBZWogOGX6q7FndBjhzzOk8OsVFvZWUYY1yYAwb9A67M5MRJc" alt="ISO" className="h-12 md:h-16 object-contain" />
               </div>
             </div>
             <div className="flex-1 min-h-[250px] md:min-h-[300px] order-1 md:order-2">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4q4YxHxkZl0XLq5S5NN55aknIH4Tkzruj91SEY0nHh-E-RaszDokU-Zobx2c6jEM3okzP4H5JGACRDEtHgRMDAsx3oG5XaxPJTwVTTK3pFJW9gfJu1KtsDtgjzn-xuDyMck7ZH-O8uTP9hpt2OC7tN0fOmnsBYjVPOjHG3CV69lTdwhB95xHF5xKfH8Ru7516gY5VXl8p2vVzrHkW9pgE0p62g79cb9JccXhvSrZgAUYJR7bQIkV9_JHnkhR-DI5vv8Cu4s6dqtQ" alt="Scientist" className="w-full h-full object-cover" />
             </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-text-primary">시설 둘러보기</h2>
          <p className="text-center text-text-secondary mb-8 md:mb-10">우리의 최첨단 시설을 이미지로 만나보세요.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWKcEiwtRNHc1q8pM6RDRL-f96toW8MBxmrdmkDYpF6JvxYk2EzqXu9EORVxfHksDZ9QbMxTu4XInmC4_shpwXThq2y95ozgPKs_hlzIYqUdx61hwGkoNl8n9P6uDj795LzBObpgecO01pAXD3WR4CnHt5D0xBWJLIQ0K8SIwa5YT1BvK1zMGDIQVxaBp5c3K11lc0t1EoGVOawphXR1WszKQoMB81IoySVUCRJzbfkTbzJ2szwOv3P8ymkPI_cWrMTiLoJoNBoUY" className="rounded-lg aspect-square object-cover hover:opacity-90 transition-opacity" />
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcpnCw4o1BJIkkOwKb601LRFd9xgYY590Q7PjmM4lemiy9hpOYaLk2kIK13lmema0MEKezRALKNYC5L75UbPalbLa8-0oPitH2-gzWpkOkCN9sq52wt-vd4HOG95BkcZksEx7GAqrZfYGQTaQgEhBelcSA7KET10zLKKgfOqAJq0nVb-l_usZF2SKmhhf0oFlx94nUI33Q4zADQ5FdN7KInSKnygswphsu9JhNpS8FRj322JKwAa5fxhjYGGqLrrfmMrWVqagP6LQ" className="rounded-lg aspect-square object-cover hover:opacity-90 transition-opacity" />
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6wDcjIz0iUzPHwp1f0_HYo7cMaEFodpPGSW8eFFFcNN1Hriyzx0GjCKYMA1xbC9FXyr6QqS1smi82-tpWuUeZhDI3gFU824XLJXmjMn7mqLqmI-0ThmU2MfTaVnDOcbtkOGrXApyYy6G2yaRbEUTcnz3G4IlYunoKWwAzs7Rz4MZvRFSbJWD53GFw0xzbUuJ0iMUpCQNByZqEVFdC6glqAtcWnfNrNMFmDA18XDW1INLMBf0okUYQMYzm1sj2M2Vc8LH7W7LkK0Q" className="rounded-lg aspect-square object-cover hover:opacity-90 transition-opacity" />
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0vZKet6l3HUOqDZBR8d6I1WWk3ymTlKFkTPfqLGFf1R7oHIdob2VQZ8gK9JTni6x86sjjNWoDmiGxBRyVbj0fhc2hs_rlAicNL241hxj1qYGA019f6V_7Z8yh0pP7-h75UTHxoVUWAZes-c4rlR1qiNiroMKVudewfgDhaHddRZp7NxzVmsjE0c8A_cx_18P3zSOIE7AqBVaVnC708RSlADAzUd4HGgcp-JCcAGtDiFbLrHtEQRjw-rKx35k-VpYhT1eALO1lvnE" className="rounded-lg aspect-square object-cover hover:opacity-90 transition-opacity" />
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-text-primary">믿을 수 있는 제품, 지금 만나보세요</h3>
            <p className="text-text-secondary mb-8 text-sm md:text-base">과학적인 데이터 기반의 개인 맞춤 영양제를 구독하고 건강을 챙겨보세요.</p>
            <Link to="/products" className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors w-full sm:w-auto">
              구독 서비스 알아보기
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Facility;