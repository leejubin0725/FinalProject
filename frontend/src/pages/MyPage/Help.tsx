import React, { useEffect, useState } from 'react';
import HelpButtonContainer from '../../components/Mypage/HelpButtonContainer';
import styles from './css/Account.module.css';
import Header from '../../../src/components/CommonPage/Header';
import Faq from '../../components/Mypage/Faq';
import Question from '../../components/Mypage/Question';
import axios from 'axios';

interface FaqType {
  id: number;
  question: string;
  answer: string;
  insertDate: string; // LocalDate를 문자열로 처리
}

const HelpPage: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('faq');

  const [faqList, setFaqList] = useState<FaqType[]>([]);

  useEffect(() => {
    const getFAQ = async () => {
        try {
            const response = await axios.get<FaqType[]>('http://localhost:8088/dashboard/getFaq');
            // 변환된 날짜 문자열로 처리
            const updatedData = response.data.map(item => ({
                ...item,
                insertDate: item.insertDate.toString() // 날짜를 문자열로 변환
            }));
            setFaqList(updatedData);
        } catch (error) {
            console.error("Failed to get FAQ", error);
        }
    };
    getFAQ();
}, []);

  return (
    <div className={styles.account}>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.sidebar}>
          <HelpButtonContainer onMenuClick={setSelectedMenu} />
        </div>
        <div className={styles.content}>
          {selectedMenu === 'faq' && <Faq faqList={faqList} />}
          {selectedMenu === 'question' && <Question />}

        </div>

      </div>
    </div >
  );
};

export default HelpPage;