import React, { Component } from "react";

export default class TestStartPage extends Component {
  render() {
    return (
      <section>
        <p>
          После нажатия на клавишу начнется тест на который вам отведено
          {this.props.time} минут. После этого тест будет окончен. Вы можете{" "}
          {/* define props.time */}
          заранее отправить результаты нажав на кнопку "закончить тест".
        </p>
        <p>
          Вас ждет {this.props.questionLength}{" "}
          {/* define props.questionLength */}
          {this.props.questionLength % 10 === 0 || this.props.questionLength > 4
            ? `вопросов`
            : this.props.questionLength % 10 === 1
            ? `вопрос`
            : `вопроса`}
        </p>
        <button onClick={this.props.startTest}>Начать Тест</button>
      </section>
    );
  }
}
