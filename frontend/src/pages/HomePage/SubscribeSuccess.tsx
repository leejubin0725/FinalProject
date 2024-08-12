import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './css/SubscribeSuccess.module.css';

const SubscribeSuccess: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (!token) {
            console.error('JWT 토큰이 없습니다. 로그인 페이지로 이동합니다.');
            navigate('/login'); // 토큰이 없으면 로그인 페이지로 리디렉션
            return;
        }

        // 구독 처리
        axios.post('http://localhost:8088/api/users/subscribe', null, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            params: {
                months: 1,
            }
        })
            .then(response => {
                console.log('구독이 성공적으로 처리되었습니다:', response.data);

                // 5초 후에 프로필 페이지로 리디렉션
                setTimeout(() => {
                    navigate('/profiles');
                }, 5000);
            })
            .catch(error => {
                console.error('구독 처리 중 오류 발생:', error);
            });
    }, [navigate]);

    return (
        <div className={styles.subscribeSuccess}>
            <h1>구독이 성공적으로 완료되었습니다!</h1>
            <p>곧 프로필 페이지로 이동합니다...</p>
        </div>
    );
};

export default SubscribeSuccess;
