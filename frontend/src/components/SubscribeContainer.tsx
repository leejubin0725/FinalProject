import { FunctionComponent } from "react";
import styles from "./SubscribeContainer.module.css";

export type ContainerType = {
  className?: string;
  text?: string;
  text1?: string;
};

const SubscribeContainer: FunctionComponent<ContainerType> = ({
  className = "",
  text,
  text1,
}) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.textContainer}>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.textContainer1}>
        <div className={styles.text}>{text1}</div>
      </div>
    </div>
  );
};

export default SubscribeContainer;
