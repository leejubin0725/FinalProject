import React, { useState } from 'react';
import styles from './SearchOverlay.module.css';

const buttonGenres = [
  '드라마', '로맨스', '코미디', '스릴러', '액션', 'SF', '판타지', '미스터리', '호러', '다큐멘터리'
];

const allGenres = [
  ...buttonGenres, // 장르 버튼 목록에 있는 장르
  '어드벤처', '우화', '다문화', '가족', '음악', '해적', '심리적', '비극적', '극복', '서스펜스',
  '정서적', '사랑', '운명', '실화', '철학적', '형이상학적', '패러디', '반전', '서정적', '상상력',
  '유머', '혼란', '노스탤지어', '실험적', '미니멀리즘', '예술적', '하이테크', '가상 현실', '미래적',
  '고전', '전쟁', '역사적', '대체 역사', '미래', '도시', '자연', '실험실', '우주', '도시 전쟁',
  '기술', '사회적', '심리전', '성장', '관계', '극단적', '아동'
];

interface SearchOverlayProps {
  onClose: () => void;
  onSearch: (query: string, genre?: string) => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ onClose, onSearch }) => {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState<string | undefined>(undefined);
  const [filteredGenres, setFilteredGenres] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filtered = allGenres.filter(g =>
        g.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredGenres(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredGenres([]);
      setShowSuggestions(false);
    }
  };

  const handleGenreSelect = (selectedGenre: string) => {
    setGenre(selectedGenre);
    setQuery(selectedGenre);
    setFilteredGenres([]);
    setShowSuggestions(false);
    onSearch(selectedGenre, selectedGenre);
  };

  const handleSearch = () => {
    onSearch(query, genre);
  };

  const handleGenreButtonClick = (selectedGenre: string) => {
    setQuery(selectedGenre);
    setGenre(selectedGenre);
    onSearch(selectedGenre, selectedGenre);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.searchContainer}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.searchInputContainer}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Search or select genre..."
              value={query}
              onChange={handleQueryChange}
              onFocus={() => setShowSuggestions(true)}
            />
            <button className={styles.searchButton} onClick={handleSearch}>Search</button>
          </div>
          {showSuggestions && filteredGenres.length > 0 && (
            <div className={styles.suggestions}>
              {filteredGenres.map(g => (
                <div
                  key={g}
                  className={styles.suggestionItem}
                  onClick={() => handleGenreSelect(g)}
                >
                  {g}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.genreButtons}>
          {buttonGenres.map(g => (
            <button
              key={g}
              className={styles.genreButton}
              onClick={() => handleGenreButtonClick(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
