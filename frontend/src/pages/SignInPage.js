import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/SignInForm';


const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignIn = (email, password) => {
    // 여기에 인증 로직 추가 (예: API 호출)
    // 인증 성공 시:
    navigate('/main');
  };

  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm onSignIn={handleSignIn} />
    </div>
  );
};

export default SignInPage;
