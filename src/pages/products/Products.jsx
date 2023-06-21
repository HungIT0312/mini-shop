import { Row, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import SideBar from "../../components/sidebar/SideMenu";
import { getAllProducts } from "../../api/products/GetAll";
import Product from "../../components/product/Product";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const _getAllProducts = async () => {
      const res = await getAllProducts();
      console.log(res);
      setProducts(res.products);
    };
    _getAllProducts();
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const renderProducts = products.map((product, index) => {
    return <Product key={product.id} product={product} />;
  });
  return (
    <>
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
        <Row gutter={16}>{renderProducts}</Row>
      </Content>
    </>
  );
};

export default Products;
