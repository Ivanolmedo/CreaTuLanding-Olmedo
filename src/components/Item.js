import React from 'react';

function Item({ id, title, description, price, image, stock }) {
  return (
    <div className="item-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <p>Stock: {stock}</p>
      <button>Añadir al carrito</button>
    </div>
  );
}

export default Item;


