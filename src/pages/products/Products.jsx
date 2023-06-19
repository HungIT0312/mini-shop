import { theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import React from "react";
import SideBar from "../../components/sidebar/SideMenu";

const Products = (props) => {
  // useEffect(() => {
  //   const _getAllProducts = async () => {
  //     const res = await getAllProducts();
  //     console.log(res);
  //   };
  //   _getAllProducts();
  //   return () => {};
  // }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
      ></Content>
    </>
  );
};

export default Products;
