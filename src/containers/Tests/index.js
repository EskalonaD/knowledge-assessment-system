import React, { Component } from "react";
import styles from "./index.scss";
import ToolsContainer from "@containers/ToolsContainer";
import TestContainer from "@containers/TestContainer";
import Card from "@components/Card";
import { connect } from "react-redux";
import { CommonAction, setSearchStr } from "@ducks/mainReducer";
import {
  selectData,
  selectTestNumber,
  selectTest,
  selectSearchStr,
  selectFilteredTestsBySearch
} from "@ducks/mainReducer/reselect";

const sortLib = {
  Времени: `time`,
  "Количеству вопросов": `questions.length`,
  Названию: `name`,
  "Отменить сортировку": null
};
export class Tests extends Component {
  state = {
    selectedTest: null,
    searchStr: ``,
    testSorted: false,
    // data: Object.values(this.props.data),
    sortTypes: [
      [
        `Времени`,
        () =>
          this.setState({
            data: this.props.data.sort((a, b) => a.time - b.time),
            testSorted: true
          })
      ],
      [
        `Количеству вопросов`,
        () =>
          this.setState({
            data: this.props.data.sort(
              (a, b) => a.questions.length - b.questions.length
            ),
            testSorted: true
          })
      ],
      [`Отменить сортировку`, () => this.setState({ testSorted: false })]
    ] //increase/decrease???
  };

  // static defaultProps = {
  //   data: []
  // };

  formateData = data => [...data];

  // sort= () => this.

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
      searchedData
    } = this.props;
    return (
      <main>
        <ToolsContainer
          searchHandler={this.searchHandler}
          sortTypes={this.state.sortTypes}
        />
        {selectedTestNumber === null ? (
          <div className={styles.test_container}>
            {/* {data.map((el, i) => {
              if (el.name.includes(searchStr)) {
                return (
                  <Card
                    key={el.name}
                    handler={() => this.props.CommonAction(i)}
                    content={el.name}
                  />
                );
              }
            })} */}
            {searchedData.map((el, i) => (
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
  data: selectData(store),
  selectedTestNumber: selectTestNumber(store),
  selectedTest: selectTest(store),
  searchStr: selectSearchStr(store),
  searchedData: selectFilteredTestsBySearch(store)
});

const mapDispatchToProps = dispatch => {
  return {
    CommonAction: data => dispatch(CommonAction(data)),
    setSearchStr: data => dispatch(setSearchStr(data))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Tests);
