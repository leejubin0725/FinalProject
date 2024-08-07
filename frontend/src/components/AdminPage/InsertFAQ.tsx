import styles from '../../pages/AdminPage/css/DashboardPage.module.css';

export default function InsertFAQ() {
    return (
        <div className={styles.FAQContainer}>
            <h1 className={styles.FAQTitle}>FAQ</h1>
            <form className={styles.FAQForm}>
                <div className={styles.FAQFormGroup}>
                    <label className={styles.FAQFormLabel}>질문</label>
                    <textarea className={styles.FAQFormTextarea}></textarea>
                </div>
                <div className={styles.FAQFormGroup}>
                    <label className={styles.FAQFormLabel}>답변</label>
                    <textarea className={styles.FAQFormTextarea}></textarea>
                </div>
                <button className={styles.FAQSubmitButton} type="submit">등록하기</button>
            </form>
        </div>

    );
}
