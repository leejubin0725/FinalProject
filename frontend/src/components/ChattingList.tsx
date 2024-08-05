import React, { useState } from 'react';
import styles from '../pages/DashboardPage.module.css';

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
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className={styles.ChattingContainer}>
            <h1 className={styles.ChattingTitle}>1대1 문의</h1>
            <div className={styles.ChattingGrid}>
                {currentItems.map((item) => (
                    <div key={item.id} className={styles.ChattingCard}>
                        <div className={styles.ChattingCardTitle}>{item.content}</div>
                        <div className={styles.ChattingCardDate}>{item.date}</div>
                        <button className={styles.ChattingCardButton}>답변하기</button>
                    </div>
                ))}
            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
}

interface PaginationProps {
    itemsPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }: PaginationProps) {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={styles.paginationContainer}>
            <ul className={styles.pagination}>
                {pageNumbers.map((number) => (
                    <li key={number} className={number === currentPage ? styles.active : ''}>
                        <button onClick={() => paginate(number)} className={styles.pageLink}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
