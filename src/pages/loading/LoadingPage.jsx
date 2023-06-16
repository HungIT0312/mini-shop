import { Layout, Space, Spin } from "antd";
import React from "react";

const LoadingPage = () => {
  return (
    <Space size="middle" align="center" content="center">
      <Spin tip="Loading" size="small">
        <div className="content" />
      </Spin>
    </Space>
  );
};

export default LoadingPage;
