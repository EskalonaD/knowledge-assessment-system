import React, { Component } from "react";
import styles from "./index.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <section>Копирайт</section>
        <section>Дата</section>
        <section>Линк на About Us</section>
        <section>Контакты</section>
      </footer>
    );
  }
}
