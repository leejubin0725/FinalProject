import axios from 'axios';
import React, { useEffect, useState } from 'react';


const JobApplied = () => {
  const [totalMovie, setTotalMovie] = useState(10000);

  useEffect(() => {
    const fetchMovieCount = async () => {
      try {
        // 포트를 8088로 변경
        const response = await axios.get('http://localhost:8088/dashboard/movieCount');
        setTotalMovie(response.data);
      } catch (error) {
        console.error("Failed to fetch view count:", error);
      }
    };

    fetchMovieCount();
  }, []);

  return (
    <div>
      <h2>전체 영화 수</h2>
      <p>{totalMovie.toLocaleString()}편</p>
    </div>
  );
};

export default JobApplied;