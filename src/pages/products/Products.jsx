import { Row, Select, Space, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/Product";
import SideBar from "../../components/sidebar/SideMenu";
import { productsAction } from "../../stores/products/product-slice";
import LoadingPage from "../loading/LoadingPage";
const Products = (props) => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsAction.getAllProduct());
  }, [dispatch]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const renderProducts = products?.map((product, index) => {
    return <Product key={product.id} product={product} />;
  });

  const onSelectedKeyHandler = (e) => {
    console.log(e);
  };
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
        <Space style={{ float: "right", padding: "0px 16px" }}>
          <Select
            defaultValue="sortAZ"
            style={{
              width: 120,
            }}
            onChange={onSelectedKeyHandler}
            options={[
              {
                value: "sortAZ",
                label: "A-Z",
              },
              {
                value: "sortZA",
                label: "Z-A",
              },
              {
                value: "Decrease",
                label: "Decrease",
              },
              {
                value: "Increase",
                label: "Increase",
              },
            ]}
          />
        </Space>
        <Space style={{ marginTop: 32 }}>
          {loading ? <LoadingPage /> : <Row gutter={16}>{renderProducts}</Row>}
        </Space>
      </Content>
    </>
  );
};

export default Products;
