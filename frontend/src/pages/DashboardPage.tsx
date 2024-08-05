import React from 'react';
import SideMenu from '../components/SideMenu';
import styles from './DashboardPage.module.css';
import Header from '../components/Header';
import ManageMain from '../components/ManageMain';
import { Route, Routes } from 'react-router-dom';
import MovieManage from '../components/MovieManage';
import MemverManage from '../components/MemberManage';
import ManageFAQ from '../components/ManageFAQ';
import InsertFAQ from '../components/InsertFAQ';
import ChattingList from '../components/ChattingList';

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
            <Route path="/movieManage" element={<MovieManage />} />
            <Route path="/insertMovie" element={<ManageMain />} />
            <Route path="/memberManage" element={<MemverManage />} />
            <Route path="/FAQManage" element={<ManageFAQ />} />
            <Route path="/FAQManage/:page" element={<ManageFAQ />} />
            <Route path="/FAQManage/InsertFAQ" element={<InsertFAQ />} />
            <Route path="/1on1chat" element={<ChattingList />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
