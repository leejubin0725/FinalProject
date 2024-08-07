import { FunctionComponent } from "react";
import styles from "./css/SubScribeFooter.module.css";

export type FooterType = {
  className?: string;
};

const SubScribeFooter: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.heading}>Home</div>
          <div className={styles.linksContainer}>
            <div className={styles.textButton}>카테고리</div>
            <div className={styles.textButton}>디바이스</div>
            <div className={styles.textButton}>가격</div>
            <div className={styles.textButton}>자주 묻는 질문</div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.heading}>Movies</div>
          <div className={styles.linksContainer}>
            <div className={styles.textButton}>장르</div>
            <div className={styles.textButton}>트렌딩</div>
            <div className={styles.textButton}>신작</div>
            <div className={styles.textButton}>인기작</div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.heading}>지원</div>
          <div className={styles.textButton8}>문의하기</div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.heading}>구독</div>
          <div className={styles.linksContainer}>
            <div className={styles.textButton}>요금제</div>
            <div className={styles.textButton}>기능</div>
          </div>
        </div>
        <div className={styles.subContainer4}>
          <div className={styles.linksContainer3} />
        </div>
        <div className={styles.subContainer}>
          <div className={styles.heading}>소셜 미디어</div>
          <div className={styles.buttonsContainer}>
            <div className={styles.button}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
            </div>
            <div className={styles.button}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon-1.svg"
              />
            </div>
            <div className={styles.button}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.separator} />
        <div className={styles.container2}>
          <div className={styles.text}>
            @2024 cinemacloud, All Rights Reserved
          </div>
          <div className={styles.buttonsContainer1}>
            <div className={styles.textContainer}>이용 약관</div>
            <div className={styles.legalItem} />
            <div className={styles.textContainer1}>개인정보 보호정책</div>
            <div className={styles.legalItem} />
            <div className={styles.textContainer}>쿠키 정책</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SubScribeFooter;
