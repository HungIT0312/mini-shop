import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("CLOTHES", "CLOTHES", <MailOutlined />, [
    getItem("TOPS", "TOPS"),
    getItem("BOTTOMS", "BOTTOMS"),
    getItem("ACCESSORIES", "ACCESSORIES"),
  ]),
  getItem("SMART DEVICE", "smart-devices", <AppstoreOutlined />, [
    getItem("PHONES", "PHONES"),
    getItem("LAPTOPS", "LAPTOPS"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  {
    type: "divider",
  },
];
const SideBar = () => {
  const { pathname } = useLocation();
  const [mainPath, setMainPath] = useState("");
  const navigate = useNavigate();
  const pathArr = pathname.split("/").filter((item) => item);
  useEffect(() => {
    setMainPath(pathArr[0]);
  }, []);

  const onClick = (e) => {
    const childPath = e.key;
    const path = "/" + mainPath + "/" + childPath;
    navigate(path);
  };

  const itemBreadcrumb = pathArr.map((path) =>
    path === pathArr[pathArr.length - 1]
      ? { title: path }
      : { title: <Link>{path}</Link> }
  );
  return (
    <>
      <Breadcrumb
        items={[{ title: <Link>Home</Link> }, ...itemBreadcrumb]}
      ></Breadcrumb>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default SideBar;
