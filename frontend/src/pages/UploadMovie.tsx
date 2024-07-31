import React, { useState } from 'react';
import { useDropzone, DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';
import './UploadMovie.css';

// 기본 장르 목록
const defaultGenres = [
  '드라마', '로맨스', '코미디', '스릴러', '미스터리', '호러', '액션', 'SF', '판타지', '다큐멘터리',
  '어드벤처', '우화', '다문화', '가족', '음악', '해적', '심리적', '비극적', '극복', '서스펜스',
  '정서적', '사랑', '운명', '실화', '철학적', '형이상학적', '패러디', '반전', '서정적', '상상력',
  '유머', '혼란', '노스탤지어', '실험적', '미니멀리즘', '예술적', '하이테크', '가상 현실', '미래적',
  '고전', '전쟁', '역사적', '대체 역사', '미래', '도시', '자연', '실험실', '우주', '도시 전쟁',
  '기술', '사회적', '심리전', '성장', '관계', '극단적', '아동'
];

const UploadMovie: React.FC = () => {
  const [mediaFile, setMediaFile] = useState<string | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<string | null>(null);
  const [genreTags, setGenreTags] = useState<string[]>([]); // Currently added genre tags
  const [newGenre, setNewGenre] = useState<string>(''); // Input value for new genre
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set()); // Selected genres
  const [filteredGenres, setFilteredGenres] = useState<string[]>(defaultGenres); // Filtered genre list
  
  const [title, setTitle] = useState<string>('');
  const [director, setDirector] = useState<string>('');
  const [actors, setActors] = useState<string>('');
  const [releaseYear, setReleaseYear] = useState<string>('');
  const [rating, setRating] = useState<string>('');

  const [displayTitle, setDisplayTitle] = useState<string>('');
  const [displayDirector, setDisplayDirector] = useState<string>('');
  const [displayActors, setDisplayActors] = useState<string>('');
  const [displayReleaseYear, setDisplayReleaseYear] = useState<string>('');
  const [displayRating, setDisplayRating] = useState<string>('');

  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(true);
  const [isEditingDirector, setIsEditingDirector] = useState<boolean>(true);
  const [isEditingActors, setIsEditingActors] = useState<boolean>(true);
  const [isEditingReleaseYear, setIsEditingReleaseYear] = useState<boolean>(true);
  const [isEditingRating, setIsEditingRating] = useState<boolean>(true);

  const onDropMedia = (acceptedFiles: File[]) => {
    setMediaFile(URL.createObjectURL(acceptedFiles[0]));
  };

  const onDropThumbnail = (acceptedFiles: File[]) => {
    setThumbnailFile(URL.createObjectURL(acceptedFiles[0]));
  };

  const { getRootProps: getRootPropsMedia, getInputProps: getInputPropsMedia } = useDropzone({ onDrop: onDropMedia });
  const { getRootProps: getRootPropsThumbnail, getInputProps: getInputPropsThumbnail } = useDropzone({ onDrop: onDropThumbnail });

  // 장르 필터링
  const handleGenreInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setNewGenre(input);
    setFilteredGenres(defaultGenres.filter(genre => genre.includes(input)));
  };

  const handleSelectGenre = (genre: string) => {
    setSelectedGenres(prev => {
      const newSelectedGenres = new Set(prev);
      if (newSelectedGenres.has(genre)) {
        newSelectedGenres.delete(genre); // Deselect genre
        setGenreTags(prevTags => prevTags.filter(tag => tag !== genre)); // Remove genre from list
      } else {
        newSelectedGenres.add(genre); // Select genre
        if (!genreTags.includes(genre)) {
          setGenreTags(prevTags => [...prevTags, genre]); // Add genre to list if not already present
        }
      }
      return newSelectedGenres;
    });
    setNewGenre(''); // Clear input field after selection
    setFilteredGenres(defaultGenres); // Reset filtered genres
  };

  const handleAddTitle = () => {
    if (title.trim()) {
      setDisplayTitle(title.trim());
      setIsEditingTitle(false);
      setTitle('');
    } else {
      setIsEditingTitle(true);
    }
  };

  const handleAddDirector = () => {
    if (director.trim()) {
      setDisplayDirector(director.trim());
      setIsEditingDirector(false);
      setDirector('');
    } else {
      setIsEditingDirector(true);
    }
  };

  const handleAddActors = () => {
    if (actors.trim()) {
      setDisplayActors(actors.trim());
      setIsEditingActors(false);
      setActors('');
    } else {
      setIsEditingActors(true);
    }
  };

  const handleAddReleaseYear = () => {
    if (releaseYear.trim()) {
      setDisplayReleaseYear(releaseYear.trim());
      setIsEditingReleaseYear(false);
      setReleaseYear('');
    } else {
      setIsEditingReleaseYear(true);
    }
  };

  const handleAddRating = () => {
    if (rating.trim()) {
      setDisplayRating(rating.trim());
      setIsEditingRating(false);
      setRating('');
    } else {
      setIsEditingRating(true);
    }
  };

  const handleRemoveTitle = () => {
    setDisplayTitle('');
    setIsEditingTitle(true);
  };

  const handleRemoveDirector = () => {
    setDisplayDirector('');
    setIsEditingDirector(true);
  };

  const handleRemoveActors = () => {
    setDisplayActors('');
    setIsEditingActors(true);
  };

  const handleRemoveReleaseYear = () => {
    setDisplayReleaseYear('');
    setIsEditingReleaseYear(true);
  };

  const handleRemoveRating = () => {
    setDisplayRating('');
    setIsEditingRating(true);
  };

  return (
    <div className="container">
      <div className="add-media">
        <h3>미디어 추가</h3>
        <div className="dropzone" {...(getRootPropsMedia() as DropzoneRootProps)}>
          <input {...(getInputPropsMedia() as DropzoneInputProps)} />
          <p>파일 업로드</p>
        </div>
        <div className="input-group">
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목 입력"
          />
          {isEditingTitle ? (
            <button onClick={handleAddTitle}>추가</button>
          ) : (
            <button onClick={handleRemoveTitle}>삭제</button>
          )}
        </div>
        <div className="input-group">
          <label>감독</label>
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            placeholder="감독 입력"
          />
          {isEditingDirector ? (
            <button onClick={handleAddDirector}>추가</button>
          ) : (
            <button onClick={handleRemoveDirector}>삭제</button>
          )}
        </div>
        <div className="input-group">
          <label>배우</label>
          <input
            type="text"
            value={actors}
            onChange={(e) => setActors(e.target.value)}
            placeholder="배우 입력"
          />
          {isEditingActors ? (
            <button onClick={handleAddActors}>추가</button>
          ) : (
            <button onClick={handleRemoveActors}>삭제</button>
          )}
        </div>
        <div className="input-group">
          <label>개봉 연도</label>
          <input
            type="text"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            placeholder="개봉 연도 입력"
          />
          {isEditingReleaseYear ? (
            <button onClick={handleAddReleaseYear}>추가</button>
          ) : (
            <button onClick={handleRemoveReleaseYear}>삭제</button>
          )}
        </div>
        <div className="input-group">
          <label>별점</label>
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="별점 입력"
          />
          {isEditingRating ? (
            <button onClick={handleAddRating}>추가</button>
          ) : (
            <button onClick={handleRemoveRating}>삭제</button>
          )}
        </div>
        <div className="input-group">
  <label>장르</label>
  <div className="genre-input-container">
    <input
      type="text"
      value={newGenre}
      onChange={handleGenreInputChange}
      placeholder="장르 입력"
      className="genre-input"
    />
    <button
      onClick={() => {
        if (newGenre) {
          handleSelectGenre(newGenre);
        }
      }}
      className="genre-add-button"
    >
      추가
    </button>
    {newGenre && (
      <div className="genre-dropdown">
        {filteredGenres.map(genre => (
          <div key={genre} className="genre-option" onClick={() => handleSelectGenre(genre)}>
            {genre}
          </div>
        ))}
      </div>
    )}
  </div>
</div>
      </div>

      <div className="media-preview">
        {mediaFile && <video src={mediaFile} controls className="preview-video" />}
        {genreTags.length > 0 && (
          <div className="genre-tags-container">
            {genreTags.map(genre => (
              <div key={genre} className="genre-tag">
                <input
                  type="checkbox"
                  checked={selectedGenres.has(genre)}
                  onChange={() => handleSelectGenre(genre)}
                />
                {genre}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="add-thumbnail">
        <h3>썸네일 추가</h3>
        <div className="dropzone" {...(getRootPropsThumbnail() as DropzoneRootProps)}>
          <input {...(getInputPropsThumbnail() as DropzoneInputProps)} />
          <p>파일 업로드</p>
          <div className="preview-container">
            {thumbnailFile && <img src={thumbnailFile} alt="Thumbnail preview" className="preview" />}
          </div>
        </div>
        <div className="preview-details">
          <p>제목: {displayTitle}</p>
          <p>감독: {displayDirector}</p>
          <p>배우: {displayActors}</p>
          <p>개봉 연도: {displayReleaseYear}</p>
          <p>별점: {displayRating}</p>
          <p>장르: {Array.from(selectedGenres).join(', ')}</p>
        </div>
        <button className="upload-button">내용 업로드</button>
      </div>
    </div>
  );
};

export default UploadMovie;

