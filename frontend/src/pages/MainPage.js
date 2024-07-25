// src/pages/MainPage.js
import React from 'react';
import Navbar from '../components/Navbar'; // Navbar 컴포넌트 임포트
import '../App.css';

const MainPage = () => {
  return (
    <div className="container">
      <Navbar /> {/* Navbar 컴포넌트 사용 */}
      <section className="main">
        <div className="main-overlay">
          <h1>Welcome to the Movie App</h1>
          <p>Explore and watch your favorite movies</p>
          <button>Explore Now</button>
        </div>
      </section>
      {/* 다른 섹션들 */}
      <footer className="footer">
        <p>© 2024 Cinema Cloud, Inc.</p>
        {/* 추가적인 footer 정보 */}
      </footer>
    </div>
  );
};

export default MainPage;
