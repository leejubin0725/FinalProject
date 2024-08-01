import React, { useRef, useEffect } from 'react';
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
    const thumbnailRef = useRef<HTMLImageElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current && thumbnailRef.current) {
            thumbnailRef.current.style.display = 'none';
            videoRef.current.style.display = 'block';
            videoRef.current.play().catch(error => {
                console.error('Video play was interrupted:', error);
            });
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current && thumbnailRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            videoRef.current.style.display = 'none';
            thumbnailRef.current.style.display = 'block';
        }
    };

    // 비디오가 로드될 때 비디오의 상태를 로깅하여 문제를 파악
    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const handleLoadedData = () => {
                console.log('Video loaded data:', videoElement.readyState);
            };
            const handleError = (event) => {
                console.error('Error loading video:', event);
            };

            videoElement.addEventListener('loadeddata', handleLoadedData);
            videoElement.addEventListener('error', handleError);

            return () => {
                videoElement.removeEventListener('loadeddata', handleLoadedData);
                videoElement.removeEventListener('error', handleError);
            };
        }
    }, []);

    return (
        <div
            className={styles.thumbnail}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                ref={thumbnailRef}
                src={video.thumbnailUrl}
                alt={video.title}
                className={styles.thumbnailImage}
            />
            <video
                ref={videoRef}
                muted
                preload="auto"
                className={styles.video}
                style={{ display: 'none' }} // 처음에는 비디오를 숨김
            >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoThumbnail;
