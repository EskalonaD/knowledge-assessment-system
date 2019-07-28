import React, { Component } from "react";
import styles from "./index.scss";
import ToolsContainer from "@containers/ToolsContainer";
import data from "../../dataBase/test.json";
import TestContainer from "@containers/TestContainer";
import Card from "@components/Card";

export default class Tests extends Component {
  state = {
    selectedTest: null
  };

  // selectTest() =>

  render() {
    // console.log(data);
    return (
      <main>
        <ToolsContainer />
        {this.state.selectedTest === null ? (
          <div className={styles.test_container}>
            {data.map((el, i) => {
              return (
                <Card key={el.name} handler={() => this.setState({ selectedTest: i })} content={el.name} />
              );
            })}
          </div>
        ) : (
          <TestContainer test={data[this.state.selectedTest]} />
        )}
      </main>
    );
  }

  //   componentDidUpdate(prevProps, prevState){
  //     this.state.selectedTest === prevState.state.selectedTest
  //     setState ( {defaults})
  // }

  // Return state to initial value after click on "Тесты" in menu;
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    if (
      this.state.selectedTest === prevState.selectedTest &&
      prevState.selectedTest !== null
    )
      this.setState({
        selectedTest: null
      });
  }
}
