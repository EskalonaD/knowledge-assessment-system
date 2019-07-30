import React, {Component} from "react";
import styles from "./index.scss";

import ToolsContainer from "@containers/ToolsContainer";
import Card from "@components/Card";
import Statistic from "@components/Statistic";
import data from "../../dataBase/test.json";

export default class Statistics extends Component {
    state = {
        selectedTest: null,
        searchFor: ``
    }

    searchHandler = (str) => this.setState({searchFor: str});
    // selectTest = (str) => this.setState({selectedTest: str});

    render() {
        // console.log(thisw.render);
        // debugger;
        return (
            <main>
                <ToolsContainer searchHandler={this.searchHandler}/>

                {this.state.selectedTest !== null ? <Statistic test={data.find(el => el.name === this.state.selectedTest)} /> : <div className={styles.cards_container}> {Object.keys(localStorage).filter(el => el.indexOf(this.state.searchFor) !== -1).filter(el => data.some(item => el === item.name)).map(el => <Card content={el} handler={() => this.setState({selectedTest: el})} />)} </div>}  {/* remove logLevel:webpack, test in prodversion or ognore in redux////string.prototype.include??? */}
            </main>
        )
    }
}