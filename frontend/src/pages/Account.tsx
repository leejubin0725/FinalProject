import React, { useState } from 'react';
import CinemaCloudButtonContainer from '../components/CinemaCloudButtonContainer';
import styles from './Account.module.css';
import Header from '../components/Header';
import OverView from '../components/OverView';
import Membership from '../components/Membership';
import Security from '../components/Security';
import ProfileManagement from '../components/ProfileManagement';
import AccountDelete from '../components/AccountDelete';

const Account: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('overview');

  return (
    <div className={styles.account}>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.sidebar}>
          <CinemaCloudButtonContainer onMenuClick={setSelectedMenu} />
        </div>
        <div className={styles.content}>
          {selectedMenu === 'profile' && <ProfileManagement onMenuClick={setSelectedMenu} />}
          {selectedMenu === 'overview' && <OverView />}
          {selectedMenu === 'membership' && <Membership />}
          {selectedMenu === 'security' && <Security />}
          {selectedMenu === 'accountDelete' && <AccountDelete />}
        </div>
      </div>
    </div>
  );
};

export default Account;