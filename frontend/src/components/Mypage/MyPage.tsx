import React from 'react';
import styles from './css/HelpPage.module.css'

const MyPage: React.FC = () => {
    return (
        <div className="defaultpage-container">
            <h1>Default Page</h1>
            <p>현재 멤버십의 다음 결제일을 볼 수 있는 페이지입니다.</p>
            {/* 여기에 멤버십 정보 기능을 추가하세요 */}
        </div>
    );
};

export default MyPage;