// ProfileManagement.tsx
import React from 'react';
import styles from './css/MyPage.module.css';

const ProfileManagement: React.FC = () => {
    return (
        <div className={styles.myPage}>
            <div className={styles.content}>
                <h1>개요</h1>
                <h3>멤버십 결제일</h3>
                <div className={styles.quickLinks}>
                    <ul>
                        <li>멤버십 구독 날짜</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ProfileManagement;