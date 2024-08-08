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
    const [selectedMenu, setSelectedMenu] = useState<string>('create');
    const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

    useEffect(() => {
        const dummyProfiles: Profile[] = [
            { profileNo: 1, profileImg: '/profile.png', profileName: 'Profile 1' },
            { profileNo: 2, profileImg: '/profile2.png', profileName: 'Profile 2' },
            { profileNo: 3, profileImg: '/profile3.png', profileName: 'Profile 3' },
        ];
        setProfiles(dummyProfiles);
        if (dummyProfiles.length > 0) {
            setSelectedMenu('select');
        } else {
            setSelectedMenu('create');
        }
    }, []);

    const handleProfileSelect = (profile: Profile) => {
        setSelectedProfile(profile);
    };

    const handleProfileCreated = (newProfile: Profile) => {
        setProfiles([...profiles, newProfile]);
        setSelectedMenu('select');
    };

    return (
        <div className={styles.profilePage}>
            {selectedMenu === 'create' && <ProfileCreate onProfileCreated={handleProfileCreated} />}
            {selectedMenu === 'select' && <ProfileSelect profiles={profiles} onProfileSelect={handleProfileSelect} />}
        </div>
    );
};

export default ProfilePage;