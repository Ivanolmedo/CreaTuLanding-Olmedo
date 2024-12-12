import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getFilterProducts } from "../App";
import "../App.css"; // Estilos principales

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
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img 
              src={product.imageId} 
              alt={product.title} 
              className="product-image" 
              onError={(e) => (e.target.src = "fallback-image-url.jpg")} // Imagen de respaldo si falla
            />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${Number(product.price).toFixed(2)}</p>
            <button className="add-to-cart-button">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;









