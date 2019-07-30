import React, {Component} from "react";
import styles from "./index.scss";

export default class Search extends Component {

    render() {
        return (
            <section>
                <input type="text" className={styles.input} onKeyUp={() => this.props.handler(document.querySelector(`input`).value)}/> {/* placeholder="" */}
                
                <button onClick={() => {
                    console.log(document.querySelector(`input`).value)
                    this.props.handler(document.querySelector(`input`).value)   //replace!!!!!
                    }
                }>Поиск</button> {/* icon for search?*/}   {/* remove? button do not needed??? */}
            </section>
        )
    }
}