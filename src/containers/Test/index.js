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
  // counter = ``;

  render() {
    let counter = ``;
    console.log(`counter ${counter}`)
    return (
      <section>
        <Heading
          hNumber="3"
          content={this.props.test.questions[this.props.step].question}
        />
        {this.props.test.questions[this.props.step].possibleAnswers.map((el, i) => (
          <label>
            <input type="radio" name={`answer`} onClick={() => counter = i}/> {/* fix bug with same checked value at "next" question//// onChange? */} 
            {el}
          </label>
        ))}
        {/* <label><input type=radiobutton name=answer} />{this.props.test.questions[this.props.step].possibleAnswers.}</label> */}
        <button onClick={() => this.props.nextStep(counter)} >Следующий вопрос</button> {/* onClick={this.fixNextCheckedBug}  */}
      </section>
    );
  }
}
