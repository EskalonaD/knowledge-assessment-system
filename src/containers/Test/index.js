import React, { Component } from "react";

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
            <input type="radiobutton" name="answer" />
            {el}
          </label>
        ))}
        {/* <label><input type=radiobutton name=answer} />{this.props.test.questions[this.props.step].possibleAnswers.}</label> */}
      </section>
    );
  }
}
