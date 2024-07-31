import React from 'react';
import VideoUploadForm from '../components/VideoUploadForm';

const UploadPage: React.FC = () => {
    return (
        <div>
            <h1>동영상 업로드</h1>
            <VideoUploadForm />
        </div>
    );
};

export default UploadPage;
