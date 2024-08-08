import React from 'react';
import styles from '../../pages/AdminPage/css/DashboardPage.module.css';
import axios from 'axios';

interface ChattingProps {
    isOpen: boolean;
    onClose: () => void;
    chatContent: string;
    state: string;
}

export const Chatting: React.FC<ChattingProps> = ({ isOpen, onClose, chatContent, state }) => {

    const insertChat = () => {
        //axios.post('http://localhost:8088/dashboard/insertChat', state)
    }

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.chatTitle}>{chatContent}</span>
                <span className={styles.closeButton} onClick={onClose}>&times;</span>
                <div className={styles.chatWindow}>
                    <div className={styles.chatMessages}></div>
                    <input type="text" placeholder="메시지를 입력하세요" className={styles.chatInput} />
                    <button className={styles.sendButton} onClick={insertChat}>전송하기</button>
                </div>
            </div>
        </div>
    );
};
