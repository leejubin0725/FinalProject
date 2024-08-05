import { FunctionComponent } from "react";
import Main from "../components/SubscribeMain";
import Aside from "../components/SubScribeAside";
import Footer from "../components/SubScribeFooter";
import styles from "./SubscribePage.module.css";

const SubscribePage: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <Main />
      <Aside />
      <Footer />
    </div>
  );
};

export default SubscribePage;
