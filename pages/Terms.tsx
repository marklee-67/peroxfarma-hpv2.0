
import React from 'react';
import { useProducts } from '../context/ProductContext';

const Terms: React.FC = () => {
  const { termsContent } = useProducts();

  return (
    <div className="w-full bg-background-light py-20 min-h-screen">
      <div className="mx-auto max-w-[800px] px-4">
        <h1 className="text-3xl font-black text-text-primary mb-8 text-center">이용약관</h1>
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <pre className="whitespace-pre-wrap font-sans text-text-secondary text-sm leading-relaxed">
            {termsContent}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Terms;
