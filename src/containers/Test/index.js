import React, {Component} from "react";
import styles from "./index.scss";

export default class Test extends Component {
    render() {
        return <section>
            {this.props.test.name}
        </section>
    }
}