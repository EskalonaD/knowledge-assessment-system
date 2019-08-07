import React, { Component } from "react";

class TestStartPage extends Component {
  render() {
    const { task } = this.props;

    return (
      <section>
        <p>
          После нажатия на клавишу начнется тест на который вам отведено{" "}
          {task.time} минут. После этого тест будет окончен. Вы можете заранее
          отправить результаты нажав на кнопку "закончить тест".
        </p>
        <p>
          Вас ждет {task.rightAnswers.length}{" "}
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

export default TestStartPage;
