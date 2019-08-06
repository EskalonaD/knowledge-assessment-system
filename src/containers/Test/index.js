import React, { Component } from "react";
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
      <section>
        <Heading hNumber="3" content={task.question} />
        {task.possibleAnswers.map((el, i) => (
          <label>
            <input
              type="radio"
              checked={answer === i}
              name={`answer`}
              value={i}
              onChange={() => this.handleChange(i)}
            />
            {/* Switch inputs to Card component???*/}
            {el}
          </label>
        ))}
        <button onClick={() => this.handleClick(answer)}>
          Следующий вопрос
        </button>
      </section>
    );
  }
}
