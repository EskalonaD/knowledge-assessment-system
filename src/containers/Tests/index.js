import React, { Component } from "react";
import styles from "./index.scss";
import ToolsContainer from "@containers/ToolsContainer";
import TestContainer from "@containers/TestContainer";
import Card from "@components/Card";
import { connect } from "react-redux";
import { CommonAction } from "@ducks/mainReducer";
import { selectData, selectTestNumber } from "@ducks/mainReducer/reselect";

const sortLib = {
  Времени: `time`,
  "Количеству вопросов": `questions.length`,
  Названию: `name`,
  "Отменить сортировку": null
};
export class Tests extends Component {
  state = {
    selectedTest: null,
    searchFor: ``,
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

  searchHandler = str => this.setState({ searchFor: str });

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

  render() {
    // let newdata = this.state.testSorted ? this.props.data : data;
    let newdata = this.props.data;
    return (
      <main>
        <ToolsContainer
          searchHandler={this.searchHandler}
          sortTypes={this.state.sortTypes}
        />
        {this.props.selectedTest === null ? (
          <div className={styles.test_container}>
            {newdata.map((el, i) => {
              if (el.name.indexOf(this.state.searchFor) !== -1) {
                //String.prototype.include   ????
                return (
                  <Card
                    key={el.name}
                    handler={() => this.props.CommonAction(i)}
                    content={el.name}
                  />
                );
              }
            })}
          </div>
        ) : (
          <TestContainer test={this.props.data[this.props.selectedTest]} />
        )}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  data: selectData(state),
  selectedTest: selectTestNumber(state)
});

const mapDispatchToProps = dispatch => {
  return {
    CommonAction: data => dispatch(CommonAction(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tests);
