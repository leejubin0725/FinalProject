import React from 'react';
import styles from './css/HelpPage.module.css'

interface QuestionProps {
    onMenuClick: (menu: string) => void;
}

const Question: React.FC<QuestionProps> = ({ onMenuClick }) => {
    return (
        <div className={styles.profileManagementPage}>
            <div className={styles.content}>
                <h1>FAQ</h1>

            </div>
            <div className={styles.content}>
                <h3>1:1문의</h3>
                <div className={styles.quickLinks}>
                    <ul>
                        <li><a href="/watch-settings">사용 <span className={styles.arrow}>&gt;</span></a></li>
                        <li><a href="/watch-history">하세용 <span className={styles.arrow}>&gt;</span></a></li>
                        <li><a href="/payment-info">사용 <span className={styles.arrow}>&gt;</span></a></li>
                        <li><a href="/privacy-policy">하세용 <span className={styles.arrow}>&gt;</span></a></li>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onMenuClick('');
                                }}
                                className={styles.link}
                            >
                                이걸로 다른 화면에있는 tsx를 가져올수있음여 <span className={styles.arrow}>&gt;</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Question;