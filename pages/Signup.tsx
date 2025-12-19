import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

const Signup: React.FC = () => {
  const { t } = useProducts();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreed: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleGoogleSignup = () => {
    alert(t.auth.googleBtn);
    navigate('/');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert(t.auth.errorMatch);
      return;
    }
    if (!formData.agreed) {
        alert(t.auth.errorTerms);
        return;
    }
    alert(t.auth.successSignup);
    navigate('/login');
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-text-primary">{t.auth.signupTitle}</h2>
          <p className="mt-2 text-sm text-text-secondary">
            {t.auth.signupDesc}
          </p>
        </div>

        <div className="mt-8">
            <button
                type="button"
                onClick={handleGoogleSignup}
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-bold text-text-primary hover:bg-gray-50 transition-colors shadow-sm"
            >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                    />
                    <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                    />
                    <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"
                        fill="#FBBC05"
                    />
                    <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                    />
                </svg>
                {t.auth.googleBtn}
            </button>
        </div>

        <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-text-secondary">{t.auth.emailSignup}</span>
            </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-text-primary mb-1">{t.auth.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-lg border border-gray-300 px-3 py-3 text-text-primary placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder={t.auth.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-text-primary mb-1">{t.auth.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-lg border border-gray-300 px-3 py-3 text-text-primary placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-text-primary mb-1">{t.auth.pw}</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-lg border border-gray-300 px-3 py-3 text-text-primary placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="8+ characters"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
             <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-text-primary mb-1">{t.auth.pwConfirm}</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="block w-full rounded-lg border border-gray-300 px-3 py-3 text-text-primary placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder={t.auth.pwConfirmPlaceholder}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="agreed"
              name="agreed"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              checked={formData.agreed}
              onChange={handleChange}
            />
            <label htmlFor="agreed" className="ml-2 block text-sm text-text-secondary cursor-pointer select-none">
              {t.auth.termsAgree}
            </label>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors shadow-md"
          >
            {t.auth.signupBtn}
          </button>
        </form>

        <div className="mt-6 text-center">
             <p className="text-sm text-text-secondary">
                {t.auth.alreadyAccount}{' '}
                <Link to="/login" className="font-medium text-primary hover:text-primary/80 transition-colors">
                    {t.auth.loginLink}
                </Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;