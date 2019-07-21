import React, { Component } from "react";
import styles from "./index.scss";

export default class ToolsContainer extends Component {
  render() {
    return (
      <div className={styles.tools_container}>
        <section>Breadcrumbs</section>
        <section>Поиск</section>
      </div>
    );
  }
}
