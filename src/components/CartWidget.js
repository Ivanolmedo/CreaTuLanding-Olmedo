// CartWidget.js
import React from "react";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      {totalItems() > 0 && <span className="cart-notification">{totalItems()}</span>}
    </div>
  );
};

export default CartWidget;



