import { FunctionComponent } from "react";
import "./SigninPage-input-fields.css";
import { useNavigate } from "react-router-dom";

export type InputFieldsType = {
  className?: string;
};

const InputFields: FunctionComponent<InputFieldsType> = ({
  className = "",
}) => {

  const navigate = useNavigate();

  const handleGetStarted = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // 폼 제출 방지
    // "Get Started" 버튼 클릭 시 로그인 페이지로 이동
    navigate('/home');
  };

  return (
    <form className="input-fields">
      <div className="input-fields-child" />
      <div className="input-labels">
        <div className="input-placeholders">
          <h1 className="h1">회원가입</h1>
          <div className="input-boxes">
            <input className="input-values" placeholder="이메일" type="text" />
            <input
              className="input-values1"
              placeholder="비밀번호"
              type="text"
            />
            <input
              className="input-values2"
              placeholder="비밀번호 확인"
              type="text"
            />
            <input className="input-values3" placeholder="이름" type="text" />
            <input
              className="input-values4"
              placeholder="휴대폰 인증"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="signup-form">
        <button className="button-join" onClick={handleGetStarted}>
          <div className="button-join-child" />
          <b className="b">회원가입</b>
        </button>
      </div>
      <img
        className="illustration-icon"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
    </form>
  );
};

export default InputFields;
