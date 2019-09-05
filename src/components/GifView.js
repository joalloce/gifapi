import React from "react";
import { Col } from "reactstrap";

const GifView = ({ gif, handleModal }) => {
  const handleClick = () => {
    handleModal(gif.images.downsized_large.url)
  }
  return (
    <Col xs="6" md="4" lg="3"><div onClick={handleClick}>
      <img src={gif.images.fixed_width.url}></img></div>
    </Col>
  );
};

export default GifView;
