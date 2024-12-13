import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getFilterProducts } from "../App";
import "../App.css";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Estado del carrito

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

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity + delta, 0) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const confirmCart = () => {
    console.log("Carrito confirmado:", cart);
    console.log("Total del carrito:", calculateTotal().toFixed(2));
  };

  return (
    <div className="item-list-container">
      <h1>{category ? `Categoría: ${category}` : "Todos los productos"}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageId || "default-image.png"}
              alt={product.title || "Producto"}
              className="product-image"
            />
            <h2 className="product-title">{product.title || "Producto sin título"}</h2>
            <p className="product-description">
              {product.description || "Descripción no disponible"}
            </p>
            <p className="product-price">
              ${Number(product.price).toFixed(2) || "N/A"}
            </p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      <h2>Carrito de Compras</h2>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.title}</span>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <span>${(item.quantity * item.price).toFixed(2)}</span>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          <button onClick={confirmCart}>Confirmar carrito</button>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;











