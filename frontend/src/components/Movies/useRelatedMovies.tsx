import { useState, useEffect } from 'react';
import axios from 'axios';
import { Movie } from '../../types/Movie';

const useRelatedMovies = (tag: string) => {
    const [relatedMovies, setRelatedMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (tag) {
            axios.get(`http://localhost:8088/api/movies/tag?tag=${tag}`)
                .then(response => {
                    setRelatedMovies(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError('관련 영화를 가져오는 중 오류가 발생했습니다.');
                    setLoading(false);
                });
        }
    }, [tag]);

    return { relatedMovies, loading, error };
};

export default useRelatedMovies;
