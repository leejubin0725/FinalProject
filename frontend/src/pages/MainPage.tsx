import { FunctionComponent, useState } from "react";
import axios from "axios";
import styles from "./MainPage.module.css";
import { useNavigate } from 'react-router-dom';

const Landing: FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleGetStarted = async () => {
    try {
      const response = await axios.post('http://localhost:8088/api/users/check-email', { email });
      if (response.data.exists) {
        navigate('/passwordlogin'); // 페이지 이동
      } else {
        alert('이메일이 존재하지 않습니다. 회원가입 페이지로 이동합니다.');
        navigate('/signin');
      }
    } catch (error) {
      console.error('Error checking email:', error);
      setError('이메일 확인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles.landing}>
      <div className={styles.background}></div>
      <img
        className={styles.logo}
        alt="Logo"
        src="/logo-text-2@2x.png"
      />
      <section className={styles.landingInner}>
        <h1 className={styles.title}>
          영화, 시리즈 등을 무제한으로
        </h1>
        <h2 className={styles.subtitle}>
          어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.
        </h2>
        <p className={styles.description}>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
        </p>
        <div className={styles.inputFields}>
          <input
            className={styles.emailInput}
            placeholder="이메일 주소"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          <button className={styles.getStartedButton} onClick={handleGetStarted}>
            시작하기
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </section>
    </div>
  );
};

export default Landing;
