import { Breadcrumb, Layout, Space } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import HeaderPage from "../components/header/HeaderPage";
import Introductions from "../components/introductions/Introductions";
import SideBar from "../components/sidebar/SideMenu";
import "./CollectionsLayout.scss";

const CollectionsLayout = () => {
  const { pathname } = useLocation();
  const [mainPath, setMainPath] = useState("");
  const pathArr = pathname.split("/").filter((item) => item);
  useEffect(() => {
    setMainPath(pathArr[0]);
  }, [pathArr]);

  const itemBreadcrumb = pathArr.map((path) =>
    path === pathArr[pathArr.length - 1]
      ? { title: path }
      : { title: <Link>{path}</Link> }
  );
  return (
    <Layout style={{ height: "100vh" }}>
      <HeaderPage />
      <div style={{ height: "500px", display: "block" }}></div>
      <Content>
        <Space className="breadcrumb_wrapper">
          <Breadcrumb
            items={[{ title: <Link>Home</Link> }, ...itemBreadcrumb]}
          ></Breadcrumb>
        </Space>

        <Layout className="main">
          <div className="sidebox">
            <SideBar />
          </div>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Content>
      <Introductions />
    </Layout>
  );
};

export default CollectionsLayout;
