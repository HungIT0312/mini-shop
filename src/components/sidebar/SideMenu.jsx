import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SideMenu.scss";
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
    document.title = `${pathArr[1]}- MiniShop`;
  }, [pathArr]);

  const onClick = (e) => {
    const childPath = e.key;
    const path = "/" + mainPath + "/" + childPath;
    document.title = `${childPath}- MiniShop`;
    navigate(path);
  };

  return (
    <Menu
      onClick={onClick}
      className="menubox"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default SideBar;
