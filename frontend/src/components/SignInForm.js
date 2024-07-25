// src/components/SignInForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInForm.css';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 (예: API 호출)
    console.log("로그인 시도:", email, password);
    navigate('/main');
  };

  return (
    <form onSubmit={handleSubmit} className="signin-form">
      <h1>Sign In</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="signin-button">Sign In</button>
      <div className="signin-options">
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <a href="#">Need help?</a>
      </div>
      <div className="signin-footer">
        <p>New to My App? <a href="/signup">Sign up now.</a></p>
      </div>
    </form>
  );
};

export default SignInForm;
