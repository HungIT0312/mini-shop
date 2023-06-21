import { Col, Image, Space, Typography } from "antd";
import React from "react";
import "./Product.scss";
const { Text } = Typography;
const Product = (props) => {
  const product = props?.product;
  return (
    <Col xs={12} md={8}>
      <Space
        className="product"
        direction="vertical"
        style={{
          height: 525,
          display: "flex",
          justifyContent: "space-between",
        }}
        align="center"
        justify="space-between"
      >
        <Image
          width={243}
          src={product?.images[product?.images.length - 1]}
          // preview={false}
          className="product__image"
          style={{ objectFit: "contain" }}
          height={295}
        />
        <Space className="product__infor" direction="vertical" align="center">
          <Text className="product__tittle">{product?.title}</Text>
          <Text className="product__price" strong>
            {product?.price}$
          </Text>
        </Space>
      </Space>
    </Col>
  );
};

export default Product;
