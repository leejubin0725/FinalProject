import { FunctionComponent } from "react";
import InputFields from "../components/SigninPage-input-fields";
import FrameComponent from "../components/SigninPage-frame-component";
import "./SignInPage.css";

const Signin: FunctionComponent = () => {



  return (
    <div className="signin">
      <img
        className="netflix-sign-up-background-pag"
        alt=""
        src="/netflix-sign-up-background-page-1@2x.png"
      />
      <div className="netflix-png11-1" />
      <section className="main-content">
        <img
          className="logo-text-1"
          loading="lazy"
          alt=""
          src="/logo-text-1@2x.png"
        />
        <div className="signup-form-container">
          <InputFields />
        </div>
      </section>
      <div className="footer">
        <div className="footer-links">
          <div className="questions-call-000-800-040-18">
            Questions? Call 000-800-040-1843
          </div>
          <FrameComponent />
        </div>
      </div>
    </div>
  );
};

export default Signin;
