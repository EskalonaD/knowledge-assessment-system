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

  handleChange = () => this.setState({ answer: i });

  render() {
    // let answer = null;
    const { task, nextStep } = this.props;
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
              onChange={() => this.setState({ answer: i })}
            />
            {/* fix bug with same checked value at "next" question//// onChange? */}{" "}
            {/* Switch inputs to Card component???*/}
            {el}
          </label>
        ))}
        <button
          onClick={() =>
            this.setState({ answer: null }, () => {
              nextStep(answer);
            })
          }
        >
          Следующий вопрос
        </button>
      </section>
    );
  }
}
