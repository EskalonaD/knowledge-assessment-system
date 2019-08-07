import React, { Component } from "react";
import styles from "./index.scss";
import ToolsContainer from "@containers/ToolsContainer";
export default class MainPage extends Component {
  render() {
    return (
      <main className={styles.mainWrapper}>
        <div className={styles.pseudoHeader}>
          Приветствуем вас на нашем сайте.
        </div>

        <div className={styles.text}>
          Здесь вы проверите ваши знания в режиме реального времени.
        </div>

        <div className={styles.text}>
          Если готовы и уверены – ПРИСТУПАЙТЕ. УДАЧИ
        </div>
      </main>
    );
  }
}
