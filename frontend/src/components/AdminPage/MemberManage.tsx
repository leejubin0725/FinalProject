import React, { useEffect, useState } from 'react';
import styles from '../../pages/AdminPage/css/DashboardPage.module.css';
import Pagination from './Pagination'; // Pagination 컴포넌트를 불러옵니다.
import axios from 'axios';

interface Member {
  userNo: number;
  username: string;
  status: string;
  email: string;
  createdAt: string;
}

interface Profile {
  profileId: number;
  profileName: string;
  favoriteGenre: string;
  kidsMode: boolean;
  password: string;
}

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
  const [membersData, setMembersData] = useState<Member[]>([]);
  const itemsPerPage = 10;

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get<Member[]>('http://localhost:8088/dashboard/getUser');
        console.log(response.data);
        // 변환된 날짜 문자열로 처리
        const updatedData = response.data.map(item => ({
          ...item,
          createdAt: item.createdAt ? item.createdAt.toString().substring(0, 10) : 'N/A' // 날짜를 문자열로 변환
        }));
        console.log(updatedData);
        setMembersData(updatedData);
      } catch (error) {
        console.error("Failed to get user", error);
      }
    };

    getUser();
  }, []);

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
    (member) => member.username.includes(searchTerm)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMembers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.tableContainer}>
      <div className={styles.headerContainer}>
        <h1 className={styles.movimanage}>회원 관리</h1>
        <a>전체회원</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a>정지회원</a>
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
              <React.Fragment key={member.userNo}>
                <tr onClick={() => handleRowClick(member.userNo)}>
                  <td>{member.userNo}</td>
                  <td>0</td>
                  <td>{member.username}</td>
                  <td>{member.email}</td>
                  <td>{member.createdAt}</td>
                  <td>0</td>
                  <td><button>{member.status ? '정지해제' : '이용정지'}</button></td>
                </tr>
                {expandedRow === member.userNo && (
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
                          {profilesData[member.userNo]?.map((profile) => (
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
