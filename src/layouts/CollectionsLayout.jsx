import { Breadcrumb, Layout, Space, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import HeaderPage from "../components/header/HeaderPage";
import Introductions from "../components/introductions/Introductions";
import SideBar from "../components/sidebar/SideMenu";
import "./CollectionsLayout.scss";

const CollectionsLayout = () => {
  const { pathname } = useLocation();
  const [, setMainPath] = useState("");
  const pathArr = pathname.split("/").filter((item) => item);
  useEffect(() => {
    setMainPath(pathArr[0]);
  }, [pathArr]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const itemBreadcrumb = pathArr.map((path) =>
    path === pathArr[pathArr.length - 1]
      ? { title: path }
      : { title: <Link to={`/${path}`}>{path}</Link> }
  );
  return (
    <Layout style={{ height: "100vh" }}>
      <HeaderPage />
      <div style={{ height: "500px", display: "block" }}></div>
      <Content>
        <Space className="breadcrumb_wrapper">
          <Breadcrumb
            items={[{ title: <Link to={"/"}>Home</Link> }, ...itemBreadcrumb]}
          ></Breadcrumb>
        </Space>

        <Layout className="mainPage">
          <Sider
            width={"256px"}
            style={{
              background: colorBgContainer,
            }}
            className="sidebox"
          >
            <SideBar />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
              marginTop: 30,
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
        <Introductions></Introductions>
      </Content>
    </Layout>
  );
};

export default CollectionsLayout;
