// src/pages/VideoUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import './VideoUpload.css';

const VideoUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);

    try {
      await axios.post('http://localhost:8088/api/videos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Video uploaded successfully!');
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div className="video-upload">
      <h1>Upload Video</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default VideoUpload;
