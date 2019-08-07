import React, { Component } from "react";
import styles from "./index.scss";

import Heading from "@components/Heading";
export default class About extends Component {
  render() {
    return (
      <main className={styles.container}>
        <Heading content={`О нас`} hNumber={2} />
        <section className={styles.about}>
          Мы создаем тесты на разные темы:
          <ul className={styles.aboutList}>
            <li>ПРОФЕССИОНАЛЬНЫЕ</li>

            <li>ОБРАЗОВАТЕЛЬНЫЕ</li>

            <li>РАЗВЛЕКАТЕЛЬНЫЕ</li>

            <li>РАСШИРЯЮЩИЕ КРУГОЗОР</li>
          </ul>
        </section>
        <section className={styles.about}>
          Проверьте ваш уровень, узнайте слабые и сильные стороны и ПРОСТО
          ХОРОШО ПРОВЕДИТЕ ВРЕМЯ{" "}
        </section>
      </main>
    );
  }
}
