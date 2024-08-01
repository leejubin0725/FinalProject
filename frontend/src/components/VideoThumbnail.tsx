import React, { useRef } from 'react';
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
                src={`/preview/${video.id}.jpg`}
                alt={video.title}
            />
            <video
                ref={videoRef}
                muted
                preload="auto"
            >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoThumbnail;
