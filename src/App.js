import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} /> {/* Novedades */}
          <Route path="/novedades" element={<ItemListContainer />} /> {/* Alias para novedades */}
          <Route path="/category/:category" element={<ItemListContainer />} /> {/* Categorías */}
          <Route path="/product/:id" element={<ItemDetailContainer />} /> {/* Detalle de producto */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;


