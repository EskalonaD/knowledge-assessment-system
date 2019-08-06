import React, { Component } from "react";
import styles from "./index.scss";
import { connect } from "react-redux";
import {
  setSelectedTest,
  setSearchedStr,
  setSortedType
} from "@ducks/mainReducer";
import {
  selectData,
  selectTestNumber,
  selectTest,
  selectSearchedStr,
  selectSortedDataForTests,
  selectSortedType
} from "@ducks/mainReducer/reselect";

import ToolsContainer from "@containers/ToolsContainer";
import TestContainer from "@containers/TestContainer";
import Card from "@components/Card";
import Pagination from "@components/Pagination";

// TODO  remove useless imports /// change sorted data to data /// move serachHandler to reselect

// TODO decrease//increase
const sortLib = {
  time: `Времени`,
  questions: `Количеству вопросов`,
  name: `Названию`,
  reset: `Отменить сортировку`
};
export class Tests extends Component {
  state = {
    paginationNumber: 1,
    maxItemOnPage: 30
  };

  searchHandler = str => this.props.setSearchedStr(str);

  // Return state to initial value after click on "Тесты" in menu;
  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     this.state.selectedTest === prevState.selectedTest &&
  //     prevState.selectedTest !== null
  //   )
  //     this.setState({
  //       selectedTest: null
  //     });
  // }


  // // Return state to initial value after click on "Тесты" in menu;
  componentDidUpdate(prevProps) {
    if (
      this.props.selectedTestNumber === prevProps.selectedTestNumber 
      && prevProps.selectedTestNumber !== null
    ) 
    // debugger;
      this.props.setSelectedTest(null)
      // this.props.set
  }

  // TODO remove!!!!!
  componentDidMount() {
    this.props.setSelectedTest(null);
    this.props.setSearchedStr(``);
    this.props.setSortedType(`resetSortedType`);
  }

  render() {
    const { selectedTestNumber, selectedTest, sortedData } = this.props;
    const { paginationNumber, maxItemOnPage } = this.state;
    // console.log(sortedData);
    return (
      <main>
        <ToolsContainer
          searchHandler={this.searchHandler}
          sortData={sortLib}
          sortHandler={val => this.props.setSortedType(val)}
        />
        {selectedTestNumber === null ? (
          <div className={styles.test_container}>
            {sortedData
              .slice((paginationNumber - 1) * maxItemOnPage, paginationNumber * maxItemOnPage)
              // .filter(
              //   (el, i) =>
              //     i < paginationNumber * 10 && i + 11 > paginationNumber * 10
              // )
              .map((el, i) => (
                <Card
                  key={el.name}
                  handler={() => this.props.setSelectedTest(i)}
                  content={el.name}
                />
              ))}
          </div>
        ) : (
          <TestContainer test={selectedTest} />
        )}
        {selectedTestNumber === null && 
        <section>
          {Array.from({ length: Math.ceil(sortedData.length / maxItemOnPage) || 1 }).map(
            (el, i) => (
              <Pagination
                number={i + 1}
                handler={() => {
                  console.log(this.state);
                  this.setState({ paginationNumber: i + 1 });
                }}
              />
            )
          )}
        </section>}
      </main>
    );
  }
}

const mapStoreToProps = store => ({
  // data: selectData(store),
  selectedTestNumber: selectTestNumber(store),
  selectedTest: selectTest(store),
  searchedStr: selectSearchedStr(store),
  sortedData: selectSortedDataForTests(store),
  sortedType: selectSortedType(store)
});

const mapDispatchToProps = dispatch => {
  return {
    setSelectedTest: data => dispatch(setSelectedTest(data)),
    setSearchedStr: data => dispatch(setSearchedStr(data)),
    setSortedType: data => dispatch(setSortedType(data))
    
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Tests);
