import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './css/Header.module.css';

export type HeaderProps = {
  className?: string;
  onSearchClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ className = "", onSearchClick }) => {
  const [selectedProfile, setSelectedProfile] = useState<string>('/profile.png');
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate(); // useNavigate를 사용하여 페이지 이동을 처리합니다.

  useEffect(() => {
    // Fetch the current user when the component mounts
    axios.get('/api/users/current')
      .then(response => {
        setUser(response.data);
        setSelectedProfile(response.data?.profileImage || '/profile.png');
      })
      .catch(error => console.error("Error fetching user data", error));
  }, []);

  const profiles = [
    { id: 'profile', src: '/profile.png', name: '멀티 프로필1' },
    { id: 'profile2', src: '/profile2.png', name: '멀티 프로필2' },
    { id: 'profile3', src: '/profile3.png', name: '멀티 프로필3' },
    { id: 'profile4', src: '/profile4.png', name: '멀티 프로필4' },
  ];

  const handleProfileClick = (profileSrc: string) => {
    setSelectedProfile(profileSrc);
  };

  const handleTemporaryLogin = () => {
    // Implement temporary login logic here
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');

    // Redirect to login page
    navigate('/login');
  };

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
                    alt="Profile"
                    src={selectedProfile}
                  />
                  <img
                    className={styles.antDesigncaretDownFilledIcon}
                    loading="lazy"
                    alt=""
                    src="/antdesigncaretdownfilled.svg"
                  />
                  <div className={styles.dropdownMenu}>
                    {user ? (
                      profiles.map((profile) => (
                        <div
                          key={profile.id}
                          className={styles.dropdownItem}
                          onClick={() => handleProfileClick(profile.src)}
                        >
                          <img src={profile.src} alt={profile.name} />
                          {profile.name}
                        </div>
                      ))
                    ) : (
                      <button className={styles.temporaryLoginButton} onClick={handleTemporaryLogin}>
                        임시 로그인
                      </button>
                    )}
                    <Link to="/account" className={styles.dropdownItem}>
                      계정
                    </Link>
                    <Link to="/help" className={styles.dropdownItem}>
                      고객센터
                    </Link>
                    <div
                      className={styles.dropdownItem}
                      onClick={handleLogout} // 로그아웃 클릭 시 핸들러 호출
                    >
                      로그아웃
                    </div>
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
