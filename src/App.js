import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./components/CartContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";
import "./App.css";

// Función para obtener todos los productos
export const getProducts = async () => {
  try {
    const documents = await getDocs(collection(db, "items"));
    const products = documents.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
};

// Función para obtener productos filtrados por categoría
export const getFilterProducts = async (category) => {
  try {
    const q = query(collection(db, "items"), where("categoryId", "==", category));
    const querySnapshot = await getDocs(q);
    const filteredProducts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return filteredProducts;
  } catch (error) {
    console.error("Error obteniendo productos filtrados:", error);
    return [];
  }
};

const App = () => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsList = await getProducts(); 
        setProducts(productsList);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <CartProvider> {}
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer products={products} />} /> {}
            <Route
              path="/category/:category"
              element={<ItemListContainer />} 
            />
            <Route path="/product/:id" element={<ItemDetailContainer />} /> {}
            <Route path="/cart" element={<Cart />} /> {}
            <Route path="/checkout" element={<Checkout />} /> {}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;