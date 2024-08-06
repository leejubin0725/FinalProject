// pages/ManageFAQ.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../pages/DashboardPage.module.css';
import Pagination from '../components/Pagination'; // 공통 컴포넌트 호출

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    date: string;
}

const data: FAQItem[] = [
    {
        id: 1,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 2,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 3,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 4,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 5,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 6,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 7,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    }, {
        id: 8,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    }, {
        id: 9,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 10,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 11,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 12,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 13,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 14,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 15,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 16,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 17,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 18,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 19,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 20,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 21,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 22,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    },
    {
        id: 23,
        question: "하나의 계정으로 여러 기기에서 사용할 수 있나요?",
        answer: "네, 하나의 계정으로 최대 4대의 기기에서 동시에 시청이 가능합니다. 단, 요금제에 따라 시청 가능한 기기 수는 다를 수 있습니다.",
        date: "2024.08.05",
    }
    // 추가적인 데이터들...
];

export default function ManageFAQ() {
    const { page } = useParams<{ page: string }>();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState<string>('');
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState<number>(page ? parseInt(page, 10) : 1);

    useEffect(() => {
        if (page) {
            setCurrentPage(parseInt(page, 10));
        }
    }, [page]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        console.log("검색어:", searchTerm);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        navigate(`/dashboard/FAQManage/${pageNumber}`);
    };

    const handleInsertFAQClick = () => {
        navigate('/dashboard/FAQManage/InsertFAQ');
    };

    return (
        <div className={styles.tableContainer}>
            <div className={styles.headerContainer}>
                <h1 className={styles.movimanage}>자주하는질문</h1>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="질문검색"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                    <button onClick={handleSearchClick} className={styles.searchButton}>검색</button>
                    <button className={styles.insertFAQButton} onClick={handleInsertFAQClick}>작성하기</button>
                </div>
            </div>
            <div>
                <table className={styles.tg}>
                    <colgroup>
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "300px" }} />
                        <col style={{ width: "500px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "100px" }} />
                    </colgroup>
                    <thead>
                        <tr id={styles.firstrow}>
                            <th>질문번호</th>
                            <th>질문내용</th>
                            <th>답변</th>
                            <th>게시날짜</th>
                            <th>수정하기</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.question}</td>
                                <td>{item.answer}</td>
                                <td>{item.date}</td>
                                <td><button>수정하기</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={data.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
}
