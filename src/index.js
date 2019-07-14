import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.scss";

const Index = () => {
  return <div className={styles.hi}>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));
