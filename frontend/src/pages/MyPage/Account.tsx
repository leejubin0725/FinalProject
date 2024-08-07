import React, { useState } from 'react';
import CinemaCloudButtonContainer from '../../../src/components/Mypage/CinemaCloudButtonContainer';
import styles from './css/Account.module.css';
import Header from '../../../src/components/CommonPage/Header';
import OverView from '../../../src/components/Mypage/OverView';
import Membership from '../../../src/components/Mypage/Membership';
import Security from '../../../src/components/Mypage/Security';
import ProfileManagement from '../../../src/components/Mypage/ProfileManagement';
import AccountDelete from '../../../src/components/Mypage/AccountDelete';

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