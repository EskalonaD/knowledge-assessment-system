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
  componentDidUpdate(prevProps) {
    if (
      this.props.selectedTestNumber === prevProps.selectedTestNumber &&
      prevProps.selectedTestNumber !== null
    )
      this.props.setSelectedTest(null);
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

    return (
      <main>
        <ToolsContainer
          searchHandler={this.searchHandler}
          sortData={sortLib}
          sortHandler={val => this.props.setSortedType(val)}
        />
        {selectedTestNumber === null && (
          <section>
            {Array.from({
              length: Math.ceil(sortedData.length / maxItemOnPage) || 1
            }).map((el, i) => (
              <Pagination
                key={i}
                number={i + 1}
                handler={() => {
                  this.setState({ paginationNumber: i + 1 });
                }}
              />
            ))}
          </section>
        )}
        {selectedTestNumber === null ? (
          <div className={styles.test_container}>
            {sortedData
              .slice(
                (paginationNumber - 1) * maxItemOnPage,
                paginationNumber * maxItemOnPage
              )
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
      </main>
    );
  }
}

const mapStoreToProps = store => ({
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
