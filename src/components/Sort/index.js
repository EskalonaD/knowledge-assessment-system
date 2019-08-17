import React, { Component } from "react";

export default class Sort extends Component {
  state = {
    value: `default`
  }
  // handleChange = e => this.props.handler(e.target.value);
//   handleChange = e => {
//     this.props.handler(this.state.value);
//     this.setState({value: e.target.value});
// }

handleChange = e => {
  this.setState({value: e.target.value}, () => this.props.handler(this.state.value));
}

  constructOptionList = () =>
    Object.entries(this.props.data).map(([key, name]) => (
      <option key={key} value={key}>
        {name}
      </option>
    ));

  render() {
    return (
      <section className={this.props.className}>
        <select defaultValue={this.state.value} onChange={this.handleChange}>
          <option disabled value="default">
            Сортировать по:
          </option>

          {this.constructOptionList()}
        </select>
      </section>
    );
  }
}
