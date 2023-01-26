import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.backgroundcolor}>
      <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Get a <span>Hassle-Free</span> experience!
        </p>
        <p className={styles.heading}>
          Customize your own <span> Resume</span>.
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
    </div>
  );
}

export default Header;