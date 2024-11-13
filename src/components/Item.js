import React from 'react';
import { useCart } from '../context/CartContext';

const Item = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Item;
