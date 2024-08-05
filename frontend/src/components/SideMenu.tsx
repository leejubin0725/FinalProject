import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dashboard.module.css';

const SideMenu: React.FC = () => {
=======
import styles from './Dashboard.module.css';

const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <h1 className={styles.logo}>CINEMA CLOUD</h1>
      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.activeMenuItem : ''}`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/movieManage"
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.activeMenuItem : ''}`
            }
          >
            영화관리
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/insertMovie"
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.activeMenuItem : ''}`
            }
          >
            영화 추가
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/memberManage"
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.activeMenuItem : ''}`
            }
          >
            회원관리
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/insertNotice"
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.activeMenuItem : ''}`
            }
          >
            회원문의
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/1on1chat"
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.activeMenuItem : ''}`
            }
          >
            1대1채팅
          </NavLink>
        </li>
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
