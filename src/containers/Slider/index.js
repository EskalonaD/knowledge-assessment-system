import React, { Component } from "react";
import styles from "./index.scss";
// import mainPagePicture from "@assets/img/img_temp_startpage.jpg";

const pic = require('../../assets/img/img_temp_startpage.jpg')

export default class Slider extends Component {
  render() {
    return <section className={styles.slider__wrapper}>
      <img src={pic} />
    </section>;
  }
}
