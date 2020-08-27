import React from "react";
import Search from "./components/Search";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <Search />
    <div className={styles.content}>{children}</div>
  </div>
);

export default Layout;
