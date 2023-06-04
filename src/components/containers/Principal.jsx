import React, { Children } from "react";
import styles from "./Principal.module.css";

function Principal() {
  return <div className={styles.container}>{Children}</div>;
}

export default Principal;
