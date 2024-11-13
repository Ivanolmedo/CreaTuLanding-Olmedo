import React, { useState } from 'react';

function ItemCount() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div>
      <p>Cantidad: {quantity}</p>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <br />
      <button>Añadir al carrito</button>
    </div>
  );
}

export default ItemCount;
