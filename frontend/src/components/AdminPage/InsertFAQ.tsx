import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from '../../pages/AdminPage/css/DashboardPage.module.css';

const InsertFAQ: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const navigate = useNavigate();
    const [question, setQuestion] = useState<string>(location.state?.question || '');
    const [answer, setAnswer] = useState<string>(location.state?.answer || '');

    useEffect(() => {
        if (id && !location.state) {
            // 만약 ID가 있는데 state가 없는 경우 서버에서 데이터 가져오기
            // (이 경우는 거의 없을 것으로 가정, 서버에서 직접 받아오는 상황을 고려)
        }
    }, [id, location.state]);

    const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuestion(e.target.value);
    };

    const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAnswer(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(id);
            console.log(question);
            console.log(answer);
            // POST 요청을 사용하며, id가 있으면 수정, 없으면 새로 추가
            const response = await axios.post('http://localhost:8088/dashboard/faq', {
                id, // id가 있을 경우 전송, 없으면 undefined
                question,
                answer
            });

            if (id) {
                console.log('FAQ 수정이 성공적으로 완료되었습니다:', response.data);
            } else {
                console.log('FAQ 등록이 성공적으로 완료되었습니다:', response.data);
            }

            navigate('/dashboard/FAQManage');
        } catch (error) {
            console.error('FAQ 등록/수정 중 오류가 발생했습니다:', error);
        }
    };

    const handleBackToList = () => {
        navigate('/dashboard/FAQManage');
    };

    return (
        <div className={styles.FAQContainer}>
            <h1 className={styles.FAQTitle}>FAQ {id ? '수정하기' : '작성하기'}</h1>
            <form className={styles.FAQForm} onSubmit={handleSubmit}>
                <div className={styles.FAQFormGroup}>
                    <label className={styles.FAQFormLabel}>질문</label>
                    <textarea
                        className={styles.FAQFormTextarea}
                        value={question}
                        onChange={handleQuestionChange}
                    ></textarea>
                </div>
                <div className={styles.FAQFormGroup}>
                    <label className={styles.FAQFormLabel}>답변</label>
                    <textarea
                        className={styles.FAQFormTextarea}
                        value={answer}
                        onChange={handleAnswerChange}
                    ></textarea>
                </div>
                <div className={styles.FAQButtonContainer}>
                    <button className={styles.FAQSubmitButton} type="submit">
                        {id ? '수정하기' : '등록하기'}
                    </button>
                    <button
                        className={styles.FAQSubmitButton}
                        type="button"
                        onClick={handleBackToList}
                    >
                        목록보기
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InsertFAQ;
