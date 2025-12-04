
import React from 'react';
import { useProducts } from '../context/ProductContext';

const Privacy: React.FC = () => {
  const { privacyContent } = useProducts();

  return (
    <div className="w-full bg-background-light py-20 min-h-screen">
      <div className="mx-auto max-w-[800px] px-4">
        <h1 className="text-3xl font-black text-text-primary mb-8 text-center">개인정보처리방침</h1>
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <pre className="whitespace-pre-wrap font-sans text-text-secondary text-sm leading-relaxed">
            {privacyContent}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
