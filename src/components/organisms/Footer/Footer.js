import React from "react";

import styles from "./Footer.module.scss";
import revkuLogo from "assets/revku-logo.svg";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.paragraph}>
        Powered by
        <a
          href="https://revku.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img src={revkuLogo} alt="Revku Logo" className={styles.logo} />
        </a>
      </p>
    </div>
  );
};

export default Footer;
