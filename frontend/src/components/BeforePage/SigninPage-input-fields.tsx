import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/SigninPage-input-fields.css';

export const InputFields: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    ID: '',
    PASSWORD: '',
    confirmPassword: '',
    NAME: '',
    PHONE: '',
    verificationCode: '',
  });

  const [isCodeSent, setIsCodeSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSendVerificationCode = async () => {
    if (!formData.PHONE) {
      alert('전화번호를 입력해주세요.');
      return;
    }

    setLoading(true);

    try {
      await axios.post('http://localhost:8088/api/sms/send-code', {
        phoneNumber: formData.PHONE,
      });
      setIsCodeSent(true);
      alert('인증 코드가 발송되었습니다.');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || error.message || 'Unknown error';
        console.error('Server responded with error:', message);
        alert('인증 코드 발송에 실패하였습니다.');
      } else {
        console.error('Unexpected error:', error);
        alert('인증 코드 발송에 실패하였습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!formData.verificationCode) {
      alert('인증 코드를 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8088/api/sms/verify-code', {
        phoneNumber: formData.PHONE,
        verificationCode: formData.verificationCode,
      });
      alert(response.data); // 인증 결과 메시지 표시
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || error.message || 'Unknown error';
        console.error('Server responded with error:', message);
        alert('인증 코드 검증에 실패하였습니다.');
      } else {
        console.error('Unexpected error:', error);
        alert('인증 코드 검증에 실패하였습니다.');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let errors: string[] = [];

    // 비밀번호 확인 체크
    if (formData.PASSWORD !== formData.confirmPassword) {
      errors.push('비밀번호가 일치하지 않습니다.');
    }

    // 인증 코드 검증 체크
    if (!isCodeSent) {
      errors.push('전화번호 인증을 먼저 완료해주세요.');
    }

    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors([]); // Reset errors

    try {
      const response = await axios.post('http://localhost:8088/api/users/register', {
        userId: formData.ID,
        email: formData.ID,
        password: formData.PASSWORD,
        status: 'A',
        birthday: '1990-01-01',
        username: formData.NAME,
        vNumber: 1,
      });

      console.log('User registered:', response.data);
      alert('회원가입이 완료 되었습니다.');
      navigate('/login'); // 로그인 페이지로 리디렉션
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || error.message || 'Unknown error';
        console.error('Server responded with error:', message);
        alert('회원가입에 실패하였습니다.');
      } else {
        console.error('Unexpected error:', error);
        alert('회원가입에 실패하였습니다.');
      }
    }
  };

  return (
    <form className={`input-fields ${className}`} onSubmit={handleSubmit}>
      <div className="input-fields-child" />
      <div className="input-labels">
        <div className="input-placeholders">
          <h1 className="h1">회원가입</h1>
          <div className="input-boxes">
            <input
              className="input-values"
              placeholder="아이디"
              type="email"
              name="ID"
              value={formData.ID}
              onChange={handleChange}
            />
            <input
              className="input-values1"
              placeholder="비밀번호"
              type="password"
              name="PASSWORD"
              value={formData.PASSWORD}
              onChange={handleChange}
            />
            <input
              className="input-values2"
              placeholder="비밀번호 확인"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <input
              className="input-values3"
              placeholder="이름"
              type="text"
              name="NAME"
              value={formData.NAME}
              onChange={handleChange}
            />
            <input
              className="input-values4"
              placeholder="휴대폰 번호"
              type="text"
              name="PHONE"
              value={formData.PHONE}
              onChange={handleChange}
            />
            {isCodeSent && (
              <input
                className="input-values5"
                placeholder="인증 코드"
                type="text"
                name="verificationCode"
                value={formData.verificationCode}
                onChange={handleChange}
              />
            )}
            {!isCodeSent ? (
              <button type="button" onClick={handleSendVerificationCode} disabled={loading}>
                {loading ? '인증 코드 발송 중...' : '인증 코드 받기'}
              </button>
            ) : (
              <button type="button" onClick={handleVerifyCode} disabled={loading}>
                {loading ? '인증 코드 검증 중...' : '인증 코드 검증'}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="signup-form">
        <button className="button-join" type="submit">
          <div className="button-join-child" />
          <b className="b">회원가입</b>
        </button>
      </div>
      <img className="illustration-icon" loading="lazy" alt="" src="/vector.svg" />
    </form>
  );
};

export default InputFields;
