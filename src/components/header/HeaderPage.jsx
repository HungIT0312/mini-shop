import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
const HeaderPage = () => {
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 240) {
        setIsScroll(true);
      } else setIsScroll(false);
    });
  }, []);

  const items = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Tops",
      href: "/collections/TOPS",
    },
    {
      label: "BOTTOMS",
      href: "/collection/BOTTOMS",
    },
    {
      label: "Accessories",
      href: "/collection/Accessories",
    },
  ];
  const navItems = items.map((item, index) => {
    return (
      <div className="navbar__item">
        <Link
          className={`navbar__item_content ${
            pathname === item.href ? "active" : ""
          }`}
          to={item.href}
        >
          {item.label}
        </Link>
      </div>
    );
  });
  return (
    <header className={`header ${isScroll ? "header__black" : ""}`}>
      <Link to={"/"} className="logo">
        <span>mini-shop</span>
      </Link>
      <Space className="navbar">{navItems}</Space>
      <Space className="icon">
        <SearchOutlined title="Search" className="icon__i" />
        <UserOutlined title="Profile" className="icon__i" />
        <ShoppingCartOutlined title="Cart" className="icon__i" />
        <span className="quantity">(0)</span>
      </Space>
    </header>
  );
};

export default HeaderPage;
