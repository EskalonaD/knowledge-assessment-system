import React, { Component } from "react";
import styles from "./index.scss";
import ToolsContainer from "@containers/ToolsContainer";
import TestContainer from "@containers/TestContainer";
import Card from "@components/Card";
import { connect } from "react-redux";
import { CommonAction, setSearchStr, setSortType } from "@ducks/mainReducer";
import {
  selectData,
  selectTestNumber,
  selectTest,
  selectSearchStr,
  selectSortedDataForTests,
  selectSortType
} from "@ducks/mainReducer/reselect";

// TODO  remove useless imports /// change sorted data to data /// move serachHandler to reselect

// TODO decrease//increase
const sortLib = {
  time: `Времени`,
  questions: `Количеству вопросов`,
  name: `Названию`,
  reset: `Отменить сортировку`
};
export class Tests extends Component {
  // sortData = () => {
  //   // const { sortType } = this.state;
  //   // console.log(sortType);
  //   const { sortType } = this.props;
  //   return [...this.props.searchedData].sort((a, b) => {
  //     // if (!sortType) return 0;
  //     if (sortType === `resetSortType`) return 0;

  //     const firstItem = a[sortType];
  //     const secondItem = b[sortType];

  //     return sortType === `questions`
  //       ? firstItem.length - secondItem.length
  //       : firstItem - secondItem;
  //   });
  // };

  searchHandler = str => this.props.setSearchStr(str);

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

  // componentDidMount() {
  //   this.props.CommonAction(true);
  // }

  // TODO remove!!!!!
  componentDidMount() {
    this.props.CommonAction(null);
  }

  render() {
    // let newdata = this.state.testSorted ? this.props.data : data;
    let {
      data,
      selectedTestNumber,
      selectedTest,
      searchStr,
      searchedData,
      sortedData
    } = this.props;
    return (
      <main>
        <ToolsContainer
          searchHandler={this.searchHandler}
          sortData={sortLib}
          // sortHandler={val => this.setState({ sortType: val })}
          sortHandler={val => this.props.setSortType(val)}
        />
        {selectedTestNumber === null ? (
          <div className={styles.test_container}>
            {sortedData.map((el, i) => (
              <Card
                key={el.name}
                handler={() => this.props.CommonAction(i)}
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
  // data: selectData(store),
  selectedTestNumber: selectTestNumber(store),
  selectedTest: selectTest(store),
  searchStr: selectSearchStr(store),
  sortedData: selectSortedDataForTests(store),
  sortType: selectSortType(store)
});

const mapDispatchToProps = dispatch => {
  return {
    CommonAction: data => dispatch(CommonAction(data)),
    setSearchStr: data => dispatch(setSearchStr(data)),
    setSortType: data => dispatch(setSortType(data))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Tests);
