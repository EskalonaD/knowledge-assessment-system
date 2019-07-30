import React, { Component } from "react";

export default class Sort extends Component {
  handleChange = e =>
    this.props.sortTypes.find(el => el[0] === e.target.value)[1]();
  constructOptionList = () =>
    this.props.sortTypes.map(([name]) => <option value={name}>{name}</option>);

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
