import React from 'react';
import '../App.css';

// 이미지 파일을 동적으로 가져오기
const images = require.context('../assets/images', false, /\.(png|jpe?g|svg)$/);

const MainPage = () => {
  const movieItems = images.keys().map((path, index) => {
    const image = images(path);
    return (
      <div className="movie-item" key={index}>
        <img src={image} alt={`Movie ${index + 1}`} />
        <p>Movie {index + 1}</p>
      </div>
    );
  });

  return (
    <div className="container main-page-container">
      <section className="main">
        <div className="main-banner">
          <div className="main-banner-content">
            <h1>Rick and Morty</h1>
            <p>New Episodes Every Sunday</p>
            <button>More info</button>
          </div>
        </div>
      </section>
      <section className="movie-section">
        <h2>Top 10 in India Today</h2>
        <div className="movie-list">
          {movieItems}
        </div>
      </section>
      <footer className="footer">
        <p>© 2024 Cinema Cloud, Inc.</p>
      </footer>
    </div>
  );
};

export default MainPage;
