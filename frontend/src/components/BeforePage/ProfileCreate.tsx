import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../components/BeforePage/css/ProfileCreate.module.css';


interface Profile {
    profileNo: number;
    profileImg: string;
    profileName: string;
}

interface ProfileCreateProps {
    onProfileCreated: (newProfile: Profile) => void;
}

const ProfileCreate: React.FC<ProfileCreateProps> = ({ onProfileCreated }) => {
    const [newProfileName, setNewProfileName] = useState('');
    const [newProfileImage, setNewProfileImage] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setNewProfileImage(event.target.files[0]);
        }
    };

    const handleCreateProfile = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            setError('로그인이 필요합니다.');
            return;
        }

        if (!newProfileName || !newProfileImage) {
            setError('프로필 이름과 이미지를 모두 입력해주세요.');
            return;
        }

        const formData = new FormData();
        formData.append('profileName', newProfileName);
        formData.append('profileImg', newProfileImage);

        try {
            const response = await axios.post('http://localhost:8088/api/profiles/create', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data) {
                const createdProfile: Profile = response.data;
                onProfileCreated(createdProfile);
                setNewProfileName('');
                setNewProfileImage(null);
                setError(null);
            } else {
                setError('프로필 생성에 실패했습니다.');
            }
        } catch (error) {
            console.error('프로필 생성 중 오류 발생:', error);
            setError('프로필 생성 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className={styles.profileCreate}>
            <h2>새 프로필을 생성하세요</h2>
            <input
                type="text"
                placeholder="프로필 이름"
                value={newProfileName}
                onChange={(e) => setNewProfileName(e.target.value)}
                className={styles.input}
            />
            <input
                type="file"
                onChange={handleFileChange}
                className={styles.input}
            />
            <button onClick={handleCreateProfile} className={styles.createButton}>프로필 생성</button>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default ProfileCreate;