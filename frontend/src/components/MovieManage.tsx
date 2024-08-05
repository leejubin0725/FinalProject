import React, { useState } from 'react';
import styles from '../pages/DashboardPage.module.css';

export default function MovieManage() {
    // 검색어 상태 관리
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        // 검색 버튼 클릭 시 실행할 로직
        console.log("검색어:", searchTerm);
    };

    return (
        <div className={styles.tableContainer}>
            <div className={styles.headerContainer}>
                <h1 className={styles.movimanage}>영화 관리</h1>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="영화제목"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                    <button onClick={handleSearchClick} className={styles.searchButton}>검색</button>
                </div>
            </div>
            <div>
                <table className={styles.tg}>
                    <colgroup>
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "300px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "300px" }} />
                        <col style={{ width: "250px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "100px" }} />
                    </colgroup>
                    <thead>
                        <tr id={styles.firstrow}>
                            <th>영화번호</th>
                            <th>제목</th>
                            <th>장르</th>
                            <th>출연배우</th>
                            <th>감독</th>
                            <th>상영시간</th>
                            <th>등록일자</th>
                            <th>조회수</th>
                            <th>평점</th>
                            <th>삭제하기</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>testtitle</td>
                            <td>호러</td>
                            <td>배우1, 배우2, 배우3</td>
                            <td>감독1</td>
                            <td>200분</td>
                            <td>2020.01.01</td>
                            <td>8000회</td>
                            <td>5.0/5.0</td>
                            <td><button>delete</button></td>
                        </tr>
                        {/* 추가적인 행들 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
