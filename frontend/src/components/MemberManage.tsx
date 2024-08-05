import React, { useState } from 'react';
import styles from '../pages/DashboardPage.module.css';

export default function MemberManage() {
    const [expandedRow, setExpandedRow] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleRowClick = (id: number) => {
        if (expandedRow === id) {
            setExpandedRow(null);
        } else {
            setExpandedRow(id);
        }
    };

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
                <h1 className={styles.movimanage}>회원 관리</h1>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="회원명"
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
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "15%" }} />
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "15%" }} />
                        <col style={{ width: "15%" }} />
                        <col style={{ width: "10%" }} />
                    </colgroup>
                    <thead>
                        <tr id={styles.firstrow}>
                            <th>회원번호</th>
                            <th>이름</th>
                            <th>닉네임</th>
                            <th>아이디 / 이메일</th>
                            <th>가입일</th>
                            <th>구독상태</th>
                            <th>정지여부</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => handleRowClick(1)}>
                            <td>1</td>
                            <td>1번회원</td>
                            <td>user1</td>
                            <td>user1@cinema.cloud</td>
                            <td>2024.08.02</td>
                            <td>200분</td>
                            <td><button>이용정지</button></td>
                        </tr>
                        {expandedRow === 1 && (
                            <tr>
                                <td colSpan={7} className={styles.expandedRow}>
                                    <table className={styles.innerTable}>
                                        <thead>
                                            <tr>
                                                <th>프로필번호</th>
                                                <th>프로필이름</th>
                                                <th>선호장르</th>
                                                <th>키즈모드 여부</th>
                                                <th>비밀번호</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>아이가 쓸 프로필</td>
                                                <td>코미디</td>
                                                <td>Y</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>2qjsvmfhvlf</td>
                                                <td>액션, 호러</td>
                                                <td>N</td>
                                                <td>user1</td>
                                            </tr>
                                            {/* 추가 행들 */}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        )}
                        {/* 추가 행들 및 조건부 렌더링 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
