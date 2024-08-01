import React from 'react';
import styles from './Dashboard.module.css';

const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <h1 className={styles.logo}>CINEMA CLOUD</h1>
      <ul className={styles.menu}>
        <li>Dashboard</li>
        <li>영화관리</li>
        <li>영화 추가</li>
        <li>회원관리</li>
        <li>회원문의</li>
        <li>1대1채팅</li>
      </ul>
    </div>
  );
};

export default SideMenu;