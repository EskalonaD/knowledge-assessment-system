import React, { Component } from "react";
import styles from "./index.scss";
import { connect } from "react-redux";
import {
  setSelectedStatistic,
  setSearchedStrForStatistic,
  setSortedTypeForStatistic
} from "@ducks/mainReducer";
import {
  selectSelectedStatistic,
  selectSearchedStrForStatistic,
  selectSearchedDataForStatistic,
  selectSortedTypeForStatistic,
  selectSortedDataForStatistic
} from "@ducks/mainReducer/reselect.js";

import ToolsContainer from "@containers/ToolsContainer";
import Card from "@components/Card";
import Statistic from "@components/Statistic";
import data from "../../dataBase/test.json";
import Pagination from "@components/Pagination";

const sortLib = {
  time: `Времени`,
  questions: `Количеству вопросов`,
  name: `Названию`,
  reset: `Отменить сортировку`
};

export class Statistics extends Component {
  state = {
    paginationNumber: 1,
    maxItemOnPage: 5
  };

  searchHandler = str => this.props.setSearchedStrForStatistic(str);

  componentDidMount() {
    this.props.setSelectedStatistic(null);
    this.props.setSearchedStrForStatistic(``);
    this.props.setSortedTypeForStatistic(`resetSortedType`);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.selectedStatistic === prevProps.selectedStatistic &&
      prevProps.selectedStatistic !== null
    )
      this.props.setSelectedStatistic(null);
  }

  render() {
    const {
      selectedStatistic,
      setSelectedStatistic,
      sortedDataForStatistic
    } = this.props;
    const { paginationNumber, maxItemOnPage } = this.state;

    const matchedData = sortedDataForStatistic.filter(el =>
      Object.keys(localStorage).some(item => item === el.name)
    );
    return (
      <main>
        <ToolsContainer
          searchHandler={this.searchHandler}
          sortHandler={val => this.props.setSortedTypeForStatistic(val)}
          sortData={sortLib}
        />
        {selectedStatistic === null && (
          <section>
            {Array.from({
              length: Math.ceil(matchedData.length / maxItemOnPage) || 1
            }).map((el, i) => (
              <Pagination
                number={i + 1}
                handler={() => {
                  console.log(this.state);
                  this.setState({ paginationNumber: i + 1 });
                }}
              />
            ))}
          </section>
        )}
        {selectedStatistic === null ? (
          <div className={styles.cards_container}>
            {matchedData
              .slice(
                (paginationNumber - 1) * maxItemOnPage,
                paginationNumber * maxItemOnPage
              )
              .map(el => (
                <Card
                  content={el.name}
                  handler={() => setSelectedStatistic(el.name)}
                />
              ))}
          </div>
        ) : (
          <Statistic test={data.find(el => el.name === selectedStatistic)} />
        )}
      </main>
    );
  }
}

const mapStoreToProps = store => ({
  selectedStatistic: selectSelectedStatistic(store),
  searchedStrForStatistic: selectSearchedStrForStatistic(store),
  searchedDataForStatistic: selectSearchedDataForStatistic(store),
  sortedTypeForStatistic: selectSortedTypeForStatistic(store),
  sortedDataForStatistic: selectSortedDataForStatistic(store)
});

const mapDispatchToProps = dispatch => ({
  setSelectedStatistic: data => dispatch(setSelectedStatistic(data)),
  setSearchedStrForStatistic: data =>
    dispatch(setSearchedStrForStatistic(data)),
  setSortedTypeForStatistic: data => dispatch(setSortedTypeForStatistic(data))
});

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Statistics);
