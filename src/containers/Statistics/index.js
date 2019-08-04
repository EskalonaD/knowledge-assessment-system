import React, { Component } from "react";
import styles from "./index.scss";
import { connect } from "react-redux";

import ToolsContainer from "@containers/ToolsContainer";
import Card from "@components/Card";
import Statistic from "@components/Statistic";
import data from "../../dataBase/test.json"; //remove???
import {
  setSelectedStatistic,
  setSearchedStrForStatistic,
  setSortedTypeForStatistic
} from "@ducks/mainReducer";
import {
  selectSelectedStatistic,
  selectSearchedStrForStatistic,
  selectSearchedDataForStatistic,
  selectMatchedDataForStatistic,
  selectSortedTypeForStatistic,
  selectSortedDataForStatistic
} from "@ducks/mainReducer/reselect.js";

const sortLib = {
  time: `Времени`,
  questions: `Количеству вопросов`,
  name: `Названию`, //fix it... put additional data in store???
  statistic: `Статистике`,
  reset: `Отменить сортировку`
};

export class Statistics extends Component {
  searchHandler = str => this.props.setSearchedStrForStatistic(str);

  componentDidMount() {
    this.props.setSelectedStatistic(null);
    this.props.setSearchedStrForStatistic(``);
    this.props.setSortedTypeForStatistic(`resetSortedType`); //destroy ForStatistic w/o router???
  }

  render() {
    const {
      selectedStatistic,
      setSelectedStatistic,
      searchedStrForStatistic,
      searchedDataForStatistic,
      matchedDataForStatistic,
      sortedDataForStatistic
    } = this.props;

    return (
      <main>
        <ToolsContainer
          searchHandler={this.searchHandler}
          sortHandler={val => this.props.setSortedTypeForStatistic(val)}
          sortData={sortLib}
        />
        {selectedStatistic === null ? (
          <div className={styles.cards_container}>
            {sortedDataForStatistic.map(el => (
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
  matchedDataForStatistic: selectMatchedDataForStatistic(store),
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
