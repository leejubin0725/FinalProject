import React from 'react';
import styles from './MyPage.module.css';

const Security: React.FC = () => {
    return (
        <div className={styles.myPage}>
            <div className={styles.content}>
                <h1>보안</h1>
                <h3>계정 정보</h3>
                <div className={styles.quickLinks}>
                    <ul>
                        <li><a href="/">비밀번호 변경</a></li>
                        <li><a href="/">아이디/이메일</a></li>
                        <li><a href="/">휴대폰</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Security;