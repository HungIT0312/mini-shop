import { Breadcrumb, Card, Col, Image, Layout, Menu, Row, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import HeaderPage from "../../components/header/HeaderPage";
import Banner from "../../components/banner/Banner";
import "./HomePage.scss";
import CardItem from "../../components/card/CardItem";
const HomePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const imageCard = [
    "https://file.hstatic.net/200000018774/file/dsc01790_copy_0a70f83d4c5d4bcbbbe53c6f3bccc01e.jpg",
    "https://file.hstatic.net/200000018774/file/dsc01790_copy_0a70f83d4c5d4bcbbbe53c6f3bccc01e.jpg",
    "https://file.hstatic.net/200000018774/file/dsc01790_copy_0a70f83d4c5d4bcbbbe53c6f3bccc01e.jpg",
  ];
  const renderCart = imageCard.map((i) => {
    return <CardItem src={i} />;
  });

  return (
    <Layout className="layout" style={{ position: "relative" }}>
      <HeaderPage />
      <Content>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <Banner></Banner>
        </div>
        <div style={{ margin: "64px 24px", position: "relative" }}>
          <Row gutter={18}>{renderCart}</Row>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Copyright © 2023 HipHip
      </Footer>
    </Layout>
  );
};

export default HomePage;
