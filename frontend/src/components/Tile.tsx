import { FunctionComponent } from "react";
import styles from "./Tile.module.css";

export type TileType = {
  className?: string;
  image?: string;
  play?: string;
  add?: string;
  play1?: string;
  play2?: string;
  play3?: string;
};

const Tile: FunctionComponent<TileType> = ({
  className = "",
  image,
  play,
  add,
  play1,
  play2,
  play3,
}) => {
  return (
    <div className={[styles.Tile, className].join(" ")}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.info}>
        <div className={styles.controlBar}>
          <div className={styles.controls}>
            <img className={styles.playIcon} alt="" src={play} />
            <img className={styles.addIcon} alt="" src={add} />
            <img className={styles.playIcon1} alt="" src={play1} />
            <img className={styles.playIcon2} alt="" src={play2} />
          </div>
          <div className={styles.reveal}>
            <img className={styles.playIcon3} alt="" src={play3} />
          </div>
        </div>
        <div className={styles.showInfo}>
          <b className={styles.match}>89% Match</b>
          <div className={styles.ageRestrictions}>
            <div className={styles.age}>
              <div className={styles.emptyAge}>16</div>
            </div>
          </div>
          <div className={styles.season}>1 Season</div>
          <div className={styles.qualityIndicators}>
            <div className={styles.hd}>
              <div className={styles.hd1}>HD</div>
            </div>
          </div>
        </div>
        <div className={styles.genre}>
          <div className={styles.mystery}>Mystery</div>
          <div className={styles.genreSeparatorWrapper}>
            <div className={styles.genreSeparator} />
          </div>
          <div className={styles.thriller}>{`Thriller `}</div>
          <div className={styles.sciFiSeparatorWrapper}>
            <div className={styles.sciFiSeparator} />
          </div>
          <div className={styles.scienceFiction}>{`Science Fiction `}</div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
