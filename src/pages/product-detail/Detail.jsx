import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { idProduct } = useParams();
  return <div>{idProduct}</div>;
};

export default Detail;
