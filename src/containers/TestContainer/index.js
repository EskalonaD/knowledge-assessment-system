import React, { Component } from "react";
import styles from "./index.scss";

import Heading from "@components/Heading";
import TestStartPage from "@components/TestStartPage";
import Test from "@containers/Test"; // check if its component should be in @comnponents/
import Statistic from "@components/Statistic";

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

  timer = min => {
    const timer = setTimeout(this.endTest, min * 60 * 100);
    return timer;
  };

  startTest = () => {
    this.setState({ startTest: true });
    this.timer(this.props.test.time);
  };

  nextStep = answer => {
    this.state.answerCollector.push(answer); //should i use this.setState instead?

    this.state.step + 1 < this.props.test.questions.length
      ? this.setState({ step: this.state.step + 1 })
      : //: this.setState({endTest: true});
        this.endTest();
    console.log(this.state.answerCollector);
  };

  endTest = () => {
    localStorage[`${this.props.test.name}`] = this.state.answerCollector;
    this.setState({ endTest: true });
  };

  componentWillUnmount() {
    clearTimeout(this.timer); //change to fit `time` function\method
    if (!this.state.startTest) return;
    if (this.state.endTest) return;
    localStorage[`${this.props.test.name}`] = this.state.answerCollector;
  }

  render() {
    const { test } = this.props;
    const { step } = this.state;
    return (
      <section>
        <Heading hNumber="2" content={this.props.test.name} />
        {this.state.endTest ? (
          <Statistic test={this.props.test} />
        ) : this.state.startTest === false ? (
          <TestStartPage startTest={this.startTest} />
        ) : (
          <Test
            task={test.questions[step]}
            nextStep={this.nextStep}
            // key={step}
          />
        )}
      </section>
    );
  }
}
