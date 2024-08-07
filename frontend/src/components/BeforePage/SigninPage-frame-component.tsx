import { FunctionComponent } from "react";
import "./css/SigninPage-frame-component.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className="frame-parent">
      <div className="faq-cookie-preferences-parent">
        <div className="faq-cookie-preferences-container">
          <p className="faq">FAQ</p>
          <p className="cookie-preferences">Cookie Preferences</p>
        </div>
        <div className="rectangle-parent">
          <div className="frame-child" />
          <img className="biglobe-icon" alt="" src="/biglobe.svg" />
          <a className="english">English</a>
        </div>
      </div>
      <div className="help-centers-corporate-informa-wrapper">
        <div className="help-centers-corporate-container">
          <p className="help-centers">Help Centers</p>
          <p className="corporate-information">Corporate Information</p>
        </div>
      </div>
      <div className="legal-links">
        <div className="terms-of-use">Terms of Use</div>
      </div>
      <div className="privacy">Privacy</div>
    </div>
  );
};

export default FrameComponent;
