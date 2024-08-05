import { FunctionComponent } from "react";
import FrameComponent from "../components/MainPageFrameComponent";
import styles from "./MainPage.module.css";
import { useNavigate } from 'react-router-dom';

const Landing: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Signin');
  };

  return (
    <div className={styles.landing}>
      <img
        className={styles.netflixSignUpBackgroundPag}
        alt="Background"
        src="/netflix-sign-up-background-page-1@2x.png"
      />
      <h1 className={styles.cinemaCloud}>CINEMA CLOUD</h1>
      <section className={styles.landingInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.unlimitedMoviesParent}>
              <div className={styles.unlimitedMovies}>
                <h1 className={styles.unlimitedMoviesTv}>
                  영화, 시리즈 등을 무제한으로
                </h1>
              </div>
              <div className={styles.watchAnywhereCancelAnytimeWrapper}>
                <h2 className={styles.watchAnywhereCancel}>
                  어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.
                </h2>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.readyToWatchEnterYourEmaWrapper}>
                  <b className={styles.readyToWatch}>
                    시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
                  </b>
                </div>
                <div className={styles.inputFields}>
                  <input
                    className={styles.buttonWrapper}
                    placeholder="Email Address"
                    type="text"
                  />
                  <button className={styles.topBarLinks} onClick={handleGetStarted}>
                    <div className={styles.getStarted}>Get Started</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt="Vector Icon"
            src="/vector.svg"
          />
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default Landing;
