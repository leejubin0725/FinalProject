import { FunctionComponent } from "react";
import Main from "../components/Main";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <Main />
      <Aside />
      <Footer />
    </div>
  );
};

export default Frame;
