import React from 'react';
import styles from '../../components/BeforePage/css/ProfileSelect.module.css';

interface Profile {
    profileNo: number;
    profileImg: string;
    profileName: string;
}

interface ProfileSelectProps {
    profiles: Profile[];
    onProfileSelect: (profile: Profile) => void;
    onAddProfile: () => void;
}

const ProfileSelect: React.FC<ProfileSelectProps> = ({ profiles, onProfileSelect, onAddProfile }) => {
    return (
        <div className={styles.profileSelectionPage}>
            <h1>환영합니다!</h1>
            <div className={styles.profiles}>
                {profiles.map(profile => (
                    <div key={profile.profileNo} className={styles.profile} onClick={() => onProfileSelect(profile)}>
                        <img src={profile.profileImg} alt={profile.profileName} className={styles.profileImage} />
                        <h2 className={styles.profileName}>{profile.profileName}</h2>
                    </div>
                ))}
                {profiles.length < 4 && (
                    <div className={styles.addProfile} onClick={onAddProfile}>
                        <h2>+ 추가</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileSelect;