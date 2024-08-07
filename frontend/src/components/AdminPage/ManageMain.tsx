import ChartComponent from './ChartComponent';
import styles from '../../pages/AdminPage/css/DashboardPage.module.css';
import VisitCount from './VisitCount';
import EmployeeStatus from './EmployeeStatus';
import TotalMovie from './TotalMovie';
import TotalViews from './TotalViews';
import TodayVisit from './TodayVisit';
import TotalUsers from './TotalUsers';

export default function ManageMain() {
  return (
    <div className={styles.content}>
      {/* 왼쪽 컬럼: 네 개의 카드 */}
      <div className={styles.leftColumn}>
        <div className={`${styles.card} ${styles.leftCard}`}>
          <TotalUsers />
        </div>
        <div className={`${styles.card} ${styles.leftCard}`}>
          <TodayVisit />
        </div>
        <div className={`${styles.card} ${styles.leftCard}`}>
          <TotalMovie />
        </div>
        <div className={`${styles.card} ${styles.leftCard}`}>
          <TotalViews />
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
            <VisitCount />
          </div>
          <div className={`${styles.card} ${styles.halfWidthSmaller}`}>
            <EmployeeStatus />
          </div>
        </div>
      </div>
    </div>
  )
}
