import React from 'react';
import styles from './css/HelpPage.module.css';

interface FaqProps {
    onMenuClick: (menu: string) => void;
}

const Faq: React.FC<FaqProps> = ({ onMenuClick }) => {
    return (
        <div className={styles.profileManagementPage}>
            <div className={styles.content}>
                <h1>FAQ</h1>
                <h3>자주하는 질문</h3>
                <div className={styles.profileSection}>

                    <a href="/profile-upload" className={styles.link}>잉</a>
                    <a href="/nickname-change" className={styles.link}>잉</a>
                    <a href="/password-change" className={styles.link}>ㅇ;ㅇ</a>

                </div>
            </div>
            <div className={styles.content}>
                <h3>프로필 설정</h3>
                <div className={styles.quickLinks}>
                    <ul>
                        <li><a href="/watch-settings">시청 제한 <span className={styles.arrow}>&gt;</span></a></li>
                        <li><a href="/watch-history">시청 기록 <span className={styles.arrow}>&gt;</span></a></li>
                        <li><a href="/payment-info">결제정보 <span className={styles.arrow}>&gt;</span></a></li>
                        <li><a href="/privacy-policy">개인정보 및 데이터 설정 <span className={styles.arrow}>&gt;</span></a></li>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onMenuClick('accountDelete');
                                }}
                                className={styles.link}
                            >
                                회원 탈퇴 <span className={styles.arrow}>&gt;</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Faq;