import React, { Component } from "react";
import styles from "./index.scss";

export default class Search extends Component {
  render() {
    return (
      <section>
        <input
          type="text"
          className={styles.input}
          onKeyUp={e => this.props.handler(e.target.value)}
          placeholder="Поиск"
        />
        {/* icon for search?*/}
      </section>
    );
  }
}
