import React, { useState } from 'react';
import styles from '../../pages/AdminPage/css/DashboardPage.module.css';
import Pagination from './Pagination';  // 외부 컴포넌트로 분리된 Pagination을 import
import { Chatting } from './Chatting';

interface ChatItem {
    id: number;
    username: string;
    date: string;
    content: string;
}

const data: ChatItem[] = [
    { id: 1, username: "user1", date: "2022.01.01", content: "user1님의 채팅" },
    { id: 2, username: "user2", date: "2022.01.02", content: "user2님의 채팅" },
    { id: 3, username: "user3", date: "2022.01.03", content: "user3님의 채팅" },
    { id: 4, username: "user4", date: "2022.01.04", content: "user4님의 채팅" },
    { id: 5, username: "user5", date: "2022.01.05", content: "user5님의 채팅" },
    { id: 6, username: "user6", date: "2022.01.06", content: "user6님의 채팅" },
    { id: 7, username: "user7", date: "2022.01.07", content: "user7님의 채팅" },
    { id: 8, username: "user8", date: "2022.01.08", content: "user8님의 채팅" },
    { id: 9, username: "user9", date: "2022.01.09", content: "user9님의 채팅" },
    { id: 10, username: "user10", date: "2022.01.10", content: "user10님의 채팅" },
    { id: 11, username: "user11", date: "2022.01.11", content: "user11님의 채팅" },
    { id: 12, username: "user12", date: "2022.01.12", content: "user12님의 채팅" },
    // 추가 데이터...
];

export default function ChattingList() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [currentChat, setCurrentChat] = useState<string>('');
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const openModal = (chatContent: string) => {
        setCurrentChat(chatContent);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentChat('');
    };

    return (
        <div className={styles.ChattingContainer}>
            <h1 className={styles.ChattingTitle}>1대1 문의</h1>
            <div className={styles.ChattingGrid}>
                {currentItems.map((item) => (
                    <div key={item.id} className={styles.ChattingCard}>
                        <div className={styles.ChattingCardTitle}>{item.content}</div>
                        <div className={styles.ChattingCardDate}>{item.date}</div>
                        <input type="text" className={styles.lastChat} value={'최근 한 채팅'} disabled />
                        <button
                            className={styles.ChattingCardButton}
                            onClick={() => openModal(item.content)}
                        >
                            답변하기
                        </button>
                    </div>
                ))}
            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            <Chatting isOpen={isModalOpen} onClose={closeModal} chatContent={currentChat} state={'admin'} />
        </div>
    );
}
