import { useState, useEffect } from 'react';
import axios from 'axios';
import { Movie } from '../../types/Movie';

const useMoviesByCast = (cast: string) => {
    const [moviesByCast, setMoviesByCast] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (cast) {
            axios.get(`http://localhost:8088/api/movies/cast?cast=${encodeURIComponent(cast)}`)
                .then(response => {
                    setMoviesByCast(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError('관련 영화를 가져오는 중 오류가 발생했습니다.');
                    setLoading(false);
                });
        }
    }, [cast]);

    return { moviesByCast, loading, error };
};

export default useMoviesByCast;
