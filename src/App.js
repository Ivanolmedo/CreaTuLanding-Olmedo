import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./components/CartContext";
import './App.css';

const App = () => {
  return (
    <CartProvider> {/* Proveedor del contexto del carrito */}
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} /> {/* Vista principal */}
            <Route path="/category/:category" element={<ItemListContainer />} /> {/* Categorías */}
            <Route path="/product/:id" element={<ItemDetailContainer />} /> {/* Detalle de producto */}
            <Route path="/cart" element={<Cart />} /> {/* Carrito */}
            <Route path="/checkout" element={<Checkout />} /> {/* Checkout */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
