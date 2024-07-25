import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signin'); // "/signin" 페이지로 이동
  };

  return (
    <div className="container">
      <header className="header">
        <img src="/path-to-your-logo.png" alt="Logo" />
      </header>
      <section className="main">
        <h1>Unlimited movies, Give and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <div className="input-group">
          <input type="email" placeholder="Email Address" />
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
      </section>
      {/* 추가적인 콘텐츠 섹션들 */}
      <footer className="footer">
        <p>Questions? Call 000-800-040-1843</p>
        {/* 추가적인 footer 정보 */}
      </footer>
    </div>
  );
};

export default LandingPage;
