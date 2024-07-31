// src/components/HomeRank.tsx
import { FunctionComponent } from 'react';
import styles from './HomeRank.module.css';

export type RankProps = {
  className?: string;  // className을 선택적으로 설정
};

const Rank: FunctionComponent<RankProps> = ({ className = "" }) => {
  return (
    <div className={[styles.sectionTitleParent, className].join(" ")}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.seeAgain}>
          랭킹 TOP10
          <img
            className={styles.chevronRightIcon}
            alt=""
            src="/chevronright-1.svg"
          />
        </h2>
      </div>
    </div>
  );
};

export default Rank;
