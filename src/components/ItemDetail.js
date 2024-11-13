import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount />
    </div>
  );
}

export default ItemDetail;
