import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="logo.svg" alt="logo" />
      </div>
      <div>
        <h1>Movie Search</h1>
      </div>
    </nav>
  );
}

export default Navbar;
