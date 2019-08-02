import React, { Component } from "react";

export default class Sort extends Component {
  handleChange = e => this.props.handler(e.target.value);

  constructOptionList = () =>
    Object.entries(this.props.data).map(([key, name]) => (
      <option value={key}>{name}</option>
    ));

  render() {
    return (
      <section>
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
