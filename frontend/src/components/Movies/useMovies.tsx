import { useState, useEffect } from 'react';
import axios from 'axios';
import { Movie } from '../../types/Movie';

const useMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('http://localhost:8088/api/movies')
            .then(response => {
                const formattedMovies = response.data.map((movie: any) => ({
                    ...movie,
                    id: movie.id,
                    tags: movie.tags ? movie.tags.split(',') : []
                }));
                setMovies(formattedMovies);
                setLoading(false);
            })
            .catch(error => {
                setError('영화 데이터를 가져오는 중 오류가 발생했습니다.');
                setLoading(false);
            });
    }, []);

    return { movies, loading, error };
};

export default useMovies;
