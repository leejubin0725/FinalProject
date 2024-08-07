import { FunctionComponent } from "react";
import Main from "../../../src/components/BeforePage/SubscribeMain";
import Aside from "../../../src/components/BeforePage/SubScribeAside";
import Footer from "../../../src/components/BeforePage/SubScribeFooter";
import styles from "./css/SubscribePage.module.css";

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
