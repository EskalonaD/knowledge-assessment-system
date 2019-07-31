import React, { Component } from "react";

export default class ImgContainer extends Component {
  render() {
    const { innerWidth, height, img } = this.props;

    return (
      <div style={{ width, height }}>
        {/* check it in js.ru */}
        <img href={img} />
      </div>
    );
  }
}
