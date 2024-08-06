import React from 'react';
import styles from './MyPage.module.css';

const AccountDelete: React.FC = () => {
    return (
        <div className={styles.myPage}>
            <div className={styles.content}>
                <h1>회원 탈퇴</h1>
                <h3>회원 정보 삭제</h3>
                <div className={styles.quickLinks}>
                    <ul>
                        <li>
                            <li>정말로 회원을 탈퇴하시겠습니까? </li>
                            한번 탈퇴하면 돌이킬 수 없습니다.

                        </li>
                        <button>회원 탈퇴</button>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AccountDelete;