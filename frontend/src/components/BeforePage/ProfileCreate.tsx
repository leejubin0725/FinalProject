import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../components/BeforePage/css/ProfileCreate.module.css';
interface ProfileCreateProps {
    onProfileCreated: (profile: any) => void;
}

const ProfileCreate: React.FC<ProfileCreateProps> = ({ onProfileCreated }) => {
    const [newProfileName, setNewProfileName] = useState('');
    const [newProfileImage, setNewProfileImage] = useState<File | null>(null);
    const [newProfileImagePreview, setNewProfileImagePreview] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setNewProfileImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProfileImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCreateProfile = () => {
        const token = localStorage.getItem('authToken');
        if (token) {
            const userString = localStorage.getItem('user');
            if (userString) {
                const user = JSON.parse(userString);
                const userNo = user.userNo;

                if (userNo && newProfileName && newProfileImage) {
                    const formData = new FormData();
                    formData.append('userNo', userNo);
                    formData.append('profileName', newProfileName);
                    formData.append('profileImg', newProfileImage);

                    axios.post('/api/profiles/create', formData, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                        .then(response => {
                            onProfileCreated(response.data);
                            setNewProfileName('');
                            setNewProfileImage(null);
                            setNewProfileImagePreview(null);
                        })
                        .catch(error => {
                            console.error('프로필 생성 중 오류 발생:', error);
                        });
                } else {
                    console.error('필수 정보가 누락되었습니다');
                }
            } else {
                console.error('사용자 정보가 없습니다');
            }
        } else {
            console.error('토큰이 없습니다');
        }
    };

    return (
        <div className={styles.createProfile}>
            <h2>새 프로필을 생성하세요</h2>
            <input
                type="text"
                placeholder="Profile Name"
                value={newProfileName}
                onChange={(e) => setNewProfileName(e.target.value)}
                className={styles.input}
            />
            <input
                type="file"
                onChange={handleFileChange}
                className={styles.input}
            />
            {newProfileImagePreview && (
                <div className={styles.previewContainer}>
                    <img src={newProfileImagePreview} alt="Profile Preview" className={styles.profileImage} />
                </div>
            )}
            <button onClick={handleCreateProfile} className={styles.createButton}>프로필 생성</button>
        </div>
    );
};

export default ProfileCreate;