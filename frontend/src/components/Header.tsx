import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export type HeaderProps = {
  className?: string;
  onSearchClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ className = "", onSearchClick }) => {
  return (
    <>
      <section className={`${styles.Header} ${className}`}>
        <header className={styles.header}>
          <div className={styles.headerBackground} />
          <Link to="/home">
            <img
              className={styles.logoText2}
              loading="lazy"
              alt=""
              src="/logo-text-2@2x.png"
            />
          </Link>
          <div className={styles.navigation}>
            <div className={styles.homeNav}>
              <div className={`${styles.homeButton} ${styles.iconButton}`}>
                <Link to="/home" className={styles.a}>
                  <img
                    className={styles.homeButtonIcon}
                    loading="lazy"
                    alt=""
                    src="/homeButton.png"
                  />
                </Link>
              </div>
              <div
                className={`${styles.searchNav} ${styles.iconButton}`}
                onClick={onSearchClick}
              >
                <img
                  className={styles.fesearchIcon}
                  loading="lazy"
                  alt=""
                  src="/fesearch.svg"
                />
              </div>
              <div className={`${styles.notificationsNav} ${styles.iconButton}`}>
                <Link to="/notifications">
                  <img
                    className={styles.faSolidbellIcon}
                    loading="lazy"
                    alt=""
                    src="/fasolidbell.svg"
                  />
                </Link>
              </div>
              <div className={`${styles.profileNav} ${styles.iconButton}`}>
                <div className={styles.clickableDiv}>
                  <img
                    className={styles.profileBackgroundIcon}
                    loading="lazy"
                    alt=""
                    src="/profile.png"
                  />
                  <img
                    className={styles.antDesigncaretDownFilledIcon}
                    loading="lazy"
                    alt=""
                    src="/antdesigncaretdownfilled.svg"
                  />
                  <div className={styles.dropdownMenu}>
                    <Link to="/profile1" className={styles.dropdownItem}>
                      <img src="/profile.png" alt="Profile 1" />
                      멀티 프로필1
                    </Link>
                    <Link to="/profile2" className={styles.dropdownItem}>
                      <img src="/profile.png" alt="Profile 2" />
                      멀티 프로필2
                    </Link>
                    <Link to="/profile3" className={styles.dropdownItem}>
                      <img src="/profile.png" alt="Profile 3" />
                      멀티 프로필3
                    </Link>
                    <Link to="/profile4" className={styles.dropdownItem}>
                      <img src="/profile.png" alt="Profile 4" />
                      멀티 프로필4
                    </Link>
                    <Link to="/profile/manage" className={styles.dropdownItem}>
                      프로필 관리
                    </Link>
                    <Link to="/account" className={styles.dropdownItem}>
                      계정
                    </Link>
                    <Link to="/help" className={styles.dropdownItem}>
                      고객센터
                    </Link>
                    <Link to="/logout" className={styles.dropdownItem}>
                      로그아웃
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
