import React, { useEffect, useState } from "react";
import "./Cart.scss";
import CartItemPreview from "./CartItemPreview";
import { useNavigate } from "react-router-dom";
const Cart = (props) => {
  const [cartItem] = useState([]);
  const navigate = useNavigate();
  const item = 4;
  useEffect(() => {
    const cartContainer = document.querySelector(".cart__container");
    if (item > 3) {
      cartContainer.classList.add("cart_scroll");
    } else cartContainer.classList.remove("cart_scroll");
  }, []);

  const checkoutsHandler = () => {
    if (props.drawer) {
      props?.drawer(false);
    }
    navigate("/checkouts");
  };
  const cartHandler = () => {
    if (props.drawer) {
      props?.drawer(false);
    }
    navigate("/cart");
  };

  return (
    <div className="cart">
      <div className="cart__title">GIỎ HÀNG</div>
      <div className="cart__content">
        {!cartItem && <p className="cart__alert">Hiện chưa có sản phẩm.</p>}
        <div className="cart__container">
          <CartItemPreview />
          <CartItemPreview />
          <CartItemPreview />
          <CartItemPreview />
        </div>
      </div>
      <div className="cart__total">
        <span className="cart__total_title">TỔNG:</span>
        <span className="cart__total_number">0đ</span>
      </div>
      <div className="cart__btn">
        <div className="cart__btn_w" onClick={cartHandler}>
          MY CART
        </div>
        <div className="cart__btn_checkout" onClick={checkoutsHandler}>
          CHECKOUTS
        </div>
      </div>
    </div>
  );
};

export default Cart;
