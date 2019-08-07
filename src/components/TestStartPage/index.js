import React, { Component } from "react";
import styles from "./index.scss";
class TestStartPage extends Component {
  render() {
    const { task } = this.props;

    return (
      <section className={styles.wrapper}>
        <p>
          После нажатия на клавишу начнется тест на который вам отведено{" "}
          {task.time} минут. После этого тест будет окончен. Вы можете заранее
          отправить результаты нажав на кнопку "закончить тест".
        </p>
        <p>
          Вас ждет {task.rightAnswers.length}{" "}
          {task.rightAnswers.length % 10 === 0 || task.rightAnswers.length > 4
            ? `вопросов.`
            : task.rightAnswers.length % 10 === 1
            ? `вопрос.`
            : `вопроса.`}
        </p>
        <button onClick={this.props.startTest}>Начать Тест</button>
      </section>
    );
  }
}

export default TestStartPage;
