import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './css/MovieDetailPage.module.css';

export const CustomPrevArrow: React.FC<any> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.customArrow} ${styles.leftArrow}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <ArrowBackIosIcon sx={{ fontSize: 30 }} />
        </div>
    );
};

export const CustomNextArrow: React.FC<any> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.customArrow} ${styles.rightArrow}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <ArrowForwardIosIcon sx={{ fontSize: 30 }} />
        </div>
    );
};
