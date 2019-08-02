import React, { Component } from "react";

export default class Statistic extends Component {
  render() {
    const { name, rightAnswers } = this.props.test;
    const result = rightAnswers
      .map((el, i) => (String(el) === localStorage[name].split(`,`)[i] ? 1 : 0))
      .reduce((acc, el, i, arr) => {
        acc += el;
        if (i === arr.length - 1) {
          acc = Math.floor((acc / arr.length) * 100);
        }
        return acc;
      }, 0); //this process should be on backend, but...
    return (
      <section>
        {/* Тест: {this.props.test.name} */}
        Ваш результат: {result}%
      </section>
    );
  }
}
