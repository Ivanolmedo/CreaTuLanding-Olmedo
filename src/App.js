import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./components/CartContext";
import { doc, getDoc, getFirestore } from "firebase/firestore"; // Importación necesaria
import { firebaseApp } from "./firebaseConfig";
import './App.css';

const App = () => {
  const [product, setProduct] = useState({}); // Corrección en la declaración de useState

  useEffect(() => {
    const db = getFirestore(firebaseApp); // Obtén la instancia de Firestore
    const biciRef = doc(db, "items", "yo2VtW2OHv3ZHCGfDnNw"); // Referencia al documento

    getDoc(biciRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() }); // Actualiza el estado
        console.log({ id: snapshot.id, ...snapshot.data() }); // Imprime los datos en consola
      } else {
        console.log("Item no encontrado");
      }
    });
  }, []); // La dependencia es un array vacío para ejecutar una vez

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
