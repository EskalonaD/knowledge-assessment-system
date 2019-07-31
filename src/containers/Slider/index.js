import React, { Component } from "react";
import styles from "./index.scss";

import ImgContainer from "@components/ImgContainer";
export default class Slider extends Component {
  render() {
    const { imgArray, width, height } = this.props; //not props?
    return (
      <section className={styles.slider__wrapper}>
        {imgArray.map(el => (
          <ImgContainer img={el} width={width} height={height} />
        ))}
      </section>
    );
  }
}
