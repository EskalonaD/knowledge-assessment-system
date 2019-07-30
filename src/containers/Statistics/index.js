import React, {Component} from "react";
import styles from "./index.scss";

import ToolsContainer from "@containers/ToolsContainer";
import Card from "@components/Card";
import Statistic from "@components/Statistic";
import data from "../../dataBase/test.json";

export default class Statistics extends Component {
    state = {
        selectedTest: null,
        searchFor: ``,
        testSorted: false,
        data: Object.entries(localStorage), 
        sortTypes: [[`Времени`, () => this.setState({data: this.state.data.sort((a, b) => a.time - b.time),
                                                    testSorted: true})],
          [`Количеству вопросов`, () => this.setState({data: this.state.data.sort((a, b) => a.questions.length - b.questions.length),
                                                      testSorted: true})],
          [`Отменить сортировку`, () => this.setState({testSorted: false})]]  //increase/decrease???
      };

    searchHandler = (str) => this.setState({searchFor: str});
    // selectTest = (str) => this.setState({selectedTest: str});

    render() {
        // console.log(thisw.render);
        // debugger;
        let newdata = testSorted ? this.state.data : localStorage 
        return (
            <main>
                <ToolsContainer searchHandler={this.searchHandler} sortTypes={this.state.sortTypes}/>

                {this.state.selectedTest !== null ? <Statistic test={data.find(el => el.name === this.state.selectedTest)} /> : <div className={styles.cards_container}> {Object.keys(localStorage).filter(el => el.indexOf(this.state.searchFor) !== -1).filter(el => data.some(item => el === item.name)).map(el => <Card content={el} handler={() => this.setState({selectedTest: el})} />)} </div>}  {/* remove logLevel:webpack, test in prodversion or ognore in redux////string.prototype.include??? */}
            </main>
        )
    }
}