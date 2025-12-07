import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';

const Contact: React.FC = () => {
  const { contactConfig, addInquiry } = useProducts();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    if (!formData.agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    addInquiry({
      name: formData.name,
      email: formData.email,
      message: formData.message
    });

    alert('문의가 성공적으로 접수되었습니다.');
    setFormData({
      name: '',
      email: '',
      message: '',
      agree: false
    });
  };

  return (
    <div className="w-full bg-background-light">
      <div className="mx-auto max-w-[1200px] px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <h1 className="text-4xl font-black text-text-primary mb-4">{contactConfig.pageTitle}</h1>
              <p className="text-text-secondary">{contactConfig.pageSubtitle}</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-text-primary">{contactConfig.formTitle}</h2>
              <form className="flex flex-col gap-6">
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-text-primary">이름</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="홍길동" 
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-text-primary">이메일 주소</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com" 
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-bold text-text-primary">문의 내용</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="문의하실 내용을 자세하게 입력해주세요." 
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="agree" 
                    checked={formData.agree}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" 
                  />
                  <label htmlFor="agree" className="text-sm text-text-secondary cursor-pointer">개인정보 수집 및 이용에 동의합니다.</label>
                </div>

                <button 
                  type="button" 
                  onClick={handleSubmit}
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-md mt-2"
                >
                  제출하기
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