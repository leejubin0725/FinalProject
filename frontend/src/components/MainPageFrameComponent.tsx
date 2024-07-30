import { FunctionComponent } from "react";
import styles from "./MainPageFrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.questionsCall00080004018Parent}>
        <div className={styles.questionsCall00080004018}>
          Questions? Call 000-800-040-1843
        </div>
        <div className={styles.links}>
          <div className={styles.faqInvestorRelationsContainer}>
            <p className={styles.faq}>FAQ</p>
            <p className={styles.investorRelations}>Investor Relations</p>
            <p className={styles.privacy}>Privacy</p>
            <p className={styles.speedTest}>Speed Test</p>
          </div>
          <div className={styles.mediaCentreTermsContainer}>
            <p className={styles.mediaCentre}>Media Centre</p>
            <p className={styles.termsOfUse}>Terms of Use</p>
            <p className={styles.contactUs}>Contact Us</p>
          </div>
        </div>
      </div>
      <div className={styles.inputBoxParent}>
        <div className={styles.inputBox}>
          <div className={styles.inputBoxChild} />
          <img className={styles.biglobeIcon} alt="" src="/biglobe.svg" />
          <div className={styles.english}>English</div>
        </div>
        <div className={styles.netflixIndia}>Netflix India</div>
      </div>
    </section>
  );
};

export default FrameComponent;
