import React, {Component} from "react";

export default class Statistic extends Component {
    render() {
        // debugger;
        const {name, rightAnswers: {rightAnswers}} = this.props.test;
        const result = this.props.test.rightAnswers.map((el, i) => String(el) === localStorage[name].split(`,`)[i] ? 1 : 0)
        .reduce((acc, el, i, arr) => {
            acc += el;
            if (i === arr.length - 1) {
                acc /= arr.length;
                acc *= 100;
                acc = Math.floor(acc);
            } 
            return acc;
        },0);  //this process should be on backend, but...
        return (
        <section>
            {/* Тест: {this.props.test.name} */}
            Ваш результат: {result}%
        </section>
        )
    }
}