import React, { useState } from 'react';
import Slider from 'react-slick';
import Header from '../../../src/components/CommonPage/Header';
import Frame from '../../../src/components/HomePage/HomeFrame';
import VideoThumbnail from '../../../src/components/HomePage/VideoThumbnail';
import SearchOverlay from '../../../src/components/HomePage/SearchOverlay';
import styles from './css/HomePage.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../../components/CommonPage/Footer';
import useMovies from '../../components/Movies/useMovies';
import { Movie } from '../../types/Movie';

const HomePage: React.FC = () => {
  const { movies, loading, error } = useMovies();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | undefined>(undefined);

  React.useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  React.useEffect(() => {
    filterMovies();
  }, [searchTerm, selectedGenre]);

  const filterMovies = () => {
    let filtered = movies;

    if (searchTerm) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedGenre) {
      filtered = filtered.filter(movie =>
        movie.tags.some(tag => tag.toLowerCase().includes(selectedGenre.toLowerCase()))
      );
    }

    setFilteredMovies(filtered);
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
  };

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

  const getSliderSettings = (movieCount: number) => ({
    dots: false,
    infinite: movieCount > 4,
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
          infinite: movieCount > 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: movieCount > 1
        }
      }
    ]
  });

  const renderSection = (title: string, movies: Movie[], keyPrefix: string) => (
    <div className={styles.section} key={keyPrefix}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <Slider {...getSliderSettings(movies.length)} className={styles.tileRows}>
        {movies.map((movie, index) => (
          <div className={styles.tile} key={`${keyPrefix}-${index}`}>
            <VideoThumbnail video={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.main}>
      <img className={styles.titleImageIcon} alt="Title" src="/titleimage@2x.png" />
      <Header onSearchClick={handleSearchClick} />
      <div className={styles.heroContent}>
        {/* 여기에 Hero Content 내용 추가 */}
      </div>
      <section className={styles.content}>
        {renderSection('영화 이어보기', filteredMovies, 'section-1')}
        <Frame />
        {renderSection('시네마 클라우드 추천작', filteredMovies, 'section-2')}
        <Frame />
        {renderSection('밤늦게 즐기는 스릴러', filteredMovies, 'section-3')}
      </section>
      {isSearchVisible && <SearchOverlay onClose={handleCloseSearch} onSearch={handleSearch} />}
      <Footer />
    </div>
  );
};

export default HomePage;
