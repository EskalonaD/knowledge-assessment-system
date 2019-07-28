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

  render() {
    let answer = null;
    console.log(`answer ${answer}`)
    return (
      <section>
        <Heading
          hNumber="3"
          content={this.props.test.questions[this.props.step].question}
        />
        {this.props.test.questions[this.props.step].possibleAnswers.map((el, i) => (
          <label>
            <input type="radio" name={`answer`} onClick={() => answer = i}/> {/* fix bug with same checked value at "next" question//// onChange? */}  {/* Switch inputs to Card component???*/} 
            {el}
          </label>
        ))}
        <button onClick={() => {
          this.props.nextStep(answer);
          answer = null;
        }} >Следующий вопрос</button>
      </section>
    );
  }
}
