import React, { Component } from "react";
import styles from "./index.scss";

export default class Search extends Component {
  state = {
    value: ``
  }

  handlerOnChange = e => this.setState({value: e.target.value});    
  handlerKeyUp = () => this.props.handler(this.state.value);

  render() {
    return (
      <section className={this.props.className}>
        <input
          type="text"
          className={styles.input}
          onKeyUp={this.handlerKeyUp}
          onChange={this.handlerOnChange}
          placeholder="Поиск"
          value={this.state.value}
        />
      </section>
    );
  }
}
