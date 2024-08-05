import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Header from '../components/Header';
import Frame from '../components/HomeFrame';
import VideoThumbnail from '../components/VideoThumbnail';
import SearchOverlay from '../components/SearchOverlay';
import styles from './HomePage.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  tags: string[];
  genre: string;
}

const HomePage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | undefined>(undefined);

  useEffect(() => {
    axios.get('http://localhost:8088/api/movies')
      .then(response => {
        console.log('Fetched videos:', response.data);
        const formattedVideos = response.data.map((video: any) => ({
          ...video,
          tags: video.tags ? video.tags.split(',') : []
        }));
        setVideos(formattedVideos);
        setFilteredVideos(formattedVideos);
      })
      .catch(error => {
        console.error('There was an error fetching the videos!', error);
      });
  }, []);

  useEffect(() => {
    filterVideos();
  }, [searchTerm, selectedGenre, videos]);

  const filterVideos = () => {
    let filtered = videos;

    // Debugging
    console.log('Search Term:', searchTerm);
    console.log('Selected Genre:', selectedGenre);

    if (searchTerm) {
      filtered = filtered.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      console.log('Filtered by title or tags:', filtered);
    }

    if (selectedGenre) {
      filtered = filtered.filter(video =>
        video.tags.some(tag => tag.toLowerCase().includes(selectedGenre.toLowerCase()))
      );
      console.log('Filtered by genre:', filtered);
    }

    console.log('Final Filtered Videos:', filtered);
    setFilteredVideos(filtered);
  };

  const handleSearchClick = () => {
    setIsSearchVisible(true);
  };

  const handleCloseSearch = () => {
    setIsSearchVisible(false);
  };

  const handleSearch = (query: string, genre?: string) => {
    setSearchTerm(query);
    setSelectedGenre(genre);
    handleCloseSearch();
  const CustomPrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} ${styles.arrowButton} ${styles.left}`} onClick={onClick}>
        &lt;
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} ${styles.arrowButton} ${styles.right}`} onClick={onClick}>
        &gt;
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const renderSection = (title: string, videos: Video[], keyPrefix: string) => (
    <div className={styles.section} key={keyPrefix}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <Slider {...settings} className={styles.tileRows}>
        {videos.map((video, index) => (
          <div className={styles.tile} key={`${keyPrefix}-${index}`}>
            <VideoThumbnail video={video} />
          </div>
        ))}
      </Slider>
    </div>
  );

  return (
    <div className={styles.main}>
      <img className={styles.titleImageIcon} alt="Title" src="/titleimage@2x.png" />
      <Header onSearchClick={handleSearchClick} />
      <div className={styles.heroContent}>
        {/* 여기에 Hero Content 내용 추가 */}
      </div>
      <section className={styles.content}>
        {renderSection('영화 이어보기', filteredVideos, 'section-1')}
        <Frame />
        {renderSection('시네마 클라우드 추천작', filteredVideos, 'section-2')}
        <Frame />
        {renderSection('밤늦게 즐기는 스릴러', filteredVideos, 'section-3')}
      </section>
      {isSearchVisible && <SearchOverlay onClose={handleCloseSearch} onSearch={handleSearch} />}
    </div>
  );
};

export default HomePage;
