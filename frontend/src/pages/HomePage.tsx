import { FunctionComponent } from "react";
import Header from "../components/Header";
import Frame from "../components/HomeFrame";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <img className={styles.titleImageIcon} alt="" src="/titleimage@2x.png" />
      <Header />
      <div className={styles.heroContent}>
        <div className={styles.titlePreview}>
          <img
            className={styles.logo32Icon}
            loading="lazy"
            alt=""
            src="/logo3-2@2x.png"
          />
          <div className={styles.showDetails}>
            <div className={styles.titlePreview1}>
              <div className={styles.showTitle}>
                <img
                  className={styles.maidIcon}
                  loading="lazy"
                  alt=""
                  src="/maid.svg"
                />
              </div>
              <div className={styles.buttons}>
                <button className={styles.playButton}>
                  <img
                    className={styles.chevronRightIcon}
                    alt=""
                    src="/chevronright.svg"
                  />
                  <b className={styles.abspielen}>Play</b>
                </button>
                <button className={styles.playButton1}>
                  <img className={styles.infoIcon} alt="" src="/info.svg" />
                  <a className={styles.weitereInfos}>More info</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.content}>
        <div className={styles.bgFade} />
        <div className={styles.sectionTitleParent}>
          <div className={styles.sectionTitle}>
            <h2 className={styles.seeAgain}>영화 이어보기</h2>

          </div>
          <div className={styles.tileRowsParent}>
            <div className={styles.tileRows}>
              <div className={styles.Tile}>

              </div>

              <div className={styles.Tile1}>

              </div>

              <div className={styles.Tile2}>

              </div>
            </div>
            <div className={styles.Tile3}>

            </div>
            <div className={styles.Tile4}>

            </div>
          </div>
        </div>
        <Frame />
        <div className={styles.sectionTitleGroup}>
          <div className={styles.sectionTitle1}>
            <h2 className={styles.seeAgain1}>시네마 클라우드 추천작</h2>

          </div>
          <div className={styles.frameParent}>
            <div className={styles.TileParent}>
              <div className={styles.Tile5}>

              </div>

              <div className={styles.Tile6}>

              </div>

              <div className={styles.Tile7}>

              </div>
            </div>
            <div className={styles.Tile8}>

            </div>
            <div className={styles.Tile9}>

            </div>
          </div>
        </div>
        <Frame />
        <div className={styles.sectionTitleContainer}>
          <div className={styles.sectionTitle2}>
            <h2 className={styles.seeAgain2}>밤늦게 즐기는 스릴러</h2>

          </div>
          <div className={styles.frameGroup}>
            <div className={styles.TileGroup}>
              <div className={styles.Tile10}>

              </div>

              <div className={styles.Tile11}>

              </div>


              <div className={styles.Tile12}>

              </div>
            </div>
            <div className={styles.Tile13}>

            </div>
            <div className={styles.Tile14}>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
