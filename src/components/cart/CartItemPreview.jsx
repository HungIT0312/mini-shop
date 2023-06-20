import { Image, Space } from "antd";
import React from "react";
import "./CartItemPreview.scss";
const CartItemPreview = (props) => {
  return (
    <Space style={{ margin: "8px 0" }}>
      <Image
        src="https://product.hstatic.net/200000018774/product/4_14009cc96d274b9fb750b72ed127d189_master.jpg"
        width={64}
      ></Image>
      <Space className="clothes wrapper" style={{ alignItems: "flex-start" }}>
        <div className="clothes__name">Ao Mixer mau den </div>
        <span className="clothes__size" style={{ color: "#333", fontSize: 12 }}>
          S
        </span>
        <Space>
          <Space
            style={{
              color: "#333",
              fontSize: 12,
              backgroundColor: "#ccc",
              width: 24,
              height: 24,
              justifyContent: "center",
            }}
            className="clothes__quantity"
          >
            2
          </Space>
          <span
            className="clothes__price"
            style={{ color: "#333", fontSize: 12 }}
          >
            290.000$
          </span>
        </Space>
      </Space>
    </Space>
  );
};

export default CartItemPreview;
