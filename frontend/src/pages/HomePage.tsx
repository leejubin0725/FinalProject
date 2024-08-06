import React from 'react';
import Slider from 'react-slick';
import Header from '../components/Header';
import Frame from '../components/HomeFrame';
import VideoThumbnail from '../components/VideoThumbnail';
import SearchOverlay from '../components/SearchOverlay';
import styles from './HomePage.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import Footer from '../components/Footer';

interface Movie {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  tags: string[];
  genre: string;
}

const HomePage: React.FC = () => {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = React.useState<Movie[]>([]);
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedGenre, setSelectedGenre] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    axios.get('http://localhost:8088/api/movies')
      .then(response => {
        console.log('Fetched movies:', response.data);
        const formattedMovies = response.data.map((movie: any) => ({
          ...movie,
          id: movie.id,
          tags: movie.tags ? movie.tags.split(',') : []
        }));
        setMovies(formattedMovies);
        setFilteredMovies(formattedMovies);
      })
      .catch(error => {
        console.error('There was an error fetching the movies!', error);
      });
  }, []);

  React.useEffect(() => {
    filterMovies();
  }, [searchTerm, selectedGenre, movies]);

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
