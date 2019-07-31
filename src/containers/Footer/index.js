import React, { Component } from "react";
import styles from "./index.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <section className={styles.footer__block}>Копирайт</section>
        <section className={styles.footer__block}>Дата</section>
        <section className={styles.footer__block}><a href="./about">Линк на About Us</a></section> {/* router??? */}
        <section className={styles.footer__block}><a href="./tests">Контакты</a></section>          {/* router??? */}
        <section className={styles.footer__block}>Соцсети</section>
      </footer>
    );
  }
}
