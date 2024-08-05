import { FunctionComponent } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>

                <div className={styles.footerLinks}>
                    <Link to="#">화면 해설</Link>
                    <Link to="#">고객 센터</Link>
                    <Link to="#">미디어 센터</Link>
                    <Link to="#">개발 정보</Link>
                    <Link to="#">이용 약관</Link>
                    <Link to="#">개인정보</Link>
                    <Link to="#">법적 고지</Link>
                    <Link to="#">쿠키 설정</Link>
                    <Link to="#">회사 정보</Link>
                    <Link to="#">문의하기</Link>
                </div>

                <div className={styles.footerDisclaimer}>
                    <img src="/logo-text-2@2x.png" alt="로고" />
                    <p>시네마 클라우드</p>
                    <p>대표: 보람상조</p>
                    <p>이메일 주소: </p>
                    <p>주소: 강남구 강남구 테헤란로14길 6 KH정보교육원</p>
                    <p>사업자등록번호: </p>
                    <p>클라우드 호스팅: Amazon Web Services Inc.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;