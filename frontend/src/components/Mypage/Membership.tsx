import React from 'react';
import styles from './css/MyPage.module.css';

const Membership: React.FC = () => {
    return (
        <div className={styles.myPage}>
            <div className={styles.content}>
                <h1>멤버십</h1>
                <h3>멤버십 결제일</h3>
                <div className={styles.quickLinks}>
                    <ul>
                        <li>멤버십 구독 날짜</li>
                    </ul>
                </div>
            </div>
            <div className={styles.content}>
                <h3>결제 정보</h3>
                <div className={styles.quickLinks}>
                    <ul>
                        <li>다음 결제일</li>
                        <li><a href="/">결제 수단 관리</a></li>
                        <li><a href="/">결제 내역 확인</a></li>
                        <li><a href="/">멤버십 해지</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Membership;