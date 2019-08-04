import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./styles.scss";

export class Pagination extends Component {
  render() {
    const { number, handler } = this.props;

    return (
      <button className={styles.pagination_button} onClick={handler}>
        {number}
      </button>
    );
  }
}

const mapStoreToProps = store => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Pagination);
