import React, {Component} from "react";
import styles from "./index.scss";

export default class Card extends Component {
    render() {
        return (
            <div className={styles.card} onClick={this.props.handler}>
                {this.props.content}
            </div>
        )
    }
}