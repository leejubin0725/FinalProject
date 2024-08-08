
import React, { useState } from 'react';
import styles from './css/HelpPage.module.css';

interface FaqProps {
    faqList: {
        id: number;
        question: string;
        answer: string;
        insertDate: string;
    }[];
}

const Faq: React.FC<FaqProps> = ({ faqList }) => {
    const [openFaqId, setOpenFaqId] = useState<number | null>(null);

    const toggleAnswer = (id: number) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    return (
        <div className={styles.myPage}>
            <div className={styles.content}>
                <h1>FAQ</h1>
                <h3>자주하는 질문</h3>
            </div>
            <div className={styles.quickLinks}>
                <ul>
                    {faqList.map(faq => (
                        <li key={faq.id} onClick={() => toggleAnswer(faq.id)} style={{ cursor: 'pointer' }}>
                            <h4>{faq.question}</h4>
                            <div className={`${styles.answer} ${openFaqId === faq.id ? styles.open : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default Faq;

