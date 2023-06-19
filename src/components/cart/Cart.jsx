import React from "react";
import "./Cart.scss";
const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__title">GIỎ HÀNG</div>
      <div className="cart__content">
        <p className="cart__alert">Hiện chưa có sản phẩm.</p>
        <div className="cart__container">Sản phẩm a</div>
      </div>
      <div className="cart__total">
        <span className="cart__total_title">TỔNG:</span>
        <span className="cart__total_number">0đ</span>
      </div>
      <div className="cart__btn">
        <div className="cart__btn_w">MY CART</div>
        <div className="cart__btn_checkout">CHECKOUTS</div>
      </div>
    </div>
  );
};

export default Cart;
