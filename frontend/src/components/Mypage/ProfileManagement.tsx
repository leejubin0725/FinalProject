import React, { useState } from 'react';
import axios from 'axios';
import styles from './css/MyPage.module.css';

interface ProfileManagementProps {
    onMenuClick: (menu: string) => void;
    profile: {
        profileImg: string;
        profileName: string;
        profileNo: number;
    };
    onProfileUpdate: (updatedProfile: { profileImg: string; profileName: string }) => void;
}

const ProfileManagement: React.FC<ProfileManagementProps> = ({ onMenuClick, profile, onProfileUpdate }) => {
    const [newProfileName, setNewProfileName] = useState<string>(profile.profileName);

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const formData = new FormData();
            formData.append('profileImg', event.target.files[0]);

            try {
                const response = await axios.post('/api/profile/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                if (response.data.success) {
                    onProfileUpdate({ profileImg: response.data.profileImg, profileName: profile.profileName });
                } else {
                    console.error('Failed to upload image:', response.data.message);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    const handleNameChange = async () => {
        try {
            const response = await axios.put('/api/profile/update-name', {
                profileNo: profile.profileNo,
                profileName: newProfileName,
            });

            if (response.data.success) {
                onProfileUpdate({ profileImg: profile.profileImg, profileName: newProfileName });
            } else {
                console.error('Failed to update name:', response.data.message);
            }
        } catch (error) {
            console.error('Error updating name:', error);
        }
    };

    return (
        <div className={styles.profileManagementPage}>
            <div className={styles.content}>
                <h1>프로필 관리</h1>
                <h3>프로필 상세 정보</h3>
                <div className={styles.profileSection}>
                    <img src={profile.profileImg || "/profile.png"} alt="Profile" className={styles.profileImage} />
                    <div className='profile'>
                        <h2>{profile.profileName} 님</h2>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className={styles.link}
                        />
                        <div>
                            <input
                                type="text"
                                value={newProfileName}
                                onChange={(e) => setNewProfileName(e.target.value)}
                                className={styles.input}
                            />
                            <button onClick={handleNameChange} className={styles.link}>닉네임 변경</button>
                        </div>
                        <a href="/password-change" className={styles.link}>비밀번호 변경</a>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <h3>프로필 설정</h3>
                <div className={styles.quickLinks}>
                    <ul>
                        <li><a href="/watch-settings">시청 제한 <span className={styles.arrow}>&gt;</span></a></li>
                        <li><a href="/watch-history">시청 기록 <span className={styles.arrow}>&gt;</span></a></li>
                        <li><a href="/payment-info">결제정보 <span className={styles.arrow}>&gt;</span></a></li>
                        <li><a href="/privacy-policy">개인정보 및 데이터 설정 <span className={styles.arrow}>&gt;</span></a></li>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onMenuClick('accountDelete');
                                }}
                                className={styles.link}
                            >
                                회원 탈퇴 <span className={styles.arrow}>&gt;</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileManagement;