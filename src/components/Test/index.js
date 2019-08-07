import React, { Component } from "react";
import styles from "./index.scss";

import Heading from "@components/Heading";

export default class Test extends Component {
  // state = {hi: false};
  // fixNextCheckedBug = () => this.setState({hi: !this.state.hi});
  // eventHandler = () => {
  //   console.log(this.state);
  //   this.fixNextCheckedBug();
  //   this.props.nextStep();
  //   console.log(this.state);
  // }
  // answer = ``;
  state = {
    // value: null,
    answer: null
  };

  handleChange = i => this.setState({ answer: i });
  handleClick = answer =>
    this.setState({ answer: null }, () => {
      this.props.nextStep(answer);
    });

  render() {
    const { task } = this.props;
    const { answer } = this.state;

    return (
      <section className={styles.testWrapper}>
        <Heading hNumber="3" content={task.question} />
        <div className={styles.testContainer}>
          {task.possibleAnswers.map((el, i) => (
            <label className={styles.testCard}>
              <input
                type="radio"
                checked={answer === i}
                name={`answer`}
                value={i}
                onChange={() => this.handleChange(i)}
                className={styles.input}
              />
              {/* Switch inputs to Card component???*/}
              {el}
            </label>
          ))}
        </div>
        <button onClick={() => this.handleClick(answer)}>
          Следующий вопрос
        </button>
      </section>
    );
  }
}
