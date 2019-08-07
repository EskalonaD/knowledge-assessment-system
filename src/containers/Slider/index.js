import React, { Component } from "react";
import styles from "./index.scss";
import { connect } from "react-redux";
import { setSliderTranslateValue } from "@ducks/mainReducer";
import { selectSliderTranslateValue } from "@ducks/mainReducer/reselect.js";

import mainPagePicture from "@assets/img/img_temp_startpage.jpg";
import aboutUsPicture from "@assets/img/aboutus.jpg";
import testPicture from "@assets/img/20150224test644.jpg";
import contactsPicture from "@assets/img/contact-us.jpg";
import statisticsPicture from "@assets/img/Statistics.png";
import backgroundPicture from "@assets/img/110492051-halftone-dotted-background-dotted-vector-pattern-chaotic-circle-dots-isolated-on-the-white-backgroun.jpg";

export class Slider extends Component {
  componentDidMount() {
    let slideValue = 0;
    let slideModifier = -1;
    this.timerID = setInterval(() => {
      if (slideValue === -70) slideModifier = 1;
      if (slideValue === 0) slideModifier = -1;
      slideValue += 35 * slideModifier;
      this.props.setSliderTranslateValue(slideValue);
    }, 5000);
  }

  render() {
    return (
      <section
        className={styles.slider__wrapper}
        style={{
          backgroundImage: `url(${backgroundPicture})`
        }}
      >
        <div
          className={styles.slider}
          style={{
            transform: `translateX(${this.props.sliderTranslateValue}vw)`,
            transition: "transform  1s"
          }}
        >
          <img src={mainPagePicture} className={styles.img} />
          <img src={aboutUsPicture} className={styles.img} />
          <img src={testPicture} className={styles.img} />
          <img src={contactsPicture} className={styles.img} />
          <img src={statisticsPicture} className={styles.img} />
        </div>
      </section>
    );
  }
}

const mapStoreToProps = store => ({
  sliderTranslateValue: selectSliderTranslateValue(store)
});

const mapDispatchToProps = dispatch => {
  return {
    setSliderTranslateValue: data => dispatch(setSliderTranslateValue(data))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Slider);
