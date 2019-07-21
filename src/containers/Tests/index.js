import React, { Component } from "react";
import styles from "./index.scss";
import ToolsContainer from "@containers/ToolsContainer";
import data from "../../dataBase/test.json";

export default class index extends Component {
  state = {
    selectedTest: null
  };

  render() {
    console.log(data);
    return (
      <main>
        <ToolsContainer />
        {this.state.selectedTest === null ? (
          <div>
            {data.map((el, i) => {
              return (
                <section
                  key={el.name}
                  onClick={() => {
                    this.setState({ selectedTest: i });
                  }}
                >
                  {el.name}
                </section>
              );
            })}
          </div>
        ) : (
          <div>Test1</div>
        )}
      </main>
    );
  }
}
