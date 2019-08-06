import React, { Component } from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import {setIsTestStarted, setIsTestEnded, setTimerId, setQuestionNumber, setAnswerCollector, resetAnswerCollector} from "@ducks/mainReducer";
import {selectIsTestStarted, selectIsTestEnded, selectTimerId, selectedQuestionNumber, selectAnswerCollector} from "@ducks/mainReducer/reselect.js"

import Heading from "@components/Heading";
import TestStartPage from "@components/TestStartPage";
import Test from "@containers/Test"; // check if its component should be in @comnponents/
import Statistic from "@components/Statistic";

export class TestContainer extends Component {
  // state = {
  //   // isTestStarted: false,
  //   // isTestEnded: false,
  //   // step: 0,
  //   // answerCollector: [] // test it;
  // };

  // startTest = function() {
  //   this.setState({ startTest: true });
  // }.bind(this);

  timer = min => {
    const timer = setTimeout(this.endTest, min * 60 * 100);
    this.props.setTimerId(timer);
  };

  startTest = () => {
    this.props.setIsTestStarted(true);
    // this.setState({ startTest: true });
    this.timer(this.props.test.time);
  };

  nextStep = answer => {
    // this.state.answerCollector.push(answer); //should i use this.setState instead?
    this.props.setAnswerCollector(answer); //should i use this.setState instead?

    // this.state.step + 1 < this.props.test.questions.length
    this.props.questionNumber + 1 < this.props.test.questions.length
      // ? this.setState({ step: this.state.step + 1 })
      ? this.props.setQuestionNumber(this.props.questionNumber + 1)
      : //: this.setState({endTest: true});
        this.endTest();
    // console.log(this.state.answerCollector);
  };

  endTest = () => {
    localStorage[`${this.props.test.name}`] = this.props.answerCollector;
    // this.props.setAnswerCollector([]);

    // console.log(this.props.isTestEnded);

    this.props.setIsTestEnded(true);
    // console.log(this.props.isTestEnded);

  };


  componentDidMount() {
    this.props.setIsTestEnded(false);
    this.props.setIsTestStarted(false);
    this.props.setQuestionNumber(0);
    this.props.resetAnswerCollector();  
  }
  
  componentWillUnmount() {
    clearTimeout(this.props.timerId); //change to fit `time` function\method
    if (!this.props.isTestStarted) return;
    // if (!this.state.startTest) return;
    // if (this.state.endTest) return;
    if (this.props.isTestEnded) return;
    localStorage[`${this.props.test.name}`] = this.props.answerCollector;
  }

  render() {
    const { test, isTestStarted, isTestEnded, questionNumber } = this.props;
    // const { step } = this.state;
    return (
      <section>
        <Heading hNumber="2" content={this.props.test.name} />
        {isTestEnded ? (
          <Statistic test={this.props.test} />
        ) : isTestStarted ? (
          <Test task={test.questions[questionNumber]} nextStep={this.nextStep} />
          ) : (
            <TestStartPage startTest={this.startTest} />
        )}
      </section>
    );
  }
}


const mapStoreToProps = store => ({
  isTestStarted: selectIsTestStarted(store),
  isTestEnded: selectIsTestEnded(store),
  timerId: selectTimerId(store),
  questionNumber: selectedQuestionNumber(store),
  answerCollector: selectAnswerCollector(store)

});

const mapDispatchToProps = dispatch => {
  return {
    setIsTestStarted: data => dispatch(setIsTestStarted(data)),
    setIsTestEnded: data => dispatch(setIsTestEnded(data)),
    setTimerId: data => dispatch(setTimerId(data)),
    setQuestionNumber: data => dispatch(setQuestionNumber(data)),
    setAnswerCollector: data => dispatch(setAnswerCollector(data)),
    resetAnswerCollector: () => dispatch(resetAnswerCollector())

  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(TestContainer);