import React, { Component } from "react";
import styles from "./index.scss";

export default class Search extends Component {
  handlerKeyUp = e => this.props.handler(e.target.value);

  render() {
    return (
      <section>
        <input
          type="text"
          className={styles.input}
          onKeyUp={this.handlerKeyUp}
          placeholder="Поиск"
        />
        {/* icon for search?*/}
      </section>
    );
  }
}
