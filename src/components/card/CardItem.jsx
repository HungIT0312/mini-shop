import { Card, Col, Image } from "antd";
import React from "react";
import "./CardItem.scss";
const CardItem = (props) => {
  return (
    <Col span={8} style={{ position: "relative" }}>
      <div className="options">
        <div className="options__title"></div>
        <div className="options__btn">SEE MORE</div>
      </div>
      <Card className="item">
        <Image src={props.src} preview={false}></Image>
      </Card>
    </Col>
  );
};

export default CardItem;
