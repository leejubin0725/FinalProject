import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import '../App.css';

const MainPage = () => {
  const [file, setFile] = useState(null);
  const [videos, setVideos] = useState([]);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', 'Sample Video');
    formData.append('description', 'This is a sample video description.');

    try {
      await axios.post('http://localhost:8088/api/videos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchVideos();
    } catch (err) {
      console.error('File upload failed:', err);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:8088/api/videos');
      setVideos(response.data);
    } catch (err) {
      console.error('Failed to fetch videos:', err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <section className="main">
        <div className="main-overlay">
          <h1>Welcome to the Movie App</h1>
          <p>Explore and watch your favorite movies</p>
          <div>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload Video</button>
          </div>
          <div>
            {videos.map((video) => (
              <div key={video.id}>
                <h2>{video.title}</h2>
                <p>{video.description}</p>
                <video src={video.url} controls width="600" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>© 2024 Cinema Cloud, Inc.</p>
      </footer>
    </div>
  );
};

export default MainPage;
