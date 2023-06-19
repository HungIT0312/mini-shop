import { Space, Spin } from "antd";
import React from "react";

const LoadingPage = () => {
  return (
    <Space
      direction="horizontal"
      style={{
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Space>
        <Spin tip="Loading" size="large" />
      </Space>
    </Space>
  );
};

export default LoadingPage;
