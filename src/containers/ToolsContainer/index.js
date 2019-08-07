import React, { Component } from "react";
import styles from "./index.scss";

import Search from "@components/Search";
import Sort from "@components/Sort";

export default class ToolsContainer extends Component {
  render() {
    return (
      <div className={styles.tools_container}>
        <Sort
          data={this.props.sortData}
          handler={this.props.sortHandler}
          className={styles.tools}
        />
        <Search handler={this.props.searchHandler} className={styles.tools} />
      </div>
    );
  }
}
