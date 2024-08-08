import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './css/ProfileSelectionPage.module.css';

interface Profile {
    profileNo: number;
    image: string;
    name: string;
}

const ProfileSelectionPage: React.FC = () => {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
    const [newProfileName, setNewProfileName] = useState('');
    const [newProfileImage, setNewProfileImage] = useState<File | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            axios.get('/api/users/me', { headers: { 'Authorization': `Bearer ${token}` } })
                .then(response => {
                    const userNo = response.data.userNo;
                    axios.get(`/api/profiles/user/${userNo}`)
                        .then(response => {
                            setProfiles(response.data);
                        })
                        .catch(error => {
                            console.error('프로필 조회 중 오류 발생:', error);
                        });
                })
                .catch(error => {
                    console.error('사용자 정보 조회 중 오류 발생:', error);
                });
        } else {
            console.error('토큰이 없습니다');
        }
    }, []);

    const handleProfileSelect = (profile: Profile) => {
        setSelectedProfile(profile);
    };

    const handleCreateProfile = () => {
        if (profiles.length >= 4) {
            alert('프로필은 4개까지만 만들 수 있습니다.');
            return;
        }

        const token = localStorage.getItem('authToken');
        if (token) {
            const userString = localStorage.getItem('user');
            if (userString) {
                const user = JSON.parse(userString);
                const userNo = user.userNo;

                if (userNo && newProfileName && newProfileImage) {
                    const formData = new FormData();
                    formData.append('userNo', userNo);
                    formData.append('name', newProfileName);
                    formData.append('image', newProfileImage);

                    axios.post('/api/profiles/create', formData, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                        .then(response => {
                            setProfiles([...profiles, response.data]);
                            setNewProfileName('');
                            setNewProfileImage(null);
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

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setNewProfileImage(event.target.files[0]);
        }
    };

    return (
        <div className={styles.profileSelectionPage}>
            <h1>환영합니다!</h1>
            <div className={styles.profiles}>
                {profiles.map(profile => (
                    <div key={profile.profileNo} className={styles.profile} onClick={() => handleProfileSelect(profile)}>
                        <img src={`/profile-images/${profile.image}`} alt={profile.name} className={styles.profileImage} />
                        <h2 className={styles.profileName}>{profile.name}</h2>
                    </div>
                ))}
            </div>
            {selectedProfile && (
                <div className={styles.selectedProfile}>
                    <h2>프로필을 골라주세요:</h2>
                    <img src={`/profile-images/${selectedProfile.image}`} alt={selectedProfile.name} className={styles.profileImage} />
                    <h2 className={styles.profileName}>{selectedProfile.name}</h2>
                </div>
            )}
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
                <button onClick={handleCreateProfile} className={styles.createButton} disabled={profiles.length >= 4}>프로필 생성</button>
                {profiles.length >= 4 && <p>프로필은 4개까지만 만들 수 있습니다.</p>}
            </div>
        </div>
    );
};

export default ProfileSelectionPage;