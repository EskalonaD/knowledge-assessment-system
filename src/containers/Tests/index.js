import React, { Component } from "react";
import styles from "./index.scss";
import ToolsContainer from "@containers/ToolsContainer";
import data from "../../dataBase/test.json";
import TestContainer from "@containers/TestContainer";
import Card from "@components/Card";

export default class Tests extends Component {
  state = {
    selectedTest: null,
    searchFor: ``,
    testSorted: false,
    data: Object.values(data),
    sortTypes: [[`Времени`, () => this.setState({data: this.state.data.sort((a, b) => a.time - b.time),
                                                testSorted: true})],
      [`Количеству вопросов`, () => this.setState({data: this.state.data.sort((a, b) => a.questions.length - b.questions.length),
                                                  testSorted: true})],
      [`Отменить сортировку`, () => this.setState({testSorted: false})]]  //increase/decrease???
  };

  searchHandler = (str) => this.setState({searchFor: str});

  // selectTest() =>

  render() {
    console.log(`${this.state.searchFor} - search for`);
    let newdata = this.state.testSorted ? this.state.data : data;

    return (
      <main>
        <ToolsContainer searchHandler={this.searchHandler} sortTypes={this.state.sortTypes}/>
        {this.state.selectedTest === null ? (
          <div className={styles.test_container}>
            {newdata.map((el, i) => {
              if(el.name.indexOf(this.state.searchFor) !== -1) {               //String.prototype.include   ????
              return (
                <Card key={el.name} handler={() => this.setState({ selectedTest: i })} content={el.name} />
              );}
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
    // console.log(this.state);
    if (
      this.state.selectedTest === prevState.selectedTest &&
      prevState.selectedTest !== null
    )
      this.setState({
        selectedTest: null
      });
  }
}
