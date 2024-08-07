import React, { useState } from 'react';
import axios from 'axios';

const VideoUploadForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file as Blob);
        formData.append('title', title);
        formData.append('description', description);

        try {
            const response = await axios.post('http://localhost:8088/api/videos/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('업로드 성공:', response.data);
            // 업로드 성공 후 처리
        } catch (error) {
            console.error('업로드 실패:', error);
            // 업로드 실패 후 처리
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">제목</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">설명</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="file">동영상 파일</label>
                <input
                    type="file"
                    id="file"
                    accept="video/*"
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                    required
                />
            </div>
            <button type="submit">업로드</button>
        </form>
    );
};

export default VideoUploadForm;
