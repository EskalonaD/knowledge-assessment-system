import React, { Component } from "react";
import styles from "./index.scss";

export default class Heading extends Component {
  render() {
    const { hNumber, content } = this.props;
    return React.createElement(`h${hNumber}`, {}, `${content}`);
  }
}
