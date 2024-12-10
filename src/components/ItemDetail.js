import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAddedToCart(true);
  };

  return (
    <div className="item-detail">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      {!addedToCart ? (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito</p>
      )}
    </div>
  );
};

export default ItemDetail;


