import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <div className="item" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <div className="item-details">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button>Ver Detalle</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
