import React, { Component } from "react";
import styles from "./index.scss";

// const element = React.createElement(
//   `h${props.hNumber}`,
//   {},
//   `${props.content}`
// );

export default class Heading extends Component {
  render() {
    const { hNumber, content } = this.props;
    return React.createElement(`h${hNumber}`, {}, `${content}`);
  }
}
