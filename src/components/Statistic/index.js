import React, {Component} from "react";

export default class Statistic extends Component {
    render() {
        return (
        <section>
            Тест: {this.props.test.name}
            Ваш результат: 
        </section>
        )
    }
}