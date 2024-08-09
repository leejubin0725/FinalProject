
import React, { useState } from 'react';
import styles from './css/HelpPage.module.css';

const Question: React.FC = () => {
    const [chatContent, setChatContent] = useState<string>('여기에 채팅 내용이 표시됩니다.');

    return (
        <div className={styles.profileManagementPage}>
            <div className={styles.header}>
                <h1>1:1 문의</h1>
                <button className={styles.endChatButton}>대화종료</button>
            </div>
            <div className={styles.chatContainer}>
                <div className={styles.chatBox}>
                    <div className={styles.chatContent}>
                        {chatContent}
                    </div>
                </div>
                <div className={styles.chatInputContainer}>
                    <input
                        type="text"
                        placeholder="메시지를 입력하세요"
                        className={styles.chatInput}
                        onChange={(e) => setChatContent(e.target.value)}
                    />
                    <button className={styles.sendButton}>전송하기</button>

                </div>
            </div>
        </div>
    );
};


export default Question;

