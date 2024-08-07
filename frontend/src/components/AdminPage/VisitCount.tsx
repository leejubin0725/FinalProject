import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const data = [
//   { name: '6일전', 방문자수: 24 },
//   { name: '5일전', 방문자수: 18 },
//   { name: '4일전', 방문자수: 14 },
//   { name: '3일전', 방문자수: 27 },
//   { name: '2일전', 방문자수: 18 },
//   { name: '1일전', 방문자수: 23 },
//   { name: '오늘', 방문자수: 34 },
// ];

const VisitCount = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try{
        const response = await axios.get('http://localhost:8088/dashboard/weekVisit');
        setData(response.data);
      }catch(error){
        console.log("에러발생", error);
      }
    };
    fetchVisitCount();
  }, []);

  return (
    <div>
      <h2>방문자 수 변동량</h2>
      <LineChart
        width={580}  /* 너비를 약간 줄임 */
        height={300}
        data={data}
        margin={{ top: 20, right: 50, left: 0, bottom: 20 }}  /* 오른쪽 마진을 추가하고, 왼쪽 마진을 줄임 */
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dayCount" interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="visitCount" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default VisitCount;
