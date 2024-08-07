import { FunctionComponent } from "react";
import styles from "./css/HomeFrame.module.css";

export type FrameType = {
  className?: string;
};

const Frame: FunctionComponent<FrameType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sectionTitleParent, className].join(" ")}>
      <div className={styles.sectionTitle}>
        <b className={styles.seeAgain}>
          <span></span>
        </b>
        <div>


        </div>

      </div>
    </div>

  );
};

export default Frame;
