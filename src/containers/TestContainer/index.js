import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setIsTestStarted,
  setIsTestEnded,
  setTimerId,
  setQuestionNumber,
  setAnswerCollector,
  resetAnswerCollector,
  setCompletedTests
} from "@ducks/mainReducer";
import {
  selectIsTestStarted,
  selectIsTestEnded,
  selectTimerId,
  selectedQuestionNumber,
  selectAnswerCollector,
  selectCompletedTests
} from "@ducks/mainReducer/reselect.js";

import Heading from "@components/Heading";
import TestStartPage from "@components/TestStartPage";
import Test from "@components/Test";
import Statistic from "@components/Statistic";

export class TestContainer extends Component {
  timer = min => {
    const timer = setTimeout(this.endTest, min * 60 * 100);
    this.props.setTimerId(timer);
  };

  startTest = () => {
    this.props.setIsTestStarted(true);
    this.timer(this.props.test.time);
  };

  nextStep = answer => {
    this.props.setAnswerCollector(answer);
    this.props.questionNumber + 1 < this.props.test.questions.length;
    this.props.setQuestionNumber(this.props.questionNumber + 1);
    this.endTest();
  };

  endTest = () => {
    localStorage[`${this.props.test.name}`] = this.props.answerCollector;
    this.props.setCompletedTests(this.props.test.name);
    this.props.setIsTestEnded(true);
    console.log(this.props.completedTests);
    console.log(this.props.isTestEnded);
  };

  componentDidMount() {
    this.props.setIsTestEnded(false);
    this.props.setIsTestStarted(false);
    this.props.setQuestionNumber(0);
    this.props.resetAnswerCollector();
  }

  componentWillUnmount() {
    clearTimeout(this.props.timerId);
    if (!this.props.isTestStarted) return;
    if (this.props.isTestEnded) {
      this.props.setIsTestEnded(false);
      this.props.setIsTestStarted(false);
      return;
    }

    localStorage[`${this.props.test.name}`] = this.props.answerCollector;
    this.props.setCompletedTests(this.props.test.name);
  }

  render() {
    const { test, isTestStarted, isTestEnded, questionNumber } = this.props;

    return (
      <section>
        <Heading hNumber="2" content={this.props.test.name} />
        {isTestEnded ? (
          <Statistic test={this.props.test} />
        ) : isTestStarted ? (
          <Test
            task={test.questions[questionNumber]}
            nextStep={this.nextStep}
          />
        ) : (
          <TestStartPage startTest={this.startTest} task={this.props.test} />
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
  answerCollector: selectAnswerCollector(store),
  completedTests: selectCompletedTests(store)
});

const mapDispatchToProps = dispatch => {
  return {
    setIsTestStarted: data => dispatch(setIsTestStarted(data)),
    setIsTestEnded: data => dispatch(setIsTestEnded(data)),
    setTimerId: data => dispatch(setTimerId(data)),
    setQuestionNumber: data => dispatch(setQuestionNumber(data)),
    setAnswerCollector: data => dispatch(setAnswerCollector(data)),
    resetAnswerCollector: () => dispatch(resetAnswerCollector()),
    setCompletedTests: data => dispatch(setCompletedTests(data))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(TestContainer);
