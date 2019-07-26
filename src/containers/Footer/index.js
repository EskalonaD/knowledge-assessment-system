import React, { Component } from "react";
import styles from "./index.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <section className={styles.footer__block}>Копирайт</section>
        <section className={styles.footer__block}>Дата</section>
        <section className={styles.footer__block}>Линк на About Us</section>
        <section className={styles.footer__block}>Контакты</section>
        <section className={styles.footer__block}>Соцсети</section>
      </footer>
    );
  }
}
