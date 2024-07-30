import { FunctionComponent } from "react";
import styles from "./HomeRank.module.css";

export type Rank = {
  className: string;
};

const rank: FunctionComponent<Rank> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sectionTitleParent, className].join(" ")}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.seeAgain}>랭킹 TOP10  <img
          className={styles.chevronRightIcon}
          alt=""
          src="/chevronright-1.svg"
        /></h2>


      </div>
    </div>


  );
};

export default Rank;
