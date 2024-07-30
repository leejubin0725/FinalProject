import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signin');
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8088/oauth2/authorization/google';
  };

  return (
    <div className="container">
      <header className="header">
        <img src="/path-to-your-logo.png" alt="Logo" />
      </header>
      <section className="main">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <div className="input-group">
          <input type="email" placeholder="Email Address" />
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
        <div className="social-login">
          <p>Or login with:</p>
          <button onClick={handleGoogleLogin} className="google-login-button">
            {/* 구글 로그인 버튼 */}
            <img src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png" alt="Google Logo" />
          </button>
        </div>
      </section>
      <footer className="footer">
        <p>Questions? Call 000-800-040-1843</p>
      </footer>
    </div>
  );
};

export default LandingPage;
