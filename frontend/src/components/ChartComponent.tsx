import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '장르1', 조회수: 40 },
  { name: '장르2', 조회수: 30 },
  { name: '장르3', 조회수: 30 },
  { name: '장르4', 조회수: 20 },
  { name: '장르5', 조회수: 70 },
  { name: '장르6', 조회수: 30 },
  { name: '장르7', 조회수: 10 },
  { name: '장르8', 조회수: 75 },
  { name: '장르9', 조회수: 30 },
  { name: '장르10', 조회수: 34 },
  { name: '장르11', 조회수: 36 },
  { name: '장르12', 조회수: 26 },
  { name: '장르13', 조회수: 30 },
  { name: '장르14', 조회수: 37 },
  { name: '장르15', 조회수: 58 },
  { name: '장르16', 조회수: 95 },
  { name: '장르17', 조회수: 13 },
  { name: '장르18', 조회수: 37 },
  { name: '장르19', 조회수: 48 },
  { name: '장르20', 조회수: 30 }
  // 추가 데이터
];

const ChartComponent = () => (
  <div>
    <h2>장르별 조회수</h2>
    <BarChart width={1200} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" interval={0} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="조회수" fill="#8884d8" />
    </BarChart>
  </div>
);

export default ChartComponent;
