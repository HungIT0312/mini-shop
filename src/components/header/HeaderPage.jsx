import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Drawer, Menu, Space } from "antd";
import Cart from "../cart/Cart";
import User from "../user/User";
const HeaderPage = () => {
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [drawerItem, setDrawerItem] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 240) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsDrawerVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };
  const openDrawerHandler = (item) => {
    setOpenDrawer(!openDrawer);
    setDrawerItem(item);
  };

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
      href: "/collections/BOTTOMS",
    },
    {
      label: "Accessories",
      href: "/collections/Accessories",
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
      {isMobile ? (
        <>
          <Drawer
            placement="right"
            onClose={() => setIsDrawerVisible(false)}
            open={isDrawerVisible}
            className="mobile-menu"
            width={"50vw"}
          >
            <Menu
              onClick={() => setIsDrawerVisible(false)}
              selectedKeys={[pathname]}
            >
              {navItems}
            </Menu>
          </Drawer>
        </>
      ) : (
        <Space className="navbar">{navItems}</Space>
      )}

      <Space className="icon">
        <SearchOutlined title="Search" className="icon__i" />
        <UserOutlined
          title="Profile"
          className="icon__i"
          onClick={() => openDrawerHandler("user")}
        />
        <ShoppingCartOutlined
          title="Cart"
          className="icon__i"
          onClick={() => openDrawerHandler("cart")}
        />
        {openDrawer && (
          <Drawer
            placement="right"
            onClose={() => setOpenDrawer(false)}
            open={openDrawer}
            className="mobile-menu"
            width={"30%"}
          >
            {drawerItem === "cart" ? <Cart /> : <User />}
          </Drawer>
        )}
        <span className="quantity">(0)</span>
        {isMobile && (
          <MenuOutlined className="menu-icon" onClick={handleMenuClick} />
        )}
      </Space>
    </header>
  );
};

export default HeaderPage;
