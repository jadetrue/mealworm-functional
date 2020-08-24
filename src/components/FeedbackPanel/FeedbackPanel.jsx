import React from "react";
import styles from "./FeedbackPanel.module.scss";

const FeedbackPanel = (props) => {
  const { header, text } = props;
  return (
    <section className={styles.background}>
      <div className={styles.feedback}>
        <h2>{header}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default FeedbackPanel;
