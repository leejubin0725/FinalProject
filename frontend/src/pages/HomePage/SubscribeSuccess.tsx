import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './css/SubscribeSuccess.module.css';

const SubscribeSuccess: React.FC = () => {
    const navigate = useNavigate();
    const [hasRequested, setHasRequested] = useState(false);

    useEffect(() => {
        // 이미 요청이 실행되었으면 더 이상 실행하지 않음
        if (hasRequested) return;

        setHasRequested(true); // 첫 실행 시 true로 설정하여 이후 중복 실행 방지

        console.log("useEffect 실행");

        const token = localStorage.getItem('authToken');
        console.log("토큰:", token);

        if (!token) {
            console.error('JWT 토큰이 없습니다. 로그인 페이지로 이동합니다.');
            navigate('/login');
            return;
        }

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

                setTimeout(() => {
                    navigate('/profiles');
                }, 5000);
            })
            .catch(error => {
                console.error('구독 처리 중 오류 발생:', error);
            });
    }, [hasRequested, navigate]); // 의존성 배열에 hasRequested 추가

    return (
        <div className={styles.subscribeSuccess}>
            <h1>구독이 성공적으로 완료되었습니다!</h1>
            <p>곧 프로필 페이지로 이동합니다...</p>
        </div>
    );
};

export default SubscribeSuccess;
