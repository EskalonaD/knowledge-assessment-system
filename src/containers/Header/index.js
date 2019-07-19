import React, { Component } from "react";
import styles from "./index.scss";

import Logo from "./Logo";
import Menu from "@components/Menu";

export default class Header extends Component {
  render() {
    return (
      <header className={`${styles.header} ${styles.root__header}`}>
        <Logo />
        <Menu />
      </header>
    );
  }
}
