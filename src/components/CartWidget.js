import React from 'react';

function CartWidget() {
  return (
    <div className="cart-widget">
      <span role="img" aria-label="cart">🛒</span>
      <span className="cart-notification">3</span> {/* Valor estático de ejemplo */}
    </div>
  );
}

export default CartWidget;
