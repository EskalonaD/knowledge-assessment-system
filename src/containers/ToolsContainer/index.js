import React, { Component } from "react";
import styles from "./index.scss";

import Search from "@components/Search";
import Sort from "@components/Sort";

export default class ToolsContainer extends Component {
  //check what needed from state parent component
  render() {
    return (
      <div className={styles.tools_container}>
        <section>Breadcrumbs</section>
        <Sort data={this.props.sortData} handler={this.props.sortHandler} />
        <Search handler={this.props.searchHandler} />
      </div>
    );
  }
}
