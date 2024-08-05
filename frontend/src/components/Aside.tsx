import { FunctionComponent } from "react";
import Container from "./Container";
import styles from "./Aside.module.css";

export type AsideType = {
  className?: string;
};

const Aside: FunctionComponent<AsideType> = ({ className = "" }) => {
  return (
    <section className={[styles.aside, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>CinemaCloud 구독 플랜</h1>
          <div className={styles.paragraph}>
            CinemaCloud는 하나의 요금제로 다양한 인디 영화를 제공합니다. 최신
            개봉작을 포함한 다양한 콘텐츠를 저렴한 가격에 즐기세요.
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.container1}>
            <div className={styles.textContainer1}>
              <div className={styles.heading1}>Features</div>
            </div>
            <div className={styles.textContainer2}>
              <input
                className={styles.heading2}
                placeholder="Basic"
                type="text"
              />
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.textContainer3}>
              <div className={styles.text}>가격</div>
            </div>
            <div className={styles.textContainer4}>
              <div className={styles.text1}>
                <b>2000₩</b>
                <span className={styles.span}>/월</span>
              </div>
            </div>
          </div>
          <Container
            text="콘텐츠"
            text1="새로운 개봉작을 포함하여 다양한 인디영화를 시청할 수 있습니다."
          />
          <Container
            text="디바이스"
            text1="한 개의 디바이스에서 동시시청 가능"
          />
          <Container text="무료취소(7일안에)" text1="예" />
          <Container text="HDR" text1="예" />
          <Container text="Dolby Atmos" text1="예" />
          <Container text="광고없애기" text1="예" />
        </div>
      </div>
    </section>
  );
};

export default Aside;
