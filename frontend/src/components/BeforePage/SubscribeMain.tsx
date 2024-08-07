import { FunctionComponent } from "react";
import axios from "axios";
import styles from "./css/SubscribeMain.module.css";

export type MainType = {
  className?: string;
};

const SubscribeMain: FunctionComponent<MainType> = ({ className = "" }) => {
  const initiatePayment = async (amount: number) => {
    try {
      const response = await axios.post('http://localhost:8088/paypal/pay', null, {
        params: { sum: amount },
      });
      console.log(response.data); // 응답 데이터 확인
      if (response.status === 200 && response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      } else {
        console.error('결제 요청 실패');
      }
    } catch (error) {
      console.error('결제 요청 중 오류 발생', error);
    }
  };

  return (
    <section className={[styles.main, className].join(" ")}>
      <div className={styles.content}>
        <img
          className={styles.logoText2}
          loading="lazy"
          alt=""
          src="/logo-text-2@2x.png"
        />
        <div className={styles.page}>
          <div className={styles.container}>
            <div className={styles.subContainer}>
              <div className={styles.textContainer}>
                <h1 className={styles.heading}>당신에게 딱 맞는 요금제</h1>
                <div className={styles.paragraph}>
                  다양한 인디 영화를 즐길 수 있는 방대한 라이브러리, 최근 출시된 작품들도 포함되어 있습니다.
                </div>
              </div>
              <div className={styles.tabs}>
                <button className={styles.buttonActive}>
                  <div className={styles.text}>월별구독</div>
                </button>
              </div>
            </div>
            <div className={styles.itemsContainer}>
              <div className={styles.card}>
                <div className={styles.textContainer1}>
                  <b className={styles.heading1}>정기구독</b>
                  <div className={styles.paragraph}>
                    최근 개봉작을 포함한 다양한 인디 영화를 즐길 수 있는 방대한 라이브러리를 경험해 보세요
                  </div>
                </div>
                <div className={styles.textContainer2}>
                  <div className={styles.number}>2000₩</div>
                  <div className={styles.statsLabel}>/월</div>
                </div>
                <div className={styles.buttonsContainer}>
                  <button
                    className={styles.button}
                    onClick={() => initiatePayment(2000)}
                  >
                    <div className={styles.text1}>구독하기</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeMain;