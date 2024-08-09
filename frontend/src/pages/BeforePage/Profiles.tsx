import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCreate from '../../components/BeforePage/ProfileCreate';
import ProfileSelect from '../../components/BeforePage/ProfileSelect';
import styles from './css/Profiles.module.css';

interface Profile {
    profileNo: number;
    profileImg: string;
    profileName: string;
}

const ProfilePage: React.FC = () => {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [selectedMenu, setSelectedMenu] = useState<string>('select');
    const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            axios.get('http://localhost:8088/api/users/me', { headers: { 'Authorization': `Bearer ${token}` } })
                .then(response => {
                    const userNo = response.data.userNo;
                    axios.get(`http://localhost:8088/api/profiles/user/${userNo}`, { headers: { 'Authorization': `Bearer ${token}` } })
                        .then(response => {
                            if (Array.isArray(response.data)) {
                                setProfiles(response.data);
                                if (response.data.length > 0) {
                                    setSelectedMenu('select');
                                }
                            } else {
                                console.error('프로필 데이터가 배열이 아닙니다:', response.data);
                            }
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
        console.log('Selected profile:', profile);
    };

    const handleProfileCreated = (newProfile: Profile) => {
        setProfiles([...profiles, newProfile]);
        setSelectedMenu('select');
    };

    const handleAddProfile = () => {
        setSelectedMenu('create');
    };

    const handleCancelCreate = () => {
        setSelectedMenu('select');
    };

    return (
        <div className={styles.profilePage}>
            {selectedMenu === 'create' && <ProfileCreate onProfileCreated={handleProfileCreated} onCancel={handleCancelCreate} />}
            {selectedMenu === 'select' && <ProfileSelect profiles={profiles} onProfileSelect={handleProfileSelect} onAddProfile={handleAddProfile} />}
        </div>
    );
};

export default ProfilePage;