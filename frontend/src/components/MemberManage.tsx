import React, { useState } from 'react';
import styles from '../pages/DashboardPage.module.css';

interface Member {
  id: number;
  name: string;
  nickname: string;
  email: string;
  joinDate: string;
  subscription: string;
  suspended: boolean;
}

interface Profile {
  profileId: number;
  profileName: string;
  favoriteGenre: string;
  kidsMode: boolean;
  password: string;
}

const membersData: Member[] = [
  { id: 1, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 2, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 3, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 4, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 5, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 6, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 7, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 8, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 9, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 10, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 11, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 12, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 13, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 14, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 15, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 16, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 17, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 18, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 198, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 19, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 20, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 134, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 1344, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 1768, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 1980098, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 155, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  { id: 26, name: '1번회원', nickname: 'user1', email: 'user1@cinema.cloud', joinDate: '2024.08.02', subscription: '200분', suspended: false },
  // 추가 데이터...
];

const profilesData: { [key: number]: Profile[] } = {
  1: [
    { profileId: 1, profileName: '아이가 쓸 프로필', favoriteGenre: '코미디', kidsMode: true, password: '' },
    { profileId: 2, profileName: '2qjsvmfhvlf', favoriteGenre: '액션, 호러', kidsMode: false, password: 'user1' },
    // 추가 프로필 데이터...
  ],
  // 다른 회원의 프로필...
};

export default function MemberManage() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleRowClick = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('검색어:', searchTerm);
  };

  const filteredMembers = membersData.filter(
    (member) => member.name.includes(searchTerm) || member.nickname.includes(searchTerm)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMembers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
            {currentItems.map((member) => (
              <React.Fragment key={member.id}>
                <tr onClick={() => handleRowClick(member.id)}>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.nickname}</td>
                  <td>{member.email}</td>
                  <td>{member.joinDate}</td>
                  <td>{member.subscription}</td>
                  <td><button>{member.suspended ? '정지해제' : '이용정지'}</button></td>
                </tr>
                {expandedRow === member.id && (
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
                          {profilesData[member.id]?.map((profile) => (
                            <tr key={profile.profileId}>
                              <td>{profile.profileId}</td>
                              <td>{profile.profileName}</td>
                              <td>{profile.favoriteGenre}</td>
                              <td>{profile.kidsMode ? 'Y' : 'N'}</td>
                              <td>{profile.password}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredMembers.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
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
    <nav>
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
