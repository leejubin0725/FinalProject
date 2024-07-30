import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export type Header = {
  className?: string;
};

const Header: FunctionComponent<Header> = ({ className = "" }) => {
  return (
    <section className={[styles.Header, className].join(" ")}>
      <header className={styles.header}>
        <div className={styles.headerBackground} />
        <img
          className={styles.logoText2}
          loading="lazy"
          alt=""
          src="/logo-text-2@2x.png"
        />
        <div className={styles.navigation}>
          <div className={styles.homeNav}>
            <div className={styles.homeButton}>
              <Link to="/" className={styles.a}>홈</Link>
            </div>
            <div className={styles.searchNav}>
              <Link to="/search">
                <img
                  className={styles.fesearchIcon}
                  loading="lazy"
                  alt=""
                  src="/fesearch.svg"
                />
              </Link>
            </div>
            <div className={styles.notificationsNav}>
              <Link to="/notifications">
                <img
                  className={styles.faSolidbellIcon}
                  loading="lazy"
                  alt=""
                  src="/fasolidbell.svg"
                />
              </Link>
            </div>
            <div className={styles.profileNav}>
              <Link to="/profile">
                <img
                  className={styles.profileBackgroundIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-31@2x.png"
                />
                <img
                  className={styles.antDesigncaretDownFilledIcon}
                  loading="lazy"
                  alt=""
                  src="/antdesigncaretdownfilled.svg"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;