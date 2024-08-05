import React from 'react';
import styles from './MyPage.module.css';

interface ProfileManagementProps {
    onMenuClick: (menu: string) => void;
}

const ProfileManagement: React.FC<ProfileManagementProps> = ({ onMenuClick }) => {
    return (
        <div className={styles.profileManagementPage}>
            <div className={styles.content}>
                <h1>프로필 관리</h1>
                <h3>프로필 상세 정보</h3>
                <div className={styles.profileSection}>
                    <img src="/profile.png" alt="Profile" className={styles.profileImage} />
                    <div className='profile'>
                        <h2>보람 상조님</h2>
                        <a href="/profile-upload" className={styles.link}>프로필 업로드</a>
                        <a href="/nickname-change" className={styles.link}>닉네임 변경</a>
                        <a href="/password-change" className={styles.link}>비밀번호 변경</a>
                    </div>
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

export default ProfileManagement;