import React, { Component } from "react";

import styles from "./index.scss";

export default class Sort extends Component {
  handleChange = e => this.props.handler(e.target.value);

  constructOptionList = () =>
    Object.entries(this.props.data).map(([key, name]) => (
      <option key={key} value={key}>
        {name}
      </option>
    ));

  render() {
    return (
      <section className={this.props.className}>
        <select defaultValue="default" onChange={this.handleChange}>
          <option disabled value="default">
            Сортировать по:
          </option>

          {this.constructOptionList()}
        </select>
      </section>
    );
  }
}
