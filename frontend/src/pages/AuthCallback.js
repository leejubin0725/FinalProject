// src/pages/AuthCallback.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 authorization code 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // 서버로 authorization code를 보내고 토큰을 교환합니다.
      fetch('/api/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
      .then(response => response.json())
      .then(data => {
        // 토큰을 로컬 스토리지에 저장
        localStorage.setItem('authToken', data.accessToken);
        navigate('/main'); // 로그인 성공 후 메인 페이지로 이동
      })
      .catch(() => {
        navigate('/login?error=true'); // 실패 시 로그인 페이지로 리디렉션
      });
    } else {
      navigate('/login?error=true'); // code가 없을 경우 에러 처리
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default AuthCallback;
