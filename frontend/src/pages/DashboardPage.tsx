import React from 'react';
import SideMenu from '../components/SideMenu';
import styles from './DashboardPage.module.css';
import Header from '../components/Header';
import ManageMain from '../components/ManageMain';
import { Route, Routes } from 'react-router-dom';
import MovieManage from '../components/MovieManage';
import MemverManage from '../components/MemberManage';
import TotalEmployees from '../components/TotalEmployees';
import JobView from '../components/JobView';
import JobApplied from '../components/JobApplied';
import EmployeeStatus from '../components/EmployeeStatus';
import EmployeeComposition from '../components/EmployeeComposition';
import ChartComponent from '../components/ChartComponent';
import styles from './DashboardPage.module.css';
import Header from '../components/Header';

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

          {/* 왼쪽 컬럼: 네 개의 카드 */}
          <div className={styles.leftColumn}>
            <div className={`${styles.card} ${styles.leftCard}`}>
              <TotalEmployees />
            </div>
            <div className={`${styles.card} ${styles.leftCard}`}>
              <JobView />
            </div>
            <div className={`${styles.card} ${styles.leftCard}`}>
              <JobApplied />
            </div>
            <div className={`${styles.card} ${styles.leftCard}`}>
              <JobView />
            </div>
          </div>

          {/* 오른쪽 컬럼: 장르별 조회수 차트 및 아래 카드들 */}
          <div className={styles.mainColumn}>
            {/* 장르별 조회수 차트 */}
            <div className={`${styles.card} ${styles.fullWidth}`}>
              <ChartComponent />
            </div>

            {/* 방문자 수 변동량과 최근 많이 본 영화 */}
            <div className={styles.row}>
              <div className={`${styles.card} ${styles.halfWidth}`}>
                <EmployeeComposition />
              </div>
              <div className={`${styles.card} ${styles.halfWidthSmaller}`}>
                <EmployeeStatus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
