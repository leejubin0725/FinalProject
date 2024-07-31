import React, { useState } from 'react';
import styles from './VideoThumbnail.module.css';

interface VideoThumbnailProps {
    video: {
        id: number;
        title: string;
        description: string;
        url: string;
    };
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ video }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.thumbnail}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered ? (
                <img src={`/preview/${video.id}.jpg`} alt={video.title} />
            ) : (
                <video autoPlay loop muted preload="auto">
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
};

export default VideoThumbnail;
