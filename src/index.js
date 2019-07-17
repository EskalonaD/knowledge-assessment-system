import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.scss";

import Header from "./Header";

const Index = () => {
  return (
    <div className={styles.hi}>
      <Header />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
