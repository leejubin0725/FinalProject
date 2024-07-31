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
}

const HomePage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  // 컴포넌트가 마운트될 때 API 호출
  useEffect(() => {
    axios.get('http://localhost:8088/api/videos')
      .then(response => {
        console.log('Fetched videos:', response.data); // 데이터 로그 출력
        setVideos(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the videos!', error);
      });
  }, []);

  return (
    <div className={styles.main}>
      <img className={styles.titleImageIcon} alt="Title" src="/titleimage@2x.png" />
      <Header />
      <div className={styles.heroContent}>
        {/* 여기에 Hero Content 내용 추가 */}
      </div>
      <section className={styles.content}>
        <div className={styles.bgFade} />
        <div className={styles.sectionTitleParent}>
          <div className={styles.sectionTitle}>
            <h2 className={styles.seeAgain}>영화 이어보기</h2>
          </div>
          <div className={styles.tileRowsParent}>
            <div className={styles.tileRows}>
              {videos.slice(0, 5).map(video => (
                <VideoThumbnail key={video.id} video={video} />
              ))}
            </div>
          </div>
        </div>
        <Frame />
        <div className={styles.sectionTitleGroup}>
          <div className={styles.sectionTitle1}>
            <h2 className={styles.seeAgain1}>시네마 클라우드 추천작</h2>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.tileParent}>
              {/* 여기에 추가적인 타일 내용 */}
            </div>
          </div>
        </div>
        <Frame />
        <div className={styles.sectionTitleContainer}>
          <div className={styles.sectionTitle2}>
            <h2 className={styles.seeAgain2}>밤늦게 즐기는 스릴러</h2>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.TileGroup}>
              {/* 여기에 추가적인 타일 내용 */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
