import React from 'react';

const data = [
  {
    name: 'Justin Lipshutz',
    category: 'Marketing',
    age: 22,
    status: '+100%',
    employmentType: 'Permanent',
  },
  {
    name: 'Marcus Culhane',
    category: 'Finance',
    age: 24,
    status: 'Contract',
    employmentType: 'Contract',
  },
  {
    name: 'Leo Stanton',
    category: 'R&D',
    age: 28,
    status: 'Permanent',
    employmentType: 'Permanent',
  },
  // 추가 데이터
];

const EmployeeStatus = () => {
  return (
    <div>
      <h2>최근 많이 본 영화 (1주일 내 100건 이상)</h2>
      <table>
        <thead>
          <tr>
            <th>영화 제목</th>
            <th>카테고리</th>
            <th>연령 제한</th>
            <th>감독</th>
            <th>이번주 조회수</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.age}</td>
              <td>{item.status}</td>
              <td>{item.employmentType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeStatus;