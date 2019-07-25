import React, { Component } from "react";
import styles from "./index.scss";

import Heading from "@components/Heading";
import TestStartPage from "@components/TestStartPage";
import Test from "@containers/Test"; // check if its component should be in @comnponents/

export default class TestContainer extends Component {
  state = {
    startTest: false,
    endTest: false,
    step: 0,
    answerCollector: [] // test it;
  };

  // startTest = function() {
  //   this.setState({ startTest: true });
  // }.bind(this);

  startTest = () => this.setState({ startTest: true });
  nextStep = (answer) => {
    this.state.answerCollector.push(answer);     //should i use this.setState instead?
    
    this.state.step + 1 < this.props.test.questions.length ? this.setState({step: this.state.step + 1}) 
    //: this.setState({endTest: true});
    : this.endTest();
    console.log(this.state.answerCollector);
  };
  endTest = () => {
    localStorage[`${this.props.test.name}`] = this.state.answerCollector;
    this.setState({endTest: true});
  }


  render() {
    return (
      <section>
        <Heading hNumber="2" content={this.props.test.name} />
        {this.state.endTest ? (
        <div>Заглушка для страницы конца теста</div>
        ) : this.state.startTest === false ? (
          <TestStartPage startTest={this.startTest} />
        ) : (
          <Test test={this.props.test} step={this.state.step} nextStep={this.nextStep} key={this.state.step}  />
        )}
      </section>
    );
  }
}
