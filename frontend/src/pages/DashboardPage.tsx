import React from 'react';
import SideMenu from '../components/SideMenu';
import styles from './DashboardPage.module.css';
import Header from '../components/Header';
import ManageMain from '../components/ManageMain';
import { Route, Routes } from 'react-router-dom';
import MovieManage from '../components/MovieManage';
import MemverManage from '../components/MemberManage';

const DashboardPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.dashboardPage}>
        <SideMenu />
        <div className={styles.content}>
          <Routes>
            {/* 기본 경로: /dashboard */}
            <Route path="/" element={<ManageMain />} />

            {/* 하위 경로들: /dashboard/... */}
            <Route path="movieManage" element={<MovieManage />} />
            <Route path="insertMovie" element={<ManageMain />} />
            <Route path="memberManage" element={<MemverManage />} />
            <Route path="insertNotice" element={<ManageMain />} />
            <Route path="1on1chat" element={<div />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
