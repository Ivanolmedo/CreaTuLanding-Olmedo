import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getFilterProducts } from "../App";
import "../App.css";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = category
          ? await getFilterProducts(category)
          : await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="item-list-container">
      <h1>{category ? `Categoría: ${category}` : "Todos los productos"}</h1>
      <div className="product-grid">
        {products.map((product) => {
          // Convertimos el precio a número y manejamos casos no válidos
          const price = isNaN(Number(product.price))
            ? "N/A"
            : Number(product.price).toFixed(2);

          return (
            <div key={product.id} className="product-card">
              <img
                src={product.imageId || "default-image.png"} // Imagen por defecto si no hay imagen
                alt={product.title || "Producto"}
                className="product-image"
              />
              <h2 className="product-title">{product.title || "Producto sin título"}</h2>
              <p className="product-description">
                {product.description || "Descripción no disponible"}
              </p>
              <p className="product-price">${price}</p>
              <button className="add-to-cart-button">Agregar al carrito</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;










