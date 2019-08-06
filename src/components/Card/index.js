import React, { Component } from "react";
import styles from "./index.scss";

export default class Card extends Component {
  render() {
    const { handler, content } = this.props;
    return (
      <div className={styles.card} onClick={handler}>
        {content}
      </div>
    );
  }
}
