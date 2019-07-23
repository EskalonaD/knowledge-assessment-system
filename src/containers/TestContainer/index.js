import React, { Component } from "react";
import styles from "./index.scss";

import Heading from "@components/Heading";
import TestStartPage from "@components/TestStartPage";
import Test from "@containers/Test"; // check if its component should be in @comnponents/

export default class TestContainer extends Component {
  state = {
    startTest: false,
    step: 0
  };

  // startTest = function() {
  //   this.setState({ startTest: true });
  // }.bind(this);

  startTest = () => this.setState({ startTest: true });

  render() {
    return (
      <section>
        <Heading hNumber="2" content={this.props.test.name} />
        {this.state.startTest === false ? (
          <TestStartPage startTest={this.startTest} />
        ) : (
          <Test />
        )}
      </section>
    );
  }
}
