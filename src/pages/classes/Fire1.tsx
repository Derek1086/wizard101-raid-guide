import Header from "../../components/Header";
import React from "react";
import styles from "./Fire1.module.css"; // Import CSS module

const Fire1 = () => {
  return (
    <>
      <Header />
      <div>Deck Setup</div>
      <div className={styles.imageContainer}>
        <img src="/Fire1/top-deck.png" alt="" />
        <div className={styles.hoverText}>Hello World</div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/Fire1/mid-deck.png" alt="" />
        <div className={styles.hoverText}>Hello World</div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/Fire1/bottom-deck.png" alt="" />
        <div className={styles.hoverText}>Hello World</div>
      </div>
    </>
  );
};

export default Fire1;
