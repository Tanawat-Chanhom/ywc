import React, { Component } from "react";
import styles from "./Navigation.module.css";

export default class Navigation extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <a href="/">หน้าแรก</a>
        </div>
        <div className={styles.textContainer}>
          <span>/</span>
        </div>
        <div className={styles.textContainer}>
          <p>ค้นหา</p>
        </div>
      </div>
    );
  }
}
