import React, { useRef } from 'react';
import styles from './VideoThumbnail.module.css';

interface VideoThumbnailProps {
    video: {
        id: number;
        title: string;
        description: string;
        url: string;
        thumbnailUrl: string; // 썸네일 URL 추가
    };
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ video }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className={styles.thumbnail}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={video.thumbnailUrl}
                alt={video.title}
                className={styles.thumbnailImage}
            />
            <video
                ref={videoRef}
                muted
                preload="auto"
                className={styles.video}
            >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoThumbnail;
