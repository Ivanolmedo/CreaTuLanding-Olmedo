import React from 'react';
import Item from './Item';

function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.imageId}
          stock={product.stock}
        />
      ))}
    </div>
  );
}

export default ItemList;





