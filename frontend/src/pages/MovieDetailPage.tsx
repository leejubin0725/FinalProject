import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './MovieDetailPage.module.css';

interface Movie {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  tags: string[];
  genre: string;
}

const MovieDetailPage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (movieId) {
      const movieIdNumber = parseInt(movieId, 10);
      if (!isNaN(movieIdNumber)) {
        axios.get(`http://localhost:8088/api/movies/${movieIdNumber}`)
          .then(response => {
            console.log('Fetched movie:', response.data);
            setMovie(response.data);
            setLoading(false);
          })
          .catch(error => {
            console.error('There was an error fetching the movie!', error);
            setError(error.response?.data?.message || 'Error loading movie details');
            setLoading(false);
          });
      } else {
        console.error('Invalid movieIdNumber:', movieIdNumber);
        setError('Movie ID is not a valid number');
        setLoading(false);
      }
    } else {
      console.error('Movie ID is missing');
      setError('Movie ID is missing');
      setLoading(false);
    }
  }, [movieId]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!movie) {
    return <div className={styles.error}>Movie not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{movie.title}</h1>
      <video controls className={styles.video}>
        <source src={movie.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className={styles.description}>{movie.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetailPage;
