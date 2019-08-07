import React, { Component } from "react";
import styles from "./index.scss";

import Menu from "@containers/Menu";
import Heading from "@components/Heading";

export default class Header extends Component {
  render() {
    return (
      <header className={`${styles.header} ${styles.root__header}`}>
        <Heading hNumber="1" content="Knowledge Examinator" />

        <Menu />
      </header>
    );
  }
}
