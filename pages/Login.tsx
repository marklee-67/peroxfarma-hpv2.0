
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 데모 로그인 처리
    alert('성공적으로 로그인되었습니다.');
    navigate('/');
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
            <span className="material-symbols-outlined text-2xl">lock</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-text-primary">로그인</h2>
          <p className="mt-2 text-sm text-text-secondary">
            IncareBio 계정으로 서비스를 이용해보세요.
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-bold text-text-primary mb-1">이메일 주소</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-3 text-text-primary placeholder-gray-400 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-text-primary mb-1">비밀번호</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-3 text-text-primary placeholder-gray-400 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary cursor-pointer select-none">
                로그인 상태 유지
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-primary/80 transition-colors">
                비밀번호 찾기
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors shadow-md"
            >
              로그인
            </button>
          </div>
        </form>
        
        <div className="mt-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-text-secondary">또는</span>
                </div>
            </div>
            <div className="mt-6 text-center">
                 <p className="text-sm text-text-secondary">
                    아직 계정이 없으신가요?{' '}
                    <Link to="/signup" className="font-medium text-primary hover:text-primary/80 transition-colors">
                        회원가입
                    </Link>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;