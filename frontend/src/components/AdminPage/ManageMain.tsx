import ChartComponent from './ChartComponent';
import styles from '../../pages/AdminPage/css/DashboardPage.module.css';
import EmployeeComposition from './EmployeeComposition';
import EmployeeStatus from './EmployeeStatus';
import JobApplied from './JobApplied';
import JobView from './JobView';
import TotalEmployees from './TotalEmployees';
import TotalViews from './TotalViews';

export default function ManageMain() {
  return (
    <div className={styles.content}>
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
            <EmployeeComposition />
          </div>
          <div className={`${styles.card} ${styles.halfWidthSmaller}`}>
            <EmployeeStatus />
          </div>
        </div>
      </div>
    </div>
  )
}
