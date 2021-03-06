import React, { Component } from "react";
import styles from "./index.scss";

export default class Search extends Component {
  handlerKeyUp = e => this.props.handler(e.target.value);

  render() {
    return (
      <section className={this.props.className}>
        <input
          type="text"
          className={styles.input}
          onKeyUp={this.handlerKeyUp}
          placeholder="Поиск"
        />
      </section>
    );
  }
}
