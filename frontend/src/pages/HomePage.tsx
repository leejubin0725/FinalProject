import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Frame from '../components/HomeFrame';
import VideoThumbnail from '../components/VideoThumbnail';
import styles from './HomePage.module.css';

// 비디오 타입 정의
interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string; // 썸네일 URL 추가
}

const HomePage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8088/api/movies')
      .then(response => {
        console.log('Fetched videos:', response.data); // 데이터 로그 출력
        setVideos(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the videos!', error);
      });
  }, []);

  const renderSection = (title: string, videos: Video[], keyPrefix: string) => (
    <div className={styles.section} key={keyPrefix}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.tileRows}>
        {videos.slice(0, 5).map((video, index) => (
          <VideoThumbnail key={`${keyPrefix}-${index}`} video={video} />
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.main}>
      <img className={styles.titleImageIcon} alt="Title" src="/titleimage@2x.png" />
      <Header />
      <div className={styles.heroContent}>
        {/* 여기에 Hero Content 내용 추가 */}
      </div>
      <section className={styles.content}>
        {renderSection('영화 이어보기', videos, 'section-1')}
        <Frame />
        {renderSection('시네마 클라우드 추천작', videos, 'section-2')}
        <Frame />
        {renderSection('밤늦게 즐기는 스릴러', videos, 'section-3')}
      </section>
    </div>
  );
};

export default HomePage;
