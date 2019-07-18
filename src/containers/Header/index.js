import React, { Component } from "react";
import styles from "./index.scss";

import Logo from "./Logo";
import Menu from "@components/Menu";

export default class Header extends Component {
  state = {
    id: 0
  };

  render() {
    const { id } = this.state;
    return (
      <header
        className={`${styles.header} ${styles.root__header}`}
        onClick={() => this.setState(({ id }) => ({ id: ++id }))}
      >
        <Logo />
        {id}
        <Menu />
      </header>
    );
  }
}
