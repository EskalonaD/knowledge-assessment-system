import React, { Component } from "react";
import Heading from "@components/Heading";

export default class Test extends Component {
  render() {
    return (
      <section>
        <Heading
          hNumber="3"
          content={this.props.test.questions[this.props.step].question}
        />
        {this.props.test.questions[this.props.step].possibleAnswers.map(el => (
          <label>
            <input type="radio" name="answer" /> {/* fix bug with same checked value at "next" question */}
            {el}
          </label>
        ))}
        {/* <label><input type=radiobutton name=answer} />{this.props.test.questions[this.props.step].possibleAnswers.}</label> */}
        <button onClick={this.props.nextStep}>Следующий вопрос</button>
      </section>
    );
  }
}
