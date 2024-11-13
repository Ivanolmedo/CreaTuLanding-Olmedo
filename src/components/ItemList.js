// src/components/ItemList.js
import React from 'react';
import Item from './Item';

function ItemList({ items }) {
  if (items.length === 0) {
    return <p>No hay productos disponibles.</p>; // Mensaje de estado vacío
  }

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} name={item.name} />
      ))}
    </div>
  );
}

export default ItemList;

