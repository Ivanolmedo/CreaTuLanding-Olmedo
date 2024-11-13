import React from 'react';
import Item from './Item';

const ItemList = ({ products = [] }) => {
  if (!products.length) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
